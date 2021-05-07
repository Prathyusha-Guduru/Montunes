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

# Function for processng data recived from POST request by fetch() in location.js file
def random(req):
	if(req != None):
		return req
	else:
		return None


# Global variables
data = {}
temp = 0

#Flask app creation and configuration
app = Flask(__name__)
app.config['SECRET_KEY']  = 'itsasecret'

#Setting Up App views
# Getting weather acess view (home page)
@app.route('/', methods = ['POST','GET'])
def get_post_javascript_data():

	req = request.get_json()
	print(req)
	global data
	print(f"data is {data}")
	data = random(req)
	print(f"data is {data} and its type is {type(data)}")
	return render_template('index.html')

# 2nd page view (if access is given)
@app.route('/weather')
def index():
	#Api calls
	description,temperature,place = getWeatherResults(data['lat'],data['long'],getApiKey())
	global temp
	print(f"temp is {temp}")
	temp = temperature
	print(f"temp is {temp}")
	return render_template('weather.html',description = description,temperature = temperature,place = place)

# Music view
@app.route('/music')
def music():
	return render_template('music.html',temp = temp)

# Page view if no acess is given
@app.route('/no_access')
def no_access():
	return render_template('no-access.html')

#Running the app
if __name__ == '__main__':
	app.run(debug = True)