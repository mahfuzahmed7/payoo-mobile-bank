document.getElementById('btn-add-money').addEventListener('click', function (event) {
    event.preventDefault();


    // const addMoney = document.getElementById('input-add-money').value;
    // const addMoneyNumber = parseFloat(addMoney);

    // getInputFieldValueById();
    // const addMoney = getInputFieldValueById();

    const addMoney = getInputFieldValueById('input-add-money');
    const pinNumber = getInputFieldValueById('input-pin-number');
    console.log('add money with parameter', addMoney, pinNumber);


});