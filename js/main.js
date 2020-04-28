Vue.component ('product',{
	template: 
	`<div class = "product">
				<div class = "col">
						<div class = "product-image text-center">
							<img :src="image" />  
						</div>
						
				</div>

				<div class="col">
					<div class = "product-info">
						<h1>{{product}}</h1>
						<p>{{Description}}</p>
						<p v-show="instock"> Disponible </p>
						<p v-show="!instock"> Agotado </p>
						<ul>
							<li v-for="detail in details">{{ detail }}</li>
						</ul>
						<div 
							v-for="(variant,index) in variants" 
							:key="variant.variantID"
							class="circular"
							v-bind:style="{ 'background-image': 'url(' + variant.variantcolor + ')' }"
							@click= "updateProduct(index)">
						</div>

						<div class = "cart text-center">
							<button type="button" class="btn btn-primary" v-on:click= "AddtoCart" >Añadir</button>
							<button type="button" class="btn btn-danger" v-on:click= "DeletetoCart" >Quitar</button>
						</div>
							
					</div>
				</div>
	</div>
	`,
	data() {
		return {	
					product: 'Shorts',
					Description: 'Las shorts mas bellos',
					instock: true,
					selectedVariant: 0,
					details :["Microfibra mundial", "talla S"],
					variants:[
						{
							variantID: 001,
							variantcolor: "./assets/tono1.png",
							variantimage: './assets/Capture.png',	
						},
						{
							variantID: 002,
							variantcolor: "./assets/tono2.png",
							variantimage: './assets/Capture2.png',
						}
					]
					

		}
	},
		methods: {
					AddtoCart(){
						this.$emit('add-to-cart',this.variants[this.selectedVariant].variantID)
					},

					DeletetoCart(){
						this.$emit('delete-to-cart',this.variants[this.selectedVariant].variantID)
					},

					updateProduct (index) {
						this.selectedVariant = index
					}

        },
        computed: {
        	image() {
      			return this.variants[this.selectedVariant].variantimage
      		}
    	}

})

var vm = new Vue({
	el:"#app",
	data: {
		cart: []
	},
	methods:{
		updateCart (id) {
			this.cart.push(id),
			console.log (this.cart)
		},
		deleteCart(id){
			position = this.cart.indexOf(id),
			console.log(position),
			this.cart.splice(position,1),
			console.log (this.cart)
		}

	}
				
})