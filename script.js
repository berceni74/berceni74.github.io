const colorBtn = document.getElementById("colorBtn");
const body = document.querySelector("body");
const h1 = document.querySelector("h1");

colorBtn.addEventListener("click", () => 
{
    if(colorBtn.textContent === "Light mode")
    {
        body.style.backgroundColor = "white";
        colorBtn.textContent = "Dark mode";
        h1.style.color = "black";
    }
    else
    {
        body.style.backgroundColor = "black";
        colorBtn.textContent = "Light mode";
        h1.style.color = "white";
    }
});