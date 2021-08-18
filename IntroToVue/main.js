var app = new Vue({
    el: '#app',
    data: {
        product: 'Boots',
        image: 'vmSocks-green-onWhite.jpg',
        inStock: true,
        details: ["80% cotton", "20% polyester", "Gender-neutral"],
    
        variants: [
            {
                variantID: 2234,
                variantColor: 'green',
                variantImage: 'vmSocks-green-onWhite.jpg' 
            },
            {
                variantID: 2235,
                variantColor: 'blue',
                variantImage: 'vmSocks-blue-onWhite.jpg'
            }
        ],

        cart: 0
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateProduct(variantImage) {
            this.image = variantImage
        }
    }
})