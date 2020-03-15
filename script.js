
let menu = document.querySelector('.nav__list');

menu.addEventListener('click', function(e) {
    let menuItems = menu.querySelectorAll('li a')
    menuItems.forEach(el => {
        el.classList.remove('nav__link--active');
        e.target.classList.add('nav__link--active');
        
    });
})


// let headerPadding = document.querySelector('.singolo__header > .container')
// console.log(headerPadding)
// window.onscroll = function() {myFunction()};

// function myFunction() {
//   if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
//     headerPadding.style.padding = "0 15px"
//   } else if (document.body.scrollTop < 800 || document.documentElement.scrollTop < 800)  {
//     headerPadding.style.padding = "0 30px"
//   }
// }

let formSubmit = document.querySelector('.feedback__button');
let modal = document.querySelector('.modal');
let modalWrapper = document.querySelector('.modalwrapper')
let modalClose = document.querySelector('.close');


formSubmit.addEventListener('click', function(e) {
    e.preventDefault();


    let form = document.querySelector('form');
    let newArr = [];
    let formArr = form.querySelectorAll('.feedback__form-element').forEach(el => newArr.push(el.value));

        modal.style.display = "block"
        if (newArr[2] !== 'Singolo') {
            newArr[2] = 'Без темы'
        } 
        if (newArr[3] !== 'Portfolio project') {
            newArr[3] = 'Без темы'
        } 
    
        modalWrapper.innerHTML = `
        <p> <b>Письмо отправлено</b></p>  
        <p><b>Тема: </b>${newArr[1]}</p>  
        <p> <b>Описание: </b>${newArr[2]}</p  
        <p>${newArr[3]}</p>`
})

modalClose.addEventListener('click', function(e) {
    modal.style.display = "none"
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


// portfolioactive




// portfolio
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("portfolio__item");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.querySelector('.filter__items');
var btns = btnContainer.querySelectorAll('li a');
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(e){
      e.preventDefault();
    var current = document.getElementsByClassName("filter__link--active");
    current[0].className = current[0].className.replace(" filter__link--active", "");
    this.className += " filter__link--active";
  });
}


let portfolio = document.querySelector('.portfolio__items');

portfolio.addEventListener('click', function(e) {
    let portfolioItems = portfolio.querySelectorAll('li a img')
    portfolioItems.forEach(el => {
        el.classList.remove('portfolio__img--border');
        e.target.classList.add('portfolio__img--border');
        
    });
})

