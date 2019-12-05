let siteContent = {
  'nav': {
    'nav-item-1': 'Services',
    'nav-item-2': 'Product',
    'nav-item-3': 'Vision',
    'nav-item-4': 'Features',
    'nav-item-5': 'About',
    'nav-item-6': 'Contact',
    'img-src': 'img/logo.png'
  },
  'cta': {
    'h1': 'DOM Is Awesome',
    'button': 'Get Started',
    'img-src': 'img/header-img.png'
  },
  'main-content': {
    'features-h4':'Features',
    'features-content': 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'about-h4':'About',
    'about-content': 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'middle-img-src': 'img/mid-page-accent.jpg',
    'services-h4':'Services',
    'services-content': 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'product-h4':'Product',
    'product-content': 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'vision-h4':'Vision',
    'vision-content': 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
  },
  'contact': {
    'contact-h4' : 'Contact',
    'address' : '123 Way 456 Street Somewhere, USA',
    'phone' : '1 (888) 888-8888',
    'email' : 'sales@greatidea.io',
  },
  'footer': {
    'copyright' : 'Copyright Great Idea! 2018'
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent['nav']['img-src'])

let nav_links = document.querySelectorAll('header > nav a')
nav_links = Array.from(nav_links)
nav_links.forEach((link, i) => link.textContent = siteContent['nav'][`nav-item-${i+1}`])

//Turn Green

  let getNav = document.querySelectorAll('a');
  getNav.forEach(element => {
    element.style.color = 'green';
  })



//Add New items

let nav0 = document.querySelector('nav');
let nav1 = document.createElement('a');
nav1.textContent = 'Newsletter';
nav1.href = '#';
nav1.style.color = 'green';
nav0.prepend(nav1);

let nav6 = document.createElement('a');
nav6.textContent = 'History';
nav6.href = '#';
nav6.style.color = 'green';
nav0.append(nav6);



//CTA

  let getCTA = document.getElementsByClassName('cta-text');
  getCTA[0].getElementsByTagName('h1')[0].innerText = siteContent['cta']['h1'];
  getCTA[0].getElementsByTagName('button')[0].innerText = siteContent['cta']['button'];
  document.getElementById('cta-img').setAttribute('src', siteContent['cta']['img-src']);

  let ctaTextH1 = document.querySelector('.cta-text h1')
  siteContent.cta.h1 = "DOM <br> Is <br> Awesome"
  ctaTextH1.innerHTML = siteContent['cta']['h1']

  // getCTA[0].getElementsByTagName('h1')[0].textContent['Dom <br> Is <br> Awesome'];
  
  // let wordsCTA = document.querySelector('.cta-text h1')
  // wordsCTA.textContent = 'Dom <br> Is <br> Awesome';


//CTA

//Main
  //Top

    let topContent = document.getElementsByClassName('top-content');
    topContent[0].getElementsByClassName('text-content')[0].getElementsByTagName('h4')[0].innerText = siteContent['main-content']['features-h4'];
    topContent[0].getElementsByClassName('text-content')[0].getElementsByTagName('p')[0].innerText = siteContent['main-content']['features-content'];
    topContent[0].getElementsByClassName('text-content')[1].getElementsByTagName('h4')[0].innerText = siteContent['main-content']['about-h4'];
    topContent[0].getElementsByClassName('text-content')[1].getElementsByTagName('p')[0].innerText = siteContent['main-content']['about-content'];

  //Top
  //Middle

    document.getElementById('middle-img').setAttribute('src', siteContent['main-content']['middle-img-src']);

  //Middle
  //Bottom

    let bottomContent = document.getElementsByClassName('bottom-content');
    bottomContent[0].getElementsByClassName('text-content')[0].getElementsByTagName('h4')[0].innerText = siteContent['main-content']['services-h4'];
    bottomContent[0].getElementsByClassName('text-content')[0].getElementsByTagName('p')[0].innerText = siteContent['main-content']['services-content'];
    bottomContent[0].getElementsByClassName('text-content')[1].getElementsByTagName('h4')[0].innerText = siteContent['main-content']['product-h4'];
    bottomContent[0].getElementsByClassName('text-content')[1].getElementsByTagName('p')[0].innerText = siteContent['main-content']['product-content'];
    bottomContent[0].getElementsByClassName('text-content')[2].getElementsByTagName('h4')[0].innerText = siteContent['main-content']['vision-h4'];
    bottomContent[0].getElementsByClassName('text-content')[2].getElementsByTagName('p')[0].innerText = siteContent['main-content']['vision-content'];

  //Bottom
  //Contact

    let getContact = document.getElementsByClassName('contact');
    getContact[0].getElementsByTagName('h4')[0].innerText = siteContent['contact']['contact-h4'];
    getContact[0].getElementsByTagName('p')[0].innerText = siteContent['contact']['address'];
    getContact[0].getElementsByTagName('p')[1].innerText = siteContent['contact']['phone'];
    getContact[0].getElementsByTagName('p')[2].innerText = siteContent['contact']['email'];

  //Contact
  //Footer

    let getFooter = document.getElementsByTagName('footer');
    getFooter[0].getElementsByTagName('p')[0].innerText = siteContent['footer']['copyright'];

  //Footer

  // Stretch: update styles throughout the page.

  
  let random_colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'purple']
  
  function random_color_index() {
    return Math.floor(Math.random() * 7)
  }
  
  setInterval(function() {
    let nav_links = document.querySelectorAll('header > nav a')
  
    nav_links[0].style.color = random_colors[random_color_index()]
    nav_links[1].style.color = random_colors[random_color_index()]
    nav_links[2].style.color = random_colors[random_color_index()]
    nav_links[3].style.color = random_colors[random_color_index()]
    nav_links[4].style.color = random_colors[random_color_index()]
    nav_links[5].style.color = random_colors[random_color_index()]
    nav_links[6].style.color = random_colors[random_color_index()]
    nav_links[7].style.color = random_colors[random_color_index()]
  }, 1200)
  
  
    // Stretch: add event listener to button
  
// let cta_button = document.querySelector('section.cta .cta-text button')
// cta_button.textContent = siteContent["cta"]["button"]

//   cta_button.addEventListener('click', function() {
//     h1.textContent = 'Thanks for the click!'
//   })