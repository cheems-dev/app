<template>
  <div>
    <div class="container mx-auto flex flex-wrap justify-center my-32 gap-8">
      <Product v-for="product of products" :key="product.id" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'

// Components
import Product from '../../components/Product'

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
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      )
      this.products = response.data
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }
  },
}
</script>
