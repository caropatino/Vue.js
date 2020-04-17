Vue.component ('product',{
	template: 
	`<div class = "product">
					<div class = "col">
						<div class = "row product-image text-center">
							<img v-bind:src="image">
						</div>
						<div class = "row cart text-center">
							<button v-on:click= "AddtoCart" >Añadir al carrito</button>
						</div>
					</div>

					<div class = "col product-info">
						<h1>{{product}}</h1>
						<p>{{Description}}</p>
						<p v-show="instock"> Disponible </p>
						<p v-show="!instock"> Agotado </p>
						<ul>
							<li v-for="detail in details">{{ detail }}</li>
						</ul>
						<div 
						v-for="variant in variants" 
						:key="variant.variantID"
						class="circular"
						v-bind:style="{ 'background-image': 'url(' + '${data().variant.variantcolor}' + ')' }"
						@click= "updateProduct(variant.variantimage)">
						</div>
					</div>
				</div>
	`,
	data() {
		return {	
					product: 'Shorts',
					Description: 'Las shorts mas bellos',
					instock: true,
					image: './assets/Capture.png',
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
					],
					cart: 0

		}
	},
		methods: {
					AddtoCart () {
						this.cart += 1
					},
					updateProduct (variantimage) {
						this.image = variantimage
					}

        }

})

var vm = new Vue({
				el:"#app",
				
			});