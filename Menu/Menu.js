/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

 

  // Step 1: Write a function that will create a menu component as seen below:

function createMenu (data) {
  const menuBit = document.createElement('div');
  const listBox = document.createElement('ul');

  menuBit.classList.add('menu');

  data.forEach( (element) => {
    tempEl = document.createElement('li');
    tempEl.textContent = element;
    listBox.append(tempEl);
  })

  menuBit.append(listBox);

  const menuButton = document.querySelector('.menu-button');
  menuButton.addEventListener('click', event => {
    menuBit.classList.toggle('menu--open');
  })

  return menuBit;
}

const navBar = document.querySelector('.header');

navBar.append(createMenu(menuItems));

navBar.addEventListener('click', () => {

    gsap.from('.menu--open', {
      duration: 1,
      x: -350,
    })
    

})


  // <div class="menu">
  //   <ul>
  //     {each menu item as a list item}
  //   </ul>
  // </div>

  // The function takes an array as its only argument.

  // Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  // Add those items to the <ul>

  // Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  // Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  // Step 5: return the menu component.

  // Step 6: add the menu component to the DOM.
  
