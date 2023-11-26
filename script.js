 // Top university
var multipleCardCarousel = document.querySelector("#carouselExampleControlss");

if (window.matchMedia("(min-width: 576px)").matches) {
  var carousel = new bootstrap.Carousel(multipleCardCarousel, {
    interval: false,
  });
  var carouselWidth = $(".carousel-innerPart")[0].scrollWidth;
  var cardWidth = $(".carousel-item-in").width();
  var scrollPosition = 0;
  $("#carouselExampleControlss .coro-next").on("click", function () {
    if (scrollPosition < carouselWidth - cardWidth * 3) {
      scrollPosition += cardWidth;
      $("#carouselExampleControlss .carousel-innerPart").animate(
        { scrollLeft: scrollPosition },
        600
      );
    }
  });
  $("#carouselExampleControlss .coro-prev").on("click", function () {
    if (scrollPosition > 0) {
      scrollPosition -= cardWidth;
      $("#carouselExampleControlss .carousel-innerPart").animate(
        { scrollLeft: scrollPosition },
        600
      );
    }
  });
} else {
  $(multipleCardCarousel).addClass("slide-edge");
}


var demoButtons;

function start () {
  demoButtons = document.querySelectorAll('.js-modify');
  for (var i = 0; i < demoButtons.length; i++) {
    demoButtons[i].addEventListener ('click', toggleEffect);
  }
  var saveButtons = document.querySelectorAll ('.js-save');
  for (var i = 0; i < saveButtons.length; i++) {
    saveButtons[i].addEventListener ('click', toggleActive);
  }
  
}

function toggleEffect () {
  var target = document.querySelector (this.dataset.target);
      target.dataset.effect = this.dataset.effect;
  
  for (var i= 0; i < demoButtons.length; i++) {
    demoButtons[i].classList.remove ('active');
  }
  
  toggleActive.call (this);
}

function toggleActive () {
  this.classList.toggle ('active');
}
window.addEventListener ('load', start);





// Accomplishment section

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    grabCursor: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        // When window width is >= 992px (large screens)
        992: {
          slidesPerView: 3,
          slidesPerGroup: 3,
        },
        // When window width is >= 768px and < 992px (medium screens)
        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
        // When window width is < 768px (small screens)
        0: {
          slidesPerView: 1,
          slidesPerGroup: 1,
        }
      }
     
    
  });


 
    // JavaScript to handle form submission
    document.getElementById('messageForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission


    const submitButton = document.querySelector('.btn-primary');
    const submitText = document.querySelector('.submit-text');
    const loadingIcon = document.querySelector('.loading-icon');

    // Show the loading icon and hide the submit text
    submitText.classList.add('d-none');
    loadingIcon.classList.remove('d-none');


        // Collect form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            message: document.getElementById('message').value
        };
        if (!formData.phone) {
          formData.phone = null 
        }
        // Post data to the endpoint using fetch API
        fetch('https://sheetdb.io/api/v1/14wp4y5xmd7be', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                data: [formData]
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log('Form data sent:', data);
            submitText.classList.remove('d-none');
            loadingIcon.classList.add('d-none');

            // Handle success or any other operations after sending the data
            // For example, close the modal or show a success message
            document.getElementById('name').value = ""
            document.getElementById('email').value = ""
            document.getElementById('phone').value = ""
            document.getElementById('message').value = ""
            alert('Your Message has been submitted successfully.');

        })
        .catch(error => {
            console.error('Error:', error);
             // Hide the loading icon and show the submit text again in case of an error
             submitText.classList.remove('d-none');
             loadingIcon.classList.add('d-none');

            // Handle errors if the data couldn't be sent
        });
    });

    // script for Enquiry form 

    document.getElementById('enquiryForm').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the default form submission

      const submitText = document.querySelector('.submit-text');
      const loadingIcon = document.querySelector('.loading-icon');
  
      // Show the loading icon and hide the submit text
      submitText.classList.add('d-none');
      loadingIcon.classList.remove('d-none');
    
      // data form 
      EnquiryFormData = {
        fullName : document.getElementById('fullName').value,
        placeOfBirth : document.getElementById('placeOfBirth').value,
        fullAddress:  document.getElementById('fullAddress').value,
        nationality:  document.getElementById('nationality').value,
        cityCountry:  document.getElementById('cityCountry').value,
        gender : document.getElementById('gender').value,
        email : document.getElementById('email').value,
        phoneNumber : document.getElementById('phoneNumber').value,
      }
    

      fetch('	https://sheetdb.io/api/v1/y9mr58hmb0fmp', {
        method : 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        data: [EnquiryFormData]
    })
      })
      .then(response=> response.json())
      .then(data =>{
        submitText.classList.remove('d-none');
        loadingIcon.classList.add('d-none');
        console.log('Form data sent:', data)

        document.getElementById('fullName').value  = ""
        document.getElementById('placeOfBirth').value = ""
        document.getElementById('fullAddress').value = ""

        document.getElementById('nationality').value = ""

        document.getElementById('cityCountry').value = ""

        document.getElementById('gender').value = ""
            
        document.getElementById('email').value = ""
              
        document.getElementById('phoneNumber').value = ""
        alert('Your Message has been submitted successfully.');
      
      }).catch(error => {
        console.error('Error:', error);
         // Hide the loading icon and show the submit text again in case of an error
         submitText.classList.remove('d-none');
         loadingIcon.classList.add('d-none');

        // Handle errors if the data couldn't be sent
    });
  
    })