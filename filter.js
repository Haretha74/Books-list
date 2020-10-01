import getBooksData from './getData.js'
function priceFilter() {

    getBooksData()
        .then(function(data) {
            var url = new URLSearchParams(window.location.search);
            var filteredBooks = data.books;
            if (url.has("pris")) {
                if (url.get("pris") != "allPris") { //filterere bøger listen efter prisen
                    let [minPrice, maxPrice] = url.get("pris").split(",");
                    filteredBooks = filteredBooks.filter(function(book) {
                        return book.Price >= minPrice && book.Price <= maxPrice;
                    });
                }

                if(url.get("genre") != "allgenre") {
                    filteredBooks = filteredBooks.filter(function(book) { //filterere bøger listen efter genre
                        return book.Genre == url.get("genre");
                    });
                }
                
                let container = document.querySelector(".main__maincontainer");
                while(container.firstChild) {//fjerne alle chids i container
                    container.removeChild(container.lastChild);
                }


                (filteredBooks || data.books).forEach(function(book) { //løber i genem filteredbooks og printer den ud i skærmen
                    // console.log(book.name)
                    let clone = document.querySelector("#bookTamplate").content.cloneNode(true);
                    clone.querySelector(".bookTitle").innerText = book.name;
                    clone.querySelector(".auther").innerText = book.Auther;
                    clone.querySelector(".bookDiscription").innerText = book.description;
                    clone.querySelector(".price").innerText = book.Price;
        
        
                    clone.querySelector(".maincontainer__bookImg").src=book.image;
        
                    document.querySelector(".main__maincontainer").appendChild(clone)
                })
            }
        });
    
    }
    export default priceFilter;
 