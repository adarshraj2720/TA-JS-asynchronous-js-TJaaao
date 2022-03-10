let text = document.querySelector('#text');
let github = document.querySelector('.github')


function createFollowersUI(data) {
    // console.log(data.length)
    // if (data.length > 4) {

    //     for (let i = 0; i < 5; i++) {

    //         let img = document.createElement('img');

    //         let follower = document.querySelector('.follower');
    //         follower.innerHTML="";
    //         img.src = data[i].avatar_url;
    //         follower.append(img);

    //     }
    // } else {
    //     for (let i = 0; i < data.length; i++) {
    //         let img = document.createElement('img');
    //         let follower = document.querySelector('.follower');
    //         follower.innerHTML=""
    //         img.src = data[i].avatar_url;
    //         follower.append(img);
    //     }
    // }
    let follower = document.querySelector('.follower');

    follower.innerHTML = "";
    let span=document.createElement('span');
    span.innerText="follower"
    data.slice(0, 5).forEach((elm) => {
        console.log(data)
        let img = document.createElement('img');
        img.src = elm;
        follower.append(img,span);
    })
}


function createFollowingUI(data) {
    let following = document.querySelector('.following');
    let span=document.createElement('span');
    span.innerText="follwing"
    following.innerHTML = ""
    data.slice(0, 5).forEach((elm) => {
        console.log(data)
        let img = document.createElement('img');
        img.src = elm;
        following.append(img,span);
    })

}

function createUI(userinfo) {
    github.innerHTML = "";
    let img = document.createElement('img');
    img.classList.add('profile')
    img.src = userinfo.avatar_url;
    let name = document.createElement('h2');
    name.innerText = userinfo.name
    let username = document.createElement('small');
    username.innerText = `@${userinfo.login}`
    username.style.textDecoration = "underline"
    github.append(img, name, username)
}


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
            event.target.value = ""
        };
        xhr.send()

        let xhr1 = new XMLHttpRequest();
        xhr1.open('GET', `https://api.github.com/users/${event.target.value}/followers`);
        xhr1.onload = function () {
            let userData = JSON.parse(xhr1.response)
            let followerData = userData.reduce((acc, cv) => {
                acc.push(cv.avatar_url);
                return acc;
            }, [])
            console.log(followerData)
            createFollowersUI(followerData);
        };
        xhr1.send();


        let xhr2 = new XMLHttpRequest();
        xhr2.open('GET', `https://api.github.com/users/${event.target.value}/following`);
        xhr2.onload = function () {
            let userData = JSON.parse(xhr2.response)
            let followingData = userData.reduce((acc, cv) => {
                acc.push(cv.avatar_url);
                return acc;
            }, [])
            createFollowingUI(followingData);
        };
        xhr2.send();

    }
}
text.addEventListener('keyup', handleChange)


let reload = document.querySelector('button');

function handleClick(event) {
    let img = document.querySelector('.cat-img')
    let xhr1 = new XMLHttpRequest();
    xhr1.open('GET', `https://api.thecatapi.com/v1/images/search?limit=1&size=full`);
    xhr1.onload = function () {
        let userData = JSON.parse(xhr1.response)
        console.log(userData[0].url)
        img.src = userData[0].url;
    };
    xhr1.send();


}
reload.addEventListener('click', handleClick)
