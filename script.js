let qr;

function gerarQRCode(){

const texto=document.getElementById("texto").value.trim();

if(texto==""){

alert("Digite algum texto.");
return;

}

const tamanho=parseInt(document.getElementById("tamanho").value);

const cor=document.getElementById("cor").value;

const fundo=document.getElementById("fundo").value;

const div=document.getElementById("qrcode");

div.innerHTML="";

qr=new QRCode(div,{

text:texto,

width:tamanho,

height:tamanho,

colorDark:cor,

colorLight:fundo,

correctLevel:QRCode.CorrectLevel.H

});

setTimeout(()=>{

document.getElementById("download").style.display="block";

},300);

}

function baixarQRCode(){

const img=document.querySelector("#qrcode img");

const canvas=document.querySelector("#qrcode canvas");

let url;

if(img)
url=img.src;

if(canvas)
url=canvas.toDataURL("image/png");

const a=document.createElement("a");

a.href=url;

a.download="QRCode.png";

a.click();

}
