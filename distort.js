let orig, sib
let runs = 0
const charSet = '0+>AE-$#@%&*'

const distort = target => {
    // const curr = e.target
    orig = target.innerText
    sib = setInterval(() => text(target), 800)
}

const undistort = e => {
    clearInterval(sib)
    e.target.innerText = orig
}

const text = current => {
    if (runs >= 2) {
        runs = 0
        current.innerText = orig
        return
    }

    const chars = current.innerText.split('')
    const rand = Math.floor(Math.random() * (chars.length))
    const randRep = Math.floor(Math.random() * (charSet.length))
    if(chars[rand] != charSet[randRep] && chars[rand] != ' ') {
        chars[rand] = charSet[randRep]
    } else {
        text(current)
    }

    current.innerText = chars.join('')
    runs += 1
}

const distortElms = document.querySelectorAll('.distort')
distortElms.forEach(elm => {
    // distort(elm)
    // elm.addEventListener('mouseenter', distort)
    // elm.addEventListener('mouseleave', undistort)
})