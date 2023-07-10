<template>
  <div  class="mx-auto content-center" style="width: 80%;">
        <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" style="width: 100%;margin: 0 auto;">
            <h1>Componente hijo</h1>
            <p>{{ message }}</p>
            <button @click="sendMessage" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Enviar string desde hijo</button>
        </div>
 </div>

</template>

<script>
export default {
  props: ['message'],
  methods: {
    sendMessage() {
      this.$emit('update-message', 'Hola desde el hijo al padre');
    }
  }
}
</script>