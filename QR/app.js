let BTNEL = document.querySelector('button')
let input = document.querySelector('input')
let con = document.querySelector('.content')

BTNEL.addEventListener('click',()=>{
    console.log(input.value)
    con.innerHTML = `            <h1>QR code Generator</h1>
            <span>paste a url or enter text to create QR code</span>
            <input type="text" placeholder="enter text or url">
            <button>Generate QR code</button>
            <img src="https://api.qrserver.com/v1/create-qr-code/?data=${input.value}&amp;size=200x200" alt="" title="" />`;       
})