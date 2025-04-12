// header.js
document.addEventListener("DOMContentLoaded", () => {
    const header = document.createElement("header");
    header.innerHTML = `
      <a href="index.html" class="title">The Creator (2023)</a>
      <nav>
        <div class="dropdown">
          <button class="dropbtn">Chapters</button>
          <div class="dropdown-content">
            ${Array.from({length: 10}, (_, i) => `<a href="chapter${i+1}.html">Chapter ${i+1}</a>`).join("")}
          </div>
        </div>
        <a href="summary.html">Summary</a>
        <a href="conclusions.html">Conclusions</a>
        <a href="minutes.html">Minutes</a>
        <a href="timeline.html">Timeline</a>
      </nav>
    `;
    document.body.prepend(header);
  });
  