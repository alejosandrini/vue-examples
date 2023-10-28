var app = new Vue({
    el:'#app',
    data:{
        product:"Medias",
        brand:'Vue Mastery',
        selectedVariant:0,
        //image:"../assests/vmSocks-green-onWhite.jpg",
        altText:"Par de medias",
        inventory:0,
        //mensajeAdicional:"Apurate a comprar!",
        details:["80% algodón", "20% poliester", "Género neutro"],
        variants:[
            {
                variantId:2234,
                variantColor:"green",
                variantImage:"../assests/vmSocks-green-onWhite.jpg",
                variantQuantity:10
            },
            {
                variantId:2235,
                variantColor:"blue",
                variantImage:"../assests/vmSocks-blue-onWhite.jpg",
                variantQuantity:0
            }
        ],
        cart:0
    },
    methods: {
        agregarAlCarrito(){
            this.cart += 1
        },
        actualizarImagen(index){
            this.selectedVariant = index
        }
    },
    /**
     * Since computed properties calculate a value rather than store a value, let’s add 
     * the computed option to our instance and create a computed property called title.
     */
    computed:{
        title(){
            return this.brand + ' ' + this.product
        },
        image(){
            return this.variants[this.selectedVariant].variantImage
        },
        inStock(){
            return this.variants[this.selectedVariant].variantQuantity
        }
    }
}) 