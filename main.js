//criando referencia ao form e aos elementos de respostas
const formulario = document.querySelector("form")
const respMedia = document.querySelector("h3")
const respNome = document.querySelector("h4")

//criando um ouvinte(evento)
formulario.addEventListener("submit", (e) =>{
    e.preventDefault()//evita envio do form
    const nomeAluno = formulario.inNome.value;
    const nota01 = Number(formulario.inNota1.value);
    const nota02 = Number(formulario.inNota2.value);
    const media = (nota01 + nota02) / 2;

    if(media >= 7){
        respNome.innerText = `Aluno(a) ${nomeAluno} voce está APROVADO!!`;
        respNome.style.color = "blue";
        }else{
            respNome.innerText = `Aluno(a) ${nomeAluno} voce está REPROVADO!!`;
            respNome.style.color = "red";
        }

    respMedia.innerText = `Sua media é ${media.toFixed(2)}`
    nomeAluno.innerTex = `${nomeAluno}` 
})
