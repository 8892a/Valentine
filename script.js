

function changeNoText() {
    const msg = noMessages[Math.floor(Math.random() * noMessages.length)];
    const el = document.getElementById("noMessage");
    if (el) el.innerText = msg;
}

function checkLogin() {
    const username = document.getElementById("username")?.value.trim();
    const password = document.getElementById("password")?.value.trim();
    const message = document.getElementById("loginMessage");

    if (username === "CodenameLise" && password === "stella123") {
        window.location.href = "https://8892a.github.io/Valentine/MyLove.html";
    } else if (message) {
        const hints = ["Try again my love", "Not quite!"];
        message.innerText = hints[Math.floor(Math.random() * hints.length)];
        message.style.color = "#ff4d88";
        message.style.fontWeight = "500";
    }
}

window.claimCoupon = function() {
  document.getElementById("claim").style.display = "none";

  const card = document.getElementById("couponCard");
  card.style.display = "block";
  card.innerHTML = `
    <div class="coupon-box">
      <h3>Coupon </h3>
      <p>This coupon is redeemable for:</p>
      <h2>LCBO Date on me</h2>
      <p>Valid: Whenever bro</p>
    </div>
  `;
  const card2 = document.getElementById("1");
  card2.display ="block";
  
};


const noTexts = [
    "Are you sure??",
    "Try again!",
    "That’s illegal",
    "Wrong answer",
    "Be serious."
];

function moveNo() {
    const noBtn = document.getElementById("noBtn");
    const container = document.querySelector(".btn-group");

    const maxX = container.offsetWidth - noBtn.offsetWidth;
    const maxY = container.offsetHeight - noBtn.offsetHeight;

    const randX = Math.floor(Math.random() * maxX);
    const randY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randX + "px";
    noBtn.style.top = randY + "px";

    document.getElementById("response").innerText =
        noTexts[Math.floor(Math.random() * noTexts.length)];
}

function sayYes() {
    const card = document.querySelector(".border");
    card.innerHTML = `
        <h1>I LOVE YOU SO MUCH</h1>
        <p>Thank you for being the best girlfriend ever!</p>
        <button onclick="goNext()">Login to Claim Reward</button>
    `;
}

function goNext() {
    window.location.href = "Bri.html";
}


