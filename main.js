// https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example
let generateBtn=document.getElementById('generate');
let userInput=document.getElementById('Client-input');
let qrcodeImg=document.getElementById('qrcode')
let shareBtn= document.getElementById('share');
generateBtn.addEventListener('click',()=>{
    if(userInput.value.length>0){
        qrcodeImg.src='https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='+userInput.value;
        qrcodeImg.style.display='inline-block';
        shareBtn.style.display='Inline-block';
    }else{
        console.log('enter');
        userInput.style.background = "red";
        setInterval(()=>{
            userInput.style.background="none"; 
        },500)
    }
})