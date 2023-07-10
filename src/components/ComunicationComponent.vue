<template>
    <h1>Componente padre</h1>
    {{ message }}
    <ComunicationComponentchild :message="message" @update-message="updateMessage"></ComunicationComponentchild>
</template>


<script>

import ComunicationComponentchild from './ComunicationComponentchild.vue';

export default {
  components: {
    ComunicationComponentchild  
  },
  data() {
    return {
      message: 'String enviado desde el padre al hijo'
    };
  },
  methods: {
    updateMessage(newMessage) {
      this.message = newMessage;
    }
  }
 
}
</script>






