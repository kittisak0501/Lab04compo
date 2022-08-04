<template>
  <div class="passengers">
    <PassengerCard
      v-for="passenger in passengers"
      :key="passenger.id"
      :passenger="passenger"
    ></PassengerCard>
    <div class="pagination">
      <router-link
        id="page-prev"
        :to="{ name: 'PassengerList', query: { page: page - 1 } }"
        rel="prev"
        v-if="page != 1"
      >
        Prev Page
      </router-link>
      <router-link
        id="page-next"
        :to="{ name: 'PassengerList', query: { page: page + 1 } }"
        rel="next"
        v-if="hasNextPage"
      >
        Next Page
      </router-link>
    </div>
  </div>
</template>

<script>
import PassengerCard from '@/components/PassengerCard.vue'
import PassengerService from '@/services/PassengerService.js'
import { watchEffect } from '@vue/runtime-core'
export default {
  name: 'PassengerListView',
  props: {
    page: {
      type: Number,
      required: true
    }
  },
  components: {
    PassengerCard
  },
  data() {
    return {
      passengers: null,
      totalPassengers: 0
    }
  },
  created() {
    watchEffect(() => {
      PassengerService.getPassengers(5, this.page)
        .then((response) => {
          this.passengers = response.data
          this.totalPassengers = response.headers['x-total-count']
        })
        .catch((error) => {
          console.log(error)
        })
    })
  },
  computed: {
    hasNextPage() {
      let totalPages = Math.ceil(this.totalPassengers / 5)
      return this.page < totalPages
    }
  }
}
</script>
<style scoped>
.passengers {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pagination {
  display: flex;
  width: 290px;
}
.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}
#page-prev {
  text-align: left;
}
#page-next {
  text-align: right;
}
</style>
