<template>
  <div class="alert alert-warning" role="alert">
    <strong>{{ mensagem }}</strong>
  </div>
</template>

<script>
export default {
  props: {
    mensagem: {
      type: String,
      required: true
    }
  }
}
</script>
