// .........menu show for small view........

document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("menuButton");
  const menuContent = document.getElementById("menuContent");

  menuButton.addEventListener("click", function () {
    menuContent.classList.toggle("hidden");
  });
});

// .........five page ..........

// const fifthPageToggleData = [
//   {
//     id: 1,
//     title: "EMERGENCY CONTACTS",
//     data: "Before you travel to Ukraine check that you have appropriate travel insurance that is valid in Ukraine for local treatment and/or unexpected medical evacuation. If you're not insured.",
//   },
//   {
//     id: 2,
//     title: "HEALTH RISKS",
//     data: "Before you travel to Ukraine check that you have appropriate travel insurance that is valid in Ukraine for local treatment and/or unexpected medical evacuation. If you're not insured.",
//   },
//   {
//     id: 3,
//     title: "VACCINATIONS",
//     data: "Before you travel to Ukraine check that you have appropriate travel insurance that is valid in Ukraine for local treatment and/or unexpected medical evacuation. If you're not insured.",
//   },
//   {
//     id: 4,
//     title: "MEDICATIONS",
//     data: "Before you travel to Ukraine check that you have appropriate travel insurance that is valid in Ukraine for local treatment and/or unexpected medical evacuation. If you're not insured.",
//   },
//   {
//     id: 5,
//     title: "MENTAL HEALTH",
//     data: "Before you travel to Ukraine check that you have appropriate travel insurance that is valid in Ukraine for local treatment and/or unexpected medical evacuation. If you're not insured.",
//   },
//   {
//     id: 6,
//     title: "HEALTHCARE FACILITIES",
//     data: "Before you travel to Ukraine check that you have appropriate travel insurance that is valid in Ukraine for local treatment and/or unexpected medical evacuation. If you're not insured.",
//   },
//   {
//     id: 7,
//     title: "PHARMACIES",
//     data: "Before you travel to Ukraine check that you have appropriate travel insurance that is valid in Ukraine for local treatment and/or unexpected medical evacuation. If you're not insured.",
//   },
// ];

console.log("hhh");
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

fifthPageToggleData.forEach((item) => {
  const itemDiv = document.createElement("div");
  itemDiv.className =
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

  itemDiv.appendChild(titleP);
  itemDiv.appendChild(toggleP);

  container.appendChild(itemDiv);
  container.appendChild(dataP);
});
