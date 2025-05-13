document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "admin@gazi.edu.tr" && password === "1234") {
    sessionStorage.setItem("email", username);
    window.location.href = "welcome.html"; // ✅ يجب أن تكون هذه الصفحة موجودة
  } else {
    alert("Invalid credentials ❌");
  }
});


  

  const versionSelect = document.getElementById('versionSelect');

  versionSelect.addEventListener('change', () => {
    const mode = versionSelect.value;

    if (mode === 'Dark Mode') {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  });

