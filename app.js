const pokemons = [
  {
    name: "Bulbasaur",
    color: "Green",
    pic: '<img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png" alt="a cute grass pokemon">',
    type: "Grass",
  },
  {
    name: "Charmander",
    color: "Orange",
    pic: '<img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png" alt="a cute fire pokemon">',
    type: "Fire",
  },
  {
    name: "Squirtle",
    color: "Blue | Brown",
    pic: '<img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png" alt="a cute water pokemon">',
    type: "Water",
  },
]

const wrapDiv = document.getElementById("wraper");
const pokeballs = document.getElementById("pokeballs");
const button = document.getElementById("list-button");
let buttonFlag = false;


function render() {
  if (!buttonFlag) {
    buttonFlag = true;
    wrapDiv.style.display = "flex";
    pokemons.forEach(pokemon => {
      wrapDiv.innerHTML += `<div class="inner-html" onClick="chosen()">
    <div class="image"> ${pokemon.pic} </div>
    <h2 id="'${pokemon.name}'" > ${pokemon.name} </h2>
    <p> <span> Type: </span> ${pokemon.type} </p>
    <p> <span> Color: </span> ${pokemon.color} </p>   
    `;
    });
    pokeballs.style.display = "none";
    button.innerHTML = "Go Back!";
  } else {
    buttonFlag = false;
    wrapDiv.style.display = "none";
    wrapDiv.innerHTML = "";
    pokeballs.style.display = "flex";
    button.innerHTML = "Let's Go!";
  }
}