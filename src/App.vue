<template>

  <header>

    <NavbarComp />

  </header>

  <main>

    <router-view />

  </main>

</template>
<script>
import NavbarComp from '@/components/NavbarComp.vue'
export default {
  components: {
    NavbarComp
  }
}
</script>
<style>
*{
  margin: 0%;
  padding: 0%;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

/* ::-webkit-scrollbar{
  display: none;
} */

.pt-2{
  padding-top: 2rem;
}

.pt-4{
  padding-top: 4.02rem;
}

.pt-5{
  padding-top: 5rem;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  text-align: center;
  background-color: white;
}
</style>
