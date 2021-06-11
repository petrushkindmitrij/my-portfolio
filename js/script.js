
const siteMenu = document.getElementsByClassName("site-menu--mobile-open")[0];
const toggleMenu = document.getElementsByClassName("toggle-menu")[0];
const arrMenuLinks = siteMenu.querySelectorAll(".site-menu__link");


toggleMenu.addEventListener('click', () =>{
  if (siteMenu.style.transform === 'scale(1, 1)'){
    // siteMenu.style.display = 'none';
    siteMenu.style.transform = "scale(0, 1)";
  } else {
    // siteMenu.style.display = 'block';
    siteMenu.style.transform = "scale(1, 1)";
  }
});

arrMenuLinks.forEach((e) => {
  console.log('1');
  e.addEventListener('click', () => {
    // siteMenu.style.display = 'none';
    siteMenu.style.transform = "scale(0, 1)";
  })
})