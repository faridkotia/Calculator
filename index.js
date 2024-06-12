const display=document.getElementById("display")

function appendToDisplay(input)
{
    display.value+=input;
}

function clearDisplay()
{
    display.value="";
}
function calculate()
{
    try
    {
        display.value=eval(display.value);
    }
    catch(error)
    {
        display.value="Syntax Error";
    }
   
}
function clearLast() {
    display.value = display.value.slice(0, -1);
}

// Function to toggle between light and dark themes
// Function to toggle between light and dark themes
function toggleTheme() {
    document.body.classList.toggle("dark-theme");

    // Store the current theme preference in local storage
    localStorage.setItem("theme", document.body.classList.contains("dark-theme") ? "dark" : "light");
}

// Check the current theme and set the toggle switch accordingly
function setThemeToggle() {
    const themeToggle = document.getElementById("theme-switch");
    const currentTheme = localStorage.getItem("theme");

    if (currentTheme === "dark") {
        document.body.classList.add("dark-theme");
        themeToggle.checked = true; // Set toggle switch to "on" for dark theme
    } else {
        document.body.classList.remove("dark-theme");
        themeToggle.checked = false; // Set toggle switch to "off" for light theme
    }
}

// Event listener for theme toggle switch
document.getElementById("theme-switch").addEventListener("change", function () {
    toggleTheme(); // Toggle theme
});

// Call setThemeToggle function to set initial theme based on user preference
setThemeToggle();

