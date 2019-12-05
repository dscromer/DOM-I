const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let nav = document.querySelectorAll('nav a');
nav.forEach((nav, i) => {
  nav.textContent = siteContent['nav']['nav-item-'+i]
})

let title = document.querySelector('.cta-text h1');
title.textContent = siteContent['cta']['h1'];

let circleImg = document.getElementById('cta-img');
circleImg.setAttribute('src', siteContent['cta']['img-src']);

const myButton = document.querySelector(".cta-text button");
myButton.textContent = siteContent["cta"]["button"];

const ContentTitles = document.querySelectorAll('.text-content h4');
ContentTitles[0].textContent = siteContent['main-content']['features-h4'];
ContentTitles[1].textContent = siteContent['main-content']['about-h4'];
ContentTitles[2].textContent = siteContent['main-content']['services-h4'];
ContentTitles[3].textContent = siteContent['main-content']['product-h4'];
ContentTitles[4].textContent = siteContent['main-content']['vision-h4'];

const Content = document.querySelectorAll('.text-content p');
Content[0].textContent = siteContent['main-content']['features-content'];
Content[1].textContent = siteContent['main-content']['about-content'];
Content[2].textContent = siteContent['main-content']['services-content'];
Content[3].textContent = siteContent['main-content']['product-content'];
Content[4].textContent = siteContent['main-content']['vision-content'];

const banner = document.querySelector('.middle-img');
banner.setAttribute('src', siteContent['main-content']['middle-img-src']);

const contactHead = document.querySelector('.contact h4');
contactHead.textContent = siteContent['contact']['contact-h4']

const contactInfo = document.querySelectorAll('.contact p');
contactInfo[0].textContent = siteContent['contact']['address'];
contactInfo[1].textContent = siteContent['contact']['phone'];
contactInfo[2].textContent = siteContent['contact']['email'];

const footer = document.querySelector('footer p');
footer.textContent = siteContent['footer']['copyright'];
