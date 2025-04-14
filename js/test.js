// task-2
function isEqual(str1="", str2) {
    str1 = str1.split("")
    for (let i = 0; i < str1.length; i++){
        if (str1[i].includes(str2)) {
            return false
        }
    }
    return true
}
console.log(isEqual("abd", "bac"));