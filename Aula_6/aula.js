function divisao(num1,num2){
    if(num2==0){
        throw"Divisor não pode ser 0.";
    }
    return (num1/num2);

}

try{
    console.log(divisao(2,0));
}
catch(err){
    console.log(err)
}