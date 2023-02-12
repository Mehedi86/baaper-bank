document.getElementById('btn-deposit').addEventListener('click',function(){
    const depositField =document.getElementById('deposit-field');
    const newDepositAmount =depositField.value;
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotal = depositTotalElement.innerText;
    const floatDepositeTotal = parseFloat(previousDepositTotal);
    const floatDepositAmount = parseFloat(newDepositAmount);
    depositTotalElement.innerText =floatDepositAmount+floatDepositeTotal;
    depositField.value = '';
    const Balance =document.getElementById('balance-total');
    const balanceString =Balance.innerText;
    const balancefloat =parseFloat(balanceString);
    const TotalBalance= balancefloat+floatDepositAmount;
    Balance.innerText= TotalBalance;
})

document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawField =document.getElementById('withdraw-field');
    const newWithdrawAmountstring =withdrawField.value;  
    const newwithdrawAmount = parseFloat(newWithdrawAmountstring);
    withdrawField.value = '';
    if(isNaN(newWithdrawAmountstring)){
        alert('Please, provide a valid input!!!');
        return;
    }
    const Balance =document.getElementById('balance-total');
    const balanceString =Balance.innerText;
    const balance =parseFloat(balanceString);
    if(balance < newwithdrawAmount){
        alert('Do not have sufficient balance');
        return;
    }
    else{
    const withdrawTotalElement =document.getElementById('withdraw-total');
    const previousWithdrawAmountString =withdrawTotalElement.innerText;
    const previousWithdrawAmount =parseFloat(previousWithdrawAmountString);
    const totalWithdrawAmount =newwithdrawAmount+previousWithdrawAmount;
    withdrawTotalElement.innerText = totalWithdrawAmount;
    const totalBalance = balance - newwithdrawAmount;
    Balance.innerText = totalBalance;
    }
})
