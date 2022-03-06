let text = document.querySelector('#text');
let github=document.querySelector('.github')


// let xhr=new XMLHttpRequest();
// xhr.open('GET','https://api.github.com/users/adarshraj2720')
// xhr.onload=function(){
//     let data=JSON.parse(xhr.response)
//     console.log(data.avatar_url);
// }
// xhr.send()
function createUI(userinfo){
    github.innerHTML="";
    let img= document.createElement('img');
    img.src=userinfo.avatar_url;
    let name=document.createElement('h2');
    name.innerText=userinfo.name
    let username=document.createElement('small');
    username.innerText=`@${userinfo.login}`
    username.style.textDecoration="underline"
    username.style.marginBottom="20px";
    let follower=document.createElement('small');

    follower.innerText=userinfo.followers
    follower.style.marginBottom="20px";
    let following=document.createElement('small');
    following.innerText=userinfo.following
    following.style.marginBottom="20px";

    github.append(img,name,username,follower,following)

}

// function follower(){
//     console.log(event.keyCode)
//     if (event.keyCode === 13) {
//         console.log(event.target.value);
//         let xhr = new XMLHttpRequest()
//         xhr.open('GET', `https://api.github.com/users/${event.target.value}/followes`);
//         xhr.onload = function () {
//             let data = JSON.parse(xhr.response);
          
//         console.log(data)
//             event.target.value=""      
//         };
//         xhr.send()
//     }
// }


function handleChange(event) {
    console.log(event.keyCode)
    if (event.keyCode === 13) {
        console.log(event.target.value);
        let xhr = new XMLHttpRequest()
        xhr.open('GET', `https://api.github.com/users/${event.target.value}`);
        xhr.onload = function () {
            let data = JSON.parse(xhr.response);
          
        console.log(data)
        createUI(data)
        // follower()
            event.target.value=""      
        };
        xhr.send()

        let xh = new XMLHttpRequest()
        xh.open('GET', `https://api.github.com/users/${event.target.value}/followers`);
        xh.onload = function () {
            let data1 = JSON.parse(xh.response);
          
        console.log(data1[0].avatar_url)
        console.log(data1[1].avatar_url)
        console.log(data1[2].avatar_url)
        console.log(data1[3].avatar_url)
        console.log(data1[4].avatar_url)
        createUI(data1)
        // follower()
            event.target.value=""      
        };
        xh.send()
    }
}
text.addEventListener('keyup', handleChange)



let reload=document.querySelector('button');

{
reload.addEventListener('click',()=>{

   
 let xh=new XMLHttpRequest();
 xh.open('GET','https://api.thecatapi.com/v1/images/search?limit=1&size=full')
 xh.onload=function(){
     let data=JSON.parse(xh.response)
     let img=document.querySelector('img')
        img.src=(data[0].url)
 }
 xh.send()

})
}