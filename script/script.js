'use strict'; 

const income = 'Подработка';
const mission = 100000;
const period = 6;

const money = prompt('Ваш месячный доход?');
const addExpenses = prompt('Перечислите возможные расходы за расчитываемый период через запятую');
const deposit = confirm('Есть ли у вас депозит в банке?');

console.log(addExpenses.toLowerCase().split(', '));

let budgetDay = money / 30;

const expenses1 = prompt('Введите обязательную статью расходов?');
const expenses2 = prompt('Введите обязательную статью расходов?');
const amount1 = Number(prompt('Во сколько это обойдется?'));
const amount2 = Number(prompt('Во сколько это обойдется?'));

function getExpensesMonth() {
  return amount1 + amount2;
}
console.log(getExpensesMonth());

function getAccumuulatedMonth() {
  return money - (amount1 + amount2);
}

const accumulatedMonth = getAccumuulatedMonth();

function getTargetMonth() {
  return mission/ accumulatedMonth;
}
console.log(getTargetMonth());

budgetDay = accumulatedMonth / 30; 
console.log(budgetDay);

const showTypeOf = function(data) {
  console.log(typeof(data));
};
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

let getStatusIncome = function () {
if (budgetDay > 1200) {
  return ('У вас высокий уровень дохода');
} else if (budgetDay > 600 && budgetDay <= 1200) {
  return ('У вас средний уровень дохода');
} else if (budgetDay <= 600 && budgetDay >= 0) {
return('К сожалению, у вас уровень дохода ниже среднего');
} else {
  return ('Что-то пошло не так');
}
};

console.log(getStatusIncome());
