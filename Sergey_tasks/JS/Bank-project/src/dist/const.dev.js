"use strict";

var labelWelcome = document.querySelector('.welcome');
var labelDate = document.querySelector('.date');
var labelBalance = document.querySelector('.balance__value');
var labelSumIn = document.querySelector('.summary__value--in');
var labelSumOut = document.querySelector('.summary__value--out');
var labelSumInterest = document.querySelector('.summary__value--interest');
var labelTimer = document.querySelector('.timer'); //---------------------------------------------------------------------------

var containerApp = document.querySelector('.app');
var containerMovements = document.querySelector('.movements');
var movementsRowDeposit = document.querySelector(".movements__row");
var movementsTypeDeposit = document.querySelector(".movements__type-deposit");
var movementsTypeWithdrawal = document.querySelector(".movements__type-withdrawal");
var movementsValueDeposit = document.querySelector(".movements__value-deposit");
var movementsValueWithdrawal = document.querySelector(".movements__value-withdrawal"); //---------------------------------------------------------------------------

var btnLogin = document.querySelector('.login__btn');
var btnTransfer = document.querySelector('.form__btn--transfer');
var btnLoan = document.querySelector('.form__btn--loan');
var btnClose = document.querySelector('.form__btn--close');
var btnSort = document.querySelector('.btn--sort'); //---------------------------------------------------------------------------

var inputLoginUsername = document.querySelector('.login__input--user');
var inputLoginPin = document.querySelector('.login__input--pin');
var inputTransferTo = document.querySelector('.form__input--to');
var inputTransferAmount = document.querySelector('.form__input--amount');
var inputLoanAmount = document.querySelector('.form__input--loan-amount');
var inputCloseUserName = document.querySelector('.form__input--user');
var inputClosePin = document.querySelector('.form__input--pin');