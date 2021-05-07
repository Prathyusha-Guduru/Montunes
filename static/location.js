//GEO - LOCATION API CALLS

//If user gives the access to the location
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

//If user does not give the access to the location
function onFailure(message){
	console.log(message);
	//redirects to the no_access.html page
	window.location.replace(`${window.origin}/no_access`);	
}

//Calling the gelocation api 
navigator.geolocation.getCurrentPosition((position)=>{
	onSucess(position.coords.latitude,position.coords.longitude)
},(positionError)=>{
	onFailure()
})

