const header = document.querySelector(".header");
const burger = document.querySelector(".burger");
const headerNav = document.querySelector(".header nav");

burger.addEventListener("click", () => {
  headerNav.classList.toggle("active");
})

if(window.innerWidth < 950) {
  burger.addEventListener("click", () => {
    header.classList.toggle("mobile-header");
    if (header.classList.contains("mobile-header")) {
        document.body.classList.add("no-scroll");
    } else {
        document.body.classList.remove("no-scroll");
    }
})
}

document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));

            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
});


// ---------------------------faq-----------------------------
let coll = document.getElementsByClassName("collapsible");


for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let content = this.nextElementSibling;

    if(this.classList.contains('active')) {
        content.style.maxHeight = content.scrollHeight + "px";
    } else{
        content.style.maxHeight = null;
    }
  });
}

// ---------------------------------news-----------------------------
const swiper = new Swiper('.news-swiper.swiper', {
    loop: true,
  
    
    breakpoints: {
      0: {
        slidesPerView: 1.1,
        spaceBetween: 10
      },
      480: {
        slidesPerView: 1.5,
        spaceBetween: 10
      },
      650: {
        slidesPerView: 2.1,
        spaceBetween: 10
      },
      768: {
        slidesPerView: 2.5,
        spaceBetween: 20
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 24,
    }
  }});

// --------------------------------------letters----------------------------
const letterSwiper = new Swiper('.letters .swiper', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      0: {
        loop : true,
        slidesPerView: 1.1,
        spaceBetween: 10
      },
      600: {
        loop : false,
        slidesPerView: 2, 
        spaceBetween: 10
      }, 
      768: {
        loop : false,
        slidesPerView: 3, 
        spaceBetween: 20
      },  
      1024: {
        slidesPerView: 4, 
        spaceBetween: 24,
      },
      1440: {
        loop : false,
        slidesPerView: 4, 
        spaceBetween: 24,
      }
  }
})


// ----------------------------popup----------------------------

const popup = document.querySelector('.popup')
const popupShowBtns = document.querySelectorAll('.show-popup')
const closeFormBtn = document.querySelector('.close-popup')

popupShowBtns.forEach(item => {
    item.addEventListener('click', () => {
        popup.classList.add('active')
        document.body.classList.add('no-scroll')
    })
})

closeFormBtn.addEventListener('click', () => {
    popup.classList.remove('active')
    document.body.classList.remove('no-scroll')
})

document.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.classList.remove('active')
        document.body.classList.remove('no-scroll')
    }
});