
document.getElementById('generate').addEventListener('click',()=>{
    let input = document.getElementById('input')
    let url = `https://quickchart.io/qr?text=${encodeURIComponent(input.value)}`
    let qrcode = document.getElementById('qrcode')

    if(input.value == ''){
        alert('please enter value before generating')
        return
    }
    else{
        qrcode.src= url
    }
})