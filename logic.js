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
function buildStats_new(logins) {
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