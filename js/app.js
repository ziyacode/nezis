// ===================================================
// Ziya & Nəzrin — Əsas Tətbiq və İnteraktivlik Məntiqi
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
  // ==========================================
  // 1. ŞİFRƏLİ GİRİŞ SİSTEMİ (KOD: 3107)
  // ==========================================
  const SECRET_PIN = "3107";
  let enteredPin = "";

  const lockScreen = document.getElementById("lock-screen");
  const lockCard = document.getElementById("lock-card");
  const pinDots = document.querySelectorAll(".pin-dot");
  const keyButtons = document.querySelectorAll(".key-btn");
  const hintBtn = document.getElementById("hint-btn");
  const hintText = document.getElementById("hint-text");
  const mainSite = document.getElementById("main-site");

  function updatePinDots() {
    pinDots.forEach((dot, idx) => {
      if (idx < enteredPin.length) {
        dot.classList.add("filled");
      } else {
        dot.classList.remove("filled", "error");
      }
    });
  }

  function checkPin() {
    if (enteredPin.length !== 4) return;

    if (enteredPin === SECRET_PIN) {
      // Şifrə Düzgündür!
      if (window.romanticAudio) window.romanticAudio.playUnlockSuccess();

      // Möhtəşəm partlayışlar
      const rect = lockCard.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      if (window.createHeartBurst) {
        window.createHeartBurst(centerX, centerY, 50);
        setTimeout(() => window.createHeartBurst(centerX, centerY, 40), 200);
      }
      if (window.spawnFloatingLoveWord) {
        window.spawnFloatingLoveWord(centerX, centerY - 80);
      }

      // Kilidi aç və əsas saytı göstər
      setTimeout(() => {
        lockScreen.classList.add("unlocked");
        mainSite.classList.add("active");
        if (window.initProMusicPlayer) window.initProMusicPlayer();
        if (window.romanticAudio) window.romanticAudio.startAmbientMelody();
        initFloatingBubbles();
      }, 600);
    } else {
      // Yanlış Şifrə!
      if (window.romanticAudio) window.romanticAudio.playErrorBuzz();

      pinDots.forEach((dot) => dot.classList.add("error"));
      lockCard.classList.add("shake-card");
      hintText.textContent = "Yanlış şifrə! Ürəyinin səsini dinlə... 🥺💖";
      hintText.style.color = "#ff4d6d";

      setTimeout(() => {
        lockCard.classList.remove("shake-card");
        enteredPin = "";
        updatePinDots();
      }, 800);
    }
  }

  function handleInputKey(digit) {
    if (enteredPin.length < 4) {
      enteredPin += digit;
      if (window.romanticAudio) window.romanticAudio.playKeyClick();
      updatePinDots();
      if (enteredPin.length === 4) {
        setTimeout(checkPin, 150);
      }
    }
  }

  function handleBackspace() {
    if (enteredPin.length > 0) {
      enteredPin = enteredPin.slice(0, -1);
      if (window.romanticAudio) window.romanticAudio.playKeyClick();
      updatePinDots();
    }
  }

  keyButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const digit = btn.dataset.key;
      const action = btn.dataset.action;

      if (digit) {
        handleInputKey(digit);
      } else if (action === "backspace") {
        handleBackspace();
      }
    });
  });

  // Fiziki klaviatura dəstəyi
  window.addEventListener("keydown", (e) => {
    if (lockScreen.classList.contains("unlocked")) return;

    if (e.key >= "0" && e.key <= "9") {
      handleInputKey(e.key);
    } else if (e.key === "Backspace") {
      handleBackspace();
    }
  });

  // İpucu düyməsi
  hintBtn.addEventListener("click", () => {
    hintText.textContent = "🌸 İpucu: Nəzrinin ad günü ✨";
    hintText.style.color = "#ffd166";
    if (window.romanticAudio) window.romanticAudio.playKeyClick();
  });

  // ==========================================
  // 2. CANLI SEVGİ SAYĞACI (02.08.2026-dan İNDİYƏ)
  // ==========================================
  // Başlanğıc: 02 Avqust 2026 00:00:00
  const startDate = new Date("2026-08-02T00:00:00");

  const daysEl = document.getElementById("count-days");
  const hoursEl = document.getElementById("count-hours");
  const minutesEl = document.getElementById("count-minutes");
  const secondsEl = document.getElementById("count-seconds");

  function updateLoveCounter() {
    const now = new Date();
    const diffMs = Math.max(0, now - startDate);

    const totalSeconds = Math.floor(diffMs / 1000);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    if (daysEl) daysEl.textContent = String(days).padStart(2, "0");
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, "0");
    if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, "0");
    if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, "0");

    // Navbardakı kiçik bildiriş
    const navDays = document.getElementById("nav-together-days");
    if (navDays) navDays.textContent = `${days} Gün`;
  }

  updateLoveCounter();
  setInterval(updateLoveCounter, 1000);

  // ==========================================
  // 3. AD GÜNLƏRİNƏ QALAN GÜN SAYĞACI
  // ==========================================
  function getDaysUntilBirthday(month, day) {
    const now = new Date();
    let targetYear = now.getFullYear();
    let bday = new Date(targetYear, month - 1, day);
    if (now > bday) {
      bday = new Date(targetYear + 1, month - 1, day);
    }
    const diff = bday - now;
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  }

  const nazrinBdayEl = document.getElementById("nazrin-bday-countdown");
  const ziyaBdayEl = document.getElementById("ziya-bday-countdown");

  if (nazrinBdayEl) {
    const days = getDaysUntilBirthday(7, 31); // 31 İyul
    nazrinBdayEl.textContent =
      days === 0 ? "🎉 Bu gün ad günüdür! ❤️" : `${days} gün qaldı 🎂`;
  }
  if (ziyaBdayEl) {
    const days = getDaysUntilBirthday(7, 20); // 20 İyul
    ziyaBdayEl.textContent =
      days === 0 ? "🎉 Bu gün ad günüdür! ❤️" : `${days} gün qaldı 🎂`;
  }

  // ==========================================
  // 4. "SƏNİ NİYƏ SEVİRƏM?" ROMANTİK SƏBƏBLƏR
  // ==========================================
  const loveReasons = [
    "Gözlərinin içinə baxanda bütün dünyanı unutduğum üçün...",
    "İlk baxışdan ürəyimi fəth edən o məsum gülüşün üçün...",
    "Hər dəfə mənə 'görüldü' atanda belə səni daha çox sevdiyim üçün! 🙈",
    "Səninlə keçən hər saniyənin ömrümün ən xoşbəxt anı olduğu üçün...",
    "Adını hər dəfə eşidəndə ürəyimin sürətlə döyündüyü üçün...",
    "Gözəl xasiyyətin, zərifliyin və təmiz qəlbin üçün...",
    "Qaranlıq dünyamı ən parlaq ulduz kimi işıqlandırdığın üçün...",
    "Məni dünyanın ən bəxtəvər insanı hiss etdirdiyin üçün...",
    "Ən pis günümdə belə bircə təbəssümünlə mənə hüzur verdiyin üçün...",
    "Mənə sevməyin nə qədər müqəddəs və şirin bir duyğu olduğunu öyrətdiyin üçün...",
    "Hər sabah oyandıqda ilk ağlıma gələn ən gözəl fikir olduğun üçün...",
    "Səsinin ən gözəl melodiya kimi qəlbimə toxunduğu üçün...",
    "Bizim nağılımızın baş qəhrəmanı olduğun üçün...",
    "Həyatımın 'yaxşı ki varsan' dediyim ən böyük səbəbi olduğun üçün...",
    "Gələcək xəyallarımın yalnız səninlə bütöv olduğu üçün...",
    "Səninlə danışarkən zamanın necə uçub getdiyini hiss etmədiyim üçün...",
    "Sən təkcə sevgilim yox, həm də ruhumun tək sahibi olduğun üçün! 💖",
  ];

  const reasonTextEl = document.getElementById("reason-text");
  const reasonBtn = document.getElementById("reason-btn");

  if (reasonBtn && reasonTextEl) {
    let lastIdx = -1;
    reasonBtn.addEventListener("click", (e) => {
      let nextIdx;
      do {
        nextIdx = Math.floor(Math.random() * loveReasons.length);
      } while (nextIdx === lastIdx && loveReasons.length > 1);
      lastIdx = nextIdx;

      // Animasiya ilə mətni dəyiş
      reasonTextEl.style.opacity = "0";
      reasonTextEl.style.transform = "translateY(10px) scale(0.95)";

      setTimeout(() => {
        reasonTextEl.textContent = `"${loveReasons[nextIdx]}"`;
        reasonTextEl.style.opacity = "1";
        reasonTextEl.style.transform = "translateY(0) scale(1)";
      }, 250);

      // Səs və Partlayış effekti
      if (window.romanticAudio) window.romanticAudio.playKeyClick();
      if (window.createHeartBurst) {
        const rect = reasonBtn.getBoundingClientRect();
        window.createHeartBurst(rect.left + rect.width / 2, rect.top, 25);
      }
    });
  }

  // ==========================================
  // 5. ZİYADAN NƏZRİNƏ MƏKTUB (INTERACTIVE ENVELOPE)
  // ==========================================
  const envelopeBtn = document.getElementById("envelope-trigger");
  const letterContent = document.getElementById("letter-content");

  if (envelopeBtn && letterContent) {
    envelopeBtn.addEventListener("click", () => {
      const isOpen = letterContent.classList.toggle("open");
      if (isOpen) {
        if (window.romanticAudio) window.romanticAudio.playUnlockSuccess();
        if (window.createHeartBurst) {
          const rect = envelopeBtn.getBoundingClientRect();
          window.createHeartBurst(rect.left + rect.width / 2, rect.top, 30);
        }
        envelopeBtn.querySelector(".envelope-hint").textContent =
          "Məktubu bağlamaq üçün toxun 💌";
      } else {
        envelopeBtn.querySelector(".envelope-hint").textContent =
          "Məktubu açmaq üçün toxun 💌";
      }
    });
  }

  // ==========================================
  // 6. MƏRKƏZİ DÖYÜNƏN ÜRƏK DÜYMƏSİ
  // ==========================================
  const centerHeartBtn = document.getElementById("center-heart-btn");
  if (centerHeartBtn) {
    centerHeartBtn.addEventListener("click", (e) => {
      const rect = centerHeartBtn.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;

      if (window.createHeartBurst) window.createHeartBurst(x, y, 35);
      if (window.spawnFloatingLoveWord) window.spawnFloatingLoveWord(x, y - 60);
      if (window.romanticAudio) window.romanticAudio.playUnlockSuccess();
    });
  }

  // ==========================================
  // 7. SƏS VƏ MUSİQİ İDARƏETMƏSİ
  // ==========================================
  const soundToggleBtn = document.getElementById("sound-toggle");
  if (soundToggleBtn) {
    soundToggleBtn.addEventListener("click", () => {
      if (window.romanticAudio) {
        const isActive = window.romanticAudio.toggleSound();
        if (isActive) {
          soundToggleBtn.classList.remove("muted");
          soundToggleBtn.querySelector(".sound-status").textContent =
            "Musiqi Açıq";
        } else {
          soundToggleBtn.classList.add("muted");
          soundToggleBtn.querySelector(".sound-status").textContent =
            "Musiqi Səssiz";
        }
      }
    });
  }

  // ==========================================
  // 8. ÜZƏN SEVGİ BALONCUKLARI (LOVE BUBBLES)
  // ==========================================
  const bubblePhrases = [
    "Səni Çox Sevirəm!",
    "Dünyamın İşığı 🌸",
    "Nəzrin & Ziya ❤️",
    "3107 — Əbədi 🔐",
    "Mənim Kraliçam 👑",
    "Gözəl Gülüşlüm ✨",
    "02.08.2026 💑",
    "Yaxşı ki Varsan! 🌹",
  ];

  function initFloatingBubbles() {
    setInterval(() => {
      // Ekranda 4-dən çox balon olmasın
      if (document.querySelectorAll(".floating-bubble").length > 5) return;

      const bubble = document.createElement("div");
      bubble.className = "floating-bubble";

      const size = Math.random() * 25 + 45; // 45px - 70px
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.left = `${Math.random() * (window.innerWidth - 80) + 20}px`;
      bubble.style.animationDuration = `${Math.random() * 5 + 7}s`;

      const icon = document.createElement("span");
      icon.textContent = Math.random() > 0.4 ? "💖" : "🌸";
      bubble.appendChild(icon);

      // Balona klikləyəndə partlasın
      bubble.addEventListener("click", (e) => {
        e.stopPropagation();
        if (window.romanticAudio) window.romanticAudio.playBubblePop();

        const rect = bubble.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;

        if (window.createHeartBurst) window.createHeartBurst(x, y, 16);

        // Sevgi sözü qığılcımı
        const randomMsg =
          bubblePhrases[Math.floor(Math.random() * bubblePhrases.length)];
        const msgEl = document.createElement("div");
        msgEl.className = "floating-love-word";
        msgEl.textContent = randomMsg;
        msgEl.style.left = `${x}px`;
        msgEl.style.top = `${y}px`;
        document.body.appendChild(msgEl);
        setTimeout(() => msgEl.remove(), 1600);

        bubble.remove();
      });

      document.body.appendChild(bubble);

      // Animasiya bitdikdə təmizlə
      setTimeout(() => {
        if (bubble.parentElement) bubble.remove();
      }, 12000);
    }, 4000);
  }

  // Musiqi pleyerini dərhal render et
  if (window.initProMusicPlayer) {
    window.initProMusicPlayer();
  }
});
