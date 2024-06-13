document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("menu-btn");
  const menuContent = document.getElementById("menu-content");
  const closeIcon = document.getElementById("close-icon");
  const menuItem = document.getElementsByClassName("menu-height");

  // menuContent.style.display = "block";

  if (menuBtn) {
    menuBtn.addEventListener("click", function () {
      menuContent.style.display = "block";
    });
  }
  if (closeIcon) {
    closeIcon.addEventListener("click", function () {
      menuContent.style.display = "none";
    });
  }

  if (menuItem) {
    menuItem.addEventListener("click", function () {
      menuContent.style.display = "none";
    });
  }
});

// .........five page ..........
const fifthPageToggleData = [
  {
    id: 1,
    title: "EMERGENCY CONTACTS",
    data: "Before you travel to Ukraine check that you have appropriate travel insurance that is valid in Ukraine for local treatment and/or unexpected medical evacuation. If you're not insured.",
  },
  {
    id: 2,
    title: "HEALTH RISKS",
    data: "Before you travel to Ukraine check that you have appropriate travel insurance that is valid in Ukraine for local treatment and/or unexpected medical evacuation. If you're not insured.",
  },
  {
    id: 3,
    title: "VACCINATIONS",
    data: "Before you travel to Ukraine check that you have appropriate travel insurance that is valid in Ukraine for local treatment and/or unexpected medical evacuation. If you're not insured.",
  },
  {
    id: 4,
    title: "MEDICATIONS",
    data: "Before you travel to Ukraine check that you have appropriate travel insurance that is valid in Ukraine for local treatment and/or unexpected medical evacuation. If you're not insured.",
  },
  {
    id: 5,
    title: "MENTAL HEALTH",
    data: "Before you travel to Ukraine check that you have appropriate travel insurance that is valid in Ukraine for local treatment and/or unexpected medical evacuation. If you're not insured.",
  },
  {
    id: 6,
    title: "HEALTHCARE FACILITIES",
    data: "Before you travel to Ukraine check that you have appropriate travel insurance that is valid in Ukraine for local treatment and/or unexpected medical evacuation. If you're not insured.",
  },
  {
    id: 7,
    title: "PHARMACIES",
    data: "Before you travel to Ukraine check that you have appropriate travel insurance that is valid in Ukraine for local treatment and/or unexpected medical evacuation. If you're not insured.",
  },
];

const container = document.getElementById("toggle-container");

if (container) {
  fifthPageToggleData.forEach((item) => {
    const itemDiv = document.createElement("div");
    const itemDivContent = document.createElement("div");
    itemDivContent.className =
      "flex border-b pb-1 justify-between items-center cursor-pointer";

    const titleP = document.createElement("p");
    titleP.className = "font-semibold text-sm text-slate uppercase";
    titleP.innerText = item.title;

    const toggleP = document.createElement("p");
    toggleP.className = "text-xl font-medium text-slate";
    toggleP.innerText = "+";

    const dataP = document.createElement("p");
    dataP.className = "text-sm p-3 display-hidden";
    dataP.innerText = item.data;

    itemDiv.addEventListener("click", () => {
      if (dataP.classList.contains("display-hidden")) {
        dataP.classList.remove("display-hidden");
        toggleP.innerText = "-";
      } else {
        dataP.classList.add("display-hidden");
        toggleP.innerText = "+";
      }
    });
    itemDiv.appendChild(itemDivContent);
    itemDivContent.appendChild(titleP);
    itemDivContent.appendChild(toggleP);
    itemDiv.appendChild(dataP);

    container.appendChild(itemDiv);
  });
}

