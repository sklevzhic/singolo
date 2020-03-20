
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
var slider = document.getElementById('slider'),
    sliderItems = document.getElementById('slides'),
    prev = document.querySelector('.slider__control--left'),
    next = document.querySelector('.slider__control--right');

function slide(wrapper, items, prev, next) {
  var posX1 = 0,
      posX2 = 0,
      posInitial,
      posFinal,
      threshold = 100,
      slides = items.getElementsByClassName('slide'),
      slidesLength = slides.length,
      slideSize = items.getElementsByClassName('slide')[0].offsetWidth,
      firstSlide = slides[0],
      lastSlide = slides[slidesLength - 1],
      cloneFirst = firstSlide.cloneNode(true),
      cloneLast = lastSlide.cloneNode(true),
      index = 0,
      allowShift = true;
  
  // Clone first and last slide
  items.appendChild(cloneFirst);
  items.insertBefore(cloneLast, firstSlide);
  wrapper.classList.add('loaded');
  
  // Mouse events
  items.onmousedown = dragStart;
  
  // Touch events
  items.addEventListener('touchstart', dragStart);
  items.addEventListener('touchend', dragEnd);
  items.addEventListener('touchmove', dragAction);
  
  // Click events
  prev.addEventListener('click', function () { shiftSlide(-1) });
  next.addEventListener('click', function () { shiftSlide(1) });
  
  // Transition events
  items.addEventListener('transitionend', checkIndex);
  
  function dragStart (e) {
    e = e || window.event;
    e.preventDefault();
    posInitial = items.offsetLeft;
    
    if (e.type == 'touchstart') {
      posX1 = e.touches[0].clientX;
    } else {
      posX1 = e.clientX;
      document.onmouseup = dragEnd;
      document.onmousemove = dragAction;
    }
  }

  function dragAction (e) {
    e = e || window.event;
    
    if (e.type == 'touchmove') {
      posX2 = posX1 - e.touches[0].clientX;
      posX1 = e.touches[0].clientX;
    } else {
      posX2 = posX1 - e.clientX;
      posX1 = e.clientX;
    }
    items.style.left = (items.offsetLeft - posX2) + "px";
  }
  
  function dragEnd (e) {
    posFinal = items.offsetLeft;
    if (posFinal - posInitial < -threshold) {
      shiftSlide(1, 'drag');
    } else if (posFinal - posInitial > threshold) {
      shiftSlide(-1, 'drag');
    } else {
      items.style.left = (posInitial) + "px";
    }

    document.onmouseup = null;
    document.onmousemove = null;
  }
  
  function shiftSlide(dir, action) {
    items.classList.add('shifting');
    
    if (allowShift) {
      if (!action) { posInitial = items.offsetLeft; }

      if (dir == 1) {
        items.style.left = (posInitial - slideSize) + "px";
        index++;      
      } else if (dir == -1) {
        items.style.left = (posInitial + slideSize) + "px";
        index--;      
      }
    };
    
    allowShift = false;
  }
    
  function checkIndex (){
    items.classList.remove('shifting');

    if (index == -1) {
      items.style.left = -(slidesLength * slideSize) + "px";
      index = slidesLength - 1;
    }

    if (index == slidesLength) {
      items.style.left = -(1 * slideSize) + "px";
      index = 0;
    }
    
    allowShift = true;
  }
}

slide(slider, sliderItems, prev, next);


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

