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
                variantColor:"green",
                variantImage:"../assests/vmSocks-green-onWhite.jpg"
            },
            {
                variantId:2235,
                variantColor:"blue",
                
                variantImage:"../assests/vmSocks-blue-onWhite.jpg"
            }
        ],
        cart:0
    },
    methods: {
        agregarAlCarrito(){
            /**
             * 'this' refers to the data of the instance we’re currently in, our function is adding 1
             *  to the value of 'cart', because 'this.cart' is the 'cart' inside our data property.
             */
            this.cart += 1
        },
        actualizarImagen(variantImage){
            this.image = variantImage
        }
    },
}) 