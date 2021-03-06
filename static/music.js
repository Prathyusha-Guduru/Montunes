

// Mapping HTML Buttons
const musicContainer = document.getElementById('music-container')
const playBtn = document.getElementById('play')
const prevBtn = document.getElementById('prev')
const nextBtn = document.getElementById('next')
const audio = document.getElementById('audio')
const progress = document.getElementById('progress')
const progressContainer = document.getElementById('progress-container')
const title = document.getElementById('title')
const cover = document.getElementById('music-cover')

// Getting temperature 
let temp = document.querySelector('.temp').innerHTML
temp = Number(temp)


//Songs list according to temperatures-range
// 0 to 2 -> for hot weather
// 2 to 5 -> for cold weather
let songIndex = temp <= 20 ? 3 : 0
const songs = ['shape-of-you','girls-like-you','maroon-5','perfect','aurora','i-will-be']



//Functions for loading,playing,pausing, nextSong, prevSong, and progress Bar

function loadSong(song){
	title.innerText = song
	audio.src = `static/audio/${song}.mp3`
	cover.src = `static/assets/images/${song}.png`
	console.log(song);
}

function playSong(){
	musicContainer.classList.add('play')
	playBtn.querySelector('i.fas').classList.remove('fa-play')
	playBtn.querySelector('i.fas').classList.add('fa-pause')

	audio.play()
}

function pauseSong(){
	musicContainer.classList.remove('play')
	playBtn.querySelector('i.fas').classList.remove('fa-pause')
	playBtn.querySelector('i.fas').classList.add('fa-play')
	audio.pause()
}

function prevSong(){
	if(songIndex === 0){
		songIndex = 0
		loadSong(songs[songIndex])
		playSong()
	} 
	else{
		songIndex -=1 
		loadSong(songs[songIndex])
		playSong()
	}
}

function nextSong(){
	if(songIndex === 5){
		songIndex = 5
		loadSong(songs[songIndex])
		playSong()
	} 
	else{
		songIndex +=1 
		loadSong(songs[songIndex])
		playSong()
	}
}

function updateProgress(e) {
	const { duration, currentTime } = e.srcElement;
	const progressPercent = (currentTime / duration) * 100;
	progress.style.width = `${progressPercent}%`;
  }

function setProgress(e){
	const width = this.clientWidth
	const clickX = e.offsetX
	const duration = audio.duration
	audio.currentTime = (clickX / width) * duration	
	console.log(clickX);
}



//Function calls and event listeners
loadSong(songs[songIndex])
playBtn.addEventListener('click',()=>{
	const isPlaying = musicContainer.classList.contains('play')
	if(isPlaying){
		pauseSong()
	}
	else{
		playSong()
	}
})
prevBtn.addEventListener('click',prevSong)
nextBtn.addEventListener('click',nextSong)
audio.addEventListener('timeupdate',updateProgress)
progressContainer.addEventListener('click',setProgress)
audio.addEventListener('ended',nextSong)
