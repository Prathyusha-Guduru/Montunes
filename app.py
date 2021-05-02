############# IMPORTING LIBRARIES #############
from flask import Flask,render_template,redirect,request,url_for
import requests
import configparser

############# Getting API key #############






############# Getting Latitudes and Longitudes #############
res = req.get(	)


############# API Calls #############
api_url = "api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={API key}"