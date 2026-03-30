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
let scanner = new Html5QrcodeScanner("reader", { fps: 10, qrbox: 250 });
scanner.render(onScanSuccess);
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
