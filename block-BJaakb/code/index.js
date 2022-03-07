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


let text = document.querySelector('#text');
let images = document.querySelector('.images')

function createUI(datainfo) {
    images.innerHTML = ""
    datainfo.forEach((ele) => {
        let images = document.querySelector('.images')
        let img = document.createElement('img')
        img.style.marginBottom = "20px"
        img.src = ele;
        images.append(img);
    })
}
let url = `https://api.unsplash.com/search/photos?query &client_id=gidJ1IIqV-j8NKZ42zssvM7k7bHKkb4aFZ682ZNqNC4`;
let searchurl = (query) => `https://api.unsplash.com/search/photos?query=${query} &client_id=gidJ1IIqV-j8NKZ42zssvM7k7bHKkb4aFZ682ZNqNC4`

function handleChange(event) {
    console.log(event.keyCode)
    if (event.keyCode === 13) {
        fetch(searchurl(text.value)).then((searchResult => {
            console.log(searchResult)

            let alldata = searchResult.results.reduce((acc, cv) => {
                acc.push(cv.urls.small)
                console.log(acc);
                return acc;

            }, [])
            console.log(alldata)
            createUI(alldata)
            text.value = ""
        }))

    }
}
text.addEventListener('keyup', handleChange)

function fetch(url) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onload = () => resolve(JSON.parse(xhr.response))

        xhr.onerror = () => reject('Something Went Wrong')
        xhr.send();
    })
}

fetch(url).then(createUI)