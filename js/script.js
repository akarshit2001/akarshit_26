var text= document.getElementById('head')
function welcome_text(){
    const  message="Hi! Viewer"
    let i=0
    const type=()=> {
        if (i < message.length) {
            text.innerHTML += message.charAt(i)
            i++
            setTimeout(type, 500)
        } else {
            let b = " |"
            text.innerHTML += b.blink()
        }
    }
    type()


}
welcome_text()