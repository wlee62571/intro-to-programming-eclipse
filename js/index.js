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
