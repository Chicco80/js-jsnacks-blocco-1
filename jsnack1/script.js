/*In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.*/

//1 creare una lista di invitati(array)
//chiedere nome invitato con prompt
//controllo nome invitato se presente nella lista
//     se si messaggio ok puoi entrare 
//     se no messaggio divieto accesso



//creo arrai invitati
const invitati = ["paolo", "pietro", "marco","federico"];


//creo prompt per chiedere il nome
let nomeInvitato = prompt("il tuo nome");
let invitato = false;


//cerco se il nome corrisponde
for (let i = 0; i < invitati.length; i++){
    if (nomeInvitato === invitati[i]){    
        invitato = true;                            
    }                                
   
}

if(invitato){
    alert("ok puoi entrare");
}
else {
    alert("nome non nella lista");
}




 


