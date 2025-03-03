const pcNav = document.getElementById("pc-nav");
const pcMobile = document.getElementById("mobile-nav");

// copy nội dung của nav-pc sang nav-mobile
pcMobile.innerHTML = pcNav.innerHTML;
