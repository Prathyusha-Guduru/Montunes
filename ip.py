import requests


def getLocation():
	res = requests.get('https://ipinfo.io/').json()
	country_code = res["country"]
	postal_code = res["postal"]
	city = res["city"]
	region  = res["region"]
	return (postal_code,country_code,city,region)

