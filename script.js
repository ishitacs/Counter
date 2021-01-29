 let add= document.getElementById('inc');
 let sub= document.getElementById('dec');
 let no= document.getElementById('number');
let count=0;
 add.addEventListener('click' ,() =>{
count+=1;
no.innerHTML=count;
no.style.color=changeColor(count);

 }
 )
 sub.addEventListener('click',() =>{
     count-=1;
     no.innerHTML=count;
     no.style.color=changeColor(count);
 }
 )
 function changeColor(count)
 { let color="";
     if(count<0){color="red";}
     else if(count>0){color="green";}
     else{color="white";}
     return color;
 }