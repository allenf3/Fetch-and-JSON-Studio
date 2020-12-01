// TODO: add code here

window.onload = init();

function init() {
  fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
    response.json().then(function(data) {
        data.sort(function(a, b) {return b.hoursInSpace - a.hoursInSpace})
        let container = document.getElementById("container");
        for(let i = 0; i < data.length; i++) {
            container.innerHTML += `
            <div class="astronaut">
                <div class="bio">
                    <h3>${data[i].firstName} ${data[i].lastName}</h3>
                    <ul>
                        <li>Hours in space: ${data[i].hoursInSpace}</li>
                        <li>Active: ${data[i].active}</li>
                        <li>Skills: ${data[i].skills.join(", ")}</li>
                    </ul>
                </div>
                <img class="avatar" src="${data[i].picture}">
            </div>             
            `
        }
        container.innerHTML += `
            <div>
                <h3>Total number of astronauts: ${data.length}</h3>
            </div>
        `;
        let listItems = document.querySelectorAll("li");
            for(let i = 0; i < listItems.length; i++) {
                if(listItems[i].innerHTML === "Active: true") {
                    listItems[i].style.color = "green";
                }
            }
    });
  });
}