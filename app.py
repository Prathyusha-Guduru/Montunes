#importing 3rd party libraries
from flask import Flask,render_template,redirect,request,url_for
import requests
import configparser


#Importing from other modules
from ip import getLocation,getLatLong


#API Configuration
def getApiKey():
	config = configparser.ConfigParser()
	config.read('config.ini')
	return config['openweathermap']['api']

#Weather api fuction
def getWeatherResults(lat,long,api_key):
	api_url = f"http://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={long}&appid={api_key}&units=metric"
	result = requests.get(api_url).json()
	description = result["weather"][0]["description"]
	temp = result["main"]["temp"]

	return (description,temp)

#Latitude,longitude
lat,long = getLatLong()


#Flask app creation and configuration
app = Flask(__name__)
app.config['SECRET_KEY']  = 'itsasecret'

#Setting Up App views
@app.route('/')
def index():
	#Api calls
	description,temp = getWeatherResults(lat,long,getApiKey())
	city,region = getLocation()
	return render_template('index.html',description = description,temp = temp,city = city,region = region)

#Running the app
if __name__ == '__main__':
	app.run()