//предыдущие значения от практик ЛР1, ЛР2 удалены для чистоты js и консоли, для проверки ЛР1, 2 обратиться в commit'ы script.js 
const inputMinValue = "800";
const MinValue = Number(inputMinValue);
const msg = document.getElementById('message');
const listEl = document.getElementById("list");
function renderList(loginsToRender){
    listEl.textContent = "";

    for (const login of loginsToRender) {
        const card = document.createElement("div");
        card.className = "card";
        card.remove;

        const info = document.createElement("p");
        info.textContent = `${login.title} | id=${login.id} | value=${login.value} | status=${login.status} | createdAt=${login.createdAt}`;

        const btnRemove = document.createElement("button");
        btnRemove.type      = 'button';
        btnRemove.textContent = "Удалить";
        btnRemove.dataset.action = "remove";
        btnRemove.dataset.id = String(login.id);

        card.appendChild(info);
        card.appendChild(btnRemove);
        listEl.appendChild(card);

        btnRemove.addEventListener('click', () => card.remove());
  }
}
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

button_stats_new.addEventListener('click', () => {
    const stats = buildStats(logins_new);
    msg.textContent =
    `Всего записей: ${stats.totalCount}\n` +
    `Сумма value: ${stats.sumValue}\n` +
    `Максимум value: ${stats.maxValue}\n` +
    `Количество status="new": ${stats.newCount}`;
});
const form = document.getElementById('loginForm');
const formerror = document.getElementById('formErrors');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    clearformerror();
    const data = Object.fromEntries(new FormData(form));
    if(!(data.title === "" || data.value === "" || data.createAt === "")){
        const validation = validateForm(data.title, data.value, data.createdAt);
        if(validation === '0'){
            const idplus = logins_new.length + 1;
            logins_new.push({id: idplus, title: data.title, value: Number(data.value), status: data.status, createdAt: data.createdAt});
            console.log(logins_new);
            renderList(logins_new);
        }
    } else {
        inputlack();
    }
    formerror.textContent = errors;
});
const jsonload = document.getElementById('loadjson');
jsonload.addEventListener('click', () => {
    msg.textContent = safeFetchJson("https://nonexistinguhp/");
});