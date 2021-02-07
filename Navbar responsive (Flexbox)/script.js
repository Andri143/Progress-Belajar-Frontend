const menuToggle = document.querySelector('nav .menu-toggle');

const menuList = document.querySelector('nav ul');	

menuToggle.addEventListener('click', function(){

	menuList.classList.toggle('slide');

});

console.log('Ok');
