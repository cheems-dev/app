<template>
  <div class="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
    <div
      class="w-1/3 bg-cover"
      style="
        background-image: url('https://images.unsplash.com/photo-1494726161322-5360d4d0eeae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80');
      "
    ></div>
    <div class="w-2/3 p-4">
      <h1 class="text-gray-900 font-bold text-2xl">{{ title }}</h1>
      <p class="mt-2 text-gray-600 text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit In odit
        exercitationem fuga id nam quia
      </p>

      <div class="flex item-center justify-between mt-3 gap-3">
        <h1 class="text-gray-700 font-bold text-xl">${{ price }}</h1>
        <button
          class="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded"
        >
          Añadir carrito
        </button>
        <button
          class="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded"
        >
          <nuxt-link :to="'/products/' + { id }"> Ver mas detalles </nuxt-link>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProductComponent',
  props: ['id', 'title', 'price'], // TODO: Pendiente recibir las props ['id', 'title']
}
</script>
