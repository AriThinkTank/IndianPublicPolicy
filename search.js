document.addEventListener("DOMContentLoaded", function () {
  var searchInput = document.getElementById("search-input");
  var tagFiltersContainer = document.getElementById("tag-filters");
  var resultCount = document.getElementById("result-count");
  var cards = document.querySelectorAll(".project-card");
  var sections = document.querySelectorAll(".category-section");
  var categoryBtns = document.querySelectorAll(".category-btn");

  // Collect all unique tags
  var allTags = {};
  cards.forEach(function (card) {
    card.getAttribute("data-tags").split(",").forEach(function (t) {
      t = t.trim();
      if (t) allTags[t] = true;
    });
  });

  // Render tag filter buttons
  Object.keys(allTags).sort().forEach(function (tag) {
    var btn = document.createElement("button");
    btn.className = "tag-filter-btn";
    btn.textContent = tag;
    btn.setAttribute("data-tag", tag);
    btn.addEventListener("click", function () {
      btn.classList.toggle("active");
      filterProjects();
    });
    tagFiltersContainer.appendChild(btn);
  });

  // Category filter
  var activeCategory = "all";

  categoryBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      categoryBtns.forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
      activeCategory = btn.getAttribute("data-category");
      filterProjects();
    });
  });

  // Filter logic
  function filterProjects() {
    var query = searchInput.value.toLowerCase().trim();
    var activeTags = [];
    document.querySelectorAll(".tag-filter-btn.active").forEach(function (btn) {
      activeTags.push(btn.getAttribute("data-tag"));
    });

    var visible = 0;

    // First, show/hide sections based on category
    sections.forEach(function (section) {
      var sectionCat = section.getAttribute("data-category");
      if (activeCategory === "all" || sectionCat === activeCategory) {
        section.style.display = "";
      } else {
        section.style.display = "none";
      }
    });

    // Then filter cards within visible sections
    cards.forEach(function (card) {
      var section = card.closest(".category-section");
      if (section && section.style.display === "none") {
        card.style.display = "none";
        return;
      }

      var name = card.querySelector(".project-name").textContent.toLowerCase();
      var desc = card.querySelector(".project-desc").textContent.toLowerCase();
      var cardTags = card.getAttribute("data-tags").split(",");

      var matchesSearch = !query || name.indexOf(query) !== -1 || desc.indexOf(query) !== -1;
      var matchesTags = activeTags.length === 0 || activeTags.every(function (t) {
        return cardTags.indexOf(t) !== -1;
      });

      if (matchesSearch && matchesTags) {
        card.style.display = "";
        visible++;
      } else {
        card.style.display = "none";
      }
    });

    // Hide section headings if all cards in section are hidden
    sections.forEach(function (section) {
      if (section.style.display === "none") return;
      var visibleCards = section.querySelectorAll(".project-card:not([style*='display: none'])");
      section.style.display = visibleCards.length > 0 ? "" : "none";
    });

    resultCount.textContent = visible;
  }

  searchInput.addEventListener("input", filterProjects);

  // Initial count
  resultCount.textContent = cards.length;
});
