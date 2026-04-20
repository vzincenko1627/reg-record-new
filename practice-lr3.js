function calcTotal(a, b){
    let c = a + b;
    return c;
}
console.log(calcTotal(4,5));
function formatRecord(id, title, status){
    return `#${id}: ${title} [${status}]`;
}
console.log(formatRecord(3, "Тестовая запись", "new"));
const values3 = [1200, 500, 800, 1500];
let v = 0;
for (const value of values3){
    v += value;
}
console.log(v);
function filtervalues(massive){
    return massive.filter(value => value >= 800);
}
console.log(filtervalues(values3));
const record = {
    id: 7,
    title: "Запись",
    value: 900,
    status: "done",
    createdAt: "2024-04-14"
}
console.log(record);
record.status = "new";
console.log(record);
function isNew(record){
    if (record.status ==="new"){
        return true;
    } else {
        return false;
    }
}
console.log(isNew(record));
const testItems = [
    { id: 1, value: 800},
    { id: 2, value: 500},
    { id: 3, value: 700},
    { id: 4, value: 1200}
];
function findById(testItems, id) {
  return testItems.find(testItems => testItems.id === id) || null;
}
console.log(findById(testItems,4));
function buildStats(testItems) {
  return testItems.reduce((acc, item) => {
    acc.totalCount += 1;
    acc.sumValue += item.value;
    return acc;
  }, { totalCount: 0, sumValue: 0});
}
console.log(buildStats(testItems));
console.log(helloFromLogic());
const msg = document.getElementById('message');
msg.textContent = "DOM работает";
const li_1 = document.createElement('li');
li_1.textContent = "Система находится в разработке \r\n";
const li_2 = document.createElement('li');
li_2.textContent = "Учёт регистрации \r\n";
const li_3 = document.createElement('li');
li_3.textContent = "Добавление записей будет позже"
const demolisting = document.getElementById('demoList');
demolisting.append(li_1,li_2,li_3);
console.log(logins_new);
console.log(filterByStatus(logins_new, "new"));
console.log(findById(logins_new, 2));
console.log(sortByValueDesc(logins_new));
console.log(buildStats(logins_new));
const listEl = document.getElementById("list");
function renderList(loginsToRender){
    listEl.textContent = "";

    for (const login of loginsToRender) {
        const card = document.createElement("div");
        card.className = "card";
        card.remove;

        const h3 = document.createElement("h3");
        h3.textContent = `${login.title}`;

        const info = document.createElement("p");
        info.textContent = `id=${login.id} | value=${login.value} | status=${login.status} | createdAt=${login.createdAt}`;

        const btnRemove = document.createElement("button");
        btnRemove.textContent = "Удалить";
        btnRemove.dataset.action = "remove";
        btnRemove.dataset.id = String(login.id);

        card.appendChild(h3);
        card.appendChild(info);
        card.appendChild(btnRemove);

        listEl.appendChild(card);
  }
}
//renderList(logins_new); убрано, так как функционал привязан к кнопкам
const button_all_new = document.getElementById('btnAll_new');
const button_new_new = document.getElementById('btnNew_new');
const button_sort = document.getElementById('btnSort');
const button_stats_new = document.getElementById('btnStats_new');
button_all_new.addEventListener('click', () => {
    renderList(logins_new);
});
button_new_new.addEventListener('click', () => {
    renderList(filterByStatus(logins_new, "new"));
});
button_sort.addEventListener('click', () => {
    renderList(sortByValueDesc(logins_new));
});
const stats = buildStats_new(logins_new);
button_stats_new.addEventListener('click', () => {
    msg.textContent =
    `Всего записей: ${stats.totalCount}\n` +
    `Сумма value: ${stats.sumValue}\n` +
    `Максимум value: ${stats.maxValue}\n` +
    `Количество status="new": ${stats.newCount}`;
});