let today = new Date();
let thisYear = today.getFullYear();
let footer = document.querySelector('footer');
let copyright = document.createElement('p');
copyright.innerHTML = '&copy; Wayne Lee ' + thisYear;
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
    let messageSection = document.getElementById('messages');
    let messageList = messageSection.querySelector('ul');
    let newMessage = document.createElement('li');
    let now = today.toLocaleString();
    newMessage.innerHTML = `<a href='mailto:${messagePersonEmail}'>${messagePersonName}</a> on ${now} wrote: <span>${messagePersonSent}</span> `;
    let removeButton = document.createElement('button');
    removeButton.innerText = 'Remove';
    removeButton.type = 'button';
    removeButton.addEventListener('click', (e) => {
        let entry = removeButton.parentNode;
        entry.remove();
    })
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    event.target.reset();
});
let githubRequest = new XMLHttpRequest();
githubRequest.open("GET", "https://api.github.com/users/wlee62571/repos");
githubRequest.send();
githubRequest.addEventListener("load", function(event) {
    let repositories = JSON.parse(githubRequest.response);
    console.log(repositories);
    let projectSection = document.getElementById('projects');
    let projectList = projectSection.querySelector('ul');
    for (let i = 0; i < repositories.length; i++) {
    let project = document.createElement('li');
    project.innerText = repositories[i].name;
    projectList.appendChild(project);
    }
});
