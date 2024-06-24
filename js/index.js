document.addEventListener("DOMContentLoaded", function () {
  // Fungsi untuk mengatur margin dan padding pada halaman home
  function setupHomePage() {
    const headerHeight = document.querySelector("header").offsetHeight;
    const marginPaddingValue = headerHeight + 20; // Sesuaikan dengan nilai yang diinginkan
    document.getElementById("home").style.marginTop = `${marginPaddingValue}px`;
    document.getElementById(
      "home"
    ).style.paddingTop = `${marginPaddingValue}px`;
  }

  // Handler untuk event load, memastikan pengaturan halaman home saat halaman dimuat
  window.addEventListener("load", function () {
    setupHomePage();
  });

  // Handler untuk event hashchange, memastikan pengguliran halus saat klik navigasi
  window.addEventListener("hashchange", function () {
    const targetId = location.hash.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const headerOffset = document.querySelector("header").offsetHeight;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Atur margin top dan padding top .home saat scroll ke halaman home
      if (targetId === "home") {
        setupHomePage();
      } else {
        document.getElementById("home").style.marginTop = "50px"; // Sesuaikan dengan nilai yang diinginkan
        document.getElementById("home").style.paddingTop = "50px"; // Sesuaikan dengan nilai yang diinginkan
      }
    }
  });

  // Pengaturan perilaku pengguliran halus untuk tautan navigasi
  document.querySelectorAll("header nav ul li a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const headerOffset = document.querySelector("header").offsetHeight;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });

        // Atur margin top dan padding top .home saat scroll ke halaman home
        if (targetId === "home") {
          setupHomePage();
        } else {
          document.getElementById("home").style.marginTop = "50px"; // Sesuaikan dengan nilai yang diinginkan
          document.getElementById("home").style.paddingTop = "50px"; // Sesuaikan dengan nilai yang diinginkan
        }
      }
    });
  });

  // Pengaturan perilaku tombol "Detail" pada produk
  const detailButtons = document.querySelectorAll(".detail-button");

  detailButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const product = this.getAttribute("data-product");
      const details = document.getElementById(`details-${product}`);

      // Gunakan kondisi display === "none" untuk menentukan tampil atau tidak
      if (details.style.display === "block") {
        details.style.display = "none";
      } else {
        hideAllProductDetails();
        details.style.display = "block";

        // Scroll ke produk yang tepat dengan mempertimbangkan header
        const headerOffset = document.querySelector("header").offsetHeight;
        const extraOffset = 20; // Jarak ekstra untuk memastikan produk tidak tertutup
        const elementPosition = details.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset - extraOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  function hideAllProductDetails() {
    const allDetails = document.querySelectorAll(".product-details");
    allDetails.forEach((detail) => {
      detail.style.display = "none";
    });
  }
});
