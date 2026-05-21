/**
 * TTAT — Texnik tizimlarda axborot texnologiyalari
 * GitHub Pages uchun statik sayt funksionalligi
 */

(function () {
  "use strict";

  const MARUZALAR = [
    { path: "pdf/maruza/1-mavzu.pdf", badge: "1-mavzu", title: "Texnik tizimlarda axborot texnologiyalari faniga kirish." },
    { path: "pdf/maruza/2-mavzu.pdf", badge: "2-mavzu", title: "Zamonaviy avtomatlashtirilgan loyihalash tizimlari." },
    { path: "pdf/maruza/3-mavzu.pdf", badge: "3-mavzu", title: "Zamonaviy dasturlash texnologiyalari. Dasturlash tillari va tizimlari." },
    { path: "pdf/maruza/4-mavzu.pdf", badge: "4-mavzu", title: "Algoritmlar. Xossalari, turlari. Blok – sxemalar." },
    { path: "pdf/maruza/5-mavzu.pdf", badge: "5-mavzu", title: "Python dasturlash tili va muhiti. Dastur elementlari. Alifbosi. Identifikatorlar." },
    { path: "pdf/maruza/6-mavzu.pdf", badge: "6-mavzu", title: "Python dasturlash tilida ma'lumotlar va ularning turlari. Ifodalar. Operatorlar." },
    { path: "pdf/maruza/7-mavzu.pdf", badge: "7-mavzu", title: "Tarmoqlanuvchi jarayonlarga dasturlar tuzish." },
    { path: "pdf/maruza/8-mavzu.pdf", badge: "8-mavzu", title: "Tarmoqlanuvchi jarayonlarga dasturlar tuzish." },
    { path: "pdf/maruza/9-mavzu.pdf", badge: "9-mavzu", title: "O'tish break, tanlash continue operatorlari." },
    { path: "pdf/maruza/10-mavzu.pdf", badge: "10-mavzu", title: "O'tish break, tanlash continue operatorlari." },
    { path: "pdf/maruza/11-mavzu.pdf", badge: "11-mavzu", title: "Python dasturlash tilida massivlar. Bir o'lchovli massivlar. Ko'p o'lchovli massivlar." },
    { path: "pdf/maruza/12-mavzu.pdf", badge: "12-mavzu", title: "Texnik tizimlarda hisoblash texnologiyalari." },
    { path: "pdf/maruza/13-mavzu.pdf", badge: "13-mavzu", title: "Differensial tenglamalarni taqribiy yechish algoritmi va dasturlari." },
    { path: "pdf/maruza/14-mavzu.pdf", badge: "14-mavzu", title: "Texnik tizimlardagi hisoblash masalalari. Chiziqli dasturlash masalalari." },
    { path: "pdf/maruza/15-mavzu.pdf", badge: "15-mavzu", title: "Transport masalasini yechish usullari." },
  ];

  const LABORATORIYA = [
    { path: "pdf/laboratoriya/1-lab.pdf", badge: "1-lab ishi", title: "Muhandislik masalalarini elektron jadvallar yordamida yechish." },
    { path: "pdf/laboratoriya/2-lab.pdf", badge: "2-lab ishi", title: "MathCAD dasturida muhandislik masalalarini yechish, grafik imkoniyatlardan foydalanish." },
    { path: "pdf/laboratoriya/3-lab.pdf", badge: "3-lab ishi", title: "Python dasturlash tili interfeysi. Unda ishlash." },
    { path: "pdf/laboratoriya/4-lab.pdf", badge: "4-lab ishi", title: "Shartli o'tish operatori. U yordamida dasturlar tuzish." },
    { path: "pdf/laboratoriya/5-lab.pdf", badge: "5-lab ishi", title: "Funksiya va protseduralar yordamida dasturlar tuzish." },
    { path: "pdf/laboratoriya/6-lab.pdf", badge: "6-lab ishi", title: "Amaliy dasturlardan foydalanib aniq integrallarni taqribiy hisoblash." },
    { path: "pdf/laboratoriya/7-lab.pdf", badge: "7-lab ishi", title: "Chiziqli dasturlash masalalarini amaliy dasturlar orqali yechish." },
  ];

  const AMALIY = [
    { path: "pdf/amaliy/1-amaliy.pdf", badge: "1-amaliy ish", title: "Texnik tizimlarda murakkab hujjatlar yaratish va qayta ishlash texnologiyasi." },
    { path: "pdf/amaliy/2-amaliy.pdf", badge: "2-amaliy ish", title: "MathCAD integrallash sohasida muhandislik masalalarini yechish." },
    { path: "pdf/amaliy/3-amaliy.pdf", badge: "3-amaliy ish", title: "Chiziqli, tarmoqlanuvchi va takrorlanuvchi jarayonlarga algoritmlar tuzish." },
    { path: "pdf/amaliy/4-amaliy.pdf", badge: "4-amaliy ish", title: "Python dasturlash tilida ifodalar, operatorlar. Ma'lumotlarni kiritish va chiqarish operatorlari." },
    { path: "pdf/amaliy/5-amaliy.pdf", badge: "5-amaliy ish", title: "Takrorlanuvchi operatorlar, break, continue operatorlari va ular yordamida dasturlar tuzish." },
    { path: "pdf/amaliy/6-amaliy.pdf", badge: "6-amaliy ish", title: "Python dasturlash tilida massivlar. Bir o'lchovli massivlar. Ko'p o'lchovli massivlar." },
    { path: "pdf/amaliy/7-amaliy.pdf", badge: "7-amaliy ish", title: "Differensial tenglamalarni amaliy dasturlar orqali yechish." },
    { path: "pdf/amaliy/8-amaliy.pdf", badge: "8-amaliy ish", title: "Transport masalasini yechishning potensiallar usuli." },
  ];

  const navToggle = document.getElementById("navToggle");
  const mainNav = document.getElementById("mainNav");
  const navLinks = document.querySelectorAll(".nav__link");
  const sections = document.querySelectorAll("section[id]");
  const backToTop = document.getElementById("backToTop");
  const contactForm = document.getElementById("contactForm");
  const currentYear = document.getElementById("currentYear");

  function createPdfCard(item) {
    const fileName = item.path.split("/").pop();
    return (
      '<article class="card card--pdf" data-pdf="' +
      item.path +
      '">' +
      '<span class="card__badge">' +
      item.badge +
      "</span>" +
      '<h3 class="card__title">' +
      item.title +
      "</h3>" +
      '<div class="card__actions">' +
      '<a href="' +
      item.path +
      '" class="btn btn--primary pdf-open" target="_blank" rel="noopener">PDF ni ochish</a>' +
      '<a href="' +
      item.path +
      '" class="btn btn--secondary" download="' +
      fileName +
      '">Yuklab olish</a>' +
      "</div></article>"
    );
  }

  function renderPdfGrids() {
    const maruzaGrid = document.getElementById("maruzaGrid");
    const labGrid = document.getElementById("labGrid");
    const amaliyGrid = document.getElementById("amaliyGrid");

    if (maruzaGrid) {
      maruzaGrid.innerHTML = MARUZALAR.map(createPdfCard).join("");
    }
    if (labGrid) {
      labGrid.innerHTML = LABORATORIYA.map(createPdfCard).join("");
    }
    if (amaliyGrid) {
      amaliyGrid.innerHTML = AMALIY.map(createPdfCard).join("");
    }
  }

  function initMobileNav() {
    if (!navToggle || !mainNav) return;

    navToggle.addEventListener("click", function () {
      const isOpen = mainNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
      navToggle.setAttribute("aria-label", isOpen ? "Menyuni yopish" : "Menyuni ochish");
    });

    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        mainNav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });

    document.addEventListener("click", function (e) {
      if (
        mainNav.classList.contains("is-open") &&
        !mainNav.contains(e.target) &&
        !navToggle.contains(e.target)
      ) {
        mainNav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  function initScrollSpy() {
    if (!sections.length) return;

    const headerHeight =
      parseInt(
        getComputedStyle(document.documentElement).getPropertyValue("--header-height"),
        10
      ) || 72;

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          const id = entry.target.getAttribute("id");
          navLinks.forEach(function (link) {
            const href = link.getAttribute("href");
            link.classList.toggle("is-active", href === "#" + id);
          });
        });
      },
      {
        rootMargin: "-" + headerHeight + "px 0px -60% 0px",
        threshold: 0,
      }
    );

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

  function initBackToTop() {
    if (!backToTop) return;

    window.addEventListener("scroll", function () {
      if (window.scrollY > 400) {
        backToTop.removeAttribute("hidden");
      } else {
        backToTop.setAttribute("hidden", "");
      }
    });

    backToTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  function showToast(message) {
    let toast = document.querySelector(".toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.className = "toast";
      toast.setAttribute("role", "status");
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add("is-visible");
    setTimeout(function () {
      toast.classList.remove("is-visible");
    }, 3500);
  }

  function isFormConfigured() {
    const cfg = window.FORM_CONFIG;
    if (!cfg || !cfg.endpoint) return false;
    return cfg.endpoint.indexOf("REPLACE_FORM_ID") === -1;
  }

  function setFormStatus(message, type) {
    const statusEl = document.getElementById("formStatus");
    if (!statusEl) return;
    if (!message) {
      statusEl.hidden = true;
      statusEl.textContent = "";
      statusEl.className = "form-status";
      return;
    }
    statusEl.hidden = false;
    statusEl.textContent = message;
    statusEl.className = "form-status form-status--" + (type || "info");
  }

  function initContactForm() {
    if (!contactForm) return;

    const submitBtn = document.getElementById("contactSubmitBtn");

    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const nameField = contactForm.querySelector('[name="name"]');
      const emailField = contactForm.querySelector('[name="email"]');
      const messageField = contactForm.querySelector('[name="message"]');
      let valid = true;

      [nameField, emailField, messageField].forEach(function (field) {
        field.classList.remove("is-invalid");
        if (!field.value.trim()) {
          field.classList.add("is-invalid");
          valid = false;
        }
      });

      if (emailField.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField.value)) {
        emailField.classList.add("is-invalid");
        valid = false;
      }

      if (!valid) {
        setFormStatus("Iltimos, barcha maydonlarni to'g'ri to'ldiring.", "error");
        showToast("Maydonlarni tekshiring.");
        return;
      }

      const honeypot = contactForm.querySelector('[name="_gotcha"]');
      if (honeypot && honeypot.value.trim()) {
        return;
      }

      if (!isFormConfigured()) {
        setFormStatus(
          "Forma hali sozlanmagan. form-config.js faylida Formspree endpoint ni kiriting.",
          "error"
        );
        showToast("Formspree endpoint sozlanmagan.");
        return;
      }

      const cfg = window.FORM_CONFIG;
      const fd = new FormData();
      fd.append("name", nameField.value.trim());
      fd.append("email", emailField.value.trim());
      fd.append("message", messageField.value.trim());
      fd.append("_replyto", emailField.value.trim());
      fd.append("_subject", cfg.subject || "TTAT sayti — yangi xabar");

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Yuborilmoqda...";
      }
      setFormStatus("Xabar yuborilmoqda, kuting...", "info");

      fetch(cfg.endpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: fd,
      })
        .then(function (response) {
          return response.json().then(function (data) {
            if (!response.ok) {
              var msg =
                (data && data.error) ||
                (data && data.errors && data.errors[0] && data.errors[0].message) ||
                "Yuborishda xatolik yuz berdi (HTTP " + response.status + ").";
              throw new Error(msg);
            }
            if (data && data.error) {
              throw new Error(data.error);
            }
            return data;
          });
        })
        .then(function () {
          contactForm.reset();
          setFormStatus(
            "Rahmat! Xabaringiz qabul qilindi. Xabar administrator emailiga yuborildi.",
            "success"
          );
          showToast("Habar yuborildi !");
        })
        .catch(function (err) {
          console.error("Forma xatosi:", err);
          setFormStatus(
            err.message || "Xabar yuborilmadi. Keyinroq qayta urinib ko'ring.",
            "error"
          );
          showToast("Xabar yuborilmadi.");
        })
        .finally(function () {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = "Yuborish";
          }
        });
    });
  }

  function initYear() {
    if (currentYear) {
      currentYear.textContent = new Date().getFullYear();
    }
  }

  function init() {
    renderPdfGrids();
    initMobileNav();
    initScrollSpy();
    initBackToTop();
    initContactForm();
    initYear();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
