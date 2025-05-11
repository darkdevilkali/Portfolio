document.addEventListener("DOMContentLoaded", function () {
    const cvButton = document.querySelector(".btn");
    cvButton.addEventListener("click", function () {
        const link = document.createElement("a");
        link.href = "Suryaganthan R.pdf";
        link.download = "Suryaganthan_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
    const socialLinks = document.querySelectorAll(".sci a");

    const urls = [
        "https://github.com/darkdevilkali",       // GitHub
        "https://linkedin.com/in/suryaganthan",  // LinkedIn
        "https://instagram.com/suryaganthan"     // Instagram
    ];

    socialLinks.forEach((link, index) => {
        link.addEventListener("click", function (e) {
            e.preventDefault(); // Prevent default anchor behavior
            window.open(urls[index], "_blank");
        });
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
