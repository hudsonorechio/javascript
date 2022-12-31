function vamoscontar(){
var inicio = window.document.getElementById('hudson1')
var fim = window.document.getElementById('hudson2')
var passo = window.document.getElementById('hudson3')
var resultado = window.document.getElementById('resultado')



if ( i == 0 || f == 0 || p == 0){
    window.alert('[ERROR] Faltam dados!')
}else{
    resultado.innerHTML ="contando: "
    var i = Number(inicio.value) 
    var f = Number(fim.value)
    var p = Number(passo.value)
    if(i<f){
   for(var c=i; c<=f; c = c+p){
        resultado.innerHTML +=`${c}\u{1F449} `
    }
    resultado.innerHTML+=`\u{1F3C1}`
}else{
    for(var c=i; c>=f; c = c-p){
        resultado.innerHTML+=`${c}\u{1F449}`
    }
}
}
}