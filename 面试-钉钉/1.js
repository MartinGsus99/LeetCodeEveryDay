const compareVersion = function (version1, version2) {
    let v1 = version1.split('.')
    let v2 = version2.split('.')

    let maxLength = Math.max(v1.length, v2.length)

    if (v1.length === v2.length) {
        for (let i = 0; i < maxLength; i++) {
            if (v1[i] > v2[i]) {
                return 1
            } else if (v1[i] < v2[i]) {
                return -1
            }

            return 0
        }
    }
}
