import requests


def getLatLong():
	res = requests.get('https://ipinfo.io/').json()
	location = res['loc'].split(',')
	latitude = location[0]
	longitude = location[1]
	return (latitude,longitude)

def getLocation():
	res = requests.get('https://ipinfo.io/').json()
	city = res["city"]
	region  = res["region"]
	return (city,region)

print(getLatLong())