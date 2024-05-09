// Goat https://www.goat.com/search?query=dame%208%20bridge%20city
// StockX https://stockx.com/search?s=DAME+8+BRIDGE+CITY
// Foot Locker https://www.footlocker.com/search?query=DAME%208%20BRIDGE%20CITY
// Finish Line https://www.finishline.com/store/noResultsPage/_/N-/Ntt-DAME%208%20BRIDGE%20CITY

// Hibbett City Gear https://www.hibbett.com/search?q=DAME+8+BRIDGE+CITY&lang=default

function searchEngine(searchInput) {
    console.log()
    const encodedInput = encodeURIComponent(searchInput);
    //create links with searchInput
    const goatResult = `https://www.goat.com/search?query=${encodedInput}`
    const stockxResult = `https://stockx.com/search?s=${encodedInput}`
    const footlockerResult = `https://www.footlocker.com/search?query=${encodedInput}`
    const finishlineResult = `https://www.finishline.com/store/noResultsPage/_/N-/Ntt-${encodedInput}`
    const hibbettResult = `https://www.hibbett.com/search?q=${encodedInput}`
    //create array of objects
    const resultArray = []
    //each object contains name and link
    const goatObj = {
        "name": "Goat",
        "link": goatResult
    }
    const stockxObj = {
        "name": "StockX",
        "link": stockxResult
    }
    const footlockerObj = {
        "name": "FootLocker",
        "link": footlockerResult
    }
    const finishlineObj = {
        "name": "FinishLine",
        "link": finishlineResult
    }
    const hibbettObj = {
        "name": "Hibbett",
        "link": hibbettResult
    }
    resultArray.push(goatObj)
    resultArray.push(stockxObj)
    resultArray.push(footlockerObj)
    resultArray.push(finishlineObj)
    resultArray.push(hibbettObj)
    //return array
    return resultArray;
}

module.exports = {
    searchEngine
  }