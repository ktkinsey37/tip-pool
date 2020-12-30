describe("Helpers test (with setup and tear-down)", function() {
    beforeEach(function () {
        serverNameInput.value = 'Alice';
        billAmtInput.value = '10';
        tipAmtInput.value = '2';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
    });
  
    afterEach(function() {
        delete serverNameInput.value;
        document.querySelector('#serverTable tbody').innerHTML = '';
        delete billAmtInput.value
        delete tipAmtInput.value
        document.querySelectorAll('#summaryTable tbody tr td').innerHTML = '';
        document.querySelector('#paymentTable tbody').innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
    });

    it('(calculate tip percentage) should calc the tips percentage', function () {
        expect(calculateTipPercent(10, 2)).toEqual(20);
    });

    it('(append new td) should add a new td with a non-null value', function () {
        let tr = document.querySelector('tr');
        let value = 0;
        appendTd(tr, value);
        expect(document.querySelector('td').innerHTML).toEqual(`${value}`);
        document.querySelector('td').remove();
    });

    it('(append delete button) should add a new td that deletes the parent tr when clicked', function () {
        let testTr = document.querySelectorAll ('table tr')[1];
        submitPaymentInfo();
        appendDeleteBtn(testTr);
        expect(document.querySelectorAll ('table tr td')[3].id).toEqual('remove');
    });
});