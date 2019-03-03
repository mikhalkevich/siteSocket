addEventListener('load',initiate);
function initiate (){
	var elem = document.getElementById('canvas');
	var canvas = elem.getContext('2d');
    var text = "Prosto site";

	canvas.save();
	canvas.fillStyle = 'Palegreen';

	canvas.strokeRect(100,100,120,120);
	canvas.fillRect(110,110,100,100);
	canvas.clearRect(120,120,80,80);
    var grad = canvas.createLinearGradient(0,0,700,300);
    grad.addColorStop (0.2, 'Darkgreen');
    grad.addColorStop (1, '#000');
    canvas.fillStyle = grad;
    canvas.fillRect(135,135,500,50);

    canvas.beginPath();
    canvas.moveTo(100,100);
    canvas.lineTo(200,200);
    canvas.lineTo(100,200);
    canvas.clip();
    for (var f=0; f<300; f=f+10){
    	canvas.moveTo(0,f);
    	canvas.lineTo(500,f);
    }
    canvas.stroke();
    canvas.closePath();
    canvas.restore();

    canvas.fillStyle = 'Springgreen';
    canvas.beginPath();
    canvas.arc(630,85,50,0, 2*Math.PI, false);
    canvas.fill();
    canvas.closePath();

    canvas.beginPath();
    canvas.moveTo(50,50);
    canvas.quadraticCurveTo(100,125,50,200);
    canvas.lineWidth = 10;
    canvas.lineCap = 'round';
    canvas.stroke();

    canvas.beginPath();
    canvas.scale(2,1);
    canvas.rotate(Math.PI/180*45);
    canvas.font = "20px Arial";
    canvas.fillText(text, 20,20);
    canvas.restore();


}