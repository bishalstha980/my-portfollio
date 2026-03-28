alert("welcome to BIshal tech Company Profile");
console.log("javascript is working, Bishal!");
let myName = "Bishal Shrestha";
let myAge = "17"
const myGoal = "Future Tech Founder";
console.log("My name is " + myName + " and I am " + myAge + " years old");
const submitBtn = document.querySelector('.submit-btn')
const successMsg = document.getElementById('success-msg');

submitBtn.addEventListener('click', function (event) {
    event.preventDefault();

    const userName = document.querySelector('input[type="text"]').value;
    const userEmail = document.querySelector('input[type="email"]').value;
    const userMessage = document.querySelector('textarea').value;
    console.log("User Name:", userName);
    console.log("User Email:", userEmail);
    console.log("User Message:", userMessage);


    if (userName !== "" && userMessage !== "" && userEmail !== "") {
        successMsg.style.display = "block";


        document.querySelector('.contact-form').reset();


        setTimeout(() => {
            successMsg.style.display = "none";
        }, 3000);
    } else {
        alert("Please fill the form!");
    }
});
const toggleBtn = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');
if(currentTheme){
    document.documentElement.setAttribute('data-theme', currentTheme);
}
toggleBtn.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    if (theme === 'dark'){
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        toggleBtn.textcontent = "Dark Mode"
    } else{
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        toggleBtn.textContent = "Light Mode";
    }
})