const qustions = [
    {
        id: 1, title: "قوی ترین ماهیچه بدن انسان کدام است؟", quizs: ["قلب", "گلو", "فک", "بازو"]
        , answer: "فک"
    },
    { id: 2, title: "جعبه سیاه معروف هواپیما چه رنگی است؟", quizs: ["آبی", "سیاه", "سفید", "نارنجی"], answer: "نارنجی" },
    { id: 3, title: "کدام یک از موارد زیر را یک فضانورد نمی‌تواند در فضا انجام دهد؟", quizs: ["خندیدن", "گریه کردن", "غذا خوردن", " آب خوردن"], answer: "گریه کردن" },
    { id: 4, title: "کوسه‌ها در بدن خود چند استخوان دارند؟", quizs: ["0", "123", "98", "23"], answer: "0" },
    { id: 5, title: "کدام سیاره‌ی منظومه شمسی به “سیاره‌ی آبی” معروف است؟", quizs: ["زمین", "مریخ", "زحل", "عطارد"], answer: "زمین" },
    { id: 6, title: "چه زمانی بیشترین عضلات صورت شما درگیر می‌شوند؟", quizs: ["هنگام خواب", "هنگام خندیدن", "هنگام صحبت کردن", "هنگام اخم کردن"], answer: "هنگام اخم کردن" },
    { id: 7, title: "در کدام فصل بدن انسان نیاز به چربی بیشتر دارد؟", quizs: ["زمستان", "تابستان", "بهار", "پاییز"], answer: "زمستان" },
    { id: 8, title: "کدام حیوان ناشنوا است؟", quizs: ["مار", "سگ", "روباه", "خفاش"], answer: "مار" },
    { id: 9, title: "کدام قسمت از چشم انسان هیچ خونی ندارد؟", quizs: ["شبکیه", "قرنیه", "مردمک", "پلک"], answer: "قرنیه" },
    { id: 10, title: " نماد شانس و رفاه در چین کدام است؟", quizs: ["شیر", "ببر", "فیل", " اژدهای چینی"], answer: " اژدهای چینی" }
]

const quiz = document.querySelector("p")
const listanswer = document.querySelector(".list_answer")
const next = document.querySelector(".next")
const finaall = document.querySelector(".finall")
const ansewrs = listanswer.querySelectorAll(".li")
let qustionIndex = 0
let point = 0
function load() {
    quiz.innerHTML = qustions[qustionIndex].title
    ansewrs.forEach(function (item, index) {
        item.textContent = qustions[qustionIndex].quizs[index]

    })

}

function nextquiz() {
    qustionIndex++
    quiz.innerHTML = qustions[qustionIndex].title
    ansewrs.forEach(function (item, index) {
        item.textContent = qustions[qustionIndex].quizs[index]
        item.classList.remove("selected")
    })
    if (qustionIndex === 9) {
        next.classList.add("hidden")
        finaall.disabled = false
        finaall.classList.add("center")
    }

}
next.addEventListener("click", nextquiz)
ansewrs.forEach(function (item) {

    item.addEventListener("click", function (event) {

        const answerUser = event.target
        ansewrs.forEach(function (option) {
            option.classList.remove("selected")
        })
        answerUser.classList.add("selected")
        if (answerUser.textContent == qustions[qustionIndex].answer) {
            ++point
        }
    })
})



function end() {
    finaall.innerHTML = "امتیاز :  " + point
}
finaall.addEventListener("click", end)