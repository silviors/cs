senha = prompt("SENHA:");
if (senha === ".lp9") {
 document.getElementById('pagina').style.display = 'block';
} else if (senha === "") {
 alert("SENHA OBRIGATORIA");
 window.location = "http://silviors.dlinkddns.com:881"
} else if (senha === "sair") {
 alert("cancelado");
 window.location = "www.terra.com.br"
} else {
 alert("SENHA ERRADA");
 window.location = "http://silviors.dlinkddns.com:881"
}

function AR1(){
    var et1 = document.getElementById("et1").innerHTML;
    if(et1 === "0"){
        document.getElementById("et1").innerHTML="1";
        document.getElementById("rl1").innerHTML="<div class='rele1_ligado'></div>";
	document.getElementById("bt1").innerHTML="<a href='/?1d' class='bt1'>Desliga</a>";
    } else {
        document.getElementById("et1").innerHTML="0";
        document.getElementById("rl1").innerHTML="<div class='rele1_desligado'></div>";
        document.getElementById("bt1").innerHTML="<a href='/?1l' class='bt1'>Liga</a>";
    }
}

function AR2(){
    var et2 = document.getElementById("et2").innerHTML;
    if(et2 === "0"){
        document.getElementById("et2").innerHTML="1";
        document.getElementById("rl2").innerHTML="<div class='rele2_ligado'></div>";
	document.getElementById("bt2").innerHTML="<a href='/?2d' class='bt2'>Desliga</a>";
    } else {
        document.getElementById("et2").innerHTML="0";
        document.getElementById("rl2").innerHTML="<div class='rele2_desligado'></div>";
        document.getElementById("bt2").innerHTML="<a href='/?2l' class='bt2'>Liga</a>";
    }
}

function AR3(){
    var et3 = document.getElementById("et3").innerHTML;
    if(et3 === "0"){
        document.getElementById("et3").innerHTML="1";
        document.getElementById("rl3").innerHTML="<div class='rele3_ligado'></div>";
	document.getElementById("bt3").innerHTML="<a href='/?3d' class='bt3'>Desliga</a>";
    } else {
        document.getElementById("et3").innerHTML="0";
        document.getElementById("rl3").innerHTML="<div class='rele3_desligado'></div>";
        document.getElementById("bt3").innerHTML="<a href='/?3l' class='bt3'>Liga</a>";
    }
}

function AR4(){
    var et4 = document.getElementById("et4").innerHTML;
    if(et4 === "0"){
        document.getElementById("et4").innerHTML="1";
        document.getElementById("rl4").innerHTML="<div class='rele4_ligado'></div>";
	document.getElementById("bt4").innerHTML="<a href='/?4d' class='bt4'>Desliga</a>";
    } else {
        document.getElementById("et4").innerHTML="0";
        document.getElementById("rl4").innerHTML="<div class='rele4_desligado'></div>";
        document.getElementById("bt4").innerHTML="<a href='/?4l' class='bt4'>Liga</a>";
    }
}

function AR5(){
    var et5 = document.getElementById("et5").innerHTML;
    if(et5 === "0"){
        document.getElementById("et5").innerHTML="1";
        document.getElementById("rl5").innerHTML="<div class='rele5_ligado'></div>";
	document.getElementById("bt5").innerHTML="<a href='/?5d' class='bt5'>Desliga</a>";
    } else {
        document.getElementById("et5").innerHTML="0";
        document.getElementById("rl5").innerHTML="<div class='rele5_desligado'></div>";
        document.getElementById("bt5").innerHTML="<a href='/?5l' class='bt5'>Liga</a>";
    }
}

function AR6(){
    var et6 = document.getElementById("et6").innerHTML;
    if(et6 === "0"){
        document.getElementById("et6").innerHTML="1";
        document.getElementById("rl6").innerHTML="<div class='rele6_ligado'></div>";
	document.getElementById("bt6").innerHTML="<a href='/?6d' class='bt6'>Desliga</a>";
    } else {
        document.getElementById("et6").innerHTML="0";
        document.getElementById("rl6").innerHTML="<div class='rele6_desligado'></div>";
        document.getElementById("bt6").innerHTML="<a href='/?6l' class='bt6'>Liga</a>";
    }
}

function AR7(){
    var et7 = document.getElementById("et7").innerHTML;
    if(et7 === "0"){
        document.getElementById("et7").innerHTML="1";
        document.getElementById("rl7").innerHTML="<div class='rele7_ligado'></div>";
	document.getElementById("bt7").innerHTML="<a href='/?7d' class='bt7'>Desliga</a>";
    } else {
        document.getElementById("et7").innerHTML="0";
        document.getElementById("rl7").innerHTML="<div class='rele7_desligado'></div>";
        document.getElementById("bt7").innerHTML="<a href='/?7l' class='bt7'>Liga</a>";
    }
}

function AR8(){
    var et8 = document.getElementById("et8").innerHTML;
    if(et8 === "0"){
        document.getElementById("et8").innerHTML="1";
        document.getElementById("rl8").innerHTML="<div class='rele8_ligado'></div>";
	document.getElementById("bt8").innerHTML="<a href='/?8d' class='bt8'>Desliga</a>";
    } else {
        document.getElementById("et8").innerHTML="0";
        document.getElementById("rl8").innerHTML="<div class='rele8_desligado'></div>";
        document.getElementById("bt8").innerHTML="<a href='/?8l' class='bt8'>Liga</a>";
    }
}

