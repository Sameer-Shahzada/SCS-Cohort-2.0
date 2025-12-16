const container = document.querySelector(".container");

function generatePins(count) {
  const adjectives = [
    "Golden",
    "Misty",
    "Vibrant",
    "Silent",
    "Neon",
    "Ancient",
    "Abstract",
    "Peaceful",
    "Urban",
    "Rustic",
  ];
  const nouns = [
    "Mountain",
    "Sunset",
    "Forest",
    "Ocean",
    "Cityscape",
    "Desert",
    "Architecture",
    "Cyberpunk",
    "Coffee",
    "Interiors",
  ];
  const contexts = [
    "at dawn",
    "under the stars",
    "in the rain",
    "with soft lighting",
    "view from above",
    "during golden hour",
    "in 4k detail",
    "vibes",
  ];

  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const getRandomHeight = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  return Array.from({ length: count }, (_, i) => {
    const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    const caption = `${adj} ${noun}`;

    const height = getRandomHeight(300, 800);
    const keyword = noun.toLowerCase();

    return {
      id: i,
      caption: caption,
      img: `https://loremflickr.com/400/${height}/${keyword}?random=${i}`,
    };
  });
}

const pins = generatePins(50);

function renderPins(pins) {
  let clutter = "";

  pins.forEach(function ({ caption, img }) {
    clutter += `
    <div class="pin">
      <img src="${img}" alt="${caption}" onerror="this.closest('.pin').remove()">
    </div>
  `;
  });

  container.innerHTML = clutter;
}

function updateSearchData(value, pins) {
  const searchData = document.querySelector(".search-data");

  const filteredPins = pins.filter((pin) =>
    pin.caption.toLowerCase().startsWith(value)
  );

  let options = "";
  filteredPins.forEach(function ({ caption }) {
    options += `<div class="option"><i class="ri-search-line"></i> ${caption.toLowerCase()}</div>`;
  });

  searchData.innerHTML =
    options || "<div class='option'>No results found</div>";
}

function handleSearch() {
  const overlay = document.querySelector(".overlay");
  const searchBar = document.querySelector(".search-bar");
  const input = document.querySelector("input");
  const searchIcon = document.querySelector(".search-bar i");
  const searchData = document.querySelector(".search-data");

  input.addEventListener("focus", function () {
    overlay.style.display = "block";
    searchBar.style.outline = "4.5px solid #88C1FF";
    searchIcon.style.display = "none";
    searchData.style.display = "block";

    updateSearchData(input.value, pins);
  });

  input.addEventListener("blur", function () {
    setTimeout(() => {
      overlay.style.display = "none";
      searchBar.style.outline = "none";
      searchIcon.style.display = "block";
      searchData.style.display = "none";
    }, 200);
  });

  input.addEventListener("input", function (e) {
    updateSearchData(e.target.value.toLowerCase(), pins);
  });

  input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      const selectedPins = pins.filter((pin) =>
        pin.caption.toLowerCase().includes(input.value.toLowerCase())
      );

      renderPins(selectedPins.length ? selectedPins : pins);
      input.blur();
    }
  });

  searchData.addEventListener("click", function (e) {
    console.log("hey");
    const option = e.target.closest(".option");
    if (!option) return;

    input.value = option.textContent.trim();
    input.blur();

    console.log(option);

    const selectedPins = pins.filter((pin) =>
      pin.caption.toLowerCase().startsWith(input.value)
    );

    renderPins(selectedPins.length ? selectedPins : pins);
  });
}

handleSearch();
renderPins(pins);