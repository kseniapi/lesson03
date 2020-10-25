'use strict'; 

const start = document.getElementById('start');
const incomeAdd = document.getElementsByTagName('button')[0];
const expensesAdd = document.getElementsByTagName('button')[1];
const checkbox = document.querySelector('#deposit-check');
const additionalIncomeItem = document.querySelectorAll('.additional_income-item');
const additionalIncomeItem1 = document.querySelectorAll('.additional_income-item')[0];
const additionalIncomeItem2 = document.querySelectorAll('.additional_income-item')[1];
const budgetMonthValue = document.getElementsByClassName('result-total')[0];
const budgetDayValue = document.getElementsByClassName('result-total')[1];
const expensesMonthValue = document.getElementsByClassName('result-total')[2];
const additionalIncomeValue = document.getElementsByClassName('result-total')[3];
const additionalExpensesValue = document.getElementsByClassName('result-total')[4];
const incomePeriodValue = document.getElementsByClassName('result-total')[5];
const targetMonthValue = document.getElementsByClassName('result-total')[6];
const salaryAmount = document.querySelector('.salary-amount');
const incomeTitle = document.querySelectorAll('.income-title')[1];
let incomeItems = document.querySelectorAll('.income-items');
const incomeAmount = document.querySelector('.income-amount');
const expensesTitle = document.querySelectorAll('.expenses-title')[1];
let expensesItems = document.querySelectorAll('.expenses-items');
const additionalExpensesItem = document.querySelector('.additional_expenses-item');
const depositAmount = document.querySelector('.deposit-amount');
const depositPercent = document.querySelector('.deposit-percent');
const targetAmount = document.querySelector('.target-amount');
const periodSelect = document.querySelector('.period-select');
const incomeItem = document.querySelectorAll('.income-items');
const periodAmount = document.querySelector('.period-amount');
start.disabled = true;

function updateValue(e){
  let el = document.querySelector('.period-amount');
  el.innerText = e.target.value;
}
periodSelect.addEventListener('input',updateValue);
const btnCheck = (e)  =>  {
  if(e.target.value === ""){
    start.disabled = true;
  } else {
    start.disabled = false;
  }
};
salaryAmount.addEventListener('input', btnCheck);

const isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

const isText = function(n) {
  return !isNaN(n) || n === '' || n === null;
};

const appData = {
  income: {},
  addIncome: [], 
  expenses: {},
  addExpenses: [],
  deposit: false,
  percentDeposit: 0,
  moneyDeposit: 0,
  budget: 0,
  budgetMonth: 0,
  budgetDay: 0,
  expensesMonth: 0,
  incomeMonth: 0,
  start: function() {
    
  periodSelect.addEventListener('input',appData.start);
  appData.budget = +salaryAmount.value;
  appData.getExpenses();
  appData.getIncome();
  appData.getExpensesMonth();
  appData.getAddExpenses();
  appData.getAddIncome();
  appData.getBudget();
  appData.showResult();
},
showResult: function (){
  
  budgetMonthValue.value = appData.budgetMonth;

  budgetDayValue.value = Math.ceil(appData.budgetDay);
  expensesMonthValue.value = appData.expensesMonth;
  additionalExpensesValue.value = appData.addExpenses.join(', ');
  additionalIncomeValue.value = appData.addIncome.join(', ');
  targetMonthValue.value = Math.ceil(appData.getTargetMonth());
  incomePeriodValue.value = appData.calcPeriod();
},
addExpensesBlock: function (){
const cloneExpensesItem = expensesItems[0].cloneNode(true);
expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesAdd);
expensesItems = document.querySelectorAll('.expenses-items');
if (expensesItems.length === 3) {
  expensesAdd.style.display = 'none';
}
},
addIncomeBlock: function(){
const cloneIncomeItem = incomeItems[0].cloneNode(true);
incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomeAdd);
incomeItems = document.querySelectorAll('.income-items');
if (incomeItems.length === 3) {
incomeAdd.style.display = 'none';
}
},
getExpenses: function (){
expensesItems.forEach(function(item){
  let itemExpenses = item.querySelector('.expenses-title').value;
  let cashExpenses = item.querySelector('.expenses-amount').value;
  if(itemExpenses !== '' && cashExpenses !== '') {
    appData.expenses[itemExpenses] = cashExpenses;
  }
});
},
getIncome: function(){
  incomeItems.forEach(function(item){
  let itemIncome = item.querySelector('.income-title').value;
  let cashIncome = item.querySelector('.income-amount').value;
  if(itemIncome !== '' && cashIncome !== '') {
    appData.income[itemIncome] = cashIncome;
  }
  });


},
getAddExpenses: function(){
const addExpenses = additionalExpensesItem.value.split(',');
addExpenses.forEach(function(item){
  item = item.trim();
  if (item !== ''){
    appData.addExpenses.push(item);
  }
});
},
getAddIncome: function(){
additionalIncomeItem.forEach(function(item){
  const itemValue = item.value.trim();
  if (itemValue !== ''){
    appData.addIncome.push(itemValue);
  }
});
},
  getExpensesMonth: function () {
  let sum = 0;
  for (let key in appData.expenses) {
    sum += +appData.expenses[key];
    //sum = appData.expensesMonth;
    }
    appData.expensesMonth = sum;
    return sum;
  }, 
  getBudget: function() {
  appData.budgetMonth = appData.budget + appData.incomeMonth - appData.getExpensesMonth();
  appData.budgetDay = Math.floor(appData.budgetMonth / 30);
  
  return appData.budgetMonth;
},
  getTargetMonth: function() {
  return targetAmount.value/ appData.budgetMonth;
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
calcPeriod: function(){
  return appData.budgetMonth * periodSelect.value;
}
};


start.addEventListener('click',appData.start);

expensesAdd.addEventListener('click', appData.addExpensesBlock);
incomeAdd.addEventListener('click', appData.addIncomeBlock);

appData.getInfoDeposit();

/*const start = function (){
  money = prompt('Ваш месячный доход?');
  while(!isNumber(money)){
    money = prompt('Ваш месячный доход?');
  }
}; */

// const expensesMonth = appData.getExpensesMonth();
// appData.expensesMonth = expensesMonth;
// const accumulatedMonth = appData.getBudget();
// const targetMonth = appData.getTargetMonth();
// const statusIncome = appData.getStatusIncome();
//console.log(statusIncome);

//if ( appData.mission/ appData.budgetMonth < 0 ) {
  //  console.log ('Цель не будет достигнута');
  //} else {  
    //console.log ('Цель будет достигнута за ' + targetMonth +' месяцев');
//}

for (let key in appData) {
  if ( typeof(appData[key]) === 'function') {
    continue;
  }
  //console.log('Наша программа включает в себя данные: ' + key + " " + appData[key]);
}

//console.log(appData.addExpenses.map(n => `${n[0].toUpperCase()}${n.slice(1)}`).join(', '));

