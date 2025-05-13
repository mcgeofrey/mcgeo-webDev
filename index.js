const updateTime = ()=>{const dateOnPort = document.getElementById(`date`);
    const timeOnPort = document.getElementById(`time`);
    
    
    
    let today = new Date();
    
    const weekDays = [`Sunday`,`Monday`,`Tuesday`,`Wednesday`,`Thursday`,`Friday`,`Saturday`];
    
    const allMonths = [`January`,`February`,`March`,`April`,`May`,`June`,`July`,`August`,`September`,`October`,`November`,`December`];
    
    
    let day = today.getDay();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    let year = today.getFullYear();
    let month = today.getMonth();
    let date = today.getDate();
    
    const meridiem = hours >= 12 ? `PM` :`AM`;
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2,0);
    minutes = minutes.toString().padStart(2,0);
    seconds = seconds.toString().padStart(2,0);
    
    dateOnPort.textContent = `${weekDays[day]} ${date} - ${allMonths[month]} - ${year}`;
    timeOnPort.textContent = `${hours}:${minutes}:${seconds} ${meridiem}`}
    
    document.addEventListener('DOMContentLoaded', () => {
        updateTime();
        setInterval(updateTime, 1000);
    });
    
    const typed = new Typed(`.auto-type`,{
        strings: ["I am a web developer","I love to code","I love to solve problems","I am a frontEnd Developer","I am a team player","I love to create new website and mobile apps","I am a great learner"],
        typeSpeed:150,
        backSpeed:150,
        loop:true
    });
    
    
    
    
    
        
    
        const firstName = document.getElementById(`firstName`);
        const lastName = document.getElementById(`lastName`);
        const email = document.getElementById(`email`);
        const message = document.getElementById(`message`);
        const submit = document.getElementById(`submit`);
        const emailError = document.getElementById(`emailError`);
        const firstNameError = document.getElementById(`firstNameError`);
        const lastNameError = document.getElementById(`lastNameError`);
        const messageError = document.getElementById(`messageError`);
        const submitError = document.getElementById(`submitError`);
    
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        const namePattern = /^[a-zA-Z\s]+$/;
    
        function formValidation() {
            email.addEventListener(`keyup`,validateEmail);
            firstName.addEventListener(`keyup`,validateFirstName);
            lastName.addEventListener(`keyup`,validateLastName);
            message.addEventListener(`keyup`,validateMessage);
        
            return validateEmail() && validateFirstName() && validateLastName() && validateMessage();
        }
    
        formValidation();
    
        function validateEmail(){
    
            if(email.value.length == 0){
                emailError.innerHTML = `<i class="fa-solid fa-circle-xmark"></i>`;
                emailError.classList.remove(`validatedMessage`);
                emailError.classList.add(`errorMessage`);
                return false;
                
            }
            else if(!emailPattern.test(email.value.trim())){
                emailError.innerHTML = `<i class="fa-solid fa-circle-xmark"></i>`;
                emailError.classList.remove(`validatedMessage`);
                emailError.classList.add(`errorMessage`);
                return false;
            }
            else{ emailError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
                emailError.classList.remove("errorMessage");
                emailError.classList.add(`validatedMessage`);
                return true;}
        }
    
        function validateFirstName(){
    
            if(firstName.value.trim() === ""){
                firstNameError.innerHTML = `Name is required`;
                firstNameError.classList.remove(`validatedMessage`);
                firstNameError.classList.add(`errorMessage`);
                return false;
            }
             else if(!namePattern.test(firstName.value)){
                firstNameError.innerHTML = `Name must start with uppercase and contain only letters`;
                firstNameError.classList.remove(`validatedMessage`);
                firstNameError.classList.add(`errorMessage`);
                return false;
            }else{
                firstNameError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
                firstNameError.classList.remove("errorMessage");
            firstNameError.classList.add(`validatedMessage`);
                return true;}
        }
    
        function validateLastName(){
    
            if(lastName.value.trim() === ""){
                lastNameError.innerHTML = `Name is required`;
                lastNameError.classList.remove(`validatedMessage`);
                lastNameError.classList.add(`errorMessage`);
                return false;
            }
             else if(!namePattern.test(lastName.value)){
                lastNameError.innerHTML = `Name must start with uppercase and contain only letters`;
                lastNameError.classList.remove(`validatedMessage`);
                lastNameError.classList.add(`errorMessage`);
                return false;
            }else{
                lastNameError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
                lastNameError.classList.remove("errorMessage");
            lastNameError.classList.add(`validatedMessage`);
                return true;}
        }
    
        function validateMessage(){
            const required = 12;
            const left = required - message.value.length;
    
       if(left > 0){
        messageError.innerHTML = `${left} more characters required`;
        messageError.classList.remove(`validatedMessage`);
        messageError.classList.add(`errorMessage`);
        return false;
        }else{
            messageError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
        messageError.classList.remove("errorMessage");
        messageError.classList.add(`validatedMessage`);
        return true;
        }}
    
        // function isFormValid(){
        //     return validateEmail() && validateFirstName() && validateLastName() && validateMessage();
        // }
    
    
    
    submit.addEventListener(`click`,(e)=>{
    
        e.preventDefault();
        let parms = {
            firstName: document.getElementById(`firstName`).value,
            lastName: document.getElementById(`lastName`).value,
            email: document.getElementById(`email`).value,
            message: document.getElementById(`message`).value,
        }
        if(!formValidation()){
            submitError.innerHTML = `Please fill out all fields before submitting.`;
            submitError.classList.remove(`validatedMessage`);
            submitError.classList.add(`errorMessage`);
            return false;
    
        }else{
             submitError.innerHTML = `Sending Email....!`;
            submitError.classList.remove(`errorMessage`);
            submitError.classList.add(`validatedMessage`);
    
            emailjs.send(`service_mg5z9j9`,`template_rhcxky9`,parms).then(() => {
    
                submitError.innerHTML = `Email has been sent!`;
                submitError.classList.remove(`errorMessage`);
                submitError.classList.add(`validatedMessage`);
    
                // Clear form fields
                firstName.value = ``;
                lastName.value = ``;
                email.value = '';
                message.value = '';
            },
            (error) => {
                submitError.innerHTML = `Error sending email: ${error.text}`;
                submitError.classList.remove(`validatedMessage`);
                submitError.classList.add(`errorMessage`);
            }
            
        );
        return true;
    }
    });
    
    const showSidebar = document.querySelector(`.menu`);
    const closeSlidebar = document.querySelector(`.closeSideBar`);
    
    
    
    
    showSidebar.addEventListener('click',()=>{
        const sideBar = document.querySelector(`.sideBar`);
        sideBar.style.display = `block`;
        setTimeout(() => sideBar.style.opacity = '1', 50);
    });
    
    closeSlidebar.addEventListener('click',()=>{
        const sideBar = document.querySelector(`.sideBar`);
        sideBar.style.opacity = '0';
        setTimeout(() => sideBar.style.display = `none`, 400);
        
    });
    
    const closeBar = () =>{
        const sideBar = document.querySelector(`.sideBar`);
        sideBar.style.opacity = '0';
        setTimeout(() => sideBar.style.display = `none`, 400);
    };
    
    
    
    
    
    // template_61gk54o
    
    // need to fix infinite writing text on I am a web developer -- done
    // need to make it responsive to mobile ---done
    // fix the navigation bar for mobile --- done
    // add image to my projects.. ---
    // DAY and NIGHT MODE ---
    // make my project within the portfolio responsive