let counter = -1;
let words = [], letters = [];
let lettersArr = ["א","ב","ג","ד","ה","ו","ז","ח","ט","י","כ","ל","מ","נ","ס","ע","פ","צ","ק","ר","ש","ת"]
// let wordArr = ["אריה","בית","אבטיח","ביצים","גמל","גיטרה","דבורה","דב","הר","הליקופטר","ורד","וילון","זבוב","זברה","חתול","חולצה","טלוויזיה","טבח","יתוש","ינשוף","כלב","כוכב","ליצן","לטאה","מספריים","מחשב","נחש","נדנדה","סירה","סוס","פרה","פיג'מה","ציור","צב","קנגורו","קוף","רמזור","רופא","שולחן","שעון","תמונה","תותים","ענף","צדף","עכבר","עגבניה","סבון","ענן","נעלים","לוייתן","לחם","עציץ"]
const init = ()=>{
    letters = _.shuffle(lettersArr);
    words = _.shuffle(wordArr);
    createTrivia();
}

const createTrivia = ()=>{
    counter++;
    if(counter>= letters.length){
        counter=0;
        letters = _.shuffle(lettersArr);
    }
    let answers =[]
    // לולאה שמכניסה לפחות תשובה אחת נכונה
    let rnd = Math.floor(Math.random()*words.length)
    while(letters[counter] != words[rnd].name[0]){
        rnd = Math.floor(Math.random()*words.length)
    }
    answers.push(words[rnd]);
    // לולאה שמכניסה למערך רק מילים שלא קיימות
    while(answers.length < 4){
        rnd = Math.floor(Math.random()*words.length)
        console.log(rnd)
        if(letters[counter] != words[rnd].name[0] && (answers.indexOf(words[rnd])==-1)){
            answers.push(words[rnd]);
        }
    }
    let t = new Letters("#id_parent", letters[counter], _.shuffle(answers))
    
}
init();
