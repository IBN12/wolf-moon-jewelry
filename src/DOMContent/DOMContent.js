import menuImage from '../Images/Tools/menu.svg'; 
import mobileNavCloseButton from '../Images/Tools/window-close.svg'; 
import instagramIconSVG from '../Images/Icons/instagram.svg';
import instagramIconSVGCopy from '../Images/Icons/instagramCopy.svg'; 
import linkedINIconSVG from '../Images/Icons/linkedin.svg'; 
import linkedINIconSVGCopy from '../Images/Icons/linkedinCopy.svg'; 
import youtubeIconSVG from '../Images/Icons/youtube.svg';
import youtubeIconSVGCopy from '../Images/Icons/youtubeCopy.svg';  

import { LoadHomepage } from '../Modules/Homepage';
import { LoadMobileHomepage } from '../Modules/Homepage';

// InitializeAppplication(): Will initiate the entire appplication. 
export function InitializeApplication(){
    // console.log('Initializing Application'); // Testing 
    // console.log(window.outerWidth); // Testing 
    // console.log(window.innerWidth); // Testing 
    
    const content = document.getElementById('content'); 
    
    // Default loadup stage for the application. 
    if (window.outerWidth > 850)
    {
        HeaderRegion(); 
        NavRegion();

        MainRegion(); 

        FooterRegion();
    }
    else
    {
        MobileNavRegion(); 

        MobileMainRegion(); 

        MobileFooterRegion(); 
    }

    // content will change with constant resizes.  
    window.addEventListener('resize', (e) => {
        // console.log(e.target); // Testing 
        if (e.target.outerWidth > 850)
        {
            content.replaceChildren(); 
            HeaderRegion(); 
            NavRegion(); 

            MainRegion(); 

            FooterRegion(); 
        }
        else
        {
            content.replaceChildren(); 
            MobileNavRegion(); 

            MobileMainRegion(); 

            MobileFooterRegion(); 
        }
    }); 
}

// MobileNavRegion(): The mobile nav region for mobile devices.
function MobileNavRegion(){
    // console.log('Mobile viewport initiated.');  // Testing 
    const content = document.getElementById('content');

    const mobileNavRegion = document.createElement('nav');
    mobileNavRegion.classList.add('mobile-nav-region'); 
    
    content.appendChild(mobileNavRegion); 

    MobileTitleLink(); 
    MobileNavMenuImage(); 
    MobileNavMenu();
}

// MobileTitleLink(): The main mobile title link.
function MobileTitleLink(){
    const mobileNavRegion = document.querySelector('.mobile-nav-region'); 

    const mobileTitleLink = document.createElement('a'); 
    mobileTitleLink.textContent = 'Wolf Moon Jewelry'; 

    mobileNavRegion.appendChild(mobileTitleLink);
}

// MenuImage(): 
function MobileNavMenuImage(){
    const mobileNavRegion = document.querySelector('.mobile-nav-region');

    const menuImageContainer = document.createElement('img');
    menuImageContainer.src = menuImage; 
    menuImageContainer.addEventListener('click', OpenMobileNavMenu); 

    mobileNavRegion.appendChild(menuImageContainer); 
}

// MobileNavMenu():
function MobileNavMenu(){
    const content = document.getElementById('content');

    const mobileNavMenu = document.createElement('nav');
    mobileNavMenu.classList.add('mobile-nav-menu'); 
    mobileNavMenu.classList.add('hide-sections'); 

    // Mobile Nav Menu Section One: 
    const mobileNavMenuSectionOne = document.createElement('section'); 
    const mobileNavMenuCloseButton = document.createElement('img');
    mobileNavMenuCloseButton.src = mobileNavCloseButton; 
    mobileNavMenuCloseButton.addEventListener('click', CloseMobileNavMenu); 
    
    mobileNavMenuSectionOne.appendChild(mobileNavMenuCloseButton);
    mobileNavMenu.appendChild(mobileNavMenuSectionOne); 
    content.appendChild(mobileNavMenu); 
}


