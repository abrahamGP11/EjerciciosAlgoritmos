//let numero1=prompt("Indica el primer numero entre 1 y 100")
//let numero2=prompt("Indica el segundo numero entre 1 y 100")
//let numero3=prompt("Indica el tercer numero entre 1 y 100")

//      Numero mayor entre 3 numeros
//if (numero1>100 || numero2 >100 || numero3>100) {
//    alert("Solo numeros entre 1 y 100")
//}
//if (numero1>numero2 && numero1>numero3) {
//    alert("El numero mayor es "+ numero1);
//}
//else if (numero2>numero1 && numero2>numero3) {
//    alert("El numero mayor es "+ numero2);
//
//}
//else if (numero3>numero1 && numero3>numero2) {
//    alert("El numero mayor es "+ numero3);
//}


//      Numero menor entre 3 numeros 
//if (numero1>100 || numero2 >100 || numero3>100) {
//    alert("Solo numeros entre 1 y 100")
//}
//if (numero1<numero2 && numero1<numero3) {
//    alert("El numero menor es "+ numero1);
//}
//else if (numero2<numero1 && numero2<numero3) {
//    alert("El numero menor es "+ numero2);
//
//}
//else if (numero3<numero1 && numero3<numero2) {
//    alert("El numero menor es "+ numero3);
//}


        //Numero entre 100 y 200 y determinar si es multiplo de 3 
// number=prompt("Indica el número entero entre 100 y 200","")
// num=parseInt(number,10);
// 
// if (num<100 || num>200) {
//     alert("Número no valido");
// }
// 
// else if (num%3==0) {
//     alert(num + " es múltiplo de 3")
// }
// else if(num%3!=0){
//     alert(num + " no es múltiplo de 3")
// }



//      Determinar si un numero es par o impar
// let number=prompt("Indica el número");
// if (number%2==0) {
//     alert(number + " es un número par")
// }
// else if (number%2 !=0) {
//     alert(number +" no es un número par")
// }


// Determinar si un numero es la suma de los otros 2
// let numero1=prompt("Indica el primer numero entre 1 y 100");
// let numero2=prompt("Indica el segundo numero entre 1 y 100");
// let numero3=prompt("Indica el tercer numero entre 1 y 100");
// 
// if (numero3 - numero1 - numero2==0) {
//     alert(numero3 +" es la suma de " + numero1 +" y "+ numero2)
// } else if (numero2 - numero1 -numero3==0) {
//     alert(numero2 +" es la suma de " + numero1 +" y "+ numero3)
// } else if (numero1 - numero3 - numero2==0) {
//     alert(numero1 +" es la suma de " + numero2 +" y "+ numero3)
// }

// function writePI(){
//     console.log(Math.PI);
// }
// writePI();


//      Ejercicio 3
//      Adivinar un número entre el 1 y el 100 en la menor cantidad de pasos
function adivinar() {
    let superior=100;
    let inferior=0;
    let noEncontrado=true;

    while (noEncontrado) {
        let mid=parseInt(inferior + ((superior-inferior)/2));
        console.log(mid);
        console.log((superior-inferior/2));

        if (((superior-inferior)/2)<1) {
            noEncontrado=false;
            alert("Tu numero es el "+ (parseInt(mid)+1));
            break;
        } //if
        let res=confirm("Es menor o igual a " + mid);
        if(res){
            superior=mid;
        } else{
            inferior=mid
        }
        console.log(inferior, superior);
    }
}
adivinar();
























