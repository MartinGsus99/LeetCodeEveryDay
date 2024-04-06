/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
    const v1 = version1.split(".")
    const v2 = version2.split(".")

    let index1 = 0, index2 = 0
    while (index1 < v1.length && index2 < v2.length) {
        if (parseInt(v1[index1]) > parseInt(v2[index2])) {
            return 1
        } else if (parseInt(v1[index1]) < parseInt(v2[index2])) {
            return -1
        } else {
            index1++
            index2++
        }
    }

    if (index1 < v1.length) {
        for (let i = index1; i < v1.length; i++) {
            if (parseInt(v1[i]) != 0) {
                return 1
            }
        }
    } else if (index2 < v2.length) {
        for (let i = index2; i < v2.length; i++) {
            if (parseInt(v2[i]) != 0) {
                return -1
            }
        }
    }

    return 0
}

var compareVersion = function(version1, version2) {
    const v1 = version1.split('.');
    const v2 = version2.split('.');
    for (let i = 0; i < v1.length || i < v2.length; ++i) {
        let x = 0, y = 0;
        if (i < v1.length) {
            x = parseInt(v1[i]);
        }
        if (i < v2.length) {
            y = parseInt(v2[i]);
        }
        if (x > y) {
            return 1;
        }
        if (x < y) {
            return -1;
        }
    }
    return 0;
};
