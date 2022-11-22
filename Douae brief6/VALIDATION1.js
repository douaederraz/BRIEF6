function Suivant(){
    
    //nom//
   let span= document.getElementById('Nom');
    let nom = document.getElementById('nom').value;
if(nom.match(/[0-9]/g)){
    span.innerHTML="les chiffres sont interdits"
}
  else if(nom.length>30 || nom.length<3 ){
 span.innerHTML="Error"
    }
    else  {
        span.innerHTML="Valider"
    }

    //Prénom//
    let sp= document.getElementById('prenom');
    let Prénom= document.getElementById('Prénom').value;
if(Prénom.match(/[0-9]/g)){
    sp.innerHTML="les chiffres sont interdits"
}
  else if(Prénom.length>30 || Prénom.length<3){
 sp.innerHTML="Error"
    }
    else  {
        sp.innerHTML="Valider"
    }

    //tel//
    let spa= document.getElementById('Tel');
    let tel= document.getElementById('tel').value ;
  if(tel.match(/[0-9]/g) && tel.length==10 && tel[0]==0 &&( tel[1]== 6 || tel[1]== 7 || tel[1]== 5 )){
    spa.innerHTML="Valider"

    }
    else{
        spa.innerHTML="Error"
    }

   //EMAIL//
   let email= document.getElementById('Email');
   let eml = document.getElementById('email').value;
 if(eml== Prénom + "."  + nom + "@ofppt.ma"){
email.innerHTML="Valider"
   }
   else  {
       email.innerHTML="L'email n'existe pas "
   }
   //GENRE//
   let genre= document.getElementById('Genre');
   let f = document.getElementById('F').checked;
   let m = document.getElementById('M').checked;
 if(f==true || m==true){
genre.innerHTML="Valider"
   }
   else  {
      genre.innerHTML="Error"
   }
   //group//
   let W1= document.getElementById('DW101').checked;
   let W2 = document.getElementById('DW102').checked;
   let W3 = document.getElementById('DW103').checked;
   let M1 = document.getElementById('DM101').checked;
   let M2 = document.getElementById('DM102').checked;
   let group = document.getElementById('group');
   if(W1==true || W2==true || W3==true|| M1==true|| M2==true){
    group.innerHTML="Valider"
       }
       else  {
          group.innerHTML="Error"
       }
       //club//
       let club= document.getElementById('Club');
       let clb = document.getElementById('club');
       let score=0;
  
       
 for (let i = 0; i < clb.options.length; i++) {
   
 
     if(clb.options[i].selected==true){
      score++
     }

if(score>=1 && score<=3){

   club.innerHTML="Valider";
} 
else{
    club.innerHTML="Sélectionner entre 1 et 3 clubs";
}
 if( club.innerHTML=="Valider" &&   group.innerHTML=="Valider" &&  genre.innerHTML=="Valider" && email.innerHTML=="Valider" &&   spa.innerHTML=="Valider" &&       span.innerHTML=="Valider"){
    location.replace("felicitation.html");
}
 }

    }


