

function onSucess(lat,long){
	
	console.log(`Latitude is ${lat} and longitude is ${long}`);
	fetch(`${window.location}`, {
		method: "POST",
		credentials: "include",
		body: JSON.stringify({"lat" : lat,"long" : long}),
		cache: "no-cache",
		headers: new Headers({
			"content-type": "application/json"
		})
	})
	
}

function onFailure(message){
	console.log(message);	
}

navigator.geolocation.getCurrentPosition((position)=>{
	onSucess(position.coords.latitude,position.coords.longitude)
},(positionError)=>{
	onFailure()
})


