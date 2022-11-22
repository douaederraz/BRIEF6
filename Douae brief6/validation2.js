 
 var scr=0;
  let nom = document.getElementById('nom');   
   let prenom= document.getElementById('Prénom');
   //nom//  
function validernom(){
   let span= document.getElementById('Nom');

if(nom.value.match(/[0-9]/g)){
    span.innerHTML="les chiffres sont  interdits"
}
  else if(nom.value.length>30 || nom.value.length<3 ){
 span.innerHTML="Error"
 nom.style.background ="red";
 src++
    }
    else  {
        span.innerHTML="Valider";
        nom.style.background ="green";
        scr=0;
    } 
}

    //Prénom//
function valideprenom(){
    let sp= document.getElementById('prenom');

if(prenom.value.match(/[0-9]/g)){
    sp.innerHTML="les chiffres est interdits"
}
  else if(prenom.value.length>30 || prenom.value.length<3){
 sp.innerHTML="Error"
 prenom.style.background ="red"; 
 scr++

  }
    else  {
        sp.innerHTML="Valider";
        prenom.style.background ="green";
         scr=0;
    } 
}

        //tel//

function validertel(){
    let spa= document.getElementById('Tel');
    let tel= document.getElementById('tel') ;
  if(tel.value.match(/[0-9]/g) && tel.value.length==10 && tel.value[0]==0 &&( tel.value[1]== 6 || tel.value[1]== 7 || tel.value[1]== 5 )){
    spa.innerHTML="Valider";
    tel.style.background ="green";
   scr=0;
    }
    else{
        spa.innerHTML="Error";
        tel.style.background ="red";
        scr++
     
    }
}

   //EMAIL//
   function valideemail(){
   let email= document.getElementById('Email');
   let eml = document.getElementById('email');
   let format_email=prenom.value +"."+ nom.value + "@ofppt.ma";
 if(eml.value== format_email){

email.innerHTML="Valider";
eml.style.background ="green"; 
 scr=0;
   }
   else  {
       email.innerHTML="L'email n'existe pas "
       eml.style.background ="red";
       scr++
     
   } 
}

   //GENRE//
function validergenre(){
   let genre= document.getElementById('Genre');
   let f = document.getElementById('F').checked;
   let m = document.getElementById('M').checked;
 if(f==true || m==true){
genre.innerHTML="Valider";
scr=0;
   }
   else  {
      genre.innerHTML="Error";
  
   } 
}

   //group//
   function validergroup(){
   let W1= document.getElementById('DW101').checked;
   let W2 = document.getElementById('DW102').checked;
   let W3 = document.getElementById('DW103').checked;
   let M1 = document.getElementById('DM101').checked;
   let M2 = document.getElementById('DM102').checked;
   let group = document.getElementById('group');
   if(W1==true || W2==true || W3==true|| M1==true|| M2==true){
    group.innerHTML="Valider";
    scr=0;
   
       }
       else  {
          group.innerHTML="Votre group SVP!!";
          scr++
         
       } 
    } 

       //club//
function validerclub(){
       let club= document.getElementById('Club');
       let clb = document.getElementById('club');
       let score=0;
       
       
 for (let i = 0; i < clb.options.length; i++) {
   

     if(clb.options[i].selected==true){
      score++
     }

if(score>=1 && score<=3){

   club.innerHTML="Valider";
   scr=0;

} 
else{
    club.innerHTML="Sélectionner entre 1 et 3 clubs";
    scr++
}


}

}
//validation//
function validation(){ 
validertel();
valideemail();
valideprenom();
validerclub();
validergenre();
validergroup();
validernom();
 
if (scr==0) {
    location.replace("felicitation.html");
}
 

 
    
}