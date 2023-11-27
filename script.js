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




// blog Section


const softwareItems = [
  // 1
    
  // {
  //   title: "Suvidha's Triumphs: Student Success Stories",
  //   description: `John Doe - Pursuing Computer Science at Stanford University:

  //   Experience: Suvidha's pivotal role in making the dream of studying at Stanford a reality.
  //   Key Support: Assistance in the application process, visa journey, and seamless transition to the U.S.
  //   Maria Garcia - MBA Graduate from INSEAD:
    
  //   Experience: Suvidha's instrumental expertise in pursuing an MBA at INSEAD.
  //   Key Support: Identifying best-fit programs, assisting with scholarship applications, and invaluable pre-departure assistance.
  //   Raj Patel - Environmental Science Researcher at University of Melbourne:
    
  //   Experience: Suvidha's role in a smooth transition to Australia for environmental science studies.
  //   Key Support: Guidance on visa processes, finding accommodation, and connecting with the local community.
  //   Aisha Khan - Arts and Design Student at Central Saint Martins:
    
  //   Experience: Suvidha's personalized approach in the journey to Central Saint Martins.
  //   Key Support: Portfolio preparation, accommodation assistance, and unwavering support in thriving in London's art scene.
  //   Carlos Rodriguez - Medical Student at Johns Hopkins University:
    
  //   Experience: Suvidha's meticulous assistance in applying to medical schools in the U.S.
  //   Key Support: Beyond academics - assistance with accommodation, healthcare guidance, and cultural integration.
  //   Elena Sokolova - Aerospace Engineering Student at TU Delft:
    
  //   Experience: Suvidha's crucial role in realizing the dream of studying aerospace engineering at TU Delft.
  //   Key Support: Guidance on university selection, visa processes, and settling in the Netherlands.`,
  //   imageUrl: "https://upgradcampus.com/wp-content/uploads/2023/05/Success-Speaks.jpg",
  // },

  {
    title: "Suvidha's Cultural Navigator: A Guide to Cultural Preparedness",
    sector: "Sector - Business",
    description: `Cultural Intelligence Workshops:

    What: Interactive sessions on cultural nuances.
    Why: Instills cultural intelligence, covering communication styles and social norms.
    Cross-Cultural Communication Training:
    
    What: Focus on refining communication skills in diverse settings.
    Why: Prepares students for effective interpersonal interactions in various cultural environments.
    Country-Specific Cultural Insights:
    
    What: Tailored content providing insights into the cultural specifics of chosen destinations.
    Why: Enhances understanding of social customs, practices, and cultural nuances.
    Cultural Immersion Activities:
    
    What: Events, outings, and language exchanges for immersion in the local community.
    Why: Fosters deeper connections with the culture through firsthand experiences.
    Diversity and Inclusion Training:
    
    What: Discussions and activities cultivating an inclusive mindset.
    Why: Promotes understanding, tolerance, and the creation of an environment that celebrates differences.
    Cultural Sensitivity Seminars:
    
    What: Sessions on navigating cultural challenges with sensitivity.
    Why: Equips students with strategies for effective cross-cultural interactions.
    Peer Mentorship Program:
    
    What: Pairing new students with experienced mentors for cultural insights.
    Why: Eases the transition for incoming students through practical advice and support.
    Language Support Services:
    
    What: Resources, tutoring, and language exchange opportunities.
    Why: Enhances language proficiency for effective communication in the new environment.
    Cultural Resource Hub:
    
    What: Online hub offering articles, videos, and guides for continuous cultural awareness.
    Why: Serves as a reference point for students throughout their study abroad journey.
    Post-Arrival Check-Ins:
    
    What: Regular discussions on cultural experiences, challenges, and successes.
    Why: Personalized support for ongoing assistance in navigating cultural adaptation.`,
    price: "List Price: INr 27,000 + GST",
    imageUrl: "https://www.careeraddict.com/uploads/article/60920/how-to-develop-cultural-awareness-in-the-workplace.png",
  },

  {
    title: "Suvidha's Powerhouse: Exclusive University Partnerships",
    description:
    `Suvidha Overseas proudly boasts exclusive partnerships with world-renowned universities, creating an exceptional network for students. Here's a glimpse of what sets Suvidha's collaborations apart:

    Strategic Collaborations:
    
    Suvidha aligns with universities globally recognized for academic excellence and research contributions.
    Tailored Academic Programs:
    
    Access to specially crafted academic programs meeting diverse student aspirations and contemporary educational needs.
    Personalized Guidance:
    
    Beyond academics, Suvidha provides personalized support in the application process, course selection, and university life.
    Research and Innovation Opportunities:
    
    Facilitating access to cutting-edge research initiatives, state-of-the-art facilities, and collaborations with renowned faculty.
    Internship and Industry Connections:
    
    Partnerships include provisions for internships and industry connections, offering practical insights and valuable professional ties.
    Cultural and Exchange Programs:
    
    Diverse cultural and exchange programs enrich students' global perspectives, fostering a holistic educational experience.
    Scholarship Opportunities:
    
    Exclusive partnerships often bring additional benefits, including scholarship opportunities for students' financial support.
    Alumni Network Access:
    
    Upon graduation, students join a global alumni network associated with Suvidha's partner universities, providing ongoing support and valuable connections.
    Continuous Collaboration:
    
    Suvidha maintains dynamic collaboration, ensuring partnerships evolve to meet changing student needs and academic landscapes.`,
    imageUrl: "https://sloanreview.mit.edu/wp-content/uploads/2017/11/MAG-Murray-University-Partnership-1200-382x255.jpg",
  },

  {
    title: "Suvidha's Financial Guide for Study Abroad Success",
    description:
    `Cost Estimation:

    Suvidha helps estimate total expenses for a realistic budget covering tuition, accommodation, living, travel, and more.
    Scholarship Exploration:
    
    We support students in identifying and applying for scholarships to ease financial burdens.
    University Fee Structures:
    
    Gain insights into partner universities' fee structures for clear understanding of costs.
    Budgeting Assistance:
    
    Suvidha assists in crafting a practical budget, managing living expenses, and unforeseen costs.
    Loan Application Support:
    
    For those considering loans, Suvidha guides through the application process and repayment terms.
    Part-Time Work Opportunities:
    
    Information on part-time work opportunities and balancing work commitments with academics.
    Currency Exchange Planning:
    
    Suvidha advises on favorable times for currency exchange, minimizing impact of rate fluctuations.
    Emergency Fund Planning:
    
    Emphasis on building and maintaining an emergency fund for unexpected expenses.
    Health Insurance Guidance:
    
    Suvidha ensures a comprehensive understanding of health insurance options.
    Financial Literacy Workshops:
    
    Suvidha conducts workshops covering financial management and investment options.
    Continuous Support:
    
    Suvidha remains a consistent source of support for any financial concerns during your study abroad journey.`,

    imageUrl: "https://elan-loans-net-prod.s3.ap-south-1.amazonaws.com/Areas/CMS/UploadedFiles/Graphic/Images-Card/Blog/09ab9222-0b2c-4cbc-a169-81e65681cbe0.png",
  },
    
 
  ];

  function createCard(item) {
    const card = document.createElement("div");
    card.className = "col-md-4 card-container"; // Added a common class
  
    // Initially show a truncated description
    const truncatedDescription = item.description.substring(0, 110); // Adjust the character limit as needed
  
    card.innerHTML = `
          <div class="card mb-4 custom-card-height">
              <img src="${item.imageUrl}" class="card-img-top sizee_img" alt="Blog Image">
              <div class="card-body">
                  <h3 class="card-title">${item.title}</h3>
                 
                  <p class="card-text description">${truncatedDescription}...</p>
                  
                  <a href="#" class="btn btn-primary read-more-link" style="background-color: orangered; color: white; border: 1px solid orangered; outline: none;">Read More</a>
                  <a href="#" class="btn btn-secondary read-less-link " style="display: none;">Read Less</a>
                  <p class="full-description" style="display: none;">${item.description}</p>
              </div>
          </div>
      `;
  
    // Use event delegation to handle clicks on "Read More" and "Read Less"
    card.addEventListener("click", function (e) {
      const target = e.target;
      if (target.classList.contains("read-more-link")) {
        e.preventDefault();
        const description = card.querySelector(".description");
        const fullDescription = card.querySelector(".full-description");
        const readMoreLink = card.querySelector(".read-more-link");
        const readLessLink = card.querySelector(".read-less-link");
        const image = card.querySelectorAll(".card-img-top");

        // image.style.height="500px";
  
        description.style.display = "none";
        fullDescription.style.display = "block";
        readMoreLink.style.display = "none";
        // readMoreLink.style.backgroundColor= "orangered"
        readLessLink.style.display = "inline";
  
        // Collapse all other cards
        const allCards = document.querySelectorAll(".card-container");
        allCards.forEach((otherCard) => {
          if (otherCard !== card) {
            const otherDescription = otherCard.querySelector(".description");
            const otherFullDescription =
              otherCard.querySelector(".full-description");
            const otherReadMoreLink = otherCard.querySelector(".read-more-link");
            const otherReadLessLink = otherCard.querySelector(".read-less-link");
  
            otherDescription.style.display = "block";
            otherFullDescription.style.display = "none";
            otherReadMoreLink.style.display = "inline";
            otherReadLessLink.style.display = "none";
          }
        });
      } else if (target.classList.contains("read-less-link")) {
        e.preventDefault();
        const description = card.querySelector(".description");
        const fullDescription = card.querySelector(".full-description");
        const readMoreLink = card.querySelector(".read-more-link");
        const readLessLink = card.querySelector(".read-less-link");
  
        description.style.display = "block";
        fullDescription.style.display = "none";
        readMoreLink.style.display = "inline";
        readLessLink.style.display = "none";
      }
    });
  
    return card;
  }
  
  // Add cards to the software-list
  const softwareList = document.getElementById("software-list");
  softwareItems.forEach((item) => {
    const card = createCard(item);
    softwareList.appendChild(card);
  });
  