
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



// function to get input values costing 
function getInputValueNumber(id) {
    const inputField = document.getElementById(id)
    const inputFieldValue = inputField.value
    const inputFieldValueNumber = parseInt(inputFieldValue)
    return inputFieldValueNumber
}

function getInputValues(id) {
    const inputField = document.getElementById(id)
    const inputFieldValue = inputField.value
    return inputFieldValue
}

// function to get innerText
function getInnerText(id) {
    const Element = document.getElementById(id)
    const ElementValue = Element.innerText
    const ElementValueNumber = parseInt(ElementValue)
    return ElementValueNumber
}

function setInnerText(value) {
    const MainAmountElement = document.getElementById('main-amount')
    MainAmountElement.innerText = value
}



// Toggle function 

document.getElementById('add-button').addEventListener('click', function () {
    // const froms = document.getElementsByClassName('from')
    // for (const from of froms) {

    //     from.style.display = 'none'
    // }
    // document.getElementById('Add-money-parent').style.display = 'block'

    handleToggle('Add-money-parent')
})


document.getElementById('cash-out-button').addEventListener('click', function () {
    // const froms = document.getElementsByClassName('from')
    // for (const from of froms) {
    //     from.style.display = 'none'
    // }
    // document.getElementById('cash-Out-parent').style.display = 'block'

    handleToggle('cash-Out-parent')
})


document.getElementById('transfer-button').addEventListener('click', function () {
    // const froms = document.getElementsByClassName('from')
    // for (const from of froms) {
    //     from.style.display = 'none'
    // }
    // document.getElementById('transfer-money-parent').style.display = 'block'

    handleToggle('transfer-money-parent')
})

document.getElementById('bonus-button').addEventListener('click', function () {
    // const froms = document.getElementsByClassName('from')
    // for (const from of froms) {
    //     from.style.display = 'none'
    // }
    // document.getElementById('get-bonus-parent').style.display = 'block'
    handleToggle('get-bonus-parent')
})


// function to toggle Short
function handleToggle(id) {

    const froms = document.getElementsByClassName('from')

    for (const from of froms) {

        from.style.display = 'none'
    }
    document.getElementById(id).style.display = 'block'
}



// add money feature

const validPin = 1234
document.getElementById('add-money-btn').addEventListener('click', function (e) {
    e.preventDefault()
    // console.log('clicked button')

    // const selectBank = document.getElementById('bank').value


    const selectBank = getInputValues('bank')

    // const BankAccountNumber = document.getElementById('account-number').value

    const BankAccountNumber = getInputValues('account-number')


    // const AddAmount = parseInt(document.getElementById('add-amount').value)

    const AddAmount = getInputValueNumber('add-amount')

    // const pin = parseInt(document.getElementById('pin').value)

    const pin = getInputValueNumber('pin')


    if (BankAccountNumber.length < 11) {
        alert("please provaide valid account number")
        return
    }

    if (pin !== validPin) {
        alert("plase provaide valid pin number")
        return
    }
    // console.log(selectBank, BankAccountNumber, AddAmount, pin)

    // const MainAmount = parseInt(document.getElementById('main-amount').innerText)

    const MainAmount = getInnerText('main-amount')


    const totalAmount = AddAmount + MainAmount

    // document.getElementById('main-amount').innerText = totalAmount
    setInnerText(totalAmount)

})



// cash out feature
document.getElementById('cash-btn').addEventListener('click', function (e) {
    e.preventDefault()
    // console.log('cash out conected')

    // const AgentNumber = parseInt(document.getElementById('agent-number').value)

    const AgentNumber = getInputValueNumber('agent-number')

    // const Amount = parseInt(document.getElementById('amount').value)
    const Amount = getInputValueNumber('amount')


    // const DigitPinNumber = parseInt(document.getElementById('digit-number').value)
    const DigitPinNumber = getInputValueNumber('digit-number')


    if (AgentNumber < 11) {
        alert('valid number')
        return
    }
    if (DigitPinNumber !== validPin) {
        alert('valid pin number')
        return
    }
    // console.log(AgentNumber, Amount, DigitPinNumber)
    // const MainAmount = parseInt(document.getElementById('main-amount').innerText)
    const MainAmount = getInnerText('main-amount')
    // console.log(Amount, MainAmount)

    const totalAmount = MainAmount - Amount

    // document.getElementById('main-amount').innerText = totalAmount
    setInnerText(totalAmount)

})




// // toggle feature
// document.getElementById('add-button').addEventListener('click', function () {

//     document.getElementById('cash-Out-parent').style.display = 'none'
//     document.getElementById("Add-money-parent").style.display = 'block'
//     document.getElementById('transfer-money-parent').style.display = 'none'

// })

// document.getElementById('cash-out-button').addEventListener('click', function () {

//     document.getElementById('cash-Out-parent').style.display = 'block'
//     document.getElementById("Add-money-parent").style.display = 'none'
//     document.getElementById('transfer-money-parent').style.display = 'none'

// })
// //  transfer  money toggle
// document.getElementById('transfer-button').addEventListener('click', function () {
//     document.getElementById('transfer-money-parent').style.display = 'block'
//     document.getElementById('cash-Out-parent').style.display = 'none'
//     document.getElementById("Add-money-parent").style.display = 'none'
// })
