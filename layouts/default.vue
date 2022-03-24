<template>
  <div>
    <NavbarApp />
    <div>
      <nuxt />
    </div>
  </div>
</template>

<script>
import NavbarApp from '../components/Navbar'
export default {
  components: {
    NavbarApp,
  },
}
</script>
