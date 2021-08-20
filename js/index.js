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


// memoryCostUpdate
document.getElementById("eightGBButton").addEventListener("click", function () {
    memoryCostUpdate("8gb")  
})

document.getElementById("sixteenGBButton").addEventListener("click", function () {
    memoryCostUpdate("16gb")
})



// storageCostUpdate
document.getElementById("twoFiveSix").addEventListener("click", function () {
    storageCostUpdate("256gb")
})
document.getElementById("fiveOneTwo").addEventListener("click", function () {
    storageCostUpdate("512gb")
})
document.getElementById("oneTera").addEventListener("click", function () {
    storageCostUpdate("1tb")
})

// deliveryCostUpdate
document.getElementById("freeDelivery").addEventListener("click", function () {
    deliveryCostUpdate("free")
})
document.getElementById("premiumDelivery").addEventListener("click", function () {
    deliveryCostUpdate("premium")
})



// let promoPriceText = document.getElementById("promo-price")
// promoPrice = parseInt(promoPriceText.innerText)-20
// promoPriceText.innerText = promoPrice