// .........six page ..........
const sixthPageToggleData = [
  {
    id: 1,
    title: "VISA REQUIREMENTS",
    data: "Before you travel to Ukraine check that you have appropriate travel insurance that is valid in Ukraine for local treatment and/or unexpected medical evacuation. If you're not insured.",
  },
  {
    id: 2,
    title: "TRAVEL INSURANCE",
    data: "Before you travel to Ukraine check that you have appropriate travel insurance that is valid in Ukraine for local treatment and/or unexpected medical evacuation. If you're not insured.",
  },
  {
    id: 3,
    title: "PERSONAL SAFETY",
    data: "Before you travel to Ukraine check that you have appropriate travel insurance that is valid in Ukraine for local treatment and/or unexpected medical evacuation. If you're not insured.",
  },
  {
    id: 4,
    title: "CLIMATE",
    data: "Before you travel to Ukraine check that you have appropriate travel insurance that is valid in Ukraine for local treatment and/or unexpected medical evacuation. If you're not insured.",
  },
  {
    id: 5,
    title: "COMMUNICATIONS",
    data: "Before you travel to Ukraine check that you have appropriate travel insurance that is valid in Ukraine for local treatment and/or unexpected medical evacuation. If you're not insured.",
  },
  {
    id: 6,
    title: "DRIVING & VEHICLE SAFETY",
    data: "Before you travel to Ukraine check that you have appropriate travel insurance that is valid in Ukraine for local treatment and/or unexpected medical evacuation. If you're not insured.",
  },
  {
    id: 7,
    title: "LOCAL LAWS & CULTURES",
    data: "Before you travel to Ukraine check that you have appropriate travel insurance that is valid in Ukraine for local treatment and/or unexpected medical evacuation. If you're not insured.",
  },
  {
    id: 8,
    title: "CRIME",
    data: "Before you travel to Ukraine check that you have appropriate travel insurance that is valid in Ukraine for local treatment and/or unexpected medical evacuation. If you're not insured.",
  },
  {
    id: 9,
    title: "TERRORISM",
    data: "Before you travel to Ukraine check that you have appropriate travel insurance that is valid in Ukraine for local treatment and/or unexpected medical evacuation. If you're not insured.",
  },
  {
    id: 10,
    title: "AIR RAID SIRENS",
    data: "Before you travel to Ukraine check that you have appropriate travel insurance that is valid in Ukraine for local treatment and/or unexpected medical evacuation. If you're not insured.",
  },
  {
    id: 11,
    title: "UNEXPLODED ORDNANCE (UXO)",
    data: "Before you travel to Ukraine check that you have appropriate travel insurance that is valid in Ukraine for local treatment and/or unexpected medical evacuation. If you're not insured.",
  },
  {
    id: 12,
    title: "EMERGENCY CONTACTS",
    data: "Before you travel to Ukraine check that you have appropriate travel insurance that is valid in Ukraine for local treatment and/or unexpected medical evacuation. If you're not insured.",
  },
];

const mainContainer2 = document.getElementById("toggle-container-for-six-page");

if (mainContainer2) {
  sixthPageToggleData.forEach((item) => {
    const itemDiv = document.createElement("div");
    const itemDivContent = document.createElement("div");
    itemDivContent.className =
      "flex border-b pb-1 justify-between items-center cursor-pointer";

    const titleP = document.createElement("p");
    titleP.className = "font-semibold text-sm text-slate uppercase";
    titleP.innerText = item.title;

    const toggleP = document.createElement("p");
    toggleP.className = "text-xl font-medium text-slate";
    toggleP.innerText = "+";

    const dataP = document.createElement("p");
    dataP.className = "text-sm p-3 display-hidden";
    dataP.innerText = item.data;

    itemDiv.addEventListener("click", () => {
      if (dataP.classList.contains("display-hidden")) {
        dataP.classList.remove("display-hidden");
        toggleP.innerText = "-";
      } else {
        dataP.classList.add("display-hidden");
        toggleP.innerText = "+";
      }
    });

    itemDiv.appendChild(itemDivContent);
    itemDivContent.appendChild(titleP);
    itemDivContent.appendChild(toggleP);

    itemDiv.appendChild(dataP);

    mainContainer2.appendChild(itemDiv);
  });
}

