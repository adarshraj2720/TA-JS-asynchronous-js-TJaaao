let text = document.querySelector('#text');
let images = document.querySelector('.images')

// function fetch(url){
   

// return new Promise((resolve,reject)=>{

//     console.log(event.keyCode)
//     if (event.keyCode === 13) {
//         console.log(event.target.value);
//         let xhr = new XMLHttpRequest()
//         xhr.open('GET', `https://api.unsplash.com/search/photos?query=${event.target.value} &client_id=gidJ1IIqV-j8NKZ42zssvM7k7bHKkb4aFZ682ZNqNC4`);
//         xhr.onload = function () {
//             let data = JSON.parse(xhr.response);
//             console.log(data);
//           let alldata =  data.results.reduce((acc, cv) => {
//                 acc.push(cv.urls.small)
//                 console.log(acc);
//                 return acc;
               
//             }, [])
//             createUI(alldata)
//             event.target.value=""      
//         };
//         xhr.send()
//     }

// })

// }



//gidJ1IIqV-j8NKZ42zssvM7k7bHKkb4aFZ682ZNqNC4
//https://api.unsplash.com/photos/random
//https://api.unsplash.com/photos/random?client_id=gidJ1IIqV-j8NKZ42zssvM7k7bHKkb4aFZ682ZNqNC4


// let xhr= new XMLHttpRequest()
// xhr.open('GET','https://api.unsplash.com/search/photos?query=cat &client_id=gidJ1IIqV-j8NKZ42zssvM7k7bHKkb4aFZ682ZNqNC4');
// xhr.onload=function(){
//     let data= JSON.parse(xhr.response);
//     console.log(data.results.reduce((acc,cv)=>{
//         acc.push(cv.urls.small)
//         return acc;
//     },[]))
// };

function createUI(datainfo) {
    images.innerHTML=""
    datainfo.forEach((ele) => {
        // let images = document.querySelector('.images')
        let img = document.createElement('img')
        img.style.marginBottom="20px"
        img.src = ele;
        images.append(img);
    })
}

function handleChange(event) {
    console.log(event.keyCode)
    if (event.keyCode === 13) {
        console.log(event.target.value);
        let xhr = new XMLHttpRequest()
        xhr.open('GET', `https://api.unsplash.com/search/photos?query=${event.target.value} &client_id=gidJ1IIqV-j8NKZ42zssvM7k7bHKkb4aFZ682ZNqNC4`);
        xhr.onload = function () {
            let data = JSON.parse(xhr.response);
            console.log(data);
          let alldata =  data.results.reduce((acc, cv) => {
                acc.push(cv.urls.small)
                console.log(acc);
                return acc;
               
            }, [])
            createUI(alldata)
            event.target.value=""      
        };
        xhr.send()
    }
}
text.addEventListener('keyup', handleChange)
