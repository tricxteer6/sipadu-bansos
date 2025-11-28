// Smooth scroll untuk tombol "Selengkapnya"
const btnSelengkapnya = document.getElementById("btnSelengkapnya");
if (btnSelengkapnya) {
  btnSelengkapnya.addEventListener("click", () => {
    window.scrollTo({
      top: window.innerHeight * 0.7,
      behavior: "smooth",
    });
  });
}

// Login sederhana (dummy)
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = loginForm.email.value.trim();
    const pwd = loginForm.password.value.trim();

    if (!email || !pwd) return;

    alert("Login berhasil (dummy). Akan diarahkan ke dashboard.");
    window.location.href = "dashboard.html";
  });

  const btnGuest = document.getElementById("btnGuestLogin");
  if (btnGuest) {
    btnGuest.addEventListener("click", () => {
      loginForm.email.value = "guest@sipadu.id";
      loginForm.password.value = "guest123";
    });
  }
}

// Chart Dashboard
if (document.getElementById("chartPenerima")) {
  const ctx = document.getElementById("chartPenerima").getContext("2d");
  new Chart(ctx, {
    type: "line",
    data: {
      labels: ["2020", "2021", "2022", "2023", "2024", "2025"],
      datasets: [
        {
          label: "Penerima Bantuan",
          data: [100, 150, 210, 260, 310, 380],
          tension: 0.35,
          fill: true,
          borderWidth: 2,
        },
      ],
    },
    options: {
      plugins: { legend: { display: false } },
      scales: {
        x: { grid: { display: false } },
        y: {
          grid: { color: "rgba(0,0,0,0.05)" },
          ticks: { stepSize: 50 },
        },
      },
    },
  });
}

// Cek Data (dummy)
const btnCariData = document.getElementById("btnCariData");
if (btnCariData) {
  btnCariData.addEventListener("click", () => {
    const nikInput = document.getElementById("searchNik");
    const resultBox = document.getElementById("cekDataResult");
    const value = nikInput.value.trim();

    if (!value) {
      resultBox.value = "Silakan masukkan NIK atau Nama untuk pengecekan.";
      return;
    }

    // Data dummy
    resultBox.value =
      "Hasil cek data untuk: " +
      value +
      "\n\nStatus: TERDAFTAR\nProgram: Bantuan Sembako\nPeriode: 2024 - 2025\nKeterangan: Menunggu penyaluran tahap berikutnya.";
  });
}

// Pengajuan Bansos
const formPengajuan = document.getElementById("formPengajuan");
if (formPengajuan) {
  formPengajuan.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Pengajuan berhasil dikirim. Data akan diverifikasi oleh petugas.");
    formPengajuan.reset();
  });
}

// Highlight nav-link aktif berdasarkan URL (untuk header utama)
document.querySelectorAll(".nav-link").forEach((link) => {
  const href = link.getAttribute("href");
  if (href && window.location.pathname.endsWith(href)) {
    link.classList.add("active");
  }
});
