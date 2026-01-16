import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

def handler(event: dict, context) -> dict:
    '''Отправляет заявки с формы записи на прием на email'''
    method = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'})
        }
    
    smtp_host = os.environ.get('SMTP_HOST')
    smtp_port = os.environ.get('SMTP_PORT')
    smtp_user = os.environ.get('SMTP_USER')
    smtp_password = os.environ.get('SMTP_PASSWORD')
    email_to = os.environ.get('EMAIL_TO')
    
    if not all([smtp_host, smtp_port, smtp_user, smtp_password, email_to]):
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Email credentials not configured'})
        }
    
    try:
        data = json.loads(event.get('body', '{}'))
        name = data.get('name', 'Не указано')
        phone = data.get('phone', 'Не указано')
        address = data.get('address', 'Не указано')
        message_text = data.get('message', 'Не указано')
        
        msg = MIMEMultipart('alternative')
        msg['Subject'] = '🔔 Новая заявка на прием - КлиматСервисОренбург'
        msg['From'] = smtp_user
        msg['To'] = email_to
        
        html_content = f"""
        <html>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; border-radius: 10px;">
              <h2 style="color: #2563eb; margin-bottom: 20px;">🔔 Новая заявка на прием</h2>
              
              <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 15px;">
                <p style="margin: 10px 0;"><strong>👤 Имя:</strong> {name}</p>
                <p style="margin: 10px 0;"><strong>📞 Телефон:</strong> {phone}</p>
                <p style="margin: 10px 0;"><strong>📍 Адрес:</strong> {address}</p>
                <p style="margin: 10px 0;"><strong>💬 Сообщение:</strong></p>
                <p style="margin: 10px 0; padding: 10px; background-color: #f3f4f6; border-radius: 5px;">{message_text}</p>
              </div>
              
              <p style="color: #666; font-size: 14px; margin-top: 20px;">
                ⏰ Заявка получена с сайта КлиматСервисОренбург
              </p>
            </div>
          </body>
        </html>
        """
        
        text_content = f"""
        Новая заявка на прием
        
        Имя: {name}
        Телефон: {phone}
        Адрес: {address}
        Сообщение: {message_text}
        
        Заявка получена с сайта КлиматСервисОренбург
        """
        
        part1 = MIMEText(text_content, 'plain', 'utf-8')
        part2 = MIMEText(html_content, 'html', 'utf-8')
        
        msg.attach(part1)
        msg.attach(part2)
        
        with smtplib.SMTP_SSL(smtp_host, int(smtp_port)) as server:
            server.login(smtp_user, smtp_password)
            server.send_message(msg)
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'success': True, 'message': 'Заявка отправлена'})
        }
            
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': str(e)})
        }
