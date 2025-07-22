const botao = document.querySelector('#switch');

botao.addEventListener('click', tema);

function tema(){
    
     const html = document.querySelector('html');
     const img = document.querySelector('#perfil img');

    html.classList.toggle('dark'); // verifica se a classe dark existe no html, se tiver ele remove, se não, adiciona

    /* if(html.classList.contains('dark')){
        html.classList.remove('dark');
    }else{
        html.classList.add('dark')
    } */

    if(html.classList.contains('dark')){
        img.setAttribute('src', 'img/dark-cat.jpg');
        img.setAttribute('alt', 'gatinho com fundo escuro próximo da camera');
    } else{
        img.setAttribute('src', 'img/light-cat.jpg');
        img.setAttribute('alt', 'gatinho com fundo claro próximo da camera');
    }
}
