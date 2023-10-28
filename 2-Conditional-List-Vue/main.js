var app = new Vue({
    el:'#app',
    data:{
        product:"Medias",
        image:"../assests/vmSocks-green-onWhite.jpg",
        altText:"Par de medias",
        inStock:false,
        inventory:0,
        mensajeAdicional:"Apurate a comprar!",
        details:["80% algodón", "20% poliester", "Género neutro"],
        variants:[
            {
                variantId:2234,
                variantColor:"green"
            },
            {
                variantId:2235,
                variantColor:"blue"
            }
        ]
    }
}) 