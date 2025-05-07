// header.js
document.addEventListener("DOMContentLoaded", () => {
  // Create header element
  const header = document.createElement("header");

  // Get current page for active state
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  // Create header content
  header.innerHTML = `
    <a href="index.html" class="title">The Creator (2023)</a>
    <button class="mobile-menu-toggle" aria-label="Toggle menu">
      <span></span>
      <span></span>
      <span></span>
    </button>
    <nav>
      <div class="dropdown">
        <button class="dropbtn">Chapters</button>
        <div class="dropdown-content">
          ${Array.from({length: 8}, (_, i) => {
            if(i!=4) {
              const href = `chapter${i + 3}.html`;
              const isActive = href === currentPage ? 'active' : '';
              return `<a href="${href}" class="${isActive}">Chapter ${i + 3}</a>`;
            }
          }).join("")}
        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn">Background</button>
        <div class="dropdown-content">
          ${[
            { href: "interviews.html", text: "Director Interviews" },
            { href: "tech-start.html", text: "Tech at the Start of Production" },
          ].map(item => {
            const isActive = item.href === currentPage ? 'active' : '';
            return `<a href="${item.href}" class="${isActive}">${item.text}</a>`;
          }).join("")}
        </div>
      </div>
      ${[
        { href: "summary.html", text: "Synopsis" },
        { href: "claims.html", text: "Claims" },
        { href: "minutes.html", text: "Minutes" },
        { href: "timeline.html", text: "Timeline" }
      ].map(item => {
        const isActive = item.href === currentPage ? 'active' : '';
        return `<a href="${item.href}" class="${isActive}">${item.text}</a>`;
      }).join("")}
    </nav>
  `;

  // Add header to the page
  document.body.prepend(header);

  const footer = document.createElement("footer");

  // add footer content

  footer.innerHTML = `
    <div class="footer-content">
        <div class="footer-section">
            <h3>The Creator Project</h3>
        </div>
    </div>
`;

  // Add footer to page
  document.body.append(footer);

  // Mobile menu toggle functionality
  const menuToggle = header.querySelector('.mobile-menu-toggle');
  const nav = header.querySelector('nav');

  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    menuToggle.classList.toggle('active');
    document.body.classList.toggle('menu-open');
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown') && !e.target.closest('.mobile-menu-toggle')) {
      const dropdowns = document.querySelectorAll('.dropdown-content');
      dropdowns.forEach(dropdown => {
        dropdown.parentElement.classList.remove('active');
      });

      // Also close mobile menu if clicking outside
      if (!e.target.closest('nav') && nav.classList.contains('active')) {
        nav.classList.remove('active');
        menuToggle.classList.remove('active');
        document.body.classList.remove('menu-open');
      }
    }
  });
});
;(function() {
  var gaScript = document.createElement('script');
  gaScript.async = true;
  gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-8ZKT35B9VR';
  document.head.appendChild(gaScript);
  window.dataLayer = window.dataLayer || [];
  function gtag(){ window.dataLayer.push(arguments); }
  window.gtag = gtag; // expose it globally if you ever need to call it elsewhere
  gtag('js', new Date());
  gtag('config', 'G-8ZKT35B9VR');
})();
