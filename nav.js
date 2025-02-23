document.addEventListener("DOMContentLoaded", () => {
    const navElement = document.createElement("div");
    fetch("nav.html")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load navigation");
        }
        return response.text();
      })
      .then((html) => {
        navElement.innerHTML = html;
        document.body.insertBefore(navElement.firstElementChild, document.body.firstChild);
      })
      .catch((error) => {
        console.error("Error loading navigation:", error);
      });
  });
  
  const menuBtn = document.getElementById('menu-btn');
  const navLinks = document.getElementById('nav-links');
  
  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show'); // Shton ose heq klasën për të shfaqur menynë
  });
  
  
  /*
  Kodi qe me thirr skripten per me funksionu footeri nkrejt nenfaqet
  */

fetch("footer.html")
  .then(response => {
      if (!response.ok) {
          throw new Error("Footer could not be loaded");
      }
        return response.text();
      })
      .then(data => {
          document.getElementById("footer").innerHTML = data;
      })
      .catch(error => console.error("Error loading footer:", error));