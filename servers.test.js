describe("Servers test (with setup and tear-down)", function() {
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


  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();
    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should add a new tr with an updated tip average()', function (){
    updateServerTable();
    let docu = document.getElementById('server1');
    docu = docu.getElementsByTagName('td');
    expect(docu[0].innerText).toEqual("Alice");
  });
});
