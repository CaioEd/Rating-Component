const stars = {
    star1: document.querySelector('#star1'),
    star2: document.querySelector('#star2'),
    star3: document.querySelector('#star3'),
    star4: document.querySelector('#star4'),
    star5: document.querySelector('#star5')
}

const functionsRating = {
    rating1: () =>{
        stars.star1.src = 'images/estrela-colorida.png' 

        stars.star2.src = 'images/estrela.png' 
        stars.star3.src = 'images/estrela.png'
        stars.star4.src = 'images/estrela.png' 
        stars.star5.src = 'images/estrela.png'

        removeStars.innerHTML = `<p id="removeStars">Remover</p>`
    },

    rating2: () =>{
        stars.star1.src = 'images/estrela-colorida.png' 
        stars.star2.src = 'images/estrela-colorida.png' 

        stars.star3.src = 'images/estrela.png'
        stars.star4.src = 'images/estrela.png' 
        stars.star5.src = 'images/estrela.png'  

        removeStars.innerHTML = `<p id="removeStars">Remover</p>`
    },

    rating3: () =>{
        stars.star1.src = 'images/estrela-colorida.png' 
        stars.star2.src = 'images/estrela-colorida.png' 
        stars.star3.src = 'images/estrela-colorida.png'

        stars.star4.src = 'images/estrela.png' 
        stars.star5.src = 'images/estrela.png'  

        removeStars.innerHTML = `<p id="removeStars">Remover</p>`
    },

    rating4: () =>{
        stars.star1.src = 'images/estrela-colorida.png' 
        stars.star2.src = 'images/estrela-colorida.png' 
        stars.star3.src = 'images/estrela-colorida.png'
        stars.star4.src = 'images/estrela-colorida.png' 

        stars.star5.src = 'images/estrela.png'         

        removeStars.innerHTML = `<p id="removeStars">Remover</p>`
    },

    rating5: () =>{
        stars.star1.src = 'images/estrela-colorida.png' 
        stars.star2.src = 'images/estrela-colorida.png' 
        stars.star3.src = 'images/estrela-colorida.png'
        stars.star4.src = 'images/estrela-colorida.png' 
        stars.star5.src = 'images/estrela-colorida.png' 

        removeStars.innerHTML = `<p id="removeStars">Remover</p>`
    },
}

const events = {
    event1: stars.star1.addEventListener('click', functionsRating.rating1),

    event2: stars.star2.addEventListener('click', functionsRating.rating2),

    event3: stars.star3.addEventListener('click', functionsRating.rating3),

    event4: stars.star4.addEventListener('click', functionsRating.rating4),

    event5: stars.star5.addEventListener('click', functionsRating.rating5)

}

// MUDAR CONTEÚDO

const ratingBox = document.querySelector('#ratingBox')
const buttonSend = document.querySelector('#buttonSend')

const changeHTML = () =>{
    
        ratingBox.innerHTML = `
        <h1>Obrigado</h1>

        <p>Agradecemos por você usar um pouco do seu tempo para nos avaliar. Se precisar de mais suporte, fique a vontade para entrar em contado.</p>
        `

        ratingBox.style.height = '15rem'

}

buttonSend.addEventListener('click', changeHTML)

// REMOVER ESTRELAS

const removeStars = document.querySelector('#removeStars')

const remove = () =>{
    stars.star1.src = 'images/estrela.png' 
    stars.star2.src = 'images/estrela.png' 
    stars.star3.src = 'images/estrela.png'
    stars.star4.src = 'images/estrela.png' 
    stars.star5.src = 'images/estrela.png' 

    removeStars.innerHTML = `<p id="removeStars"></p>`
}

removeStars.addEventListener('click', remove)