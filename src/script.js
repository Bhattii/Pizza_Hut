
// Slider
let myIndex = 0;
carousel();

function carousel() {
  let x = document.getElementsByClassName("mySlides");
  for (let i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 5000);    
}

// active link

  document.addEventListener("DOMContentLoaded", function () {
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('nav a');

            function changeActiveLink() {
                let index = sections.length;

                while (--index && window.scrollY + 150 < sections[index].offsetTop) {}

                navLinks.forEach((link) => link.classList.remove('bg-orange-600', 'text-white'));
                navLinks[index].classList.add('bg-orange-600', 'text-white');
            }

            function handleLinkClick(event) {
                event.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                const offsetPosition = targetElement.offsetTop - 140;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                navLinks.forEach((link) => link.classList.remove('bg-orange-600', 'text-white'));
                this.classList.add('bg-orange-600', 'text-white');
            }

            navLinks.forEach(link => {
                link.addEventListener('click', handleLinkClick);
            });

            window.addEventListener('scroll', changeActiveLink);
        });