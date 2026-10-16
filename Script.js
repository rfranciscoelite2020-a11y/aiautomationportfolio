/* ===== Randolf Francisco — Static Handoff Script ===== */
(function () {
  "use strict";

  /* ---------- Data ---------- */
  var SERVICES = [
    { title: "GoHighLevel CRM Setup", description: "Build a clean and organized GoHighLevel CRM with pipelines, custom fields, tags, calendars, forms, and workflows designed around your sales process.", tags: ["GHL", "CRM", "Pipelines", "Custom Fields"] },
    { title: "Funnels & Landing Pages", description: "Build mobile-friendly landing pages, lead capture forms, booking pages, and funnel experiences designed to move visitors toward the next step.", tags: ["Funnels", "Landing Pages", "Forms", "Booking"] },
    { title: "Lead Capture & Follow-Up", description: "Make sure new leads receive a fast and consistent response with automated SMS, email, and nurturing sequences.", tags: ["Leads", "SMS", "Email", "Nurture"] },
    { title: "CRM Workflows & Automation", description: "Automate pipeline movement, notifications, reminders, lead assignments, follow-up, and repetitive CRM tasks.", tags: ["Workflows", "Automation", "Pipelines", "Triggers"] },
    { title: "AI Automation", description: "Implement practical AI workflows that can help answer questions, qualify leads, collect information, and move prospects toward an appointment.", tags: ["AI", "Qualification", "Conversations", "Booking"] },
    { title: "Integrations & Webhooks", description: "Connect GoHighLevel with Zapier, Make, webhooks, and other tools to move information between systems and eliminate repetitive manual work.", tags: ["Zapier", "Make", "Webhooks", "Integrations"] },
    { title: "AI Chatbots & Assistants", description: "Create AI-powered conversations that can handle common questions, capture lead information, and guide prospects toward the appropriate next step.", tags: ["AI", "Chatbots", "Assistants"] },
    { title: "AI Voice Agents", description: "Build AI voice workflows that can handle initial conversations, qualify prospects, capture information, and support appointment booking.", tags: ["AI Voice", "Calls", "Qualification"] },
    { title: "SaaS & Agency Systems", description: "Configure GoHighLevel SaaS and agency systems including snapshots, sub-accounts, workflows, and client-facing CRM infrastructure.", tags: ["GHL SaaS", "Snapshots", "Agencies"] },
  ];

  var PROCESS_STEPS = [
    { title: "Discover", desc: "Understand your current lead flow, sales process, tools, and bottlenecks." },
    { title: "Map", desc: "Map the customer journey and identify where automation can save time or prevent missed opportunities." },
    { title: "Build", desc: "Build the CRM, funnels, workflows, AI, integrations, and communication sequences." },
    { title: "Test", desc: "Test the system from the customer's perspective and verify that every trigger and handoff works correctly." },
    { title: "Optimize", desc: "Refine the system so it stays simple, reliable, and aligned with your business process." },
  ];

  var FEATURED_WORK = [
    { title: "Automated Lead Follow-Up", category: "Automation", image: "https://vibe.filesafe.space/1791315453635884226/assets/2933f344-4892-46d8-9e2b-15fadef1383e.png", problem: "New leads required fast and consistent follow-up, but too much of the process depended on manual work.", system: "Built a GoHighLevel workflow connecting lead capture, personalized SMS and email, CRM updates, appointment booking, reminders, and internal notifications.", workflow: ["Lead", "Form", "CRM", "SMS", "Email", "Follow-Up", "Booking", "Reminder"], result: "Less manual work and a consistent follow-up process from first inquiry through booked appointment." },
    { title: "AI Lead Qualification", category: "AI", image: "https://vibe.filesafe.space/1791315453635884226/assets/56e56bc2-a217-4068-8018-60249d818cdf.png", problem: "Sales teams were spending too much time handling repetitive questions and manually qualifying prospects.", system: "Created an AI-powered conversation flow designed to answer common questions, collect lead information, qualify prospects, and guide qualified leads toward booking.", workflow: ["Question", "AI Reply", "Qualify", "Capture", "Route", "Book"], result: "Sales conversations focused on qualified prospects, with faster response to genuine leads." },
    { title: "CRM & Pipeline Automation", category: "CRM", image: "https://vibe.filesafe.space/1791315453635884226/assets/78732a37-6510-4a09-84d0-c71f8ead188d.png", problem: "Leads were difficult to track because pipeline movement and follow-up relied on manual updates.", system: "Built automated pipeline stages, triggers, notifications, assignments, follow-up sequences, and appointment status updates.", workflow: ["New Lead", "Stage", "Assign", "Notify", "Follow-Up", "Status"], result: "Every lead tracked end-to-end with real-time visibility into pipeline stage and appointment status." },
  ];

  var WHY_REASONS = [
    { icon: "🎯", title: "Business-First Thinking", desc: "I focus on the problem behind the automation, not just the workflow itself." },
    { icon: "🗄", title: "Clean Systems", desc: "Your CRM should be organized enough that your team knows exactly what is happening with every lead." },
    { icon: "🛡", title: "Reliable Automation", desc: "I test workflows from the lead's perspective to make sure triggers, messages, pipeline updates, and appointments work together." },
    { icon: "💬", title: "Clear Communication", desc: "You should always understand what was built, why it was built, and how it works." },
  ];

  var TOOLS = ["GoHighLevel", "CRM", "Funnels", "Workflows", "Calendars", "SMS", "Email", "AI", "Zapier", "Make", "Webhooks", "Integrations"];

  /* ---------- Render helpers ---------- */
  function el(html) { var t = document.createElement("template"); t.innerHTML = html.trim(); return t.content.firstChild; }

  function renderServices() {
    var grid = document.getElementById("services-grid");
    if (!grid) return;
    SERVICES.forEach(function (s, i) {
      var tags = s.tags.map(function (t) { return '<li>' + t + '</li>'; }).join("");
      var node = el('<article class="reveal service-card" data-delay="' + (i % 3) * 90 + '">' +
        '<div class="service-arrow"><span>↗</span></div>' +
        '<h3>' + s.title + '</h3>' +
        '<p>' + s.description + '</p>' +
        '<ul class="service-tags">' + tags + '</ul>' +
        '</article>');
      grid.appendChild(node);
    });
  }

  function renderProcess() {
    var grid = document.getElementById("process-grid");
    if (!grid) return;
    PROCESS_STEPS.forEach(function (s, i) {
      grid.appendChild(el('<div class="reveal process-card" data-delay="' + (i % 5) * 80 + '">' +
        '<h3>' + s.title + '</h3><p>' + s.desc + '</p></div>'));
    });
  }

  function renderWork() {
    var list = document.getElementById("work-list");
    if (!list) return;
    FEATURED_WORK.forEach(function (p, i) {
      var flow = p.workflow.map(function (step, idx) {
        var chip = '<span class="flow-chip">' + step + '</span>';
        var arrow = idx < p.workflow.length - 1 ? '<span class="flow-arrow">→</span>' : '';
        return chip + arrow;
      }).join("");
      list.appendChild(el('<article class="reveal work-card" data-delay="' + (i % 3) * 80 + '">' +
        '<div class="work-visual"><span class="work-cat">' + p.category + '</span><img src="' + p.image + '" alt="' + p.title + '" loading="lazy" /></div>' +
        '<div class="work-narrative">' +
        '<h3>' + p.title + '</h3>' +
        '<div class="narrative-row"><span class="narrative-tag tag-problem">Problem</span><p>' + p.problem + '</p></div>' +
        '<div class="narrative-row system"><span class="narrative-tag tag-system">System</span><p>' + p.system + '</p></div>' +
        '<div class="narrative-row result"><span class="narrative-tag tag-result">Result</span><p>' + p.result + '</p></div>' +
        '<div class="work-flow">' + flow + '</div>' +
        '</div></article>'));
    });
  }

  function renderWhy() {
    var grid = document.getElementById("why-grid");
    if (!grid) return;
    WHY_REASONS.forEach(function (r, i) {
      grid.appendChild(el('<div class="reveal why-card" data-delay="' + (i % 2) * 90 + '">' +
        '<div class="why-icon">' + r.icon + '</div>' +
        '<div><h3>' + r.title + '</h3><p>' + r.desc + '</p></div></div>'));
    });
  }

  function renderTools() {
    var row = document.getElementById("tools-row");
    if (!row) return;
    TOOLS.forEach(function (t, i) {
      row.appendChild(el('<span class="reveal tool-chip" data-delay="' + i * 40 + '">' + t + '</span>'));
    });
  }

  /* ---------- Reveal on scroll ---------- */
  function initReveal() {
    var nodes = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window) || (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches)) {
      nodes.forEach(function (n) { n.classList.add("visible"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          var d = e.target.getAttribute("data-delay");
          if (d) e.target.style.transitionDelay = d + "ms";
          e.target.classList.add("visible");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    nodes.forEach(function (n) { io.observe(n); });
  }

  /* ---------- Header scroll + active nav ---------- */
  function initHeader() {
    var header = document.getElementById("site-header");
    var onScroll = function () { if (window.scrollY > 24) header.classList.add("scrolled"); else header.classList.remove("scrolled"); };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    var links = document.querySelectorAll("#nav-pill a");
    var ids = ["services", "work", "process", "about", "contact"];
    var sections = ids.map(function (id) { return document.getElementById(id); }).filter(Boolean);
    if ("IntersectionObserver" in window && sections.length) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            links.forEach(function (l) { l.classList.toggle("active", l.getAttribute("data-id") === e.target.id); });
          }
        });
      }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });
      sections.forEach(function (s) { io.observe(s); });
    }

    var toggle = document.getElementById("menu-toggle");
    var drawer = document.getElementById("mobile-drawer");
    if (toggle && drawer) {
      toggle.addEventListener("click", function () { drawer.classList.toggle("open"); });
      drawer.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", function () { drawer.classList.remove("open"); }); });
    }
  }

  /* ---------- Contact form ---------- */
  function initForm() {
    var form = document.getElementById("contact-form");
    var success = document.getElementById("form-success");
    var reset = document.getElementById("reset-form");
    if (!form || !success) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = form.querySelector('[name="name"]');
      var email = form.querySelector('[name="email"]');
      if (!name.value || !email.value) { alert("Please enter your name and email."); return; }
      form.classList.add("hidden");
      success.classList.remove("hidden");
    });
    if (reset) {
      reset.addEventListener("click", function () {
        form.reset();
        form.classList.remove("hidden");
        success.classList.add("hidden");
      });
    }
  }

  /* ---------- Year ---------- */
  function initYear() { var y = document.getElementById("year"); if (y) y.textContent = new Date().getFullYear(); }

  /* ---------- Init ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    renderServices();
    renderProcess();
    renderWork();
    renderWhy();
    renderTools();
    initReveal();
    initHeader();
    initForm();
    initYear();
  });
})();
