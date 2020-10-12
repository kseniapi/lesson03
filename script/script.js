let money = 30000;
const income = 'Подработка';
let addExpenses = 'Интернет, такси, кафе';
let deposit = true;
const mission = 100000;
const period = 6;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);

console.log(addExpenses.length);

console.log(`Период равен ${period} месяцев`);
console.log(`Цель заработать ${mission} долларов`);

console.log(addExpenses.toLowerCase().split(', '));

let budgetDay = money / 30;
//console.log(budgetDay);

money = prompt('Ваш месячный доход?');
addExpenses = prompt('Перечислите возможные расходы за расчитываемый период через запятую');
deposit = confirm('Есть ли у вас депозит в банке?');

const expenses1 = prompt('Введите обязательную статью расходов?');
const expenses2 = prompt('Введите обязательную статью расходов?');
const amount1 = Number(prompt('Во сколько это обойдется?'));
const amount2 = Number(prompt('Во сколько это обойдется?'));

const budgetMonth = money - (amount1 + amount2);
console.log(budgetMonth);

console.log(Math.ceil(mission/budgetMonth));

budgetDay = budgetMonth/30;
console.log(Math.floor(budgetDay));

if (budgetDay > 1200) {
  console.log('У вас высокий уровень дохода');
} else if (budgetDay > 600 && budgetDay <= 1200) {
  console.log('У вас средний уровень дохода');
} else if (budgetDay <= 600 && budgetDay >= 0) {
console.log('К сожалению, у вас уровень дохода ниже среднего');
} else {
  console.log('Что-то пошло не так');
}
