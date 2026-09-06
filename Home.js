
// document.getElementById("add-money-btn").addEventListener('click', function (e) {
//     e.preventDefault()
//     // console.log("clicked")

//     const selrctBank = document.getElementById('bank').value

//     const BankAccountNumber = document.getElementById('account-number').value


//     const AddAmount = parseInt(document.getElementById('add-amount').value)

//     const pin = document.getElementById('pin').value


//     // console.log(selrctBank, BankAccountNumber, AddAmount, pin)

//     const MainAmount = parseInt(document.getElementById('main-amount').innerText)

//     // console.log(selrctBank, BankAccountNumber, AddAmount, pin, MainAmount)

//     const totalAmount = AddAmount + MainAmount

//     document.getElementById('main-amount').innerText = totalAmount
//     // console.log(selrctBank, BankAccountNumber, AddAmount, MainAmount)

// })
// add money feature

const validPin = 1234
document.getElementById('add-money-btn').addEventListener('click', function (e) {
    e.preventDefault()
    // console.log('clicked button')

    const selectBank = document.getElementById('bank').value
    const BankAccountNumber = document.getElementById('account-number').value


    const AddAmount = parseInt(document.getElementById('add-amount').value)
    const pin = parseInt(document.getElementById('pin').value)


    if (BankAccountNumber.length < 11) {
        alert("please provaide valid account number")
        return
    }

    if (pin !== validPin) {
        alert("plase provaide valid pin number")
        return
    }
    // console.log(selectBank, BankAccountNumber, AddAmount, pin)

    const MainAmount = parseInt(document.getElementById('main-amount').innerText)


    const totalAmount = AddAmount + MainAmount

    document.getElementById('main-amount').innerText = totalAmount


})


// cash out feature
document.getElementById('cash-btn').addEventListener('click', function (e) {
    e.preventDefault()
    // console.log('cash out conected')

    const AgentNumber = parseInt(document.getElementById('agent-number').value)

    const Amount = parseInt(document.getElementById('amount').value)
    const DigitPinNumber = parseInt(document.getElementById('digit-number').value)


    if (AgentNumber < 11) {
        alert('valid number')
        return
    }
    if (DigitPinNumber !== validPin) {
        alert('valid pin number')
        return
    }
    // console.log(AgentNumber, Amount, DigitPinNumber)
    const MainAmount = parseInt(document.getElementById('main-amount').innerText)
    // console.log(Amount, MainAmount)

    const totalAmount = MainAmount - Amount

    document.getElementById('main-amount').innerText = totalAmount

})




// toggle feature 
document.getElementById('add-button').addEventListener('click', function () {

    document.getElementById('cash-Out-parent').style.display = 'none'
    document.getElementById("Add-money-parent").style.display = 'block'


})

document.getElementById('cash-out-button').addEventListener('click', function () {

    document.getElementById('cash-Out-parent').style.display = 'block'
    document.getElementById("Add-money-parent").style.display = 'none'


})

