<template>
  <div v-if="passenger">
    <p>Gender: {{ passenger.gender }}</p>
    <p>E-mail: {{ passenger.email }}</p>
  </div>
</template>

<script>
export default {
  props: ['passenger']
}
</script>
