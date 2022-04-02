/*Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero.*/



//chiedere un numero di 4 cifre
let numero = prompt("inserisci numero di 4 cifre");
let checkNum;


if(numero.length== 4){
     console.log(numero + " " + numero.length);
    
   
    checkNum = numero.split("");
    console.log(checkNum);
    let totale = 0;
    let index = 0;
    
    while(index < checkNum.length){
        console.log("index:", index);
        console.log("checkNum:",checkNum[index]);
       
        totale += parseInt(checkNum[index]);
        console.log("totale:" ,totale);
        
        index++
       
    }
}else{
    alert("il tuo numero non è corretto")
}

