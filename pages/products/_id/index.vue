<template>
  <p>Id</p>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      product: {},
    }
  },
  async created() {
    const response = await axios.get('')
    this.product = response.data
  },
}
</script>
