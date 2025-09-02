let item1 = document.querySelector(".item1")



let product = [
    {
        title:"IPHONE 10",
        price:"15.000som",
        image:"https://m.media-amazon.com/images/I/517cbS1x8gL._UF894,1000_QL80_.jpg"
    },
     {
        title:"IPHONE 11",
        price:"24.000som",
        image:"https://assets.swappie.com/cdn-cgi/image/width=600,height=600,fit=contain,format=auto/swappie-iphone-11-purple.png?v=cf0efe3f"
    },
     {
        title:"IPHONE 12",
        price:"35.000som",
        image:"https://buy.gazelle.com/cdn/shop/files/iPhone_12_Pro_Max_-_Gold_-_Overlap_Trans-cropped.jpg?v=1756418804"
    },
     {
        title:"IPHONE 13",
        price:"56.000som",
        image:"https://m.media-amazon.com/images/I/51UuPZLMaCL.jpg"
    },
     {
        title:"IPHONE 14",
        price:"89.990 som",
        image:"https://files.refurbed.com/ii/iphone-14-pro-max-1662628210.jpg"
    },
     {
        title:"IPHONE 15",
        price:"94.000 som",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYQ63spax2YiCw59eYFUSZU5dpOFZV0yBipQ&s"
    },
     {
        title:"IPHONE 16",
        price:"108.099som",
        image:"https://m.media-amazon.com/images/I/61qYXb0BfXL._UF894,1000_QL80_.jpg"
    },
     {
        title:"IPHONE 17",
        price:"144.999som",
        image:"https://www.mobiledokan.com/media/apple-iphone-17-pro-max-white-official-image_1.webp"
    }

    
]
let result1 = document.querySelector(".result1")
result1.innerHTML = product.map((boodi) => {
    return`<div>
             <p>${boodi.title}</p>
            <div class="discount">
                  <h3>20%</h3>
                  <img src="${boodi.image}" alt="${boodi.title}">
                  <div class="ok">
                     <p>${boodi.price}</p>
                     <button class="btn1">Купить</button>
               </div>
          </div>
    </div>`
})