// OpenMobileNavMenu():
function OpenMobileNavMenu(){
    const content = document.getElementById('content'); 

    const menuImageContainer  = document.querySelector('.mobile-nav-region > img[src]'); 
    menuImageContainer.classList.remove('original-menu-image-anim'); 
    menuImageContainer.classList.add('rotate-menu-image-anim');
    
    const mobileTitleLink = document.querySelector('.mobile-nav-region > a');
    mobileTitleLink.classList.add('no-clicks'); 

    const mobileMenuImage = document.querySelector('.mobile-nav-region > img[src]');
    mobileMenuImage.classList.add('no-clicks'); 

    const mobileNavMenu = document.querySelector('.mobile-nav-menu');
    mobileNavMenu.classList.remove('hide-sections');
    mobileNavMenu.classList.remove('close-mobile-nav-menu'); 
    mobileNavMenu.classList.add('open-mobile-nav-menu');
}

// CloseMobileNavMenu():
function CloseMobileNavMenu(){
    const menuImageContainer = document.querySelector('.mobile-nav-region > img[src]');
    menuImageContainer.classList.remove('rotate-menu-image-anim');
    menuImageContainer.classList.add('original-menu-image-anim');

    setTimeout(() => {
        const mobileTitleLink = document.querySelector('.mobile-nav-region > a');
        const mobileMenuImage = document.querySelector('.mobile-nav-region > img[src]'); 

        mobileTitleLink.classList.remove('no-clicks');
        mobileMenuImage.classList.remove('no-clicks'); 
    }, 1000);

    const mobileNavMenu = document.querySelector('.mobile-nav-menu');
    mobileNavMenu.classList.remove('open-mobile-nav-menu');
    setTimeout(() => {
        mobileNavMenu.classList.add('hide-sections'); 
    }, 1000); 
    mobileNavMenu.classList.add('close-mobile-nav-menu');
}

// MobileMainRegion(): The main region for the mobile application.
function MobileMainRegion(){
    const content = document.getElementById('content'); 

    const mobileMainRegion = document.createElement('main');
    mobileMainRegion.classList.add('mobile-main-region');

    content.appendChild(mobileMainRegion); 

    LoadMobileHomepage(); 
}

// MobileFooterRegion(): 
function MobileFooterRegion(){
    const content = document.getElementById('content');

    const mobileFooterRegion = document.createElement('footer'); 
    mobileFooterRegion.classList.add('mobile-footer-region'); 

    // Mobile Footer Region Section One:
    const mfSectionOne = document.createElement('section');
    
    const mfTitle = document.createElement('h4');
    mfTitle.textContent = 'WMJ'; 

    const mfAboutUs = document.createElement('a');
    mfAboutUs.textContent = 'About Us';

    const mfContactUs = document.createElement('a'); 
    mfContactUs.textContent = 'Contact Us'; 

    // Mobile Footer Region Section Two:
    const mfSectionTwo = document.createElement('section');

    const mfSocialTitle = document.createElement('h4');
    mfSocialTitle.textContent = "Socials";

    const mfSocialIconContainer = document.createElement('section');

    const mfInstagramIcon = document.createElement('img');
    mfInstagramIcon.src = instagramIconSVG;

    const mfLinkedInIcon = document.createElement('img'); 
    mfLinkedInIcon.src = linkedINIconSVG;

    const mfYoutubeIcon = document.createElement('img'); 
    mfYoutubeIcon.src = youtubeIconSVG; 

    mfSocialIconContainer.appendChild(mfInstagramIcon);
    mfSocialIconContainer.appendChild(mfLinkedInIcon);
    mfSocialIconContainer.appendChild(mfYoutubeIcon); 

    // Mobile Footer Section Three:
    const mfSectionThree = document.createElement('section'); 

    const mfDescription = document.createElement('p'); 
    mfDescription.innerHTML = `Wolf Moon Jewelry is an independent business that designs in house crystal jewelry. <br />
                              We aim to create a line of powerful crystals that hold a variety of impactful meanings <br />
                              such as healing, protecting, emotional balance, and more.`;

    const mfCopyright = document.createElement('p');
    mfCopyright.textContent = 'Copyright 2025. All Rights Reserved.'; 

    const mfPoweredBy = document.createElement('p'); 
    mfPoweredBy.innerHTML = `Powered by <span>sosu plus</span>`; 

    // Section Appends: 
    mfSectionOne.appendChild(mfTitle); 
    mfSectionOne.appendChild(mfAboutUs);
    mfSectionOne.appendChild(mfContactUs);

    mfSectionTwo.appendChild(mfSocialTitle); 
    mfSectionTwo.appendChild(mfSocialIconContainer); 

    mfSectionThree.appendChild(mfDescription); 
    mfSectionThree.appendChild(mfCopyright); 
    mfSectionThree.appendChild(mfPoweredBy); 

    // Mobile Footer Region Appends:
    mobileFooterRegion.appendChild(mfSectionOne); 
    mobileFooterRegion.appendChild(mfSectionTwo);
    mobileFooterRegion.appendChild(mfSectionThree); 

    content.appendChild(mobileFooterRegion); 
}

