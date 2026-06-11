<script setup>
  defineEmits(['clique'])
</script>

<template>
  <button @click.prevent="$emit('clique')">
    <slot>

    </slot>
  </button>
</template>

<style scoped>

</style>