// .........seven  page ..........
const sevenPageToggleData = [
  {
    id: 1,
    title: "UNITED KINGDOM",
    data: "Before you travel to Ukraine check that you have appropriate travel insurance that is valid in Ukraine for local treatment and/or unexpected medical evacuation. If you're not insured.",
    img: "../image/flag/united-kindom.png",
  },
  {
    id: 2,
    title: "UNITED STATES OF AMERICA",
    data: "Before you travel to Ukraine check that you have appropriate travel insurance that is valid in Ukraine for local treatment and/or unexpected medical evacuation. If you're not insured.",
    img: "../image/flag/Flag_of_the_United_Kingdom.png",
  },
  {
    id: 3,
    title: "CANADA ",
    data: "Before you travel to Ukraine check that you have appropriate travel insurance that is valid in Ukraine for local treatment and/or unexpected medical evacuation. If you're not insured.",
    img: "../image/flag/canada.png",
  },
  {
    id: 4,
    title: "AUSTRALIA",
    data: "Before you travel to Ukraine check that you have appropriate travel insurance that is valid in Ukraine for local treatment and/or unexpected medical evacuation. If you're not insured.",
    img: "../image/flag/AUSTRALIA.png",
  },
  {
    id: 5,
    title: "NEW ZEALAND",
    data: "Before you travel to Ukraine check that you have appropriate travel insurance that is valid in Ukraine for local treatment and/or unexpected medical evacuation. If you're not insured.",
    img: "../image/flag/NEW ZEALAND.png",
  },
  {
    id: 6,
    title: "GERMANY",
    data: "Before you travel to Ukraine check that you have appropriate travel insurance that is valid in Ukraine for local treatment and/or unexpected medical evacuation. If you're not insured.",
    img: "../image/flag/germany.png",
  },
  {
    id: 7,
    title: "FRANCE",
    data: "Before you travel to Ukraine check that you have appropriate travel insurance that is valid in Ukraine for local treatment and/or unexpected medical evacuation. If you're not insured.",
    img: "../image/flag/france.png",
  },
  {
    id: 8,
    title: "SWITZERLAND",
    data: "Before you travel to Ukraine check that you have appropriate travel insurance that is valid in Ukraine for local treatment and/or unexpected medical evacuation. If you're not insured.",
    img: "../image/flag/SWITZERLAND.png",
  },
  {
    id: 9,
    title: "SWEDEN",
    data: "Before you travel to Ukraine check that you have appropriate travel insurance that is valid in Ukraine for local treatment and/or unexpected medical evacuation. If you're not insured.",
    img: "../image/flag/SWEDEN .png",
  },
  {
    id: 10,
    title: "LITHUANIA",
    data: "Before you travel to Ukraine check that you have appropriate travel insurance that is valid in Ukraine for local treatment and/or unexpected medical evacuation. If you're not insured.",
    img: "../image/flag/LITHUANIA.png",
  },
];

const mainContainer3 = document.getElementById(
  "toggle-container-for-seven-page"
);

if (mainContainer3) {
  sevenPageToggleData.forEach((item) => {
    const itemDiv = document.createElement("div");
    const leftDiv = document.createElement("div");
    const itemDivContent = document.createElement("div");
    itemDivContent.className =
      "flex border-b pb-1 justify-between items-center cursor-pointer";
    leftDiv.className = "flex items-center space-x-2";

    const titleP = document.createElement("p");
    titleP.className = "font-semibold text-sm text-slate uppercase";
    titleP.innerText = item.title;

    const toggleP = document.createElement("p");
    toggleP.className = "text-xl font-medium text-slate";
    toggleP.innerText = "+";

    const img = document.createElement("img");
    img.src = item.img;
    img.className = "w-10 h-6 object-cover";

    const dataP = document.createElement("p");
    dataP.className = "text-sm p-3 display-hidden";
    dataP.innerText = item.data;

    itemDiv.addEventListener("click", () => {
      if (dataP.classList.contains("display-hidden")) {
        dataP.classList.remove("display-hidden");
        toggleP.innerText = "-";
      } else {
        dataP.classList.add("display-hidden");
        toggleP.innerText = "+";
      }
    });

    leftDiv.appendChild(img);
    leftDiv.appendChild(titleP);

    itemDivContent.appendChild(leftDiv);
    itemDivContent.appendChild(toggleP);
    itemDiv.appendChild(itemDivContent);

    itemDiv.appendChild(dataP);

    mainContainer3.appendChild(itemDiv);
  });
}
