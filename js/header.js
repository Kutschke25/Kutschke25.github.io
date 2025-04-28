// header.js
document.addEventListener("DOMContentLoaded", () => {
    const header = document.createElement("header");
    header.innerHTML = `
      <a href="index.html" class="title">The Creator (2023)</a>
      <nav>
        <div class="dropdown">
          <button class="dropbtn">Chapters</button>
          <div class="dropdown-content">
            ${Array.from({length: 8}, (_, i) => `<a href="chapter${i + 3}.html">Chapter ${i + 3}</a>`).join("")}
          </div>
        </div>
        <div class="dropdown">
          <button class="dropbtn">Background</button>
          <div class="dropdown-content">
            <a href="interviews.html">Director Interviews</a>
            <a href="tech-start.html">Tech at the Start of Production</a>
            <a href="tech-during.html">Tech During Production</a>
          </div>
        </div>
        <a href="summary.html">Synopsis</a>
        <a href="conclusions.html">Conclusions</a>
        <a href="minutes.html">Minutes</a>
        <a href="timeline.html">Timeline</a>
      </nav>
    `;
    document.body.prepend(header);
  });
  