'use strict'; 

const isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let money, 
start = function() {
  do {
    money = prompt('Ваш месячный доход?');
  } while (!isNumber(money));
};
start();


const appData = {
  income: {},
  addIncome: [], 
  expenses: {},
  addExpenses: [],
  deposit: false,
  mission: 50000,
  period: 3,
  asking: function (){
    const addExpenses = prompt('Перечислите возможные расходы за расчитываемый период через запятую');
    appData.addExpenses = addExpenses.toLowerCase().split(', ');
    appData.deposit = confirm('Есть ли у вас депозит в банке?');
    let expenses;
    let result = 0;
    let sum = 0;
    for( let i = 0; i < 2; i++) {

    expenses = prompt('Введите обязательную статью расходов?');
    do 
    { 
    sum = prompt('Во сколько это обойдется?');
    } while (!isNumber(sum));
    sum = Number(sum);
    this.expenses[expenses] = sum ;
  }
  return result;
  }
  
};

appData.asking();
appData.budget = money;
appData.budgetMonth = 0;
appData.budgetDay = 0;
appData.expensesMonth = 0;


/*const start = function (){
  money = prompt('Ваш месячный доход?');
  while(!isNumber(money)){
    money = prompt('Ваш месячный доход?');
  }
}; */

appData.getExpensesMonth = function () {
  let sum = 0;
  for (let key in appData.expenses) {
    sum += appData.expenses[key];
    }
    return sum;
  };

const expensesMonth = appData.getExpensesMonth();
console.log(expensesMonth);


appData.getBudget = function() {
  appData.budgetMonth = appData.budget - appData.getExpensesMonth();
  appData.budgetDay = Math.ceil(appData.budgetMonth / 30);
  return appData.budgetMonth;
};

const accumulatedMonth = appData.getBudget();

appData.getTargetMonth = function() {
  console.log(Math.ceil(appData.mission/ appData.budgetMonth));
  if ( appData.mission/ appData.budgetMonth < 0 ) {
    return ('Цель не будет достигнута');
  } else {  
    return ('Цель будет достигнута');
}
};
const targetMonth = appData.getTargetMonth();

appData.getStatusIncome = function () {
if (appData.budgetDay > 1200) {
  return ('У вас высокий уровень дохода');
} else if (appData.budgetDay > 600 && appData.budgetDay <= 1200) {
  return ('У вас средний уровень дохода');
} else if (appData.budgetDay <= 600 && appData.budgetDay >= 0) {
return('К сожалению, у вас уровень дохода ниже среднего');
} else {
  return ('Что-то пошло не так');
}
};
const statusIncome = appData.getStatusIncome();
console.log(statusIncome);

for (let key in appData) {
  if ( typeof(appData[key]) === 'function') {
    continue;
  }
  console.log('Наша программа включает в себя данные: ' + key + " " + appData[key]);
}
