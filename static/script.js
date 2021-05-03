// Getting temperature 
let temp = document.querySelector('.temp').innerHTML
temp = Number(temp)

// Selecting the H3 tag with weather-commentary class
let weatherCommentary = document.querySelector('.weather-commentary')


// Comments for each temperature range
const temperature_description = [`Dude, you must be living on the sun`,
`It hot, stay cool!`,
`Don't forget to put on sunscreen and stay hydrated!`,
`It's warm and nice,enjoy your outdoor activities`,
`A hot chocolate would be amazing now`,
`It's cold but not too cold,so stay under your warm blanket`,
`Wear warm clothing and enjoy the snow`,
`It's unbearably cold, stay inside!`]

//Returns comments for each temperature range
function getWeatheComment(temp){
	if(temp >= 40){
		console.log(temperature_description[0])
		return temperature_description[0]
	}
	else if(temp < 40 && temp >=30){
		console.log(temperature_description[1])
		return temperature_description[1]
	}
	else if(temp < 30 && temp >= 25){
		console.log(temperature_description[2]);
		return temperature_description[2]
	}
	else if(temp<25 && temp >= 20){
		console.log(temperature_description[3])
		return temperature_description[3]
	}
	else if(temp < 20 && temp >= 15){
		console.log(temperature_description[4])
		return temperature_description[4]
	}
	else if(temp < 15 && temp >= 5){
		console.log(temperature_description[5])
		return temperature_description[5]
	}
	else if(temp <5 && temp >= -10){
		console.log(temperature_description[6])
		return temperature_description[6]
	}
	else if(temp < -10){
		console.log(temperature_description[7])
		return temperature_description[7]
	}
}

//Writes the weather comments into the HTML page according to the temperature at user's location
weatherCommentary.innerHTML = getWeatheComment(temp)