
let reload=document.querySelector('button');






reload.addEventListener('click',()=>{

   
 let xhr=new XMLHttpRequest();
 xhr.open('GET','https://api.thecatapi.com/v1/images/search?limit=1&size=full')
 xhr.onload=function(){
     let data=JSON.parse(xhr.response)
     let img=document.querySelector('img')
        img.src=(data[0].url)
 }
 xhr.send()

})