

//Function to get latitude and longitude if user allows acces to location
function onSucess(lat,long){
	
	console.log(`Latitude is ${lat} and longitude is ${long}`);
	let status = 1
	$.post("/", {
		userStatus : status,
		lat : lat,
		long : long
	});
	console.log(`Status is ${status}`);
	
}

// Function if user denies acess to location
function onFailure(message){
	console.log(message);
	let failed = 0
	console.log(`if onfailure is getting executed ${failed} and `);
	$.post("/", {
		userStatus : failed,
		lat : 0,
		long : 0
	});
	console.log(`Status is ${failed}`);
}



// GEO-LOCATION API Call
navigator.geolocation.getCurrentPosition((position)=>{
	onSucess(position.coords.latitude,position.coords.longitude)
},(positionError)=>{
	onFailure(positionError.message)
})

