function GetSortOrder(prop) {
  return function (a, b) {
    if (a[prop] > b[prop]) {
      return 1;
    } else if (a[prop] < b[prop]) {
      return -1;
    }
    return 0;
  };
}

window.addEventListener("load", function () {
  fetch(
    "https://handlers.education.launchcode.org/static/astronauts.json"
  ).then(function (response) {
    response.json().then(function (json) {
      const theAstronauts = json.sort(function (a, b) {
        return b.hoursInSpace - a.hoursInSpace;
      });
      const container = document.getElementById("container");
      container.addEventListener("click", function () {
        let output = "";
        //   for (let index = 0; index < theAstronauts.length; index++) {
        output += 1;
        for (let index = 0; index < theAstronauts.length; index++) {
          const color = theAstronauts[index].active ? "green" : "black";
          container.innerHTML += `
                     <div class="astronaut">
                        <ul>
                           <h3>${json[index].firstName} ${json[index].lastName}</h3>
                              <li>Hours in space: ${json[index].hoursInSpace}</li>
                              <li style = "color:${color}">Active: ${theAstronauts[index].active}</li>
                              <li>Skills: ${json[index].skills}</li>
                        </ul>
                              <img class="avatar" src=${json[index].picture} height=100></img>
                     </div>
                  `;
        }
      });
    });
  });
});