// HeaderRegion(): 
function HeaderRegion(){
    const content = document.getElementById('content');

    const headerRegion = document.createElement('header');
    headerRegion.classList.add('header-region');

    content.appendChild(headerRegion); 

    TitleLink(); 
}

// TitleLink(): 
function TitleLink(){
    const headerRegion = document.querySelector('.header-region');

    const titleLink = document.createElement('a');
    titleLink.textContent = "Wolf Moon Jewelry";

    headerRegion.appendChild(titleLink);
}

// NavRegion(): The nav region for most non-mobile devices. 
function NavRegion(){
    // console.log('Standard viewport initiated.'); // Testing 

    const content = document.getElementById('content'); 

    const navRegion = document.createElement('nav'); 
    navRegion.classList.add('nav-region'); 

    content.appendChild(navRegion); 

    ProductsLink();
    AboutUsLink();
    ContactUsLink();
    ProductDropdown(); 
}

// ProductsLink(): The products link for the nav region. 
function ProductsLink(){
    const navRegion = document.querySelector('.nav-region');

    const productsLink = document.createElement('a');
    productsLink.textContent = 'Products';

    navRegion.appendChild(productsLink); 
}

// AboutUsLink(): The about us link for the nav region.
function AboutUsLink(){
    const navRegion = document.querySelector('.nav-region');
    
    const aboutUsLink = document.createElement('a');
    aboutUsLink.textContent = 'About Us';

    navRegion.appendChild(aboutUsLink);
}

// ContactUsLink(): The contact us link for the nav region. 
function ContactUsLink(){
    const navRegion = document.querySelector('.nav-region');

    const contactUsLink = document.createElement('a');
    contactUsLink.textContent = 'Contact Us';

    navRegion.appendChild(contactUsLink); 
}

// ProductDropdown(): The products dropdown menu.
function ProductDropdown(){
    const productsLink = document.querySelector('.nav-region > a:nth-child(1)');

    const productsDropdown = document.createElement('nav');
    productsDropdown.textContent = 'Dropdown Content Coming Soon';
    productsDropdown.classList.add('hide-sections');
    productsDropdown.classList.add('z-index');

    productsLink.addEventListener('mouseover', () => {
        productsDropdown.classList.remove('hide-sections'); 
        productsDropdown.classList.add('open-dropdown'); 
        productsDropdown.classList.remove('close-dropdown');
        setTimeout(() => {
            productsDropdown.classList.remove('z-index'); 
        }, 390); 
    });

    productsLink.addEventListener('mouseleave', () => {
        productsDropdown.classList.remove('open-dropdown'); 
        productsDropdown.classList.add('close-dropdown'); 
        productsDropdown.classList.add('z-index');  
        setTimeout(() => {
            productsDropdown.classList.add('hide-sections'); 
        }, 100); 
    }); 

    productsLink.appendChild(productsDropdown); 
}

// MainRegion(): The main region for the application. 
function MainRegion(){
    /** |Temporary Coding|
     * All code will be changed in this function once more
     * modules are added to the application. 
    */

    const content = document.getElementById('content'); 

    const mainRegion = document.createElement('main'); 
    mainRegion.classList.add('main-region');

    content.appendChild(mainRegion);

    LoadHomepage(); 
}

