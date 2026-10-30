let theme;
let storedTheme = localStorage.getItem("theme")
if (storedTheme) {
    theme = storedTheme
}
else {
    theme = 1;
}
const themeButton = document.querySelector(".theme-btn")


const lightTheme = {
    "page-background": "aliceblue",
    "header-background": "aqua",
    "links": "black",
    "content-text": "black",
    "catalogue-background": "aquamarine",
    "catalogue-container-background": "gray",
    "product-background": "azure",
    "footer-background": "black",
    "contact-background": "darkcyan",
    "themeIcon": "☀️"
}
const darkTheme = {
    "page-background": "#121212",
    "header-background": "#1f1f1f",
    "links": "#80cbc4",
    "content-text": "white",
    "catalogue-background": "#202a29",
    "catalogue-container-background": "#333333",
    "product-background": "#252525",
    "footer-background": "#000000",
    "contact-background": "#004d40",
    "themeIcon": "🌙"
}
//Would've been smarter to just load two different style sheets but it works
function changeTheme (newTheme){
    const r = document.querySelector(":root")
        r.style.setProperty("--color-page-background", newTheme["page-background"])
        r.style.setProperty("--color-header-background", newTheme["header-background"])
        r.style.setProperty("--color-links", newTheme.links)
        r.style.setProperty("--color-content-text", newTheme["content-text"])
        r.style.setProperty("--color-catalogue-background", newTheme["catalogue-background"])
        r.style.setProperty("--color-catalogue-container-background", newTheme["catalogue-container-background"])
        r.style.setProperty("--color-product-background", newTheme["product-background"])
        r.style.setProperty("--color-footer-background", newTheme["footer-background"])
        r.style.setProperty("--color-contact-background", newTheme["contact-background"])
        themeButton.textContent= newTheme.themeIcon
}

themeButton.addEventListener("click", () => {
    theme = theme * -1
    localStorage.setItem("theme", theme)
    selectTheme();
})

function selectTheme (){
    if (theme > 0 ){
        changeTheme(lightTheme)
    }
    if (theme < 0 ){
        changeTheme(darkTheme)
    }
}

selectTheme();

const contactForm = document.querySelector("#contact-form");
contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const contactData = Object.fromEntries(new FormData(contactForm).entries());
    console.log(contactData);
    contactForm.reset();
});


