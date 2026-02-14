const powerButton = document.getElementById('mainButton');

powerButton.addEventListener('click', function() {
    // বাটনে ক্লিক করলে হালকা একটু ভেতরে ডেবে যাওয়ার এফেক্ট
    this.style.transform = "scale(0.92)";
    
    setTimeout(() => {
        // এই লাইনটি আপনার সাইটে নিয়ে যাবে
        window.location.href = "https://saifulunict.wordpress.com/";
    }, 200);
});