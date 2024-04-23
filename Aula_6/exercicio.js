function somaNumerosNaturais(num1,num2){
    if(typeof(num1) != "number" || typeof(num2)!="number"){
        throw"Os valores tem que ser números.";
    }
    if(!Number.isInteger(num1) || !Number.isInteger(num2)){
        throw"Os números só podem ser Inteiros.";
    }
    if(num1<0 || num2<0){
        throw"Os números devem ser Naturais.";
    }
    return num1 + num2;
}

function trataSoma(num1,num2){
    try{
        console.log("Resultado: ",somaNumerosNaturais(num1,num2));
    }
    catch(err){
        console.log(err);
    }
}
function mains(){
    trataSoma(1,2);
    trataSoma(-1,2);
    trataSoma(1,-2);
    trataSoma("1",2);
    trataSoma(1.4,2);
    trataSoma(0,0);
}

mains();
