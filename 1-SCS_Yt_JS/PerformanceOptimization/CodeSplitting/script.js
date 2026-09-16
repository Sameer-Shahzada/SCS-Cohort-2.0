// const btn = document.getElementById("btn");

// btn.addEventListener("click", async () => {
//   // Dynamic import (code splitting)
//   const heavyModule = await import("./heavy.js");

//   heavyModule.veryHeavy();
// });


const btn = document.getElementById("btn");

btn.addEventListener("click", async () => {
  try {
    // Dynamic import (code splitting)
    const heavyModule = await import("./heavy.js");
    heavyModule.veryHeavy();
  } catch (error) {
    console.error("Failed to load heavy module:", error);
  }
});
