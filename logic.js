function helloFromLogic(){
    return "logic works";
}
function filterByStatus(logins, status) {
  return logins.filter(login => login.status === status);
}
function findById(logins, id) {
  return logins.find(login => login.id === id) || null;
}
function sortByValueDesc(logins) {
  const copy = logins.slice();
  copy.sort((a, b) => b.value - a.value);
  return copy;
}
function buildStats(logins) {
  return logins.reduce((acc, login) => {
    acc.totalCount += 1;
    acc.sumValue += login.value;
    if (login.value > acc.maxValue) {
        acc.maxValue = login.value;
    }
    if (login.status === "new") {
        acc.newCount += 1;
    }
    return acc;
  }, { totalCount: 0, sumValue: 0, maxValue: 0, newCount: 0 });
}

function isValidLogin(s){
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  return (re.test(s));
  console.log(re.test(s));
};
function isValidValue(s){
    const re = /^\d+$/;
    if( s > 0 && s < 1000000){
      return (re.test(s));
    } else {
      return false;
    }
};
function isValidDateYMD(s) {
     const re = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;
     return re.test(s);
};
let errors = [];
function clearformerror(){
  formerror.textContent = "";
  errors = [];
};
function inputlack(){
  errors.push('Пожалуйста убедитесь что пустых полей нету')
};
function validateForm(title,value,createdAt){
  if(isValidLogin(title) == true){
    errors.push('Login должен быть непустой строкой, соответствующей почте');
  }
  if(isValidValue(value) == true){
    errors.push(' Значение должно быть числом от 0 до миллиона');
  }
  if(!isValidDateYMD(createdAt)){
    errors.push(' Неправильное значение или формат даты YYYY-MM-DD')
  } else {
    return '0';
  }
};
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