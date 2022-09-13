// document.addEventListener('click', event => {
//     console.log('document was clicked!')
//   // console.log(event);
//   // console.log("target", event.target);
//   // event.target is the DOM Node that triggered this event. It does not have to be the node that has the event
//     console.log("currentTarget", event.currentTarget)
//       // event.currentTarget is the node that owns this event
//     console.log(this)
//       // key word this returns the same value as event.currentTarget 
//       //only when it is not inside the arrow function!!!
// })

// document.addEventListener('click', () => {
//     console.log('Page has been clicked!');
//   });

// const toxicTim = document.getElementById("toxic-tim");
// toxicTim.addEventListener("click", event => {
//   console.log('Toxic Tim was clicked');
//   console.log(event.target);
//   console.log(event.currentTarget);
//   console.log(event.x, event.y);
// })

// const doggoNames = document.querySelectorAll(".doggo.fighter h1");

// doggoNames.forEach(dog => dog.addEventListener("click", event => {
//     console.log("Doggo Name clicked!")
// }))

// console.log(document instanceof Node);
// console.log("a string" instanceof Node);

// const teamSalmon = document.querySelector(".team.salmon")
// teamSalmon.addEventListener("click", function(event){
//     console.log(this)
// })

const allDoggos = document.querySelectorAll(".doggo.fighter");

allDoggos.forEach(doggoNode => {
  doggoNode.addEventListener("dblclick", event => {
      event.currentTarget.classList.toggle("inverted")
  })
  doggoNode.addEventListener("mousedown", event => {
      event.currentTarget.classList.add("flipped")
  })
  doggoNode.addEventListener("mouseup", event => {
      event.currentTarget.classList.remove("flipped")
  })
  doggoNode.addEventListener("mouseenter", event => {
      event.currentTarget.classList.add("inverted");
  })
  doggoNode.addEventListener("mouseleave", event => {
      event.currentTarget.classList.remove("inverted");
  })
})

const bottomDiv = document.createElement("div");
bottomDiv.style.position = "fixed";
bottomDiv.style.bottom = "0";
bottomDiv.style.backgroundColor = "white";
document.body.append(bottomDiv);

document.addEventListener("mousemove", event => {
  const position = `${event.x}, ${event.y}`
  bottomDiv.innerText = position
})

const keySound = new Audio("sounds/vintage-keyboard-1.wav");
const inputs = document.querySelectorAll("input");
inputs.forEach((inputNode) => {
  inputNode.addEventListener("input", (event) => {
    // keySound.play();
  });
});

const explosionSound = new Audio("sounds/small-explosion.wav");
const submitForm = document.querySelector("form");
submitForm.addEventListener("submit", (event) => {
  event.preventDefault();
  // explosionSound.play();
});

const applicantPreview = document.querySelector("#applicant-preview")

const pictureInput = document.querySelector('input[name=picture-url]')
pictureInput.addEventListener("input", event => {
  const imageUrl = event.currentTarget.value
  applicantPreview.style.backgroundImage = `url(${imageUrl})`
})

let lettersTyped = ""

document.addEventListener("keypress", event => {
  lettersTyped += event.key

  console.log(event.key);

  if (lettersTyped == "panic") {
    window.location.href = "https://google.ca"
  }
})