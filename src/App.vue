import { default } from './components/NavbarComp.vue';
<template>

  <header>

    <NavbarComp />

  </header>

  <main class="pt-5">

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
}

::-webkit-scrollbar{
  display: none;
}

.pt-5{
  padding-top: 5rem;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  text-align: center;
  background-color: rgb(239, 237, 237);
}
</style>
