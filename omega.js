// scroll reveal animation
const sr = ScrollReveal({
    origin: 'top',
    distance:'60px',
    duration:2500,
    delay:400,
  })
  sr.reveal('.home-one',{origin: 'left', delay:'180'})
  sr.reveal('.home-two',{origin: 'right', delay:'180'})
  sr.reveal('.homeog',{delay:'150'})
  sr.reveal('.homethree',{top: '140'})
  sr.reveal('.btn',{top: '140'})
  sr.reveal('.product-text',{origin: 'right'})
  sr.reveal('.products',{delay:'160'})
  sr.reveal('.heading',{delay:'300'})
  sr.reveal('.footer .logo,.footer-box,.copyright',{delay:'300'})
