const crew = [
  {
    role: "CAPTAIN",
    name: "Monkey D. Luffy",
    imgSrc: "assets/luffy.png",
    color: "#FFFFFF",
    shadow: "#FFFFFF",
  },
  {
    role: "SWORDSMAN",
    name: "Roronoa Zoro",
    imgSrc: "assets/zoro.png",
    color: "#00FF9D",
    shadow: "#00FF9D",
  },
  {
    role: "NAVIGATOR",
    name: "Nami",
    imgSrc: "assets/nami.png",
    color: "#FFD700",
    shadow: "#FFA500",
  },
  {
    role: "SNIPER",
    name: "Usopp",
    imgSrc: "assets/usopp.png",
    color: "#CCFF00",
    shadow: "#CCFF00",
  },
  {
    role: "CHEF",
    name: "Sanji",
    imgSrc: "assets/sanji.png",
    color: "#00FFFF",
    shadow: "#00BFFF",
  },
  {
    role: "DOCTOR",
    name: "Tony Tony Chopper",
    imgSrc: "assets/chopper.png",
    color: "#FF69B4",
    shadow: "#FFC0CB",
  },
  {
    role: "ARCHAEOLOGIST",
    name: "Nico Robin",
    imgSrc: "assets/robin.png",
    color: "#D946EF",
    shadow: "#D946EF",
  },
  {
    role: "SHIPWRIGHT",
    name: "Franky",
    imgSrc: "assets/franky.png",
    color: "#FF004D",
    shadow: "#FF004D",
  },
  {
    role: "MUSICIAN",
    name: "Brook",
    imgSrc: "assets/brook.png",
    color: "#7FFFD4",
    shadow: "#7FFFD4",
  },
  {
    role: "HELMSMAN",
    name: "Jinbe",
    imgSrc: "assets/jinbe.png",
    color: "#2E9AFE",
    shadow: "#2E9AFE",
  },
];

const cards = document.querySelector(".cards");

clutter = "";

crew.forEach((member) => {
  clutter += `<div class="card" style="--color: ${member.color}; --shadow-color: ${member.shadow}">
      <h2>${member.role}</h2>
      <img src="${member.imgSrc}" alt="">
      <h3>${member.name}</h3>
    </div>`;
});

cards.innerHTML = clutter;