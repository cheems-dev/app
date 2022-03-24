<template>
  <div>
    <div class="container mx-auto flex flex-wrap justify-center my-32 gap-8">
      <Product
        v-for="product of products"
        :key="product.id"
        :title="product.attributes.nombre"
        :price="product.attributes.precio"
      />
    </div>
  </div>
</template>

<script>
// Components
import Product from '../../components/Product'
// Services
import { getProducts } from '../../service/Products.js'

export default {
  components: {
    Product,
  },
  data() {
    return {
      products: [],
    }
  },

  async created() {
    try {
      const response = await getProducts()
      this.products = response

      console.log(this.products)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }
  },
}
</script>
