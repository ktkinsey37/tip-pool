describe("Payments test (with setup and tear-down)", function() {
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
        document.querySelector('table tbody').innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
    });

    it('add a new payment upon submit payment info', function () {
        submitPaymentInfo();
        expect(document.querySelector('#paymentTable tbody td').innerHTML).toEqual('$10');
        expect(document.querySelector('#paymentTable tbody td:nth-child(2)').innerHTML).toEqual('$2');
        expect(document.querySelector('#paymentTable tbody td:nth-child(3)').innerHTML).toEqual('20%');
        });

  
    it('should return a bill amt, tip amt, and tip percent', function () {
        let obj = createCurPayment();
        expect(obj.billAmt).toEqual('10');
        expect(obj.tipAmt).toEqual('2');
        expect(obj.tipPercent).toEqual(20);
      });

    it('(appendPaymentTable) should append a new table row for the correct new payment', function(){
        paymentId = 0;                      //need to reset payment ID or it holds over the payment number
        submitPaymentInfo();
        expect(document.querySelector('#paymentTable tbody tr').id).toEqual('payment1');
    });
  
    it('(updateSummary) should', function() {
//this is throwing a sometimes error where it somehow is adding the bill twice and so ending up with a wrong value. However, when i refresh enough it works. Does that mean it's out of my control?
        submitPaymentInfo();
        expect(document.querySelectorAll('#summaryTable tbody tr td')[0].innerHTML).toEqual('$10');
    });
  });