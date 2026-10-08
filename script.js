function startBirthday() {
    document.getElementById("intro").classList.add("hidden");
    document.getElementById("main").classList.remove("hidden");
    createConfetti();
}

function createConfetti() {
    const symbols = ["♥", "♡", "✦", "•"];

    for (let i = 0; i < 45; i++) {
        const piece = document.createElement("div");

        piece.textContent =
            symbols[Math.floor(Math.random() * symbols.length)];

        piece.style.position = "fixed";
        piece.style.top = "-20px";
        piece.style.left = Math.random() * 100 + "vw";
        piece.style.zIndex = "999";
        piece.style.fontSize = 10 + Math.random() * 12 + "px";
        piece.style.color = "#e89db5";
        piece.style.animation = "fall 4s linear forwards";

        document.body.appendChild(piece);

        setTimeout(() => piece.remove(), 4000);
    }
}