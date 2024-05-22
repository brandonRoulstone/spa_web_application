<template>
  <div class="home">
    <LandingPage />
  </div>
</template>

<script>
import LandingPage from '@/components/LandingComp.vue'

export default {
  name: 'HomeView',
  components: {
    LandingPage
  },
  // methods: {
  //   // kept naming conventions consistent
  //   // since we fetching it from the store
  //   sharenetData(){
  //     this.$store.dispatch('sharenetData')
  //   }
  // },

  // mounted(){
  //   this.sharenetData()
  // }
}
</script>
