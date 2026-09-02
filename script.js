document.getElementById("login-buttom").addEventListener("click", function (e) {
    e.preventDefault()
    const mobileNumber = 12345678910
    const pinNumber = 1234

    const mobileNumbervalue = document.getElementById("mobile-number").value
    const mobileNumberValueConverted = parseInt(mobileNumbervalue)


    const pinNumberValue = document.getElementById("pin-number").value
    const pinNumberValueConverted = parseInt(pinNumberValue)

    // console.log(e)
    console.log(mobileNumberValueConverted, pinNumberValueConverted)
    if (mobileNumberValueConverted === mobileNumber && pinNumberValueConverted === pinNumber) {
        // console.log("all values matched")
        // new page dakabe
        window.location.href = "./Home.html"
    }
    else {
        // console.log("invalid credentials")
        alert("invalid credentials")
    }
})




