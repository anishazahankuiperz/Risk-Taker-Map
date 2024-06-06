document.addEventListener("DOMContentLoaded", function () {
  const menuButtons = document.querySelectorAll(".aside-menu");
  const menuContents = document.querySelectorAll(".menu-content");

  menuContents[0].classList.remove("hidden");
  menuButtons[0].classList.add("bg-active-border");

  menuButtons.forEach((button, index) => {
    button.addEventListener("click", function () {
      const menuNumber = this.getAttribute("data-menu");

      menuContents.forEach((content) => {
        content.classList.add("hidden");
      });

      menuButtons.forEach((btn) => {
        btn.classList.remove("bg-active-border");
      });

      const selectedContent = document.getElementById(
        `menu-content-${menuNumber}`
      );
      selectedContent.classList.remove("hidden");

      this.classList.add("bg-active-border");
      if (index === 1 || index === 2) {
        this.classList.add("text-gray-400");
      }
    });
  });
});

// ...........  menu-1 dynamic -content...........

document.addEventListener("DOMContentLoaded", function () {
  const mainDiv = document.querySelector(".menu-1");

  function appendDynamicContent(data) {
    const dynamicContent = document.createElement("div");
    dynamicContent.classList.add(
      "py-5",
      "border-b",
      "border-dotted",
      "border-gray-300"
    );

    dynamicContent.innerHTML = `
            <div class="flex items-center space-x-3">
                <div class="w-5 h-5 rounded-full bg-red-600"></div>
                <p class="text-sm font-medium text-gray-400">${data.timestamp}</p>
            </div>
            <p class="uppercase font-semibold mt-6">${data.title}</p>
        `;

    mainDiv.appendChild(dynamicContent);
  }

  const exampleData = [
    {
      timestamp: "20/03/2024 12:14:39hrs",
      title: "12 WOUNDED IN KYIV BY RUSSIAN MISSILE AND DRONE STRIKE",
    },
    {
      timestamp: "20/03/2024 12:14:39hrs-2",
      title: "12 WOUNDED IN KYIV BY RUSSIAN MISSILE AND DRONE STRIKE",
    },
    {
      timestamp: "20/03/2024 12:14:39hrs-3",
      title: "12 WOUNDED IN KYIV BY RUSSIAN MISSILE AND DRONE STRIKE",
    },
    {
      timestamp: "20/03/2024 12:14:39hrs",
      title: "12 WOUNDED IN KYIV BY RUSSIAN MISSILE AND DRONE STRIKE",
    },
    {
      timestamp: "20/03/2024 12:14:39hrs-2",
      title: "12 WOUNDED IN KYIV BY RUSSIAN MISSILE AND DRONE STRIKE",
    },
    {
      timestamp: "20/03/2024 12:14:39hrs-3",
      title: "12 WOUNDED IN KYIV BY RUSSIAN MISSILE AND DRONE STRIKE",
    },
  ];

  exampleData.forEach((data) => {
    appendDynamicContent(data);
  });
});

// .........menu show for small view........

document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("menuButton");
  const menuContent = document.getElementById("menuContent");

  menuButton.addEventListener("click", function () {
    menuContent.classList.toggle("hidden");
  });
});
