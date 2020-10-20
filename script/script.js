'use strict'; 

const isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

const isText = function(n) {
  return !isNaN(n) || n === '' || n === null;
};

let money;
const start = function() {
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
  percentDeposit: 0,
  moneyDeposit: 0,
  mission: 50000,
  period: 3,
  budget: Number(money),
  budgetMonth: 0,
  budgetDay: 0,
  expensesMonth: 0,
  asking: function (){
    if (confirm('Есть ли у вас дополнительный источник заработка?')) {
      let itemIncome;
      do { 
        itemIncome= prompt('Какой у вас есть дополнительный заработок?', 'Таксую');
      } while (isText(itemIncome));
      let cashIncome;
      do {
        cashIncome = prompt('Сколько в месяц зарабатываете на этом?', '10000');
    } while (!isNumber(cashIncome));
      cashIncome = Number(cashIncome);
      appData.income[itemIncome] = cashIncome;
    }
      let addExpenses; 
    do { addExpenses= prompt('Перечислите возможные расходы за расчитываемый период через запятую');
      } while (isText(addExpenses));
    appData.addExpenses = addExpenses.toLowerCase().split(', ');
    appData.deposit = confirm('Есть ли у вас депозит в банке?');
    let expenses;
    let result = 0;
    let sum = 0;
    for( let i = 0; i < 2; i++) {
      do {
    expenses = prompt('Введите обязательную статью расходов?');
      } while (isText(expenses));
    do 
    {sum = prompt('Во сколько это обойдется?');
    } while (!isNumber(sum));
    sum = Number(sum);
    this.expenses[expenses] = sum;
  }
  return result;
  }, 
  getExpensesMonth: function () {
  let sum = 0;
  for (let key in appData.expenses) {
    sum += appData.expenses[key];
    }
    return sum;
  }, 
  getBudget: function() {
  appData.budgetMonth = appData.budget - appData.getExpensesMonth();
  appData.budgetDay = Math.floor(appData.budgetMonth / 30);
  return appData.budgetMonth;
},
  getTargetMonth: function() {
  return (Math.ceil(appData.mission/ appData.budgetMonth));
}, 
  getStatusIncome: function () {
if (appData.budgetDay > 1200) {
  return ('У вас высокий уровень дохода');
} else if (appData.budgetDay > 600 && appData.budgetDay <= 1200) {
  return ('У вас средний уровень дохода');
} else if (appData.budgetDay <= 600 && appData.budgetDay >= 0) {
return('К сожалению, у вас уровень дохода ниже среднего');
} else {
  return ('Что-то пошло не так');
}
},
getInfoDeposit: function() {
  if (appData.deposit) {
    do {
      appData.percentDeposit = prompt('Какой годовой процент?', '10');
  } while (!isNumber(appData.percentDeposit));
      appData.percentDeposit = Number(appData.percentDeposit);
    do {
      appData.moneyDeposit = prompt('Какая сумма заложена?', 10000);
  } while (!isNumber(appData.moneyDeposit));
      appData.moneyDeposit = Number(appData.moneyDeposit);
}
},
calcSavedMoney: function(){
  return appData.budgetMonth * appData.period;
}
};

appData.asking();
appData.getInfoDeposit();

/*const start = function (){
  money = prompt('Ваш месячный доход?');
  while(!isNumber(money)){
    money = prompt('Ваш месячный доход?');
  }
}; */

const expensesMonth = appData.getExpensesMonth();
appData.expensesMonth = expensesMonth;
console.log(expensesMonth);
const accumulatedMonth = appData.getBudget();
const targetMonth = appData.getTargetMonth();
const statusIncome = appData.getStatusIncome();
console.log(statusIncome);

if ( appData.mission/ appData.budgetMonth < 0 ) {
    console.log ('Цель не будет достигнута');
  } else {  
    console.log ('Цель будет достигнута за ' + targetMonth +' месяцев');
}

for (let key in appData) {
  if ( typeof(appData[key]) === 'function') {
    continue;
  }
  console.log('Наша программа включает в себя данные: ' + key + " " + appData[key]);
}

console.log(appData.addExpenses.map(n => `${n[0].toUpperCase()}${n.slice(1)}`).join(', '));