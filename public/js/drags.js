var  drop;
addEventListener('load',initiate);
function initiate (){
	var images = document.querySelectorAll('#picturebox>img')
	for (var i=0; i<images.length; i++){
		images[i].addEventListener('dragstart',dragstart)
	}
	drop = document.getElementById('dropbox'); //объект для целевого
	drop.addEventListener('dragenter', dragenter);
	drop.addEventListener('drop', dropt);//событие
}

function dragstart(e) {
     var elem= e.target;
     e.dataTransfer.setData('Text', elem.getAttribute('id'));
console.log(elem);
//	console.log(source1.getAttribute("src"));

}

function dragenter(e) {
     e.preventDefault(); // отменяет действия по умолчанию
     src= e.dataTransfer.getData('Text');
    var img = document.getElementById(src).getAttribute('src');
drop.innerHTML="<img src='"+img+"'/>" ;
	//console.log('dragenter');
}

function dropt(e) {
   var id = e.dataTransfer.detData('Text');
   var src=document.getElementById("id").src;
    drop.innerHTML="<img src='"+src+"'/>";
//	console.log('dropt');
}
