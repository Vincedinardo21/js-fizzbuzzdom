const numero = document.querySelector("ul.my-number");


// Stampo i numeri da 1-100
for(let i = 1; i < 101; i++){
    const elemento = document.createElement("li");
    const element = "Multiplo di " + i;

    if(i % 3 === 0 && i % 5 != 0) {
        console.log(i + " multiplo di 3");
        elemento.append(i + " Multiplo di 3");
        numero.append(elemento);
    } else if(i % 5 === 0 && i % 3 != 0) {
        console.log(i + " multiplo di 5");
        elemento.append(i + " Multiplo di 5");
        numero.append(elemento);
    } else if(i % 5 === 0 && i % 3 === 0) {
        console.log(i + " FizzBuzz");
        elemento.append(i + " FizzBuzz");
        numero.append(elemento);
    } else {
        console.log(i);
        elemento.append(i);
        numero.append(elemento);
    }  
}