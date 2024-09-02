const title = document.querySelector('#title')
const box = document.createElement('div')
const body = document.querySelector('body')
const h1 = document.createElement('h1')

h1.textContent = 'hello'
box.append(h1)

body.append(box)

// title.textContent = 'hello'

box.classList.add('wrapper')
// box.textContent = 'hello'


box.setAttribute('id', 'bebra')
// box.classList.remove('wrapper')

box.classList.toggle('wrapper')

box.removeAttribute('class')


const card = document.querySelector('.card')
const btn = document.querySelector('.card button ')
const img = document.querySelector('.card img')
const name = document.querySelector('.card h1')
const changeBtn = document.querySelector('#change')

const originalSrc = img.src

btn.onclick = () => {
    card.classList.toggle('red')
    if (img.src == originalSrc) {
        name.innerText = 'dedra'
    }
    else {
        name.innerText = originalText
    }





    img.src = 'https://dedra.pl/rus_pl_%D0%90%D0%BA%D0%BA%D1%83%D0%BC%D1%83%D0%BB%D1%8F%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F-%D1%83%D0%B3%D0%BB%D0%BE%D0%B2%D0%B0%D1%8F-%D1%88%D0%BB%D0%B8%D1%84%D0%BE%D0%B2%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F-%D0%BC%D0%B0%D1%88%D0%B8%D0%BD%D0%B0-18-%D0%92-125-%D0%BC%D0%BC-9500-%D0%BE%D0%B1-%D0%BC%D0%B8%D0%BD-DEDRA-SAS-ALL-DED7050-22998_2.webp'
}

// changeBtn.onclick = () => {
//     img.src = 'https://pikuco.ru/upload/test_stable/b79/b797338237be726968cd466399665dc1.webp'
// }

const deleteBtn = document.querySelector('#del')

deleteBtn.onclick = () => {
    card.classList.toggle('none')
}