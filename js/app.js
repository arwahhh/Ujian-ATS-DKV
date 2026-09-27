// State Aplikasi Kuis
let currentUser = { name: "", studentClass: "", absentNum: "" };
let currentQuestionIndex = 0;
let userAnswers = {}; // Format: { questionId: ["A"] atau ["A", "B"] }
let doubtStatus = {}; // Format: { questionId: true/false }
let timerInterval = null;
let timeRemaining = 3600; // 60 menit dalam detik
let startTime = null;

// Lock screen & tab violation tracking
let tabSwitchCount = 0;

document.addEventListener("DOMContentLoaded", () => {
  checkExistingSession();
  setupAntiCheat();
});

// Navigasi Antar Halaman SPA
function showScreen(screenId) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(screenId).classList.add("active");
}

// 1. Logika Login
function handleLogin() {
  const name = document.getElementById("fullname").value.trim();
  const studentClass = document.getElementById("student-class").value;
  const absentNum = document.getElementById("absent-num").value;

  if (!name || !studentClass || !absentNum) return;

  currentUser = { name, studentClass, absentNum };
  sessionStorage.setItem("ats_user", JSON.stringify(currentUser));

  showScreen("rules-screen");
}

function checkExistingSession() {
  const savedUser = sessionStorage.getItem("ats_user");
  if (savedUser) {
    currentUser = JSON.parse(savedUser);
  }
}

function toggleStartBtn() {
  const checkbox = document.getElementById("agree-check");
  document.getElementById("start-btn").disabled = !checkbox.checked;
}

// 2. Mulai Ujian & Timer
function startAssessment() {
  showScreen("quiz-screen");
  
  // Header Profile Update
  document.getElementById("header-name").innerText = currentUser.name;
  document.getElementById("header-class-absent").innerText = `${currentUser.studentClass} / Absen: ${currentUser.absentNum}`;

  startTime = new Date();
  startTimer();
  renderQuestionGrid();
  loadQuestion(0);
}

function startTimer() {
  const timerDisplay = document.getElementById("timer-display");
  const timerBox = document.getElementById("timer-box");

  timerInterval = setInterval(() => {
    timeRemaining--;

    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    timerDisplay.innerText = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    if (timeRemaining < 300) { // Kurang dari 5 menit
      timerBox.classList.add("warning");
    }

    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
      alert("Waktu ujian telah habis! Jawaban Anda akan tersubmit otomatis.");
      submitQuiz();
    }
  }, 1000);
}

// Anti-Cheat (Detector Pindah Tab)
function setupAntiCheat() {
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden" && document.getElementById("quiz-screen").classList.contains("active")) {
      tabSwitchCount++;
      alert(`[PERINGATAN VIOLASI] Anda terdeteksi meninggalkan tab kuis! (${tabSwitchCount}x). Aktivitas ini dicatat oleh sistem.`);
    }
  });
}

// 3. Render & Navigasi Soal
function loadQuestion(index) {
  currentQuestionIndex = index;
  const q = questionsData[index];

  // Render Metadata
  document.getElementById("q-number-display").innerText = `Soal ${index + 1} dari ${questionsData.length}`;
  document.getElementById("question-category").innerText = q.category;
  document.getElementById("question-type").innerText = q.type === "pg" ? "Pilihan Ganda" : "Ganda Kompleks (Jawaban > 1)";
  
  // Render Stimulus & Teks Soal
  document.getElementById("stimulus-text").innerText = q.stimulus;
  document.getElementById("question-text").innerText = q.question;

  // Render Opsi Jawaban
  const container = document.getElementById("options-container");
  container.innerHTML = "";

  const currentAns = userAnswers[q.id] || [];

  q.options.forEach(opt => {
    const optKey = opt.charAt(0); // Misal 'A'
    const item = document.createElement("div");
    item.className = `option-item ${currentAns.includes(optKey) ? 'selected' : ''}`;
    
    const inputType = q.type === "pg" ? "radio" : "checkbox";
    item.innerHTML = `
      <input type="${inputType}" name="opt_${q.id}" value="${optKey}" ${currentAns.includes(optKey) ? 'checked' : ''}>
      <span>${opt}</span>
    `;

    item.onclick = () => selectOption(q.id, optKey, q.type);
    container.appendChild(item);
  });

  // Controls Navigation State
  document.getElementById("prev-btn").disabled = (index === 0);
  document.getElementById("next-btn").style.display = (index === questionsData.length - 1) ? "none" : "inline-flex";
  document.getElementById("finish-btn").style.display = (index === questionsData.length - 1) ? "inline-flex" : "none";

  updateProgressBar();
  highlightActiveGrid();
}

function selectOption(qId, selectedKey, type) {
  if (!userAnswers[qId]) userAnswers[qId] = [];

  if (type === "pg") {
    userAnswers[qId] = [selectedKey];
  } else {
    // Checkbox toggle untuk Ganda Kompleks
    const idx = userAnswers[qId].indexOf(selectedKey);
    if (idx > -1) {
      userAnswers[qId].splice(idx, 1);
    } else {
      userAnswers[qId].push(selectedKey);
    }
  }

  loadQuestion(currentQuestionIndex);
  updateGridState(qId);
}

function toggleDoubt() {
  const qId = questionsData[currentQuestionIndex].id;
  doubtStatus[qId] = !doubtStatus[qId];
  updateGridState(qId);
}

