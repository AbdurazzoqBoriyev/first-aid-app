const topics = [
  {
    folder: "Burundan qon ketganda",
    qr: "qrcode-21",
    pdf: "pdf3",
    title: "Burundan qon ketishi",
    video: "Ff-cI4fDwFM?si=CIwxxr1uX3ilBUb0",
  },
  {
    folder: "Hushdan ketish",
    qr: "qrcode-51",
    pdf: "pdf6",
    title: "Hushdan ketish",
    video: "mLjtMGpkS90?si=kOpXRMC5HEiQbfWl",
  },
  {
    folder: "Sovuq urish",
    qr: "qrcode-81",
    pdf: "pdf9",
    title: "Sovuq urish",
    video: "tJiSNahPWzk?si=G6jGLW6y5xj5FuXv",
  },
  {
    folder: "Jarohatlar va suyak sinishi",
    qr: "qrcode-11",
    pdf: "pdf2",
    title: "Jarohatlar",
    video: "nkGltvogWq0?si=cjPF8TPm2RpO0oWH",
  },
  {
    folder: "Kuyish",
    qr: "qrcode-31",
    pdf: "pdf4",
    title: "Kuyish",
    video: "blTBp_tu1nI?si=Gb_6bag3SxrpPNWF",
  },
  {
    folder: "Nafas yetishmovchiligi",
    qr: "qrcode-61",
    pdf: "pdf7",
    title: "Nafas yetishmovchiligi",
    video: "kDxdRzOy4NA?si=-X813YX7-Xx5lcCn",
  },
  {
    folder: "Qusish",
    qr: "qrcode-111",
    pdf: "pdf12",
    title: "Qusish",
    video: "vd_QwMxcQks?si=uCyFg40RCmF9WdYL",
  },
  {
    folder: "Shoshilinch umumiy yordam",
    qr: "qrcode1",
    pdf: "pdf1",
    title: "Shoshilinch yordam",
    video: "sWVhaynSRPE?si=B5kFsiGMNFC4fW_Z",
  },
  {
    folder: "Suvga cho‘kish",
    qr: "qrcode-91",
    pdf: "pdf10",
    title: "Suvga cho'kish",
    video: "qvZkxvaeOxs?si=QhgC3BrIPkDsZZd9",
  },
  {
    folder: "Tutqanoq",
    qr: "qrcode-101",
    pdf: "pdf11",
    title: "Tutqanoq",
    video: "PkAz0aHicFA",
  },
  {
    folder: "Yurak to‘xtashi",
    qr: "qrcode-71",
    pdf: "pdf8",
    title: "Yurak to'xtashi",
    video: "zud7SkldGkQ?si=bYgfvPgrvhRC9bZR",
  },
  {
    folder: "Zaharlanish",
    qr: "qrcode-41",
    pdf: "pdf5",
    title: "Zaharlanish",
    video: "HWioJVza2WE?si=b9XN8JA_mw7Au39E",
  },
];

const container = document.getElementById("topics-container");

