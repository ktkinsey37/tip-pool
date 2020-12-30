
// accepts 'tipAmt', 'billAmt', 'tipPercent' and sums total from allPayments objects
function sumPaymentTotal(type) {
  let total = 0;

  for (let key in allPayments) {
    let payment = allPayments[key];

    total += Number(payment[type]);
  }

  return total;
}

// converts the bill and tip amount into a tip percent
function calculateTipPercent(billAmt, tipAmt) {
  return Math.round(100 / (billAmt / tipAmt));
}

// expects a table row element, appends a newly created td element from the value
function appendTd(tr, value) {
  let newTd = document.createElement('td');
  newTd.innerText = value;

  tr.append(newTd);
}

function appendDeleteBtn (parent) {                 //works for both the payment table and server table
  let removeBtn = document.createElement('td');
  removeBtn.id = "remove";
  removeBtn.innerText = 'X';
  removeBtn.addEventListener('click', del);
  parent.appendChild(removeBtn);
}

function del(evt) {
  // evt.preventDefault();          //i ended up looking up the solutions and can't understand why mine isn't working. Can we talk about it?
  // evt.target.parentNode.remove();
  // updateServerTable();
  let ele = evt.target.closest('tr');
  delete allServers[ele.id];
  ele.parentNode.removeChild(ele);
  updateServerTable();
}