#importing 3rd party libraries
from flask import Flask,render_template,redirect,request,url_for,jsonify,make_response
import requests

import configparser




#API Configuration	
def getApiKey():
	config = configparser.ConfigParser()
	config.read('config.ini')
	return config['openweathermap']['api']

#Weather api fuction
def getWeatherResults(lat,long,api_key):
	api_url = f"http://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={long}&appid={api_key}&units=metric"
	result = requests.get(api_url).json()
	place = result["name"]
	description = result["weather"][0]["description"]
	temp = result["main"]["temp"]
	print(f"place is {place}")
	return (description,temp,place)




#Flask app creation and configuration
app = Flask(__name__)
app.config['SECRET_KEY']  = 'itsasecret'

#Setting Up App views

@app.route('/music')
def music():
	return render_template('music.html')


data = {}

def random(req):
	if(req != None):
		return req
	else:
		return None

@app.route('/weather', methods = ['POST','GET'])
def get_post_javascript_data():

	req = request.get_json()
	print(req)
	global data
	print(f"data is {data}")
	data = random(req)
	print(f"data is {data} and its type is {type(data)}")
	return render_template('weather.html')

@app.route('/')
def index():
	#Api calls
	description,temp,place = getWeatherResults(data['lat'],data['long'],getApiKey())
	return render_template('index.html',description = description,temp = temp,place = place)

@app.route('/newroute')
def newroute():
	return f"Data is {data['lat']} and long is {data['long']}"
	

#Running the app
if __name__ == '__main__':
	app.run(debug = True)