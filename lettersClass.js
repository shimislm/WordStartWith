class Letters{
    constructor(_parent ,_letter, _answers){
        this.parent = _parent;
        this.letter =_letter;
        this.answers =_answers;
        this.render();
    }
    render(){
        document.querySelector(this.parent).innerHTML = `
        <h2 class="bg-dark text-white col-1 display-3">${this.letter}</h2>
        <div id="id_words" class="mt-5 row row-cols-md-3 row-cols-1 align-items-center justify-content-center gap-4">
            <button id="answer1" class="btn btn-info col-12">${this.answers[0]}</button>
            <button id="answer2" class="btn btn-info col-12">${this.answers[1]}</button>
            <button id="answer3" class="btn btn-info col-12">${this.answers[2]}</button>
            <button id="answer4" class="btn btn-info col-12">${this.answers[3]}</button>
        </div>
        `
        let flag = false;
        document.body.style.background = "white";
        // listener to each button click from the answers start
        let btn1 = document.querySelector("#answer1")
        let btn2 = document.querySelector("#answer2")
        let btn3 = document.querySelector("#answer3")
        let btn4 = document.querySelector("#answer4")
        let btns_ar = [btn1, btn2, btn3, btn4];
        btns_ar.forEach((e) => {
            e.addEventListener("click", () => {
                if (!flag) {
                    flag = true;
                    // the rest in red
                    e.style.background = "red";
                    if (e.innerHTML.charAt(0) === this.letter) {
                        e.style.background = "green";
                        document.body.style.background = "lightgreen";
                        setTimeout(function () {
                            createTrivia()
                        }, 2000);
                    }
                    else {
                        document.body.style.background = "rgb(255, 104, 104)";
                        // if answer == correctAsnwer than the background change green else red
                        btns_ar.forEach((e) => {
                            e.style.background = e.innerHTML.charAt(0) == this.letter ? "green" : "red";
                        })
                        // e.style.background = "red";
                        setTimeout(function () {
                            createTrivia()
                        }, 2000);
                    }
                }
            })
        })

    }
}
