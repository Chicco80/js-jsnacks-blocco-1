/*Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.*/






const dispari = [];
console.log(dispari);



for(let i = 1; i <=6; i++){
    let nInserito = parseInt(prompt("inserisci un numero"));
    //  console.log(nInserito)

     if(nInserito % 2 == 1){
         dispari.push(nInserito);


        // console.log("dispari");
     }
}
