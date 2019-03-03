var source1, drop;
addEventListener('load',initiate);
function initiate (){
	source1 = document.getElementById('g1'); //объект для источника
	drop = document.getElementById('dropbox'); //объект для целевого
	source1.addEventListener('dragstart', dragstart);
	drop.addEventListener('dragenter', dragenter);
	drop.addEventListener('drop', dropt);//событие
}

function dragstart(e) {
     var code= '<img src= "'+source1.getAttribute('src')+'" />';
     e.dataTransfer.setData('Text', code);

//	console.log(source1.getAttribute("src"));

}

function dragenter(e) {
     e.preventDefault(); // отменяет действия по умолчанию
     drop.innerHTML=e.dataTransfer.getData('Text');

	//console.log('dragenter');
}

function dropt(e) {
     e.preventDefault(); // отменяет действия по умолчанию
   var getData=drop.innerHTML=e.dataTransfer.getData('Text/html');
	console.log('dropt');
}
