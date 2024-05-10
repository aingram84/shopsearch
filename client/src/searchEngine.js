function searchEngine(searchInput) {
    console.log()
    const encodedInput = encodeURIComponent(searchInput);
    //create links with searchInput
    const goatResult = `https://www.goat.com/search?query=${encodedInput}`
    const stockxResult = `https://stockx.com/search?s=${encodedInput}`
    const footlockerResult = `https://www.footlocker.com/search?query=${encodedInput}`
    const finishlineResult = `https://www.finishline.com/store/noResultsPage/_/N-/Ntt-${encodedInput}`
    const hibbettResult = `https://www.hibbett.com/search?q=${encodedInput}`
    const famousfootwearResult = `https://www.famousfootwear.com/search#q=${encodedInput}`
    const adidasResult = `https://www.adidas.com/us/search?q=${encodedInput}`
    const nikeResult = `https://www.nike.com/w?q=${encodedInput}&vst=${encodedInput}`
    const dtlrResult = `https://www.dtlr.com/pages/search-results?q=${encodedInput}`
    const kickscrewResult = `https://www.kickscrew.com/search?q=${encodedInput}`
    const shoepalaceResult = `https://www.shoepalace.com/search?q=${encodedInput}`
    const snipesResult = `https://www.snipesusa.com/search?q=${encodedInput}`

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
    const famousfootwearObj = {
        "name": "Famous Footwear",
        "link": famousfootwearResult
    }
    const adidasObj = {
        "name": "Adidas",
        "link": adidasResult
    }
    const nikeObj = {
        "name": "Nike",
        "link": nikeResult
    }
    const dtlrObj = {
        "name": "DTLR",
        "link": dtlrResult
    }
    const kickscrewObj = {
        "name": "Kicks Crew",
        "link": kickscrewResult
    }
    const shoepalaceObj = {
        "name": "Shoe Palace",
        "link": shoepalaceResult
    }
    const snipesObj = {
        "name": "Snipes",
        "link": snipesResult
    }

    resultArray.push(goatObj)
    resultArray.push(stockxObj)
    resultArray.push(footlockerObj)
    resultArray.push(finishlineObj)
    resultArray.push(hibbettObj)
    resultArray.push(famousfootwearObj)
    resultArray.push(adidasObj)
    resultArray.push(nikeObj)
    resultArray.push(dtlrObj)
    resultArray.push(kickscrewObj)
    resultArray.push(shoepalaceObj)
    resultArray.push(snipesObj)
    //return array
    return resultArray;
}

module.exports = {
    searchEngine
  }