function insert (num){
    var numero = document.getElementById('resultado').innerHTML
        document.getElementById('resultado').innerHTML= numero + num;
     
}
function back (){
    document.getElementById('resultado').innerHTML = (0, resultado.length -1);
}
function clean (){
    document.getElementById('resultado').innerHTML = "";

}

function calcular(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML= eval(resultado);
}