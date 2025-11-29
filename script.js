// Visit Counter
let count = localStorage.getItem("visitCount") || 0;
document.getElementById("count").innerText = count;

// Increase count when button is clicked
function increaseCount() {
    count++;
    localStorage.setItem("visitCount", count);
    document.getElementById("count").innerText = count;
}
