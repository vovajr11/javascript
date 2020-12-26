import transactionHistory from './data/transactions.js';

{
  /* <table class="transaction-table js-transaction-table">
      <thead>
            <tr>
                <td>${id}</td>
                <td>${amount}</td>
                <td>${date}</td>
                <td>${business}</td>
                <td>${type}</td>
                <td>${name}</td>
                <td>${account}</td>
            </tr>
        </thead>
    </table> */
}

// const transactionContainerEl = document.querySelector('.js-transaction-table');

// console.log(transactionContainerEl);
// const makeTransactionTable = ({
//   id,
//   amount,
//   date,
//   business,
//   type,
//   name,
//   account,
// }) => {
//   const transactionTableTr = document.createElement('tr');

//   const transactionId = document.createElement('td');
//   transactionId.textContent = id;

//   const transactionAmount = document.createElement('td');
//   transactionAmount.textContent = amount;

//   const transactionDate = document.createElement('td');
//   transactionDate.textContent = date;

//   const transactionBusiness = document.createElement('td');
//   transactionBusiness.textContent = business;

//   const transactionType = document.createElement('td');
//   transactionType.textContent = type;

//   const transactionName = document.createElement('td');
//   transactionName.textContent = name;

//   const transactionAccount = document.createElement('td');
//   transactionAccount.textContent = account;

//   transactionTableTr.append(
//     transactionId,
//     transactionAmount,
//     transactionDate,
//     transactionBusiness,
//     transactionType,
//     transactionName,
//     transactionAccount,
//   );

//   return transactionTableTr;
// };

// const transactionElements = transactionHistory.map(makeTransactionTable);

// transactionContainerEl.append(...transactionElements);

const makeTransactionTableRowMarkup = transaction => {
  const { id, amount, date, business, type, name, account } = transaction;

  return `
  <tr>
    <td>${id}</td>
    <td>${amount}</td>
    <td>${date}</td>
    <td>${business}</td>
    <td>${type}</td>
    <td>${name}</td>
    <td>${account}</td>
  </tr>
  `;
};

const tableEl = document.querySelector('.js-transaction-table');
const transactionTableRowsMarkup = transactionHistory
  .map(makeTransactionTableRowMarkup)
  .join();

tableEl.insertAdjacentHTML('beforeend', transactionTableRowsMarkup);
