<template>
  <router-link
    class="passenger-link"
    :to="{ name: 'PassengerDetail', params: { id: passenger.id } }"
  >
    <div class="passenger-card">
      <span>{{ passenger.first_name }} {{ passenger.last_name }}</span>
    </div>
  </router-link>
</template>
<script>
export default {
  name: 'PassengerCard',
  props: {
    passenger: {
      type: Object,
      required: true
    }
  }
}
</script>
<style scoped>
.passenger-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}

.passenger-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}

.passenger-link {
  color: #2c3e50;
  text-decoration: none;
}
</style>
