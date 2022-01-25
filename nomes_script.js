var posicao = 0;
let nomesParaSorteio = [];
let input = document.getElementById("nomes");
let btnSortear = document.getElementById("sortear");
let btnAdd = document.getElementById("add");
let lista = document.getElementById("lista");
let janelaSorteio = document.getElementById('janelaSorteio');
let btnNovoSorteio = document.getElementById("novoSorteio");
let btnFechar = document.getElementById('fechar');

input.addEventListener('keypress',(e)=>{
    if(e.keyCode == 13){
        addNomes()
    }
});
btnAdd.addEventListener('click',addNomes);
btnSortear.addEventListener('click',abrirJanela);
btnNovoSorteio.addEventListener('click', sortear);
btnFechar.addEventListener('click', janelaSorteios);

function addNomes(){
    
    if(input.value > "0"){
        nomesParaSorteio.push(input.value);
        criarLi()
        console.log(nomesParaSorteio);
        input.value= ""
    }else{alert('Campo vazio!');}
}

function criarLi(){
    let li = document.createElement('li');
    li.classList.add("ListaLi")
    li.innerText = input.value
    

    let btn = document.createElement('button');
    btn.innerHTML = "x";
    btn.classList.add("btnLi")
    btn.setAttribute("onclick",`excluirTarefa('${input.value}',this)`)
    posicao ++;
    
    li.appendChild(btn);
    let lista = document.getElementById("lista")
    lista.appendChild(li)
}

function sortear (){
    
    let pessoas = nomesParaSorteio.length
    let pessoaSorteada = Math.floor(Math.random()* pessoas);

    let sorteado = document.getElementById("display");
    sorteado.innerHTML = "..."
    setTimeout(()=>{
        sorteado.innerText = nomesParaSorteio[pessoaSorteada]
    }, 300)
    
}
  

function excluirTarefa(pos, posItem){

        nomesParaSorteio = nomesParaSorteio.filter(task => task != pos);

    let x = posItem.parentNode;
    console.log("item a ser excluído");
    console.log(x)
    
    x.innerHTML = ""
    x.remove(); 
    console.log(nomesParaSorteio);  


}

function  janelaSorteios(){
    
    janelaSorteio.classList.toggle('abrir');
    let fundo = document.getElementById('fundo');
    fundo.classList.toggle('abrir');
 }

function abrirJanela(){
    
    if(nomesParaSorteio.length > '0'){
    janelaSorteios()
    sortear()
    }else{alert("Lista vazia!")}
}

