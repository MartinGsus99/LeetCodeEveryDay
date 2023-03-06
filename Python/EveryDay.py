import requests
import json

from datetime import datetime

import datetime
def get_time():
    year=datetime.datetime.now().year
    month=datetime.datetime.now().month
    day=datetime.datetime.now().day
    current_time = datetime.datetime.now().strftime("%H:%M:%S")
    print("当前时间:",year,'-',month,'-',day,' ', current_time)
    return str(year)+'-'+str(month)+'-'+str(day)+' '+str(current_time)

def get_weather():
        key="6ed6ff84f2731efa31ea59d101db12ca"
        response = requests.get(f"https://apis.tianapi.com/tianqishiju/index?key="+key)
        data = json.loads(response.text)
        print(data)
        return data['result']['content']

def send_message_TestVX(_item, _message, userid = 'o4Ym86Uq64JsdMG743D2ivcXTI8E'): # 默认发送给自己
    appid = 'wxa5a859907526f804'
    secret = 'fc6178abf05b52a3ecb8972b353bac98'
    template_id = 'FcOLzfSnrq_8DR9fp1dpUFYvc4tAr-mz_ta-boa2Dic'
    time=get_time()
    title="早上好呀，玉玉~"
    content = ""
    # 获取天气数据
    weather_data=get_weather()


    # 获取token
    response = requests.get(
        f"https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=" + appid + "&secret=" + secret)
    data = json.loads(response.text)
    access_token = data['access_token']

    payload = {'touser': userid, 'template_id': template_id,
               'data': {'time':{'value':time},'title': {'value': title}, 'content': {'value': content},'weather':{'value':weather_data}}}

    headers = {'header': "Content-Type: application/json;charset=utf-8"}
    url = 'https://api.weixin.qq.com/cgi-bin/message/template/send?access_token=' + access_token

    json_template = json.dumps(payload)
    response_send = requests.post(url, headers=headers, data=json_template)
    print("测试公众号：", response_send.text)

send_message_TestVX("","")
