
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