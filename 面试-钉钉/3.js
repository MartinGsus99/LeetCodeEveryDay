/**
 * 模板字符串的实现函数
 * @param {String} str 要匹配的字符串 
 * @param {Object} obj 要替换的对象
 * @returns 
 */
function renderTpl (str, obj) {
    // 该正则用来匹配 ${} 里的内容
    const regex = /\$\{([^}]+)\}/g
    // 该函数用来替换第一个参数`match`匹配到的结果，返回值就是替换后的结果
    const replacer = function (match, item) {
        console.log(match, item)
        return obj[item]
    }
    // 返回替换函数执行后的结果
    return str.replace(regex, replacer)
}

const renderStr = renderTpl("我已经有${year}年${pos}开发经验了,${user.name}呢？",
    {
        year: '2', pos: '前端', user: {
            name: "Martin"
        }
    })
console.log(renderStr)  
