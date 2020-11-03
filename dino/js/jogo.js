//jogo.js
console.log('Inicio do Jogo!')

const dino = document.querySelector('.dino');
console.log(dino);
let dinoPosition = 0;
let estaPulando = false;

//Verificar se a tecla espaço foi pressionada
document.addEventListener('keydown',(event)=>{
    if (event.code === 'Space')
        if (!estaPulando) pular();
});

function pular(){
    let intervaloPulo = setInterval(()=>{
        estaPulando = true;
    if (dinoPosition >= 250){
        clearInterval(intervaloPulo);
        console.log('Topo');
        let intervaloQueda = setInterval(()=>{
            if (dinoPosition <= 0 ){
                
                console.log('Chão');
                estaPulando = false;
                clearInterval(intervaloQueda);

            } else {
                //Decrementar a posição do Dino 
                dinoPosition -=  20;
                //Atualizar a posição na tela
                dino.style.bottom = dinoPosition + 'px';
            }
        },20);

        } else {
            //Incrementar a posição do Dino
            dinoPosition += 20;
            // Atualizar a posição na tela
            dino.style.bottom = dinoPosition + 'px';
    }

},20);
}

// Criação de Cactos
const background = document.querySelector('.background');
function criarCacto() {
    let cactoPosition = 1000;
    const cacto = document.createElement('div');
    //Tempo aleatório entre 1s e 6s
    let tempoRandom = Math.random() * 6000 + 100;
    
    cacto.classList.add('cacto');
    cacto.style.left = 1000 + 'px';
    //Adicionar o cacto da tela
    background.appendChild(cacto);

    let intervaloEsquerda = setInterval(()=>{
        
        if (cactoPosition <= -60) {
            clearInterval(intervaloEsquerda);
            // Remover da tela
            background.removeChild(cacto);
        } else if(cactoPosition >0 &&
            cactoPosition <=60 &&
            dinoPosition <= 60) {
                clearTimeout(tempoCacto);
                document.body.innerHTML = 
                '<h1 class ="fim-de-jogo">Fim de  Jogo</h1>';

        }else {
            cactoPosition -= 10;
            cacto.style.left = cactoPosition + 'px';

        }
        

    },20);
    let tempoCacto = setTimeout(criarCacto, tempoRandom);
}
criarCacto();