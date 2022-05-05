// let numero;

// Stampo i numeri da 1-100
for(let i = 1; i < 101; i++){
    if(i % 3 === 0 && i % 5 != 0) {
        console.log(i + " multiplo di 3");
    } else if(i % 5 === 0 && i % 3 != 0) {
        console.log(i + " multiplo di 5");
    } else if(i % 5 === 0 && i % 3 === 0) {
        console.log(i + " Fizz");
    } else {
        console.log(i);
    }  
}