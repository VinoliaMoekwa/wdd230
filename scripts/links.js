// links.js

// Root repository URL
const baseURL = "https://vinoliamoekwa.github.io/wdd230/";

// URL for the links.json data file
const linksURL = "https://vinoliamoekwa.github.io/wdd230/data/links.json";

// Asynchronous function to get the links data
async function getLinks() {
  try {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
  } catch (error) {
    console.error("Error fetching links:", error);
  }
}

// Call the function to fetch links data
getLinks();

// Function to display activity links
function displayLinks(weeks) {
  // Get the UL element where the links will be appended
  const ul = document.querySelector('#ul');

  // Loop through each week in the provided array
  weeks.lessons.forEach(week => {
    // Create a new LI element for this week
    const li = document.createElement('li');

    // Loop through each link in the "links" object for this week
    week.links.forEach(link => {
      // Create a new A element for each link
      const a = document.createElement('a');
      a.href = baseURL + link.url; // Combine baseURL with relative URL
      a.textContent = link.title;
      a.target = '_blank';

      // Append the A element to the LI element
      li.appendChild(a);

      // If there are more links in this week, add a separator
      if (week.links.indexOf(link) < week.links.length - 1) {
        const separator = document.createTextNode(' | ');
        li.appendChild(separator);
      }
    });

    // Append the LI element to the UL
    ul.appendChild(li);
  });
}
