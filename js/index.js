/* =========================================================
                        Total Pricing
========================================================= */
function totalCost() {
    let memoryCostText = document.getElementById("extra-memory-cost");
    memoryCost = parseInt(memoryCostText.innerText)

    let storageCostText = document.getElementById("extra-storage-cost");
    storageCost = parseInt(storageCostText.innerText)

    let deliveryCostText = document.getElementById("extra-delivery-cost");
    deliveryCost = parseInt(deliveryCostText.innerText)

    let totalPriceTexts = document.getElementsByClassName("total-price")
    for (const totalPriceText of totalPriceTexts) {
        totalPriceText.innerText = 1299+ memoryCost + storageCost + deliveryCost
    }
}

/* =========================================================
                Function for Memory Pricing
========================================================= */
function memoryCostUpdate(memoryCepacity) {
    let memoryCostText = document.getElementById("extra-memory-cost");
    memoryCost = parseInt(memoryCostText.innerText)
    // let totalPriceText = document.getElementById("total-price");
    if (memoryCepacity == "8gb") {
        memoryCostText.innerText = 0
    } 
    else {
        memoryCostText.innerText = 180
    }
    totalCost()
}

/* =========================================================
                Function for Storage Pricing
========================================================= */
function storageCostUpdate(storageCepacity) {
    let storageCostText = document.getElementById("extra-storage-cost");
    storageCost = parseInt(storageCostText.innerText)
    if (storageCepacity == "256gb") {
        storageCostText.innerText = 0
    } 
    else if (storageCepacity == "512gb") {
        storageCostText.innerText = 100 
    } 
    else {
        storageCostText.innerText = 180
    }
    totalCost()
}

/* =========================================================
                Function for Delivery Cost
========================================================= */
function deliveryCostUpdate(deliveryCharge) {
    let deliveryCostText = document.getElementById("extra-delivery-cost");
    deliveryCost = parseInt(deliveryCostText.innerText)
    if (deliveryCharge == "free") {
        deliveryCostText.innerText = 0
    } 
    else {
        deliveryCostText.innerText = 20
    }
    totalCost()
}

/* =========================================================
                        Memory Pricing
========================================================= */
document.getElementById("eightGBButton").addEventListener("click", function () {
    memoryCostUpdate("8gb")  
})

document.getElementById("sixteenGBButton").addEventListener("click", function () {
    memoryCostUpdate("16gb")
})



/* =========================================================
                    Storage Pricing
========================================================= */
document.getElementById("twoFiveSix").addEventListener("click", function () {
    storageCostUpdate("256gb")
})
document.getElementById("fiveOneTwo").addEventListener("click", function () {
    storageCostUpdate("512gb")
})
document.getElementById("oneTera").addEventListener("click", function () {
    storageCostUpdate("1tb")
})

/* =========================================================
                        Delivery Cost
========================================================= */
document.getElementById("freeDelivery").addEventListener("click", function () {
    deliveryCostUpdate("free")
})
document.getElementById("premiumDelivery").addEventListener("click", function () {
    deliveryCostUpdate("premium")
})



/*==========================================================================
                    Total Pricing After Using Promo Code 
==========================================================================*/
document.getElementById("cupon-apply-btn").addEventListener("click", function () {
    let cuponBoxText = document.getElementById("cupon-box")
    cuponBox = cuponBoxText.value

    let promoPriceText = document.getElementById("promo-price")
    promoPrice = parseFloat(promoPriceText.innerText)

    let totalPriceText = document.getElementById("total-price")
    totalPrice = parseFloat(totalPriceText.innerText)
    newPrice =totalPrice - (totalPrice*20)/100

    if (cuponBox == "stevekaku") {
        promoPriceText.innerText = newPrice
        cuponBoxText.value = ""
    } 
    else {
        cuponBoxText.value = ""
    }
})
