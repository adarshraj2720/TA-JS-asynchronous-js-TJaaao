- Create four promises that resolve after 1, 2, 3 and 4 seconds with a random value. Using `Promise.all` log the value of each promise that it resolved with.
```js
  const five= new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(5)
    },1000)
  })



  const name= new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve("Adarsh")
    },2000)
  })


  const superhuman= new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve("Super Human")
    },3000)
  })

  const four= new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve("four")
    },4000)
  })
  five.then((msg)=> console.log)




  let all= Promise.all([five,name,superhuman,four])
  .then((msg)=>console.log(msg))

```


- Create a list of 5 Github usernames in an array and using `Promise.all` get access to the data of each user from GitHub API. Log the number of followers of each user.

```js

let username=['prank7','adarshraj2720','ashikaj78','amanthakur1999','sisodiya1995']

const usenameData=  Promise.all(
  username.map((user)=>{
    fetch(`https://api.github.com/users/${user}`).then(res => res.josn())
  })

).then((users)=> console.log(users.followers))


```





- Use `Promise.race` to see which API resolves faster from the given list of URLs. Log the object you get from the promise that is resolved faster.

  - https://random.dog/woof.json
  - https://aws.random.cat/meow

  ```js
  let dog=fetch(`https://random.dog/woof.json`)
  let cat = fetch(`https://aws.random.cat/meow`)

  let race= Promise.race([`dog`,`cat`])



  ```
- Use `Promise.allSettled` to log the value of each promise from the given list of promises. And also check if `Promise.all` works with `one`, `two` and `three` or not

```js
const one = new Promise((resolve, reject) =>
  setTimeout(() => resolve('Arya'), 1000)
);
const two = new Promise((resolve, reject) =>
  setTimeout(() => reject(new Error('Whoops!')), 2000)
);
const three = new Promise((resolve, reject) =>
  setTimeout(() => resolve('John'), 3000)
);


let allsettled= Promise.allSettled([one,two,three])

let all= Promise.all([one,two,three])

```

- What will be the output of the following code snippet? How much time will it take for the promise to resolve?

```js
Promise.all([
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('Arya'), 1000);
  }),
  'Sam',
  { name: 'John' },
]).then(console.log);


//['Arya', 'Sam', {}]
```