function AR9(){
    var et9 = document.getElementById("et9").innerHTML;
    if(et9 === "0"){
        document.getElementById("et9").innerHTML="1";
        document.getElementById("rl9").innerHTML="<div class='rele9_ligado'></div>";
	document.getElementById("bt9").innerHTML="<a href='/?9d' class='bt9'>Desliga</a>";
    } else {
        document.getElementById("et9").innerHTML="0";
        document.getElementById("rl9").innerHTML="<div class='rele9_desligado'></div>";
        document.getElementById("bt9").innerHTML="<a href='/?9l' class='bt9'>Liga</a>";
    }
}

function AR10(){
    var et10 = document.getElementById("et10").innerHTML;
    if(et10 === "0"){
        document.getElementById("et10").innerHTML="1";
        document.getElementById("rl10").innerHTML="<div class='rele10_ligado'></div>";
	document.getElementById("bt10").innerHTML="<a href='/?10d' class='bt10'>Desliga</a>";
    } else {
        document.getElementById("et10").innerHTML="0";
        document.getElementById("rl10").innerHTML="<div class='rele10_desligado'></div>";
        document.getElementById("bt10").innerHTML="<a href='/?10l' class='bt10'>Liga</a>";
    }
}

function AR11(){
    var et11 = document.getElementById("et11").innerHTML;
    if(et11 === "0"){
        document.getElementById("et11").innerHTML="1";
        document.getElementById("rl11").innerHTML="<div class='rele11_ligado'></div>";
	document.getElementById("bt11").innerHTML="<a href='/?11d' class='bt11'>Desliga</a>";
    } else {
        document.getElementById("et11").innerHTML="0";
        document.getElementById("rl11").innerHTML="<div class='rele11_desligado'></div>";
        document.getElementById("bt11").innerHTML="<a href='/?11l' class='bt11'>Liga</a>";
    }
}

function AR12(){
    var et12 = document.getElementById("et12").innerHTML;
    if(et12 === "0"){
        document.getElementById("et12").innerHTML="1";
        document.getElementById("rl12").innerHTML="<div class='rele12_ligado'></div>";
	document.getElementById("bt12").innerHTML="<a href='/?12d' class='bt12'>Desliga</a>";
    } else {
        document.getElementById("et12").innerHTML="0";
        document.getElementById("rl12").innerHTML="<div class='rele12_desligado'></div>";
        document.getElementById("bt12").innerHTML="<a href='/?12l' class='bt12'>Liga</a>";
    }
}

function AR13(){
    var et13 = document.getElementById("et13").innerHTML;
    if(et13 === "0"){
        document.getElementById("et13").innerHTML="1";
        document.getElementById("rl13").innerHTML="<div class='rele13_ligado'></div>";
	document.getElementById("bt13").innerHTML="<a href='/?13d' class='bt13'>Desliga</a>";
    } else {
        document.getElementById("et13").innerHTML="0";
        document.getElementById("rl13").innerHTML="<div class='rele13_desligado'></div>";
        document.getElementById("bt13").innerHTML="<a href='/?13l' class='bt13'>Liga</a>";
    }
}

function AR14(){
    var et14 = document.getElementById("et14").innerHTML;
    if(et14 === "0"){
        document.getElementById("et14").innerHTML="1";
        document.getElementById("rl14").innerHTML="<div class='rele14_ligado'></div>";
	document.getElementById("bt14").innerHTML="<a href='/?14d' class='bt14'>Desliga</a>";
    } else {
        document.getElementById("et14").innerHTML="0";
        document.getElementById("rl14").innerHTML="<div class='rele14_desligado'></div>";
        document.getElementById("bt14").innerHTML="<a href='/?14l' class='bt14'>Liga</a>";
    }
}

function AR15(){
    var et15 = document.getElementById("et15").innerHTML;
    if(et15 === "0"){
        document.getElementById("et15").innerHTML="1";
        document.getElementById("rl15").innerHTML="<div class='rele15_ligado'></div>";
	document.getElementById("bt15").innerHTML="<a href='/?15d' class='bt15'>ACIONA</a>";
    } else {
        document.getElementById("et15").innerHTML="0";
        document.getElementById("rl15").innerHTML="<div class='rele15_desligado'></div>";
        document.getElementById("bt15").innerHTML="<a href='/?15l' class='bt15'>ACIONA</a>";
    }
}

function AR16(){
    var et16 = document.getElementById("et16").innerHTML;
    if(et16 === "0"){
        document.getElementById("et16").innerHTML="1";
        document.getElementById("rl16").innerHTML="<div class='rele16_ligado'></div>";
	document.getElementById("bt16").innerHTML="<a href='/?16d' class='bt16'>Desliga</a>";
    } else {
        document.getElementById("et16").innerHTML="0";
        document.getElementById("rl16").innerHTML="<div class='rele16_desligado'></div>";
        document.getElementById("bt16").innerHTML="<a href='/?16l' class='bt16'>Liga</a>";
    }
}



















