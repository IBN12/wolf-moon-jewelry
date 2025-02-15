// LoadHomepage(): Will load the main homepage.
export function LoadHomepage(){
    const mainRegion = document.querySelector('.main-region');

    const homepage = document.createElement('section'); 
    homepage.classList.add('homepage-module');

    mainRegion.appendChild(homepage); 

    HomepageHeader();
}

// HomepageHeader(): The homepage header.
function HomepageHeader(){
    const homepage = document.querySelector('.homepage-module');

    const homepageHeader = document.createElement('header');
    homepageHeader.textContent = 'Content Coming Soon'; 

    const paraOne = document.createElement('p');
    paraOne.textContent = "jewelry made from the soul"; 

    homepageHeader.appendChild(paraOne); 
    homepage.appendChild(homepageHeader); 
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// LoadMobileHomePage(): Will load the the mobile version of the homepage. (Temporary)
export function LoadMobileHomepage(){
    const mobileMainRegion = document.querySelector('.mobile-main-region'); 

    const mobileHomepage = document.createElement('section'); 
    mobileHomepage.classList.add('mobile-homepage-module');

    mobileMainRegion.appendChild(mobileHomepage);  
    
    MobileHomepageHeader();
}

// MobileHomepageHeader(): The main header for the homepage module.
function MobileHomepageHeader(){
    const mobileHomepage = document.querySelector('.mobile-homepage-module'); 

    const mobileHomepageHeader = document.createElement('header'); 
    mobileHomepageHeader.textContent = 'Content Coming Soon'; 

    const paraOne = document.createElement('p'); 
    paraOne.textContent = "jewelry made from the soul";

    mobileHomepageHeader.appendChild(paraOne); 
    mobileHomepage.appendChild(mobileHomepageHeader); 
}