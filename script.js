// Regra de versículos

// Ìndice

document.addEventListener("DOMContentLoaded", function() {
    var indexList = document.getElementById("index-list");
    var headers = document.querySelectorAll("main h2");
    headers.forEach(function(header) {
        var titleText = header.textContent;
        var id = header.id;
        var listItem = document.createElement("li");
        var link = document.createElement("a");
        link.href = "#" + id;  // O link aponta para o id do cabeçalho
        link.textContent = titleText;
        listItem.appendChild(link);
        indexList.appendChild(listItem);
    });
});


// toogle para cabeçalho
document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector(".toggle-button");
    const navLinks = document.querySelector(".nav-links");
  
    toggleButton.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  });
  