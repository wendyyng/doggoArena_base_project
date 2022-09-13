// [Lab] Selecting Doggos
// It's best to start with a fresh clone of Doggo Arena for the labs.
// Implement the ability to select doggos
// 	• Clicking a .doggo.fighter adds the selected class to it. 
// A doggo with the selected class is considered selected.
// 	• Only one doggo can have the selected class.
// 	• Clicking a team's name, moves a selected doggo to that team.
// Stretch
// Clicking anywhere else on the page, unselects the selected .doggo.fighter.

// const allDoggos = document.querySelectorAll(".doggo.fighter");
// const teamNames = document.querySelectorAll(".teams .team .title")

// const teamDivs = document.querySelectorAll(".teams .team .roster")

// Clicking a .doggo.fighter adds the selected class to it.
// allDoggos.forEach(doggoNode => {
    
//     doggoNode.addEventListener("click", event => {
//         // Only one doggo can have the selected class.
//         allDoggos.forEach(doggo => {
//             doggo.classList.remove("selected")
//         })
//         event.currentTarget.classList.add("selected")
//     })
// })

// teamNames.forEach(teamName => {
//     teamName.addEventListener("click", event => {
//         let selected = document.querySelector(".doggo.fighter.selected")
//         event.currentTarget.classList.add("added")
//         event.currentTarget.nextElementSibling.appendChild(selected)
//     })
// })

// document.body.addEventListener('click', event => {
//     if (!event.target.closest('.team')) {
//         removeSelected();
//     }
// });

// function removeSelected() {
//     const selected = document.querySelector(".doggo.fighter.selected");
//     if (selected) {
//         selected.className = "doggo fighter";
//     }
// }
// document.querySelectorAll(".doggo.fighter").forEach(e => {
//     e.addEventListener('click', function (event) {
//         removeSelected();
//         this.className = "doggo fighter selected";
//     });
// });
// document.querySelectorAll(".team h1").forEach(e => {
//     e.addEventListener('click', function (event) {
//         const selected = document.querySelector(".doggo.fighter.selected");
//         if (selected) {
//             this.nextElementSibling.appendChild(selected);
//         }
//     });
// });

// [Lab] Recruiting New Fighters
// Doggo Arena has an enrollment form for new doggo fighters, but it is currently non-functional.
// 	• Update the applicant preview's h1 node contents with the applicant name as it is typed.
// 	• Update the applicant preview's picture once a valid picture url as it is typed. 
// Check that the typed in field ends with .jpg, .gif or .png.
// 	• Give a salmon or teal border to the applicant preview depending on which team is typed.
// When the form is submitted, reset the applicant preview and create that 
// .doggo.fighter in the team written in the team name field.

const applicantPreview = document.querySelector("#applicant-preview")

const nameInput = document.querySelector('input[name=name]')
const pictureInput = document.querySelector('input[name=picture-url]')
const teamInput = document.querySelector('input[name=team-name]')



nameInput.addEventListener("input", event => {
  const name = event.currentTarget.value
  applicantPreview.firstElementChild.firstElementChild.innerText = name
})

pictureInput.addEventListener("input", event => {
  const imageUrl = event.currentTarget.value
  const regex = /(?:jpg|gif|png)$/
  if (regex.test(imageUrl)){
      applicantPreview.style.backgroundImage = `url(${imageUrl})`
  }else {
    applicantPreview.style.backgroundImage = ``
  }
})

teamInput.addEventListener("input", event => {

  let team = event.currentTarget.value.toLowerCase()

  if(team === "salmon"){
    applicantPreview.style.borderColor = "salmon"
  }else if(team === "teal"){
    applicantPreview.style.borderColor = "teal"
  }else{
    team = ""
    applicantPreview.style.borderColor = "null"
  }
  
})

// function myFunction() {
//     // document.getElementById("application-form").submit();
//     event.preventDefault()
//     let form = document.getElementById("application-form")
//     form.reset()
// }

let form = document.getElementById("application-form")
form.addEventListener("submit", event => {
    event.preventDefault()

    const newDiv = document.createElement("div");
    newDiv.id = nameInput.value.split(" ").join("-")
    newDiv.className = "doggo fighter"
    newDiv.style.backgroundImage = `url(${pictureInput.value})`
    
    title = document.createElement("h1")
    title.innerText = nameInput.value
    newDiv.appendChild(title)


    if (teamInput.value === "salmon") {
        document.querySelector('.team.salmon .roster').appendChild(newDiv);
    } else if (teamInput.value === "teal") {
        document.querySelector('.team.teal .roster').appendChild(newDiv);
    }

    form.reset()
    console.log(newDiv)
})