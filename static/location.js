
// var lat = 0,long = 0, status = 0
// //Function to get latitude and longitude if user allows acces to location
// function onSucess(lat,long){
	
// 	console.log(`Latitude is ${lat} and longitude is ${long}`);
// 	var status = 1
// 	var lat = lat

// 	console.log(`Status is ${status}`);
	
// }

// // Function if user denies acess to location
// function onFailure(message){
// 	console.log(message);
// 	let failed = 0
// 	// console.log(`if onfailure is getting executed ${failed} and `);
// 	// //POST REQUEST TO SERVER
// 	// $.post("/", {
// 	// 	userStatus : 0,
// 	// 	lat : 0,
// 	// 	long : 0
// 	// });
// 	console.log(`Status is ${failed}`);
// }



// // GEO-LOCATION API Call
// navigator.geolocation.getCurrentPosition((position)=>{
// 	onSucess(position.coords.latitude,position.coords.longitude)
// },(positionError)=>{
// 	onFailure(positionError.message)
// })


function postEntry(){
	var status = 0
	var lat = 0
	var long = 0

	var entry = {
		status : status,
		lat : lat,
		long : long
	}
	console.log(entry);
	fetch(`/weather`,{
		method : "POST",
		credentials : "include",
		body : JSON.stringify(entry),
		cache : "no-cache",
		header : new Headers({
			"content-type" : "application/json"
		})
	})
}

postEntry()