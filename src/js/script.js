//ARRAY DE IMAGENS
let imagens=["src/assets/imagem-GTA1.jfif",
             "src/assets/imagem-GTA2.jfif",
             "src/assets/imagem-GTA3.jfif"];

//POSIÇÃO QUE VAI INICIAR AS IMAGENS
let index=0;
//TEMPO PARA TROCAR AS IMAGENS
let tempo=3000; //3 SEGUNDOS

//FUNÇÃO DO SLIDESHOW
function SlideShow(){
    //DOM PEGA O ID E PASSA O CAMINHO DAS IMAGENS
    document.getElementById("imgBanner").src=imagens[index];
    //INCREMENTO DAS IMAGENS
    index++;
    //ESTRUTURA CONDICIONAL IF
    if(index == imagens.length){
        //INICIA NA POSIÇÃO 0(OU SEJA SEMPRE VOLTA PARA O 0)
        index=0;
    }
    //MÉTODO SETIME PARA EXECUTAR A FUNÇÃO(CALLBACK ) E
    //CHAMAR O TEMPO
    setTimeout("SlideShow()",tempo)
}
SlideShow();



const menuIcone = document.getElementById("menu-icone");
const navMenu = document.getElementById("nav-menu");

menuIcone.addEventListener("click",()=>{
    navMenu.classList.toggle("active")
    menuIcone.classList.toggle("open")
})