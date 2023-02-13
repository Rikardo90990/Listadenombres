

 array_uno=[];
 function cuadro(){
 var a1=document.getElementById("nombre_alumno_1").value;
 var a2=document.getElementById("nombre_alumno_2").value;
 var a3=document.getElementById("nombre_alumno_3").value;
 var a4=document.getElementById("nombre_alumno_4").value;
 array_uno.push(a1);
 array_uno.push(a2);
 array_uno.push(a3);
 array_uno.push(a4);
 document.getElementById("cambio").innerHTML=array_uno;
 }





