<template lang="">
  <div>
    <ReservationComp :renderData="this.$store.state.tickets" />
  </div>
</template>
<script>
import ReservationComp from '@/components/ReservationComp.vue'
export default {
  components: {
    ReservationComp
  }
}
</script>
<style scoped>
  
</style>
