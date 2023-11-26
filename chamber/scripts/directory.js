//Json script 
document.addEventListener("DOMContentLoaded", function () {
    const membersContainer = document.getElementById("membersContainer");
    const viewToggle = document.querySelectorAll('input[name="view"]');
  
    // Load JSON data
    fetch('data/members.json')
      .then(response => response.json())
      .then(data => displayMembers(data.members));
  
    // Display members based on the selected view
    function displayMembers(members) {
      viewToggle.forEach(input => {
        input.addEventListener("change", function () {
          membersContainer.innerHTML = "";
          const view = this.value;
          if (view === "grid") {
            displayGrid(members);
          } else if (view === "list") {
            displayList(members);
          }
        });
      });
  
      // Initial display
      displayGrid(members);
    }
  
    // Display members as cards
    function displayGrid(members) {
      members.forEach(member => {
        const card = document.createElement("div");
        card.classList.add("member-card");
        card.innerHTML = `
          <h3>${member.name}</h3>
          <p>${member.address}</p>
          <p>${member.phone}</p>
          <p><a href="${member.website}" target="_blank">${member.website}</a></p>
          <img src="images/${member.image}" alt="${member.name}">
          <p>Membership Level: ${member.membership_level}</p>
          <p>${member.other_info}</p>
        `;
        membersContainer.appendChild(card);
      });
    }
  
    // Display members as a list
    function displayList(members) {
      members.forEach(member => {
        const listItem = document.createElement("div");
        listItem.classList.add("member-list-item");
        listItem.innerHTML = `
          <h3>${member.name}</h3>
          <p>${member.address}</p>
          <p>${member.phone}</p>
          <p><a href="${member.website}" target="_blank">${member.website}</a></p>
          <p>Membership Level: ${member.membership_level}</p>
          <p>${member.other_info}</p>
        `;
        membersContainer.appendChild(listItem);
      });
    }
  });
  