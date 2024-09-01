
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
        


// aside
document.addEventListener('DOMContentLoaded', () => {
    const barIcon = document.querySelector('.fa-bars');
  const asideSection = document.querySelector('aside');
  const close = document.querySelector('close');
  
    const body = document.querySelector('body');

    // Function to show or hide the aside section
    const toggleAside = () => {
        asideSection.classList.toggle('-translate-x-full');
    };

    // Show the aside when clicking the bar icon
    barIcon.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent event from triggering body click event
        toggleAside();
    });

    // Hide the aside when clicking on the body
    body.addEventListener('click', (e) => {
        if (!asideSection.contains(e.target) && !barIcon.contains(e.target)) {
            asideSection.classList.add('-translate-x-full');
        }
    });

    // Hide the aside when clicking on the close icon
    close.addEventListener('click', () => {
        asideSection.classList.add('-translate-x-full');
    });
});
