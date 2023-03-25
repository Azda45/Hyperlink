const menuToggle=document.querySelector(".menu-toggle input"),nav=document.querySelector("nav ul");menuToggle.addEventListener("click",(()=>{nav.classList.toggle("slide")}));const darkModeSwitch=document.getElementById("dark-mode-switch"),body=document.querySelector("body");let themePreference=localStorage.getItem("themePreference");function enableDarkMode(){body.classList.add("dark-mode")}function disableDarkMode(){body.classList.remove("dark-mode")}themePreference||(themePreference="auto",localStorage.setItem("themePreference",themePreference)),"dark"===themePreference?(enableDarkMode(),darkModeSwitch.checked=!0):"light"===themePreference?(disableDarkMode(),darkModeSwitch.checked=!1):window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(enableDarkMode(),darkModeSwitch.checked=!0),darkModeSwitch.addEventListener("change",(function(){this.checked?(enableDarkMode(),localStorage.setItem("themePreference","dark")):(disableDarkMode(),localStorage.setItem("themePreference","light"))}));const clearLocalStorageBtn=document.getElementById("clear");clearLocalStorageBtn.addEventListener("click",(()=>{localStorage.clear()}));