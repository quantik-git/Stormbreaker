var root = document.querySelector(":root");

/* Grid */
root.style.setProperty("--grid-columns", "12");
/* Colors */
root.style.setProperty("--text-color", "#FFFFFF");
root.style.setProperty("--main-theme-color", "hsla(200,70%,40%,1)");
root.style.setProperty("--secondary-theme-color", "#3C3C3C");
root.style.setProperty("--tertiary-theme-color", "#26F596");
root.style.setProperty("--body-background", "linear-gradient(315deg, var(--tertiary-theme-color) 0%, var(--main-theme-color) 74%)");
/* Font */
root.style.setProperty("--font", "//fonts.googleapis.com/css?family=Montserrat%7CRoboto");
root.style.setProperty("--title-font", " 'Montserrat', sans-serif");
root.style.setProperty("--text-font", " 'Roboto', sans-serif");
/* Font Size */
root.style.setProperty("--font-size", "16px");
/* Layout Grid-gap */
root.style.setProperty("--grid-gap", "1rem");
