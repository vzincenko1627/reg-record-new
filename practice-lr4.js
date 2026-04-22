//a1
function isValidDateYMD(s) {
     const re = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;
     return re.test(s);
}
console.log(isValidDateYMD("2026-02-18")); 
console.log(isValidDateYMD("18.02.2026")); 
console.log(isValidDateYMD(""));
//a2
function isValidTitle(s){
    const re = /[<>{};]/;
    return !(re.test(s));
}
console.log(isValidTitle("Обычная строка"));
console.log(isValidTitle("Строка с <")); 
console.log(isValidTitle("Строка с;")); 
//b1
function extractIds(text){
    const matches = text.match(/\d+/g);
    return matches.map(Number);
}
console.log(extractIds("id=5; id=12; id=30"));
//b2
function normalizeSpaces(s){
    const replaced = s.replace(/\s+/g, ' ');
    return replaced.trim();
}
console.log(normalizeSpaces(" A B\t\tC ")); 
//c1
function validateRequired(value, fieldName) {   
    if(value.trim() === ''){
        return `Поле "${fieldName}" обязательно`;
    } else{
        return null;
    }
}
console.log(validateRequired('', 'Логин')); 
console.log(validateRequired('jack@gmail.com', 'Логин'));
//c2
function validateNumberRange(n, min, max, fieldName) {
    if (n > min && n < max){
        return null;
    } else if (typeof n !== 'number' || isNaN(n)){
        return `Поле "${fieldName}" должно быть числом.`;
    } else{
        return `Значение поля "${fieldName}" должно быть в диапазоне от ${min} до ${max}.`;
    }
}
console.log(validateNumberRange(10, 0, 10, "Значение")); 
console.log(validateNumberRange(-1, 0, 10, "Значение")); 
console.log(validateNumberRange(NaN, 0, 10, "Значение"));
//d1
const login1 = {
    title: "garry@gmail.com ",
    value: "800",
    status: "new",
    createdAt: "2024-11-11"
};
function buildRecordFromForm(raw) {
    const normal = normalizeSpaces(raw.title);
    const numberval = Number(raw.value);
    return {
        title: normal,
        value: numberval,
        status: raw.status,
        createdAt: raw.createdAt
    };
}
console.log("Результат:", buildRecordFromForm(login1));

function isValidLogin(s){
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return !(re.test(s));
};
function isValidValue(s){
    const re = /^\d+$/;
    return !(re.test(s));
};

function isValidStatus(s){
    const re = /^\D*$/;
    return !(re.test(s));
};
//d2
function collectErrors(record){
    const normal_record = (buildRecordFromForm(record));
    const errors = [];
    if (isValidLogin(normal_record.title) === true) {
        errors.push('title должен быть непустой строкой');
    }
    if (isValidValue(normal_record.value) === true) {
        errors.push('value должен быть корректным числом');
    }
    if (isValidStatus(normal_record.status) === true) {
        errors.push(`status должен быть непустой строкой без цифр`);
    }
    if (!isValidDateYMD(normal_record.createdAt) === true) {
        errors.push('createdAt должен быть датой в формате YYYY-MM-DD');
    }
    return errors;
}
const valid = {
    title: "garry@gmail.com",
    value: "560",
    status: "done",
    createdAt: "2020-12-10"
};
const invalid = {
    title: '<><>>',
    value: NaN,
    status: '123',
    createdAt: '12282023'
};
console.log('Валидный объект', collectErrors(valid));
console.log('Объект с ошибками:', collectErrors(invalid));
//e1
function delay(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}
async function show(ms) {
    console.log("Начало");
    await delay(ms);
    console.log("done");
}
show(500);
//e2
async function safeFetchJson(url){
    let resp;
    try{
        resp = await fetch(url);
    } catch (err){
        return{
        ok: false,
        error: "Сетевая ошибка",
        details: String(err)
        };
    }
    if (!resp.ok){
        return {
        ok: false,
        error: `HTTP ошибка: ${resp.status}`,
        details: resp.statusText
        };
    } else{
        let data;
        try{
            data = await resp.json();
        } catch (err){
            return {
            ok: false,
            error: "Ошибка JSON",
            details: String(err)
            };
        }
        return{
            ok: true,
            data
        };
    }
}
async function showfetch(){
    console.log(await safeFetchJson('https://jsonplaceholder.typicode.com/todos/1'));
    console.log(await safeFetchJson('https://nonexistinguhp/'));
    console.log(await safeFetchJson('https://jsonplaceholder.typicode.com/nonexistent-endpoint'));
}
showfetch();
//f1
function tryParseJson(text){
  try{
    const data = JSON.parse(text);
    return { ok: true, data };
  } catch (error){
    return {
      ok: false,
      error: error.message
    };
  }
}
const validjson = '{"a":1}';
const invalidjson = '{a:1}';
console.log('Результат validjson:', tryParseJson(validjson));
console.log('Результат invalidjson:', tryParseJson(invalidjson));
//f2
function normalizeApiValue(x){
    const num = x;
    const result = [];
    for(const s of num){
        console.log(s);
        if (typeof s === 'number') {
            result.push(s);
        } else if (typeof s === 'string' && s.match(/\d+/g)) { 
            const numbs = Number(s);
            result.push(numbs);
        } else if(s === NaN){
            result.push(0)
        } else{
            result.push(0);
        }
    }
    return result;
}
const x = [10, "20", null, "abc"];
console.log(normalizeApiValue(x));

