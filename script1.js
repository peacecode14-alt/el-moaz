function goTo(pageId) {
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });
  document.getElementById(pageId).classList.add('active');
}

function uploadVideo() {
  const pass = document.getElementById("teacherPass").value;
  const fileInput = document.getElementById("videoInput");
  const video = document.getElementById("lessonVideo");

  if (pass !== "2025") {
    alert("كلمة السر غير صحيحة");
    return;
  }

  if (fileInput.files.length === 0) {
    alert("من فضلك اختر فيديو");
    return;
  }

  const file = fileInput.files[0];
  const videoURL = URL.createObjectURL(file);

  video.src = videoURL;
  video.style.display = "block";

  alert("تم رفع الفيديو بنجاح");
}
