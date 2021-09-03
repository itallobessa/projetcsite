

var hamburguer = document.querySelector(".hamburguer");

hamburguer.addEventListener("click",function(){
     document.querySelector(".container").classList.toggle("show-menu");
});


document.querySelector("#qtde").addEventListener("change", atualizarPreco)
document.querySelector("#js").addEventListener("change", atualizarPreco)
document.querySelector("#layout-sim").addEventListener("change", atualizarPreco)
document.querySelector("#layout-nao").addEventListener("change", atualizarPreco)
document.querySelector("#prazo").addEventListener("change", function () {
     const prazo = document.querySelector("#prazo").value
     document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} semanas`
     atualizarPreco()
})     

function atualizarPreco(){
     const qtde = document.querySelector("#qtde").value
     const temJS = document.querySelector("#js").checked
     const incluirLayout = document.querySelector("#layout-sim").checked
     const prazo = document.querySelector("#prazo").value
     
     
     
     let preco = qtde * 100;
     if (temJS) preco *= 1.1
     if(incluirLayout) preco += 500
     let taxadeUrgencia = 1 - prazo*0.1; 
     preco *= 1 + taxadeUrgencia
    
     document.querySelector("#preco").innerHTML =  `R$ ${preco.toFixed(2)}`
}