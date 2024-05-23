<template>
  <section class="home" id="home">
    <!-- table data  -->
    <LandingPage :currency="$store.state.tableData"/>

  </section>
  
  <section id="contactUs">

    <ContactView />

  </section>

  <section id="reservation">

    <ReservationView />

  </section>


</template>

<script>
import LandingPage from '@/components/LandingComp.vue';
import ReservationView from './ReservationView.vue';
import ContactView from './ContactView.vue';

export default {
  name: 'HomeView',
  components: {
    LandingPage,
    ReservationView,
    ContactView
  }
}
</script>
<style scoped>

</style>
