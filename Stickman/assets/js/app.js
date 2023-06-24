let circle = document.querySelector("#Circle");
let sticky = document.querySelector("#StickMan");
let niki = document.querySelector("#StickMan img");
let message = document.querySelector("#Bubble p");
let timer = document.querySelector("#Timer");
let no = document.querySelector("#No");
let yes = document.querySelector("#Yes");
no.addEventListener("click", () => {
    niki.style.width = "160px";
    niki.src = "assets/images/sadder-stickman.png";
    message.innerHTML = "OK! Thanks, anyway. But I will never forgive you.";
    message.style.fontSize = "13px";
    document.querySelector(".buttons").style.display = "none";
    circle.style.background = "none";
    circle.style.backgroundColor = "#ff5555";
});
yes.addEventListener("click", e => {
    message.innerHTML = "Thank you very much! But don't forget, you've got only 10 seconds.";
    niki.src = "assets/images/sad-stickman.png";
    document.querySelector(".buttons").style.display = "none";
    timer.classList.remove("d-none");
    setTimeout(() => {
        document.querySelector("#Bubble").style.display = "none";
        let posTop = 0;
        let posLeft = 0;
        let bottom = window.innerWidth;
        let right = window.innerWidth;
        document.body.onkeydown = e => {
            if (e.code === "KeyW" || e.code === "ArrowUp" && posTop > -50) {
                posTop -= 10; }
            else if (e.code === "KeyA" || e.code === "ArrowLeft" && posLeft > -60) {
                niki.src = "assets/images/mirror-stickman.png";
                posLeft -= 10; }
            else if (e.code === "KeyS" || e.code === "ArrowDown" && bottom > 410) {
                posTop += 10; }
            else if (e.code === "KeyD" || e.code === "ArrowRight" && right > 140) {
                niki.src = "assets/images/sad-stickman.png"
                posLeft += 10; }
            sticky.style.top = `${posTop}px`;
            sticky.style.left = `${posLeft}px`;
            bottom = window.innerHeight - posTop;
            right = window.innerWidth - posLeft;
            
        }
        setInterval(() => {
            if (sticky.getBoundingClientRect().top > circle.getBoundingClientRect().top &&
            sticky.getBoundingClientRect().left > circle.getBoundingClientRect().left &&
            window.innerHeight - 360 - sticky.getBoundingClientRect().top > circle.getBoundingClientRect().top &&
            window.innerWidth - 210 - sticky.getBoundingClientRect().left > circle.getBoundingClientRect().left) {
                circle.style.background = "none";
                circle.style.backgroundColor = "#80ff80";
                niki.src = "assets/images/happy-stickman.png";
                document.body.onkeydown = () => {};
                timer.style.color = "green";
                timer.style.fontSize = "20px";
                timer.innerHTML = "Thanks for helping me, I think you have a great heart. Do you want me to dance for you to cheer you up?";
                document.body.innerHTML += `<div class="buttons-for-dance"><button id="NoThx" class="me-1 btn btn-danger">No, thanks</button><button id="YesPls" class="btn btn-success">Yes, I'd like to see your moves</button></div>`;
                document.querySelector("#NoThx").addEventListener("click", () => {
                    document.body.innerHTML =
                    `<div id="StickMan" class="position-absolute"><img src="assets/images/salute-stickman.png" alt="Niki"></div>
                    <div id="Bubble">
                        <div class="image">
                            <p>Alright, then. Goodbye, soldier. You've helped me a lot today.</p>
                            <img src="assets/images/chat-bubble.png" alt="">
                        </div>
                    </div>`;
                });
                document.querySelector("#YesPls").addEventListener("click", () => {
                    document.body.style.backgroundImage = "url(https://img.freepik.com/free-vector/disco-background_1048-10077.jpg)";
                    document.body.innerHTML =
                    `<div id="StickMan"><img src="assets/images/tripping-stickman.png" alt="Niki"></div>
                    <div id="Bubble2">
                        <div class="image">
                            <p>Well, this is all I got. But Nasrin's got more, I think you should give her a 100.</p>
                            <img src="assets/images/chat-bubble.png" alt="">
                        </div>
                    </div>`;
                    document.querySelector("#StickMan").style.overflow = "visible";
                    document.querySelector("#StickMan").style.justifyContent = "flex-start";
                    setTimeout(() => {
                        document.querySelector("#StickMan img").src = "assets/images/falling-stickman.png";
                    }, 800);
                    setTimeout(() => {
                        document.querySelector("#StickMan img").src = "assets/images/handwalking-stickman.png";
                    }, 1600);
                    setTimeout(() => {
                        document.querySelector("#StickMan img").src = "assets/images/hiphop-stickman.png";
                    }, 2400);
                    setTimeout(() => {
                        setInterval(() => {
                            if (document.querySelector("#StickMan img").getAttribute("src") === "assets/images/hiphop-stickman2.png") {
                                document.querySelector("#StickMan img").src = "assets/images/hiphop-stickman.png";
                            }
                            else {document.querySelector("#StickMan img").src = "assets/images/hiphop-stickman2.png";}
                        }, 500);
                    }, 3000);
                });
            }
            else {
                if (!isNaN(timer.innerHTML)) timer.innerHTML -= 1;
                if (timer.innerHTML <= 3) timer.style.color = "red";
                if (timer.innerHTML == -1) {
                    timer.innerHTML = "YOU LOST! Now I won't be able to return home, all because of you. You had 10 seconds and it was such an easy task. Why were you playing around?!";
                    timer.style.fontSize = "20px";
                    document.body.onkeydown = () => {};
                    niki.src = "assets/images/crying-stickman.png";
                    niki.style.width = "160px";
                    circle.style.background = "none";
                    circle.style.backgroundColor = "#ff5555";
                }
            }
        }, 1000);
    }, 2500);
});