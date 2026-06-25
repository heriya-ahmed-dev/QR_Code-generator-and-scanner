let generate = document.getElementById('generate')
    generate.addEventListener('click',()=>{
    let input = document.getElementById('input')
    let url = `https://quickchart.io/qr?text=${encodeURIComponent(input.value)}`
    let qrcode = document.getElementById('qrcode');


    if(input.value == ''){
        alert('please enter value before generating')
        return
    }
    else{
            generate.innerHTML = 'Generating'
                setTimeout(()=>{
                  generate.innerHTML = 'generated'
                  document.getElementById('section').style.height = '450px'
                   document.getElementById('box').style.display = 'block'
                   qrcode.src= url  
             },1000)
                  
        
    }

})