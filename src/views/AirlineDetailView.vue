<template>
  <div v-if="passenger">
    <p>
      From {{ passenger.Source }} to {{ passenger.Destination }} on
      {{ passenger.travelDate }}
    </p>
    <p>{{ passenger.airlineId }}</p>
  </div>
</template>

<script>
export default {
  props: ['passenger']
}
</script>
