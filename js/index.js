let today = new Date();
let thisYear = today.getFullYear();
let footer = document.querySelector('footer');
let copyright = document.createElement('p');
copyright.innerHTML = 'Wayne Lee ' + thisYear;
footer.appendChild(copyright);
let skills = ["Microsoft", 'Google', 'Open source'];
let skillsList = document.getElementById('skills').querySelector('ul');
for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement('li');
    skill.innerHTML = skills[i];
    skillsList.appendChild(skill);
}
let messageForm = document.getElementsByName("leave_message");
document.addEventListener('submit', (event) => {
    event.preventDefault();
    let messagePersonName = event.target.name.value;
    let messagePersonEmail = event.target.email.value;
    let messagePersonSent = event.target.message.value;
    console.log(messagePersonName);
    console.log(messagePersonEmail);
    console.log(messagePersonSent);
    let messageSection = document.getElementById('#messages');
    //let newMessage = [messagePersonName, mailto:messagePersonEmail, messagePersonSent];
    
    messageSection.appendChild(newMessage);
    event.target.reset();
});
