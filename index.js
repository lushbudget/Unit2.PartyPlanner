const COHORT = `2402-FTB-ET-WEB-FT`
const API_URL = `https://fsa-crud-2aa9294fe819.herokuapp.com/api/${COHORT}/events`;

const state = {
  parties: [],
}

const partyList = document.querySelector(`#parties`)



async function render() {
  await getParties();
  renderParties();
}
render();

async function getParties() {
  try {
    const response = await fetch(API_URL);
    const json = await response.json();
    state.parties = json.data;
  } catch (error) {
    console.log(`You got an error, my little buddy!`, error);
  }
}



function renderParties() {
  const partyLiElements = state.parties.map((party) => {
    const li = document.createElement(`li`);
    li.innerHTML = `${party.name} in which we ${party.description} on ${party.date}`;
    return li;
  })
  partyList.replaceChildren(...partyLiElements);
}
renderParties();

// const partyNameInput = document.querySelector(`#partyID`).value;
// const submitButton = document.getElementById(`#submit`).addEventListener(`click`, console.log(partyNameInput))
// submitButton.addEventListener(`click`, console.log(partyNameInput));

// const input = document.querySelector('input').value;
// document



