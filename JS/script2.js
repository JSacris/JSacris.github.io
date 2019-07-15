var lienzodoc, lienzo
function iniciar(){
	var lienzodoc=document.getElementById('lienzo');
	lienzo=lienzodoc.getContext('2d');








	lienzo.beginPath();
	lienzo.font="bold 15px arial, san-serif";
	
	lienzo.closePath();

		let hora=new Date().getHours();
		let saludo;
		if (hora<7) {
			saludo="\n Good night";
		} else if (hora<13) {
			saludo="\n Good morning";
		} else {
			saludo="\n Good afternoon";
		}		
		console.log(`${saludo}, its ${hora} o\'clock`);
		lienzo.fillText(`${saludo}, it\'s ${hora} o\'clock`, 10,15);

		lienzo.fillText(Number(Math.PI.toFixed(6)), 15,35);
		console.log(Number(Math.PI.toFixed(6)), 15,25);

		lienzo.fillText('\u55e8\uff0c\u4f60\u597d\u5417', 15,55);
		console.log(`\u55e8\uff0c\u4f60\u597d\u5417`);

		lienzo.fillText(`“The program has finished”`, 15,75)
		console.log(`“The program has finished”`)

let m=2;
let j=0;
while (j <= m) {
  tabla_num (j);
  j=j+1;
}
function tabla_num (j) {
  console.log(j+' dec = '+(j).toString(16)+' hex = '+(j).toString(8)+' oct = '+(j).toString(2)+' bin');
  lienzo.fillText(j+' dec = '+(j).toString(16)+' hex = '+(j).toString(8)+' oct = '+(j).toString(2)+' bin', 15,95);
}

}


addEventListener("load",iniciar);