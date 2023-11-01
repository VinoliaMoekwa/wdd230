// Check if localStorage has a visit timestamp
if (localStorage.getItem('lastVisitTimestamp')) {
    // Retrieve the stored timestamp
    const storedTimestamp = new Date(localStorage.getItem('lastVisitTimestamp'));
  
    // Get the current timestamp
    const currentTimestamp = new Date();
  
    // Calculate the time difference in milliseconds
    const timeDifference = currentTimestamp - storedTimestamp;
  
    // Calculate the number of days
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  
    // Display different messages based on the number of days
    if (daysDifference === 0) {
      document.getElementById('message').textContent = 'Back so soon! Awesome!';
    } else if (daysDifference === 1) {
      document.getElementById('message').textContent = 'You last visited 1 day ago.';
    } else {
      document.getElementById('message').textContent = `You last visited ${daysDifference} days ago.`;
    }
  } else {
    // If this is the user's first visit, display a welcome message
    document.getElementById('message').textContent = 'Welcome! Let us know if you have any questions.';
  }
  
  // Update the localStorage with the current visit timestamp
  localStorage.setItem('lastVisitTimestamp', new Date());
  