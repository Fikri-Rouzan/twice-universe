const menu = document.querySelector("#menu");
const navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

// Section about
function loadAboutSection() {
  const container = document.querySelector(".about .card");
  fetch("/src/data/about.json")
    .then((res) => res.json())
    .then((data) => {
      const cardBox = document.createElement("div");
      cardBox.className = "card-box";

      const image = document.createElement("img");
      image.src = data.image;
      image.alt = "Twice Group";
      cardBox.appendChild(image);

      data.paragraph.forEach((pText) => {
        const p = document.createElement("p");
        p.innerText = pText;
        cardBox.appendChild(p);
      });

      container.appendChild(cardBox);
    })
    .catch((error) => console.error("Error loading about data:", error));
}

// Section history
function loadHistorySection() {
  const container = document.querySelector(".history .card");
  fetch("/src/data/history.json")
    .then((res) => res.json())
    .then((historyData) => {
      historyData.forEach((item) => {
        const cardBox = document.createElement("div");
        cardBox.className = "card-box";

        const content = document.createElement("div");
        content.className = "content";

        const title = document.createElement("h3");
        title.innerText = item.title;
        content.appendChild(title);

        const subTitle = document.createElement("h4");
        subTitle.innerText = item.subTitle;
        content.appendChild(subTitle);

        item.paragraph.forEach((pText) => {
          const p = document.createElement("p");
          p.innerText = pText;
          content.appendChild(p);
        });

        cardBox.appendChild(content);
        container.appendChild(cardBox);
      });
    })
    .catch((error) => console.error("Error loading history data:", error));
}

// Section member
function loadMembersSection() {
  const container = document.querySelector(".member .card");
  fetch("/src/data/members.json")
    .then((res) => res.json())
    .then((members) => {
      members.forEach((member) => {
        const cardBox = document.createElement("div");
        cardBox.className = "card-box";

        const content = document.createElement("div");
        content.className = "content";

        const name = document.createElement("h3");
        name.innerText = member.name;

        const image = document.createElement("img");
        image.src = member.image;
        image.alt = member.name;

        const table = document.createElement("table");
        const tableData = [
          { label: "Posisi", value: member.position },
          { label: "TTL", value: member.birth },
          { label: "Zodiak", value: member.zodiac },
          { label: "TB", value: member.height },
          { label: "BB", value: member.weight },
        ];

        tableData.forEach((data) => {
          const row = table.insertRow();
          row.insertCell(0).innerText = data.label;
          row.insertCell(1).innerText = data.value;
        });

        content.appendChild(name);
        content.appendChild(image);
        content.appendChild(table);
        cardBox.appendChild(content);
        container.appendChild(cardBox);
      });
    })
    .catch((error) => console.error("Error loading member data:", error));
}

// Section information
function loadInformationSection() {
  const container = document.querySelector(".information .card");
  fetch("/src/data/information.json")
    .then((res) => res.json())
    .then((data) => {
      const cardBox = document.createElement("div");
      cardBox.className = "card-box";

      const image = document.createElement("img");
      image.src = data.image;
      image.alt = "Twice Information";
      cardBox.appendChild(image);

      const table = document.createElement("table");
      data.info.forEach((item) => {
        const row = table.insertRow();
        row.insertCell(0).innerText = item.label;
        row.insertCell(1).innerText = item.value;
      });

      cardBox.appendChild(table);
      container.appendChild(cardBox);
    })
    .catch((error) => console.error("Error loading information data:", error));
}

document.addEventListener("DOMContentLoaded", () => {
  loadAboutSection();
  loadHistorySection();
  loadMembersSection();
  loadInformationSection();
});
