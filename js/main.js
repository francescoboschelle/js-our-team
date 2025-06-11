const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png",
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png",
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png",
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png",
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png",
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png",
  },
];

const cardContainer = document.getElementById("cards-container");

for (const teamMember of teamMembers) {
  cardContainer.innerHTML += `
    <div class="col-12 col-md-6 col-xl-4">
          <div class="border-0 card bg-black flex-row">
            <img
              class="rounded-start"
              src="./${teamMember.img}"
              alt="Male 1"
              style="max-width: 120px; max-height: 120px"
            />
            <div
              class="col-8 card-body text-white text-start d-flex flex-column justify-content-between"
            >
              <div>
                <h4 class="fw-bolder mb-0">${teamMember.name}</h4>
                <p class="mb-0">${teamMember.role}</p>
              </div>
              <p class="text-primary fw-bold mb-0">${teamMember.email}</p>
            </div>
          </div>
        </div>
        `;
}
