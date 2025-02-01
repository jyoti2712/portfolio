const sideMenu = document.querySelector('#sideMenu');
const navbar = document.querySelector("nav");
const navlink = document.querySelector("nav ul");

function openMenu(){
    sideMenu.style.transform = 'translateX(-16rem)';
}

function closeMenu(){
    sideMenu.style.transform = 'translateX(16rem)';
}

window.addEventListener('scroll', () =>{
    if(scrollY > 50){
        navbar.classList.add('bg-white', 'bg-opacity-50', 'background-blur-lg', 'shadow-sm');
        navlink.classList.remove('bg-white', 'shadow-sm', 'bg-opacity-50');
    }else{
        navbar.classList.remove('bg-white', 'bg-opacity-50', 'background-blur-lg', 'shadow-sm');
        navlink.classList.add('bg-white', 'shadow-sm', 'bg-opacity-50');
    }
})

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    let form = this;
    let formData = new FormData(form);
    
    fetch(form.action, {
        method: form.method,
        body: formData
    }).then(response => response.json()).then(result => {
        if (result.success) {
            form.reset(); // Clear form fields
            document.getElementById("successMessage").classList.remove("hidden"); // Show success message
        }
    }).catch(error => console.log("Error:", error));
});
