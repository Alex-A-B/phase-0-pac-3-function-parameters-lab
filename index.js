// writing lab code here

function introduction(name) {
    console.log(`Hi, my name is ${name}.`)
    return (`Hi, my name is ${name}.`)
}

function introductionWithLanguage(name, language) {
    console.log(`Hi, my name is ${name} and I am learning to program in ${language}.`)
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`)
}

function introductionWithLanguageOptional(name, language = "JavaScript") {
    console.log(`Hi, my name is ${name} and I am learning to program in ${language}.`)
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`)
}

introduction("Eric");
introductionWithLanguage("Eric", "a Banana")
introductionWithLanguageOptional("Eric")
introductionWithLanguageOptional("Eric", "a box of Chicken Nuggies")

// Hey future Alex - use this method of console logging to see what is going on! 