// CREATE
        let btn = document.createElement('button');
        btn.innerText = "click me";
        btn.classList.add("big");
        btn.style.background = "skyblue";
        document.body.appendChild(btn);
        
        // UPDATE
        let p = document.querySelector("p");
        p.innerText = "bye";

        // DELETE
        p.parentElement.removeChild(p);

        // EVENT
        btn.addEventListener('click', function() {
            btn.style.background = "black";
        });