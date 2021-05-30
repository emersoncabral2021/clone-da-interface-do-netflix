var filmes = [

    {img:"https://i.ytimg.com/vi/5K89tLp6kws/maxresdefault.jpg",
    nome:"O Guarda-Costas e o Assassino",
    descricao:"O guarda-costas mais importante do mundo consegue um novo cliente, um assassino que deve testemunhar no Tribunal Penal Internacional. Eles devem colocar suas diferenças de lado e trabalhar juntos para chegar ao julgamento a tempo.",
    duracao:"1h 58min "
    },
    {img:"https://uploads.jovemnerd.com.br/wp-content/uploads/2019/12/esquadrao-6-critica-netflix-a.jpg",
    nome:"Esquadrão 6",
    descricao:"Seis indivíduos de todo o mundo, cada um o melhor no que faz, foram escolhidos não apenas por sua habilidade, mas por um desejo único de apagar seu passado para mudar o futuro.",
    duracao:"2h 8min "
    },
    {img:"https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABfsyjdUpqdBZSnDBBBnas7H67irt7RmGIg8Wp6vgYmsSt8wsh1FwgtntOxFFnxakMu0eulQVxFQ-R7FVHKipMNxOuhh5.jpg?r=9f3",
    nome:"Spenser: Confidencial ",
    descricao:"Quando dois policiais de Boston são assassinados, o ex-policial Spenser se junta a seu companheiro de quarto prático, Hawk, para derrubar criminosos.",
    duracao:"1h 51min "
    },
    {img:"https://www.flixwatch.co/wp-content/uploads/80244470.jpg",
    nome:"Mile 22",
    descricao:"Uma pequena equipe de oficiais de inteligência americanos de elite, parte de uma unidade de comando tático ultrassecreta, tenta contrabandear um misterioso policial com informações confidenciais para fora da Indonésia.",
    duracao:" 1h 34min"
    },
    {img:"https://roveran.files.wordpress.com/2021/01/the-old-guard.jpg?w=816",
    nome:"A Velha Guarda",
    descricao:"Uma equipe secreta de mercenários imortais é repentinamente exposta e agora deve lutar para manter sua identidade em segredo assim que um novo membro inesperado é descoberto.",
    duracao:" 2h 5min"
    },
    {img:"https://stz1.imgix.net/Web_BR/contentId/21220/type/KEY/dimension/2560x1440/lang/pt-BR?auto=compress,format&w=510&fit=max",
    nome:"Power",
    descricao:"Quando uma pílula que dá a seus usuários superpoderes imprevisíveis por cinco minutos chega às ruas de Nova Orleans, um traficante adolescente e um policial local devem se unir a um ex-soldado para derrubar o grupo responsável por sua criação.",
    duracao:" 1h 53min "
    },
    {img:"https://i.ytimg.com/vi/2-dtrAvelyU/maxresdefault.jpg",
    nome:"Tyler Rake: Operação de Resgate",
    descricao:"Tyler Rake, um destemido mercenário do mercado negro, embarca na extração mais mortal de sua carreira ao se alistar para resgatar o filho sequestrado de um senhor do crime internacional preso.",
    duracao:"1h 56min "
    },
    {img:"http://1.bp.blogspot.com/-kY_IJgea9Qc/XNszWOXXUkI/AAAAAAAAGhY/wuI9QPscx3oH9rgFPthVZ35SLdYhox4KACK4BGAYYCw/s1600/opera%25C3%25A7%25C3%25A3o%2Bfronteira.png",
    nome:"Operação Fronteira ",
    descricao:"A lealdade é testada quando cinco amigos e ex-agentes das forças especiais se reúnem para derrubar um traficante sul-americano, desencadeando uma cadeia de consequências não intencionais.",
    duracao:" 2h 5min"
    },
    {img:"http://1.bp.blogspot.com/-ch9-wgJS_9M/WkR50i6MhrI/AAAAAAAAN-A/LQf7YDpkQu4Jvs0RHgK6GwAJySum7TepQCK4BGAYYCw/s1600/jumanji%2B-%2Bbem-vindo%2B%25C3%25A0%2Bselva.png",
    nome:" Jumanji:Bem-Vindos à Selva",
    descricao:"Quatro adolescentes são sugados para um videogame mágico, e a única maneira de escapar é trabalhando juntos para terminar o jogo",
    duracao:"1h 59min "
    },
    {img:"https://lh3.googleusercontent.com/-AcEaqCuGFXY/Vo115wgLBkI/AAAAAAAAHnM/yoPUuasUewI/s912-Ic42/John-Wick-Poster.jpg",
    nome:"John Wick",
    descricao:"Um ex-pistoleiro sai da aposentadoria para rastrear os gangsters que mataram seu cachorro e roubaram tudo dele.",
    duracao:" 1h 41min "
    },
]
var titulo = document.querySelector(".titulo")
var descricao = document.querySelector(".descricao")
var duracao = document.querySelector(".duracao")
var filmepri = document.getElementById('filmepri')
var rolagem = 1
function selecionarfilme(n){
    filmepri.style.background ="linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50)100%), url(" + filmes[n].img + ") "
    filmepri.style.backgroundSize = "cover"
    filmepri.style.display = "flex"
    titulo.innerHTML = filmes[n].nome
    descricao.innerHTML = "Sinopse: " + "<br>" + filmes[n].descricao
    duracao.innerHTML = "Duração: " + filmes[n].duracao
    

}
 
function scroll(element){
    document.querySelector(element).scrollIntoView({behavior: "smooth"})
}
document.querySelector('#roldireita').addEventListener("click", function (event){
    event.preventDefault()
    scroll("#fil"+ rolagem)
    rolagem++
    if(rolagem > 4){
        rolagem =  1
    }

})
document.querySelector('#rolesquerda').addEventListener("click", function (event){
    event.preventDefault()
    scroll("#fil"+ rolagem)
    rolagem--
    if(rolagem < 1){
        rolagem =  4
    }
    console.log(rolagem)

})