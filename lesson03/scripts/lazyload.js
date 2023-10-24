// returns: Tuesday, December 16, 2017 11:09:42
document.addEventListener("DOMContentLoaded", function() {
    // Get the current year
    const currentYear = new Date().getFullYear();
    
    // Get the last modified date and time
    const lastModified = new Date(document.lastModified);
    
    // Update the HTML elements with the obtained values
    document.getElementById("currentYear").textContent = currentYear;
    document.getElementById("lastModified").textContent = lastModified.toLocaleString();
});