function navigateQuestion(direction) {
  const newIndex = currentQuestionIndex + direction;
  if (newIndex >= 0 && newIndex < questionsData.length) {
    loadQuestion(newIndex);
  }
}

// 4. Render Sidebar Grid Navigasi
function renderQuestionGrid() {
  const gridContainer = document.getElementById("question-grid");
  gridContainer.innerHTML = "";

  questionsData.forEach((q, idx) => {
    const btn = document.createElement("div");
    btn.className = "grid-num";
    btn.id = `grid-item-${q.id}`;
    btn.innerText = idx + 1;
    btn.onclick = () => loadQuestion(idx);
    gridContainer.appendChild(btn);
  });
}

function updateGridState(qId) {
  const item = document.getElementById(`grid-item-${qId}`);
  if (!item) return;

  item.classList.remove("answered", "doubt");

  if (doubtStatus[qId]) {
    item.classList.add("doubt");
  } else if (userAnswers[qId] && userAnswers[qId].length > 0) {
    item.classList.add("answered");
  }
}

function highlightActiveGrid() {
  document.querySelectorAll(".grid-num").forEach(e => e.classList.remove("active"));
  const activeItem = document.getElementById(`grid-item-${questionsData[currentQuestionIndex].id}`);
  if (activeItem) activeItem.classList.add("active");
}

function updateProgressBar() {
  const answeredCount = Object.keys(userAnswers).filter(k => userAnswers[k].length > 0).length;
  const percentage = (answeredCount / questionsData.length) * 100;
  document.getElementById("quiz-progress").style.width = `${percentage}%`;
}

// 5. Submit & Kalkulasi Hasil Ujian
function confirmSubmit() {
  const answeredCount = Object.keys(userAnswers).filter(k => userAnswers[k].length > 0).length;
  if (confirm(`Anda baru menjawab ${answeredCount} dari ${questionsData.length} soal. Yakin ingin menyelesaikan ujian?`)) {
    submitQuiz();
  }
}

function submitQuiz() {
  clearInterval(timerInterval);

  let correctCount = 0;
  let wrongCount = 0;
  let emptyCount = 0;

  // Track per materi
  const categoryStats = {};

  questionsData.forEach(q => {
    if (!categoryStats[q.category]) {
      categoryStats[q.category] = { total: 0, correct: 0 };
    }
    categoryStats[q.category].total++;

    const userAns = userAnswers[q.id] || [];
    
    if (userAns.length === 0) {
      emptyCount++;
    } else {
      // Evaluasi Kunci Jawaban
      const isCorrect = Array.isArray(q.answer) &&
        q.answer.length === userAns.length &&
        q.answer.every(val => userAns.includes(val));

      if (isCorrect) {
        correctCount++;
        categoryStats[q.category].correct++;
      } else {
        wrongCount++;
      }
    }
  });

  // Skor Skala 100
  const totalScore = Math.round((correctCount / questionsData.length) * 100);

  // Render Hasil ke Screen 4
  document.getElementById("res-name").innerText = currentUser.name;
  document.getElementById("res-class-absent").innerText = `${currentUser.studentClass} / ${currentUser.absentNum}`;
  
  const endTime = new Date();
  const timeSpentMinutes = Math.floor((endTime - startTime) / 60000);
  document.getElementById("res-duration").innerText = `${timeSpentMinutes} Menit`;
  document.getElementById("result-timestamp").innerText = `Diselesaikan pada: ${endTime.toLocaleString('id-ID')}`;

  document.getElementById("res-score").innerText = totalScore;
  document.getElementById("res-correct").innerText = correctCount;
  document.getElementById("res-wrong").innerText = wrongCount;
  document.getElementById("res-empty").innerText = emptyCount;

  // Grade Badge
  const gradeBadge = document.getElementById("res-grade");
  if (totalScore >= 90) {
    gradeBadge.innerText = "Sangat Baik";
    gradeBadge.style.background = "#dcfce7"; gradeBadge.style.color = "#15803d";
  } else if (totalScore >= 75) {
    gradeBadge.innerText = "Baik";
    gradeBadge.style.background = "#dbeafe"; gradeBadge.style.color = "#1d4ed8";
  } else if (totalScore >= 60) {
    gradeBadge.innerText = "Cukup";
    gradeBadge.style.background = "#fef3c7"; gradeBadge.style.color = "#b45309";
  } else {
    gradeBadge.innerText = "Perlu Belajar Lagi";
    gradeBadge.style.background = "#fee2e2"; gradeBadge.style.color = "#b91c1c";
  }

  // Render Rekap per Materi
  const catContainer = document.getElementById("category-breakdown");
  catContainer.innerHTML = "";
  for (const cat in categoryStats) {
    const stat = categoryStats[cat];
    const pct = Math.round((stat.correct / stat.total) * 100);
    catContainer.innerHTML += `
      <div class="cat-item">
        <div style="display:flex; justify-content:space-between;">
          <span>${cat}</span>
          <strong>${pct}% (${stat.correct}/${stat.total})</strong>
        </div>
        <div class="cat-progress"><div class="cat-fill" style="width: ${pct}%"></div></div>
      </div>
    `;
  }

  showScreen("result-screen");
}

function restartTest() {
  if (confirm("Apakah Anda yakin ingin mengulang ujian dari awal?")) {
    location.reload();
  }
}