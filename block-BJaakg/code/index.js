let books = document.querySelector('.books')
let character = document.querySelector('.character')

let url = fetch(`https://www.anapioficeandfire.com/api/books`)
url.then((data) => data.json()).then((value) => {
    console.log(value);
    createUI(value)
}
)



function createUI(booksinfo) {
    booksinfo.forEach(element => {
        let div = document.createElement('div');
        div.classList.add('bookslist')
        let name = document.createElement('h2')
        name.innerText = element.name
        let author = document.createElement('strong');
        author.innerText = element.authors
        let character = document.createElement('p');
        character.innerText = `Show Character (${element.characters.length})`
        character.addEventListener('click', () => {
            console.log('click ME')

            let url = fetch(`https://www.anapioficeandfire.com/api/books`)
            url.then((data) => data.json()).then((value) => {
                console.log(value.filter((elm) => {
                    console.log(elm.name==="A Game of Thrones")
                }));
                //createUI(value)
            }
            )
        })
        div.append(name, author, character)
        books.append(div)
    });
}


function createUIcharcterlist(characterinfo) {
    characterinfo.forEach(element => {
        let div = document.createElement('div');
        let name = document.createElement('p');
        name.innerText = element.name
        div.append(name)
        character.append(div)
    });
}

