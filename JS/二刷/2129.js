/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
    let words=title.split(" ")

    for(let i=0;i<words.length;i++){

        if(words[i].length<=2){
            words[i]=words[i].toLowerCase()
        }else{
            words[i]=words[i][0].toUpperCase()+words[i].slice(1).toLowerCase()
        }
    }

    return words.join(" ")
};