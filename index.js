function solucaoExercicio(x,y) {

        console.log(typeof(x));

        if( (Number. isInteger(x) == false) || (Number. isInteger(y) == false))

            return "Digite dois números. ";

    
        return "Os números " + x + " e " + y + " " + igual (x,y) + 
            ". Sua soma é: " + soma(x,y) + ", que é " + limInf(x,y) + "e " + limSup(x,y); 


}

function igual(x,y){

    const igual = x === y;

    return igual ? "são iguais" : "não são iguais"; 

}

function soma (x,y){

    return x + y;

}

function limInf(x,y) {

        return soma(x,y) > 10 ? " maior do 10 " : " menor ou igual a 10 " ;

}

function limSup(x,y) {

    return soma(x,y) < 20 ? " menor do 20 " : " maior ou igual a 20 " ;

}

console.log(solucaoExercicio(1,2));