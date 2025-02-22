document.addEventListener("DOMContentLoaded", function() {
    
        let nume = prompt("What is your name?");
    
        if (nume.toLowerCase() === "ama") {
            
            alert("Welcome, Ama!");
            setTimeout(() => alert("დაბადების დღეს გილოცავ! ✨🍀"), 2000);
            setTimeout(() => alert("Happy 22 winters! ❄️🎉"), 5000);
            setTimeout(() => alert("La mulţi ani! 🥳🌹"), 10000);

            document.body.style.visibility = "visible";
        } else {
            
            alert("Sorry, this is not your gift! Byeeee :3");
            window.close(); 
        }
});
