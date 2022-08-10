class Letters{
    constructor(_parent ,_letter, _answers){
        this.parent = _parent;
        this.letter =_letter;
        this.answers =_answers;
        this.render();
    }
    render(){
        document.querySelector(this.parent).innerHTML = `
        <h2 class="bg-dark text-white col-1">${this.letter}</h2>
        <div id="id_words" class="mt-5 row row-cols-md-3 row-cols-1 align-items-center justify-content-center gap-4">
        <div id="answer1" class="card" style="width: 150px; cursor: pointer;">
        <img src="${this.answers[0].image}" class="card-img-top" width="100%" alt="${this.answers[0].name}">
        <div class="card-body">
          <h5 class="card-title">${this.answers[0].name}</h5>
        </div>
      </div>
        <div id="answer2" class="card" style="width: 150px; cursor: pointer;">
        <img src="${this.answers[1].image}" class="card-img-top" width="100%" alt="${this.answers[1].name}">
        <div class="card-body">
          <h5 class="card-title">${this.answers[1].name}</h5>
        </div>
      </div>
        <div id="answer3" class="card" style="width: 150px; cursor: pointer;">
        <img src="${this.answers[2].image}" class="card-img-top" width="100%" alt="${this.answers[2].name}">
        <div class="card-body">
          <h5 class="card-title">${this.answers[2].name}</h5>
        </div>
      </div>
        <div id="answer4" class="card" style="width: 150px; cursor: pointer;">
        <img src="${this.answers[3].image}" class="card-img-top" width="100%" alt="${this.answers[3].name}">
        <div class="card-body">
          <h5 class="card-title">${this.answers[3].name}</h5>
        </div>
      </div>

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
        btns_ar.forEach((e, index) => {
            e.addEventListener("click", () => {
                if (!flag) {
                    flag = true;
                    // the rest in red
                    e.style.background = "red";
                    if (e.querySelector(".card-title").innerHTML[0] === this.letter) {
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
                            e.style.background = e.querySelector(".card-title").innerHTML[0] == this.letter? "green" : "red";
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
