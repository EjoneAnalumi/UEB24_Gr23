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
  

  