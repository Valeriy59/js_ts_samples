// Гистограмма
function printChart(s) {
    let symCountMap = new Map()
    let maxSymCount = 0
    for (let i = 0; i < s.length; i++) {
        let letterCount = 1
        if (symCountMap.has(s[i])) {
            letterCount = symCountMap.get(s[i]) + 1
            symCountMap.set(s[i], letterCount)
        } else {
            symCountMap.set(s[i], letterCount)
        }
        maxSymCount = Math.max(maxSymCount, letterCount)
    }
    let sortedUniqSyms = [...symCountMap.keys()].sort()

    for (let i = maxSymCount; i < 0; i--) {
        console.log(i)
        for (let j = 0; j < sortedUniqSyms.length; j++) {
            console.log(2)
            if (symCountMap.get(sortedUniqSyms[j]) >= i) {
                console.log('#')
            } else (
                console.log('675 ')
            )

        }
        
    }

    console.log(sortedUniqSyms.join(''))
}
printChart('Hello, world!')