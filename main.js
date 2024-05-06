let container = document.getElementById("container");
let formBox = document.getElementById("formBox");
let form = document.getElementById("form");
let username = document.getElementById("username");
let password = document.getElementById("password");
let btn = document.getElementById("btn");

const userInfo = [
  {
    username: "xusniya",
    password: "28062009",
  },
];

const handleCheck = () => {
  let usernameValue = username.value;
  let passwordValue = password.value;

  userInfo.forEach((item) => {
    if (usernameValue === item.username && passwordValue === item.password) {
      alert("Tizimga muvavfaqiyatli kirdingiz!");
      formBox.style.display = "none";
    } else if (
      usernameValue === item.username &&
      passwordValue !== item.password
    ) {
      alert("Parolda xatolik bor!");
    } else if (
      usernameValue !== item.username &&
      passwordValue === item.password
    ) {
      alert("Usernameda xatolik bor!");
    } else {
      alert("Username va parol xato!");
    }
  });
};

const createBtnFunc = () => {
  let createBtn = document.createElement("button");
  let h3 = document.createElement("h3");
  h3.innerHTML = "Savol qo'shish uchun ushbu tugmani bosing!";
  createBtn.classList.add("questionBtn");
  createBtn.innerHTML = "Add questions!";
  container.appendChild(h3);
  container.appendChild(createBtn);

  createBtn.addEventListener("click", () => {
    let questionPrompt =
      prompt(`JavaScriptga oid savol yozing! Va savol ostidan a), b), c) variantda javoblarni ham yozing
    `);

    let questions = document.createElement("p");
    questions.innerHTML = "Siz kiritgan savol: " + questionPrompt;
    container.appendChild(questions);
  });
};

btn.addEventListener("click", (e) => {
  e.preventDefault();
  handleCheck();
  createBtnFunc();
});