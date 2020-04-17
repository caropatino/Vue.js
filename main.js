var vm = new Vue({
				el:"#app",
				data: {
					product: 'Shorts',
					Description: 'Las shorts mas bellos',
					instock: true,
					image: './assets/Capture.png',
					details :["Microfibra mundial", "talla S"],
					variants:[
						{
							variantID: 001,
							variantcolor: "red",
							variantimage: './assets/Capture.png',	
						},
						{
							variantID: 002,
							variantcolor: "blue",
							variantimage: './assets/Capture2.png',
						}
					],
					cart: 0

				},

				methods: {
					AddtoCart () {
						this.cart += 1
					},
					updateProduct (variantimage) {
						this.image = variantimage
					}

				}
			});