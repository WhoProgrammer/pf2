

// nav

    
            /*=============== SHOW MENU ===============*/
            const headerToggle = document.getElementById('header-toggle'),
            main = document.getElementById('main'),
            navClose = document.getElementById('nav-close')
      
      /*===== MENU SHOW =====*/
      /* Validate if constant exists */
      if(headerToggle){
          headerToggle.addEventListener('click', () =>{
              main.classList.add('show-menu')
          })
      }
      
      /*===== MENU HIDDEN =====*/
      /* Validate if constant exists */
      if(navClose){
          navClose.addEventListener('click', () =>{
              main.classList.remove('show-menu')
          })
      }
      
      /*=============== REMOVE MENU MOBILE ===============*/
      const navLink = document.querySelectorAll('.nav__link')
      
      function linkAction(){
          const main = document.getElementById('main')
          // When we click on each nav__link, we remove the show-menu class
          main.classList.remove('show-menu')
      }
      navLink.forEach(n => n.addEventListener('click', linkAction))
      
      /*=============== CHANGE BACKGROUND HEADER ===============*/
      function scrollHeader(){
          const header = document.getElementById('header')
          // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
          if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
      }
      window.addEventListener('scroll', scrollHeader)
      
      /*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
      const sections = document.querySelectorAll('section[id]')
      
      function scrollActive(){
          const scrollY = window.pageYOffset
      
          sections.forEach(current =>{
              const sectionHeight = current.offsetHeight,
                    sectionTop = current.offsetTop - 58,
                    sectionId = current.getAttribute('id')
      
              if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                  document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
              }else{
                  document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
              }
          })
      }
      window.addEventListener('scroll', scrollActive)
              
        
// nav

let hero = document.querySelector(".hero")
    hero.style.opacity = "0"
    hero.style.opacity = "1"
// SECTION 3

const section3 = document.querySelector(".section3 .box2 .row")


function sectionInner(image, title, later) {
  let d = document.createElement("div")
let f = document.createElement("div")
let img = document.createElement("img")
let d2 = document.createElement("div")
let h5 = document.createElement("h5")
let p = document.createElement("p")
    d.className = "col-md-6"
    f.className = "d-flex"
    img.setAttribute("src",image)
    f.appendChild(img)
    h5.innerHTML = title
    d2.appendChild(h5)
    p.innerHTML = later
    d2.appendChild(p)
    f.appendChild(d2)
    d.appendChild(f)
    return d
}


    section3.appendChild(sectionInner("img/s1.png", "Premium design", "I craft beautiful designs that will make your website wow your users, leave a long positive impression, and stand out from the crowd."))
    section3.appendChild(sectionInner("img/s2.png", "Built for speed", "No one likes a slow website, so my website templates offer the fastest possible load and performance"))
    section3.appendChild(sectionInner("img/s3.png", "Perfectly responsive", "Your website will look and work great on any device. No matter if it's a desktop, laptop, tablet, phone."))
    section3.appendChild(sectionInner("img/s4.png", "Flexible design", "My templates are based on blocks, so you can reuse the blocks to create the layout that perfectly fits your website."))
    section3.appendChild(sectionInner("img/s5.png", "Seamless animations", "Thanks to my carefully crafted animations, you will deliver a seamless and unique browsing experience to your website visitors."))
    section3.appendChild(sectionInner("img/s6.png", "100% customizable", "All our templates are easily customizable using the Website Designer and Editor."))
    section3.appendChild(sectionInner("img/s9.png", "Always up-to-date", "Our templates are always updated, so you can enjoy the latest Webflow features available, no matter when the template was released."))
    section3.appendChild(sectionInner("img/s10.png", "Figma file included", "All our Webflow Templates include the editable Figma file with your purchase, so you can customize it and edit the graphics easily."))
    section3.appendChild(sectionInner("img/s11.png", "Exceptional support", "If you have any questions, or hit a roadblock and need a hand, we are always just one email away to help you out!"))

    // section5
    
