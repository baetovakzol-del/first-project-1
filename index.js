let item1 = document.querySelector(".item1")



let product = [
    {
        title:"GERKULES",
        price:"50.000.$",
        image:"https://kohuku.ru/uploads/posts/2014-03/1394279124_golshtinskaya-poroda-loshadej1.jpg"
    },
     {
        title:"Kepka",
        price:"560 som",
        image:"https://automaster.uz/storage/img-2803.png"
    },
     {
        title:"Samyn",
        price:"98 som",
        image:"https://i.ytimg.com/vi/w56a6qF0wI8/sddefault.jpg"
    },
     {
        title:"Noutbuk",
        price:"48.000som",
        image:"https://joybox.uz/wp-content/uploads/2024/01/noutbuk-acernitro-5-an515-46ryzen-76800h32-ghz16-gbpcie-nvme-ssd512-gbno-oddgeforcertx-30606-gb156-1920x1080bez-operaczionnoj-sistemy.jpg"
    },
     {
        title:"IPHONE 16",
        price:"89.990 som",
        image:"https://files.refurbed.com/ii/iphone-14-pro-1662623063.jpg?t=fitdesign&h=600&w=800"
    },
     {
        title:"TOP",
        price:"820 som",
        image:"https://basket-14.wbbasket.ru/vol2112/part211258/211258308/images/big/1.webp"
    },
     {
        title:"NAUSHNIK",
        price:"1.599 som",
        image:"https://login.kg/image/cache/catalog/new/Aksessuary/Huawei/Naushniki/FreeClip/1-500x400.jpg"
    },
     {
        title:"KALONKA",
        price:"755 som",
        image:"https://ae01.alicdn.com/kf/S48dfab8732d94f44b493274abd2a89782.jpg?width=1563&height=2094&hash=3657"
    },
     {
        title:"KOSTIUM",
        price:"5.990 som",
        image:"https://budless.kz/wp-content/uploads/2024/03/img_2963-819x1024.jpg"
    },
     {
        title:"ROLIX",
        price:"3.200 som",
        image:"https://artjewellerywatches.com/cdn/shop/articles/service.jpg?v=1707254518&width=1800"
    },
    
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