// Kartochkalarni yaratish
topics.forEach((item) => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
  <h3>${item.title}</h3>

  <div class="qr-box">
    <img src="pdf/${item.folder}/${item.qr}.png">
  </div>

  <button onclick="openTopic('${item.folder}/${item.pdf}')">
    📄 PDF ochish
  </button>

  <button onclick="openVideo('${item.video}')">
    🎥 Video ko‘rish
  </button>
`;
  container.appendChild(card);
});

function openTopic(path) {
  const viewer = document.getElementById("viewer");
  viewer.src = "pdf/" + path + ".pdf";
  viewer.style.display = "block";
  viewer.scrollIntoView({ behavior: "smooth" });
}

// QR Skaner (Kamerani ishlatish uchun)
function onScanSuccess(decodedText) {
  openTopic(decodedText);
}
// Skanerni faqat kutubxona yuklanib bo'lgandan keyin ishga tushiramiz
window.onload = function () {
  if (typeof Html5QrcodeScanner !== "undefined") {
    // Sizning skaner sozlamalaringiz:
    const html5QrcodeScanner = new Html5QrcodeScanner("reader", {
      fps: 10,
      qrbox: 250,
    });

    function onScanSuccess(decodedText, decodedResult) {
      console.log(`Skanerlandi: ${decodedText}`);
      // Bu yerda natija bilan nima qilish kerakligini yozasiz
    }

    html5QrcodeScanner.render(onScanSuccess);
  } else {
    console.error(
      "Xatolik: QR-kod kutubxonasi hali yuklanmadi. Internetni yoki HTML dagi linkni tekshiring!",
    );
  }
};

function openVideo(videoId) {
  const viewer = document.getElementById("viewer");

  viewer.src = "https://www.youtube.com/embed/" + videoId;
  viewer.style.display = "block";

  viewer.scrollIntoView({ behavior: "smooth" });
}
function openVideo(videoId) {
  const viewer = document.getElementById("viewer");

  // embed ishlatamiz (xatolik chiqmasligi uchun)
  viewer.src = "https://www.youtube.com/embed/" + videoId;

  viewer.style.display = "block";
  viewer.scrollIntoView({ behavior: "smooth" });
}
function openTopic(path) {
  const fileUrl = "pdf/" + path + ".pdf";
  // Bu usulda brauzer PDF-ni keshdan oladi va oflayn ko'rish imkonini beradi
  window.open(fileUrl, "_blank");
}

window.findHospital = function () {
  // Aynan Google Maps xaritasi va qidiruv natijasini ochadigan havola
  const mapsUrl = "https://google.com";

  // Brauzerni to'g'ridan-to'g'ri xaritaga yo'naltirish
  window.location.href = mapsUrl;
};

// Matnni chiqarish
resultElement.innerText = status;
resultElement.style.color = color;

// Animatsiyani sozlash
heart.classList.add("beating");
heart.style.animationDuration = 60 / pulse + "s";

function tekshir() {
  // Elementlarni olish
  const yoshInput = document.getElementById("yoshInput");
  const pulsInput = document.getElementById("pulsInput");
  const natijaElement = document.getElementById("natija");
  const breathBox = document.getElementById("breathSection");
  const heart = document.getElementById("heartIcon");
  const progressBar = document.getElementById("progressBar");

  // Qiymatlarni raqamga aylantirish
  const yosh = parseInt(yoshInput.value);
  const puls = parseInt(pulsInput.value);

  // Xatolikni tekshirish
  if (!yosh || !puls) {
    alert("Iltimos, yosh va yurak urishini kiriting!");
    return;
  }

  let min, max, toifa, xabar;

  // 1. Yosh toifasini aniqlash
  if (yosh >= 15) {
    min = 60;
    max = 100;
    toifa = "Kattalar";
  } else if (yosh >= 7) {
    min = 70;
    max = 110;
    toifa = "Bolalar";
  } else {
    min = 100;
    max = 160;
    toifa = "Chaqaloqlar";
  }

  // 2. Holatni aniqlash
  if (puls >= min && puls <= max) {
    xabar = `Sizda hammasi joyida. ${toifa} uchun me'yor ${min} dan ${max} gacha. Natija me'yorda.`;
    natijaElement.className = "natija-box normal";
    breathBox.style.display = "none";
  } else if (puls < min) {
    xabar = `Diqqat! Sizda yurak urishi past. ${toifa} uchun me'yor kamida ${min} bo'lishi kerak.`;
    natijaElement.className = "natija-box past";
    breathBox.style.display = "none";
  } else {
    xabar = `Diqqat! Yurak urishi yuqori. ${toifa} uchun me'yor maksimal ${max} bo'lishi kerak. Iltimos, nafas mashqini bajaring.`;
    natijaElement.className = "natija-box yuqori";
    breathBox.style.display = "block";
  }

  // 3. Ekranga matn chiqarish
  natijaElement.innerHTML = `<strong>${toifa}:</strong> ${xabar}`;
  natijaElement.style.display = "block";

  // 4. Shkalani (Progress Bar) yurgizish
  let foiz = (puls / 180) * 100; // 180 bpm ni 100% deb olamiz
  if (foiz > 100) foiz = 100;
  if (progressBar) {
    progressBar.style.width = foiz + "%";
  }

  // 5. Yurakchani urdirish
  if (heart) {
    heart.classList.add("beating");
    heart.style.animationDuration = 60 / puls + "s";
  }

  // 6. Ovozli xabar
  window.speechSynthesis.cancel(); // Oldingi nutqni to'xtatish
  const nutq = new SpeechSynthesisUtterance(xabar);
  nutq.lang = "uz-UZ";
  window.speechSynthesis.speak(nutq);
}

// Nafas mashqi funksiyasi
function startBreathing() {
  const circle = document.querySelector(".breath-circle");
  const text = document.getElementById("breathText");
  const btn = document.getElementById("breathBtn");

  btn.style.display = "none";
  let cycles = 0;

  const timer = setInterval(() => {
    if (cycles % 2 === 0) {
      circle.classList.add("inhale");
      text.innerText = "Chuqur nafas oling...";
    } else {
      circle.classList.remove("inhale");
      text.innerText = "Sekin nafas chiqaring...";
    }
    cycles++;

    if (cycles === 6) {
      clearInterval(timer);
      text.innerText =
        "Mashq tugadi. O'zingizni xotirjam his qilyapsiz degan umiddamiz.";
      btn.style.display = "inline-block";
      btn.innerText = "Qayta boshlash";
    }
  }, 4000);
}

self.addEventListener("install", (e) => {
  console.log("Service Worker o'rnatildi"); // Bu yerda qo'sh tirnoq
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((reg) => console.log("Service Worker roʻyxatdan oʻtdi!", reg))
      .catch((err) => console.log("Xatolik yuz berdi:", err));
  });
}
