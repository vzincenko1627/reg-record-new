const button = document.getElementById('refreshBtn');

button.addEventListener('click', () => {
    alert('Список обновлён');
});

const appConfig = {
    appTitle:"Учёт регистраций",
    defaultStatus: "new",
    minValueForFilter: 800
};
let actionCount = 0;

appConfig.minValueForFilter = 900;

actionCount+=1;
actionCount++;
actionCount++;
console.log(actionCount);
console.log(appConfig);

const login_1 = {
    id: 1,
    title: "ivan@gmail.com",
    value: 700, 
    status: "new", 
    createdAt:"2022-03-20"
};
const login_2 = {
    id: 2,
    title: "vlad@mail.ru",
    value: 1500, 
    status: "new", 
    createdAt:"2026-08-23" 
};
const login_3 = {
    id: 3,
    title: "johua@gmail.com",
    value: 1900, 
    status: "done", 
    createdAt:"2020-01-16" 
};
const login_4 = {
    id: 4,
    title: "ben@gmail.com",
    value: 600,
    status: "registrated", 
    createdAt:"2017-04-01"
};
const login_5 = {
    id: 5,
    title: "michael@mail.ru",
    value: 780, 
    status: "new",
    createdAt:"2023-11-02"
};
const login_6 = {
    id: 6,
    title: "anna@gmail.com",
    value: 1200,
    status: "done", 
    createdAt:"2021-07-17"
};
console.log(login_1);
console.log(login_2);
console.log(login_3);
console.log(login_4);
console.log(login_5);
console.log(login_6);

const inputMinValue = "800";
const MinValue = Number(inputMinValue);

if (Number.isNaN(MinValue)){
    console.log("Ошибка");
} else {
    console.log(MinValue);
}

const userAge = 19;
const isBlocked = false;
const hasAccess = userAge >= 18 && userAge < 65 && !isBlocked;
console.log(hasAccess);

switch (login_1.status){
    case "new":
        console.log("Новая запись");
        break;
    case "done":
        console.log("Завершено");
        break;
    default:
        console.log("Неизвестный статус")
}
if (login_1.value >=1000){
    console.log("Высокое значение");
}   else if(login_1.value >=700){
    console.log("Среднее значение");
}   else {
    console.log("Низкое значение");
}
const statuses =["new","new","done","registrated","new","done",]//взял из javascript/основы индекса
let n = 0;
for(const statuss of statuses){
    if(statuss == "new"){
        n ++;
    }
}
const output = document.getElementById('output');
console.log(n);
const logins = [login_1,login_2,login_3,login_4,login_5,login_6];
const button_all = document.getElementById('btnAll');
output.textContent = "";
button_all.addEventListener('click', () => {
    output.textContent = "";
    for (const login of logins){
        let ids = String(login.id);
        let titles = login.title;
        let values = String(login.value);
        let statussss = login.status;
        let btnalldisplay = "";
        let createddate = login.createdAt;
        let cycle_text = titles + "; Идентификатор: " + ids + "; Значение: " + values + "; Статус: " + statussss + "; Дата регистрации: " + createddate;
        output.textContent += " "+ cycle_text + "\r\n";
    }    
});
const button_new = document.getElementById('btnNew');
button_new.addEventListener('click', () => {
    output.textContent = "";
    for (const login of logins){
        let statussss = login.status;
        if(statussss === "new"){
            let ids = String(login.id);
            let titles = login.title;
            let values = String(login.value);
            let statussss = login.status;
            let btnalldisplay = "";
            let createddate = login.createdAt;
            let cycle_text = titles + "; Идентификатор: " + ids + "; Значение: " + values + "; Статус: " + statussss + "; Дата регистрации: " + createddate;
            output.textContent += " "+ cycle_text + "\r\n";
        } else {
            continue;
        }
    }    
});
const button_stats = document.getElementById('btnStats');
button_stats.addEventListener('click', () => {
    output.textContent = "";
    let totalval = 0;
    let maxval = 0;
    let h = 0;
    let filter = 0;
    let news = 0;
    for (const login of logins){
        h++;
        totalval += login.value;
        if (maxval < login.value){
            maxval = login.value;
        }
        let statussss = login.status;
        if(statussss === "new"){
            news ++;
        }
        if(login.value > MinValue){
            filter++;
        }
        output.textContent = "Данные корректны"+ "\r\n" + "Всего записей: " + String(h) + "\r\n" + "Сумма Value: " + String(totalval) + "\r\n" + "Максимум value: " + String(maxval) + "\r\n" + "Количество status='new': " + String(news) + "\r\n" + "Фильтр value "  + String(MinValue) + ": " + String(filter) + "\r\n" + "Список: ";
    }
    for (const login of logins){
        if(login.value > MinValue){
            let ids = String(login.id);
            let titles = login.title;
            let values = String(login.value);
            let statussss = login.status;
            let btnalldisplay = "";
            let createddate = login.createdAt;
            let cycle_text = titles + "; Идентификатор: " + ids + "; Значение: " + values + "; Статус: " + statussss + "; Дата регистрации: " + createddate;
            output.textContent += "\r\n"+ cycle_text; 
    }
    }
});



