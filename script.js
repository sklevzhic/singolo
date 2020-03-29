
document.addEventListener('scroll', activeMenu)

function activeMenu(el) {
  let curHeight = window.scrollY;
  let sections = document.querySelectorAll('section');
  let menuItems = document.querySelectorAll('.nav__list li a');
  let heightSlider = document.querySelector('#slider').offsetHeight;
  let heightHeader = document.querySelector('.singolo__header').offsetHeight;

  if (curHeight >= heightHeader) {
    document.querySelector('.singolo__header > .container').style.padding = "7px 0px 10px 39px"
  }

  if (curHeight <= heightHeader) {
    document.querySelector('.singolo__header > .container').style.padding = "29px 0px 30px 39px"
  }

  if (curHeight >= heightHeader) {
    document.querySelector('.hamburgerrr').style.top = "11px";
  }

  if (curHeight <= heightHeader) {
    document.querySelector('.hamburgerrr').style.top = "27px";

  }

  sections.forEach((el) => {
    if (curHeight < heightSlider) {
      menuItems[0].classList.add('nav__link--active');
    }
    
    if (el.offsetTop <= curHeight + heightHeader && (el.offsetTop + el.offsetHeight) > curHeight) {
      menuItems.forEach((a) => {
        a.classList.remove('nav__link--active');
        if (el.getAttribute('id') === a.getAttribute('href').substring(1)) {
          a.classList.add('nav__link--active')
        }
      })
    }
  })
}

// Форма

let formSubmit = document.querySelector('.feedback__button');
let modal = document.querySelector('.modal');
let modalWrapper = document.querySelector('.modalwrapper')
let modalClose = document.querySelectorAll('.close');
let form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();


    
    let newArr = [];
    let formArr = form.querySelectorAll('.feedback__form-element').forEach(el => newArr.push(el.value));

        modal.style.display = "block"
        if (newArr[2] == '') {
            newArr[2] = 'Без темы'
        } 
        if (newArr[3] == '') {
            newArr[3] = 'Без темы'
        } 
    
        modalWrapper.innerHTML = `
        <p> <b>Письмо отправлено</b></p>  
        <p><b>Тема: </b>${newArr[1]}</p>  
        <p> <b>Описание: </b>${newArr[2]}</p  
        <p>${newArr[3]}</p>
        `

        document.querySelector('.feedback__form').reset();
})

modalClose.forEach(el => {
  el.addEventListener('click', function(e) {
    modal.style.display = "none"
})
})



// Выключение экрана

let btnLeftPhone = document.querySelector('.btn__phone--left');
let btnRightPhone = document.querySelector('.btn__phone--right');

btnLeftPhone.addEventListener('click', function() {
    document.querySelector('.lcd__phone--left').classList.toggle('show');
})
btnRightPhone.addEventListener('click', function() {
    document.querySelector('.lcd__phone--right').classList.toggle('show');
})



// slider
let leftBtn = document.querySelector('.slider__control--left');
let rightBtn = document.querySelector('.slider__control--right');
leftBtn.addEventListener('click', function() {
    plusSlides(-1)
})
rightBtn.addEventListener('click', function() {
    plusSlides(-1)
})


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slider__item");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "flex";
}


// Портфолио

let portfolio = document.querySelector('.portfolio__items');

let portfolioItems = document.querySelector('.portfolio__items');
let filterButtons = document.querySelector('.filter__items');
let btns = filterButtons.querySelectorAll('li a');

btns.forEach(el => {
  el.addEventListener('click', function(e) {
    let current = document.getElementsByClassName("filter__link--active");
    current[0].className = current[0].className.replace(" filter__link--active", "");
    this.className += " filter__link--active";
  })
})


portfolioItems.addEventListener('click', function(e) {
  let portfolioItemImg = document.querySelectorAll('.portfolio__items li a img');
  portfolioItemImg.forEach(el => {
    el.classList.remove('portfolio__img--border');
    e.target.classList.add('portfolio__img--border');
  })
})


filterButtons.addEventListener('click', mixArray);

function mixArray() {
  let portfolioItem = Array.from(document.querySelectorAll('.portfolio__item'));
  let newPortfolio = '';
  let arrElements = Array.from({length: portfolioItem.length}, (v, k) => k);
  let randowArrElements = arrElements.sort(function(){
    return Math.random() - 0.5;
  });
  randowArrElements.forEach((el,i) => {
    newPortfolio += portfolioItem[el].outerHTML;
  });
  portfolio.innerHTML = newPortfolio;
}


let hamburger = document.querySelector('.hamburgerrr');
let mobileMenu = document.querySelector('.nav__list');

hamburger.addEventListener('click', function() {
  mobileMenu.classList.toggle('menu-show');
  hamburger.classList.toggle('hamburgerrr-rotate')
})

document.querySelector('.nav__list').addEventListener('click', function(e) {
  // console.log(e.target);
  mobileMenu.classList.toggle('menu-show');
  hamburger.classList.toggle('hamburgerrr-rotate')
})

