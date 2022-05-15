function Somar(){
    let valor1 = document.getElementById("valor1").value;
    let valor2 = document.getElementById("valor2").value;
    if(valor1 != '' && valor2 != ''){
        if(valor1 > 0 && valor2 > 0){
            soma = parseFloat(valor1) + parseFloat(valor2);
            document.getElementById("resultado").value = soma;
        }
        else{
            alert("O valor tem que ser maior que zero!")
        }
    }
    else{
        alert("O valor não pode estar vazio!")
    }
}