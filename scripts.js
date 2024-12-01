function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value,
    }

    emailjs.send("service_o7krp5l", "template_pcazqis", parms).then(event.preventDefault(), alert("Email sent!!"))
}

// Function to wrap each word in a span
function wrapWords(paragraph) {
    const text = paragraph.innerText;
    const words = text.split(" ");
    paragraph.innerHTML = ""; 

    // ensuring spaces are properly handled
    words.forEach((word, index) => {
        const span = document.createElement("span");
        span.classList.add("zoom-text");
        span.innerText = word; 
        paragraph.appendChild(span);

        // ignoring the last word
        if (index < words.length - 1) {
            paragraph.appendChild(document.createTextNode(" "));
        }
    });
}

const paragraphs = document.querySelectorAll('.zoom-paragraph');

paragraphs.forEach(para => {
    wrapWords(para);
});


const zoomTextElements = document.querySelectorAll('.zoom-text');


zoomTextElements.forEach((element, index) => {
    element.addEventListener('mouseenter', () => {
        // Reset all the zoom levels and colors
        zoomTextElements.forEach(el => {
            el.classList.remove("zoomed", "adjacent");
        });

        // Apply zoom and color change to the hovered word
        element.classList.add("zoomed");

        
        if (index > 0) {
            zoomTextElements[index - 1].classList.add("adjacent");
        }
        if (index < zoomTextElements.length - 1) {
            zoomTextElements[index + 1].classList.add("adjacent");
        }
    });

    // Reseting the zoom and color change 
    element.addEventListener('mouseleave', () => {
        zoomTextElements.forEach(el => {
            el.classList.remove("zoomed", "adjacent");
        });
    });
});

// sticky class to navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const header = document.querySelector('.header');
    
    if (window.scrollY > header.offsetHeight) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});