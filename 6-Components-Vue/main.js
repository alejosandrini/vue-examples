/**
 * The first argument is the name we choose for the component, and the second is an options
 *  object, similar to how we created our initial Vue instance.
 */
Vue.component('product-details', {
    props: {
      details: {
        type: Array,
        required: true
      }
    },
    template: `
      <ul>
        <li v-for="detail in details">{{detail}}</li>
     </ul>
    `
  })

Vue.component('product', {
    //Props are essentially variables that are waiting to be filled with the data its parent sends down into it.
    props:{
        premium: {
            type: Boolean,
            required: true
        }
        //Notice that we’re using some built-in props validation, where we’re specifying the data type of the premium prop as Boolean, and making it required.
    },
    //There are several ways to create a template in Vue, but for now we’ll be using a template literal, with back ticks.
    template:`
    <div class="product">
        <div class="product-image">
            <!-- Syntax is v-bind: or : for short. -->
            <img v-bind:src="image" :alt="altText">
        </div>

        <div class="product-info">
            <h2>{{ title }} </h2>
            <p v-if=" inStock > 10">En stock</p>
            <p v-else-if=" inStock > 0">Casi todo vendido!</p>
            <p v-else
                :class="{agotado:!inStock}">
                Agotado
            </p>
            <p>Envío: {{ shipping }}</p>

            <product-details :details="details"></product-details>
            
            <div class="color-box"
                v-for="(variant, index) in variants" 
                :key="variant.variantId"
                :style="{backgroundColor: variant.variantColor}"
                @mouseover="actualizarImagen(index)">
                <!-- The shorthand for v-on is @ -->
            </div>
            <button v-on:click="agregarAlCarrito"
                    :disabled="!inStock"
                    :class="{disabledButton:!inStock}">
                Agregar al carrito
            </button>
            <button @click="removerDelCarrito">
                Remover del carrito
            </button>
        </div>
    </div>
    `,
    /**
     * But did you notice that data is now a function? Why the change?
     * Because we often want to reuse components. And if we had multiple product components,
     * we’d need to ensure a separate instance of our data was created for each component. 
     * Since data is now a function that returns a data object, each component will definitely 
     * have its own data.
     */
    data(){
        return {
            product:"Medias",
            brand:'Vue Mastery',
            selectedVariant:0,
            altText:"Par de medias",
            inventory:0,
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
        }
    },
    methods: {
        agregarAlCarrito(){
            //this.cart += 1
            this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId)
            //It means: when agregarAlCarrito is run, emit an event by the name of “add-to-cart”.
        },
        actualizarImagen(index){
            this.selectedVariant = index
        },
        removerDelCarrito(){
            this.$emit('remove-from-cart', this.variants[this.selectedVariant].variantId)
        }
    },
    computed:{
        title(){
            return this.brand + ' ' + this.product
        },
        image(){
            return this.variants[this.selectedVariant].variantImage
        },
        inStock(){
            return this.variants[this.selectedVariant].variantQuantity
        },
        shipping(){
            if (this.premium){
                return "Gratis"
            }
            return "$1200"
        }
    }
})

/**
 * In a Vue application, we don’t want all of our data, methods, computed properties, etc. 
 * living on the root instance. Instead, we’ll want to break up our code into modular pieces
 *  so that it is easier and more flexible to work with.
 */
var app = new Vue({
    el:'#app',
    data:{
        premium: false,
        cart:[]
    },
    methods: {
        updateCart(id) {
            this.cart.push(id)
        },
        removeItem(id){
            for(var i = this.cart.length - 1; i >= 0; i--) {
                if (this.cart[i] === id) {
                   this.cart.splice(i, 1);
                }
            }
        }
      }
}) 