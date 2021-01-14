const productInfo = {
    "displayedName": {
        "displayedName": {
            "value": [
                "Профиль маячковый ПВХ 10 мм L3м"
            ],
            "description": "Полное наименование товара для клиента"
        }
    },
    "stock": {
        "stocks": {
            "34": {
                "2": "35",
                "3": "42",
                "4": "58",
                "5": "57",
                "6": "112",
                "20": "51",
                "22": "78",
                "26": "34",
                "32": "22",
                "35": "358",
                "40": "28",
                "43": "68",
                "45": "58",
                "49": "31",
                "51": "29",
                "56": "42",
                "62": "26",
                "64": "0",
                "65": "57",
                "86": "15",
                "114": "41",
                "117": "46",
                "143": "46",
                "162": "4",
                "171": "0",
                "176": "12"
            }
        }
    }
}

function getProductName() {
    console.log('Product name: ', productInfo.displayedName.displayedName.value[0])
}

function isProductInStock() {
    const prodAmount = productInfo.stock.stocks["34"]
    let arr = []

    for (let key in prodAmount) {
        if (prodAmount.hasOwnProperty(key) && prodAmount[key] != "0") {
            arr.push(key)
        }
    }

    console.log(arr)
}

function findMaxAmount() {
    const prodAmount = productInfo.stock.stocks["34"]
    let shopNumber
    let max = 0

    for (let key in prodAmount) {
        if (prodAmount.hasOwnProperty(key) && (parseInt(prodAmount[key]) > max)) {
            max = prodAmount[key]
            shopNumber = key
        }
    }

    console.log(`Max amount: ${max}, Shop number: ${shopNumber}`)
}

getProductName()
isProductInStock()
findMaxAmount()


