const colors = ["синий", "черный", "зеленый", "красный", "желтый", "зеленый"];

function createColorString() {
    let GermanFlag = colors.filter(item => item  == "черный" || item == "красный" || item == "желтый")
    return GermanFlag.join('-')
}

console.log(createColorString()); 