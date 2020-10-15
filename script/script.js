'use strict'; 

const isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};


const income = 'Подработка';
const mission = 100000;
const period = 6;

let money;
const addExpenses = prompt('Перечислите возможные расходы за расчитываемый период через запятую');
const deposit = confirm('Есть ли у вас депозит в банке?');

console.log(addExpenses.toLowerCase().split(', '));

/*const start = function (){
  money = prompt('Ваш месячный доход?');
  while(!isNumber(money)){
    money = prompt('Ваш месячный доход?');
  }
}; */

const start = function() {
  do {
    money = prompt('Ваш месячный доход?');
  } while (!isNumber(money));
};

start();

let expenses = [];

const getExpensesMonth = function () {
  let result = 0;
  let sum = 0;
  for( let i = 0; i < 2; i++) {

    expenses[i] = prompt('Введите обязательную статью расходов?');
    do 
    { 
      sum = prompt('Во сколько это обойдется?');
    } while (!isNumber(sum));
    result += Number(sum);
  console.log(expenses);
  console.log(result);
  }
  // console.log(result);

  return result;
};

const expensesAmount = getExpensesMonth();

console.log(expensesAmount);

function getAccumuulatedMonth() {
  return money - expensesAmount;
}

const accumulatedMonth = getAccumuulatedMonth();

function getTargetMonth() {
  if ( mission/ accumulatedMonth < 0 ) {
    return ('Цель не будет достигнута');
  } else {  
    return ('Цель будет достигнута');
}
}
console.log(getTargetMonth());
//console.log(Math.ceil(getTargetMonth()));

const budgetDay = accumulatedMonth / 30; 
console.log(Math.floor(budgetDay));

const showTypeOf = function(data) {
  console.log(typeof(data));
};
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

const getStatusIncome = function () {
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
