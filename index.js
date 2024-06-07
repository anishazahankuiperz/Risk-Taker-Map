document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("menuButton");
  const menuContent = document.getElementById("menuContent");

  if (menuButton && menuContent) {
    menuButton.addEventListener("click", function () {
      menuContent.classList.toggle("hidden");
    });
  }

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
      dataP.className = "text-sm p-3 hidden";
      dataP.innerText = item.data;

      itemDiv.addEventListener("click", () => {
        if (dataP.classList.contains("hidden")) {
          dataP.classList.remove("hidden");
          toggleP.innerText = "-";
        } else {
          dataP.classList.add("hidden");
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

  const mainContainer = document.getElementById(
    "toggle-container-for-six-page"
  );

  if (mainContainer) {
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
      dataP.className = "text-sm p-3 hidden";
      dataP.innerText = item.data;

      itemDiv.addEventListener("click", () => {
        if (dataP.classList.contains("hidden")) {
          dataP.classList.remove("hidden");
          toggleP.innerText = "-";
        } else {
          dataP.classList.add("hidden");
          toggleP.innerText = "+";
        }
      });

      itemDiv.appendChild(itemDivContent);
      itemDivContent.appendChild(titleP);
      itemDivContent.appendChild(toggleP);

      itemDiv.appendChild(dataP);

      mainContainer.appendChild(itemDiv);
    });
  }
});
