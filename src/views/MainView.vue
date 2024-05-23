<template>
  <section class="home" id="home">
    <!-- table data  -->
    <LandingPage :currency="latestData()"/>

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
  },

  methods: {
    latestData() {
      let data = [...this.$store.state.tableData];
      data.sort((a, b) => new Date(b.datetime) - new Date(a.datetime));
      return data.slice(0, 5);
    }
  },

  mounted(){
    this.latestData()
  }

}
</script>
<style scoped>

</style>
