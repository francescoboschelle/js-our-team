const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "./img/male1.png",
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "./img/female1.png",
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "./img/male2.png",
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "./img/female2.png",
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "./img/male3.png",
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "./img/female3.png",
  },
];

function addUserToHTML(user) {
  document.getElementById("cards-container").innerHTML += `
    <div class="col-12 col-md-6 col-xl-4">
          <div class="border-0 card bg-black flex-row">
            <img
              class="rounded-start"
              src="${user.img}"
              alt="User Profile"
              style="width: 120px; height: 120px"
            />
            <div
              class="col-8 card-body text-white text-start d-flex flex-column justify-content-between"
            >
              <div>
                <h4 class="fw-bolder mb-0">${user.name}</h4>
                <p class="mb-0">${user.role}</p>
              </div>
              <p class="text-primary fw-bold mb-0">${user.email}</p>
            </div>
          </div>
        </div>
        `;
}

for (const teamMember of teamMembers) {
  addUserToHTML(teamMember);
}

document.getElementsByTagName("form")[0].addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("inputName").value;
  const surname = document.getElementById("inputSurname").value;
  const role = document.getElementById("inputRole").value;
  const email = document.getElementById("inputEmail").value;
  const img = document.getElementById("inputFile");

  if (!name || !surname || !role || !email || !img) {
    alert("Input invalido!");
    return;
  }

  addUserToHTML({
    name: name + " " + surname,
    role,
    email,
    img: "./img/unknown.jpg",
  });
});