// FooterRegion():
function FooterRegion(){
    const content = document.getElementById('content'); 

    const footerRegion = document.createElement('footer'); 
    footerRegion.classList.add('footer-region');

    // Section One:
    const fSectionOne = document.createElement('section');

    const fTitle = document.createElement('h4'); 
    fTitle.textContent = "WMJ";
    
    const fAboutUs = document.createElement('a');
    fAboutUs.textContent = "About Us";

    const fContactUs = document.createElement('a');
    fContactUs.textContent = "Contact Us";
    
    fSectionOne.appendChild(fTitle); 
    fSectionOne.appendChild(fAboutUs);
    fSectionOne.appendChild(fContactUs);
    
    // Section Two:
    const fSectionTwo = document.createElement('section');
    
    const fSocialsTitle = document.createElement('h4');
    fSocialsTitle.textContent = "Socials";

    const fSocialIconContainer = document.createElement('div');

    const fInstagramIcon = document.createElement('img'); 
    fInstagramIcon.classList.add('instagram-icon'); 
    fInstagramIcon.src = instagramIconSVG; 

    const fLinkedINIcon = document.createElement('img'); 
    fLinkedINIcon.classList.add('linkedin-icon'); 
    fLinkedINIcon.src = linkedINIconSVG;

    const fYoutubeIcon = document.createElement('img');
    fYoutubeIcon.classList.add('youtube-icon'); 
    fYoutubeIcon.src = youtubeIconSVG; 

    fSocialIconContainer.appendChild(fInstagramIcon);
    fSocialIconContainer.appendChild(fLinkedINIcon); 
    fSocialIconContainer.appendChild(fYoutubeIcon); 

    fInstagramIcon.addEventListener('mouseenter', ChangeIconColor);
    fInstagramIcon.addEventListener('mouseleave', ChangeIconColorDefault);

    fLinkedINIcon.addEventListener('mouseenter', ChangeIconColor); 
    fLinkedINIcon.addEventListener('mouseleave', ChangeIconColorDefault); 

    fYoutubeIcon.addEventListener('mouseenter', ChangeIconColor); 
    fYoutubeIcon.addEventListener('mouseleave', ChangeIconColorDefault); 

    // Section Three:
    const fSectionThree = document.createElement('section');

    const fDescription = document.createElement('p');
    fDescription.innerHTML = `Wolf Moon Jewelry is an independent business that designs in house crystal jewelry. <br />
                              We aim to create a line of powerful crystals that hold a variety of impactful meanings <br />
                              such as healing, protecting, emotional balance, and more.`; 

    const fCopyright = document.createElement('p'); 
    fCopyright.textContent = `Copyright 2025. All Rights Reserved.`;

    const fPoweredBy = document.createElement('p');
    fPoweredBy.innerHTML = `Powered by <span>sosu plus</span>`;

    // Section Appends: 
    fSectionTwo.appendChild(fSocialsTitle);
    fSectionTwo.appendChild(fSocialIconContainer);
    fSectionThree.appendChild(fDescription);
    fSectionThree.appendChild(fCopyright); 
    fSectionThree.appendChild(fPoweredBy); 

    // Footer Region Appends: 
    footerRegion.appendChild(fSectionOne); 
    footerRegion.appendChild(fSectionTwo); 
    footerRegion.appendChild(fSectionThree); 

    content.appendChild(footerRegion); 
}

// ChangeIconColor(): ...
function ChangeIconColor(e){    
    if (e.target.className === "instagram-icon")
    {
        const fInstagramIcon = document.querySelector('.instagram-icon'); 
        fInstagramIcon.src = instagramIconSVGCopy; 
    }
    else if (e.target.className === "linkedin-icon")
    {
        const fLinkedINIcon = document.querySelector('.linkedin-icon'); 
        fLinkedINIcon.src = linkedINIconSVGCopy;
    }
    else if (e.target.className === "youtube-icon")
    {
        const fYoutubeIcon = document.querySelector('.youtube-icon'); 
        fYoutubeIcon.src = youtubeIconSVGCopy;
    }
}

// ChangeIconColorDefault(): ...
function ChangeIconColorDefault(e){
    if (e.target.className === "instagram-icon")
    {
        const fInstagramIcon = document.querySelector('.instagram-icon');
        fInstagramIcon.src = instagramIconSVG;  
    }
    else if (e.target.className === "linkedin-icon")
    {
        const fLinkedINIcon = document.querySelector('.linkedin-icon');
        fLinkedINIcon.src = linkedINIconSVG; 
    }
    else if (e.target.className === "youtube-icon")
    {
        const fYoutubeIcon = document.querySelector('.youtube-icon');
        fYoutubeIcon.src = youtubeIconSVG; 
    }
}