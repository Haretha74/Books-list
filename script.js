function getBooksData() {
return fetch("/data.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        data.books.forEach(function(book) {
            console.log(book.name)
            let clone = document.querySelector("#bookTamplate").content.cloneNode(true);
            clone.querySelector(".bookTitle").innerText = book.name;
            clone.querySelector(".auther").innerText = book.Auther;
            clone.querySelector(".bookDiscription").innerText = book.description;
            clone.querySelector(".price").innerText = book.Price;


            clone.querySelector(".maincontainer__bookImg").src=book.image;

            document.querySelector(".main__maincontainer").appendChild(clone)
        })
    })
}

getBooksData();
