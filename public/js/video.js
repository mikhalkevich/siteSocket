addEventListener('load',initiate);
var media, play,bar,progress,mute,volume, maxim;


function initiate (){
	// objects
	maxim=400;
       media= document.getElementById('media');
       play= document.getElementById('play');
       bar= document.getElementById('bar');
       progress= document.getElementById('progress');
       mute= document.getElementById('mute');
       volume= document.getElementById('volume');
       // listeners
       play.addEventListener('click', push);
       bar.addEventListener('click', muve);
       mute.addEventListener('click', sound);
       volume.addEventListener('change', level);


}

function push(){
	if (!media.paused && !media.ended){
		media.pause();
		play.value='play';
		clearInterval(status);

		}else {
			media.play();
			play.value='pause';
			loop=setInterval(status, 1000)
		     }
}

function status(){
	if (!media.ended){

		var size= parseInt(media.currentTime*maxim/media.duration);
				console.log(media.currentTime,maxim,media.duration)
		progress.style.width = size+'px';
	}
	else{
		progress.style.width = 0;
		play.innerHTML = 'play';
		clearInterval(loop);
	}
}

function muve(e){
if(!media.paused && !media.ended){	
	var mauseX= e.pageX-bar.offsetLeft;
    var newTime= mauseX*media.duration/maxim;
    media.currentTime= newTime;
    progress.style.width = mauseX+'px';
}
}

function level(){
	media.volume = volume.value
}

function sound(){
	if (mute.value=='mute'){
		media.muted=true;
		mute.value='sound';
	}
	else{
      media.muted=false;
      mute.value='mute';
	}
}