<template>
  <div class="main">
    <div class="table-settings">
      <button class="btn" @click="sortAlphabetically()">Sort A-Z</button>
      <button class="btn" @click="sortByPrice()">Sort by price</button>
    </div>

    <table class="table">

      <tr class="row-head">
        <td>FullName</td>
        <td>Price</td>
        <td>Percentage Move</td>
        <td>Time</td>
      </tr>


      <!-- binding key to a unique identifier in each object in the array -->
      <tr class="table-data" v-for="data in currency || sortByPrice() || sortAlphabetically()" v-bind:key="data.tickerId">
        <td>{{ data.fullName }}</td>
        <td>{{ data.price }}</td>
        <td>
          {{ data.pmove.toFixed(2) }} 
          <span v-if="data.pmove > 0" class="text-end">
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="rgb(58, 207, 9)" class="bi bi-arrow-up" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"/>
            </svg>
          </span> 
          <span v-else>
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="red" class="bi bi-arrow-down" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"/>
            </svg>
          </span>
        </td>
        <td class="topFive">{{ data.datetime }}</td>
      </tr>
      
    </table>

  </div>
</template>

<script>
import { toast } from "vue3-toastify";

export default {

  name: 'LandingPage',

  props: {
    // store current data of api in a function 
    // prop so i am able to loop inside my function on this prop
    currency: Function
  },
  
  methods: {
    // kept naming conventions consistent
    // since we fetching it from the store
    sharenetData(){
      this.$store.dispatch('sharenetData')
    },

    sortByPrice(){
      // grabbing my data from the state so I can perform a sorting method
      let data = this.$store.state.tableData;
      data.sort((a, b) => {
        return b.price - a.price
      });

      toast("Successfully sorted table prices", {
        type: 'success',
        position: "top-center"
      });

    },
    
    sortAlphabetically(){
      let data = this.$store.state.tableData;
      data.sort((a, b) => {

        if(a.fullName < b.fullName){
          return -1;
        }

        if(a.fullName > b.fullName){
          return 1;
        }
        return 0;

      });

      toast("Successfully sorted table names", {
        type: 'success',
        position: "top-center"
      });
      
    },

    formatDate(date) {
      return date.toLocaleString();
    }

  },

  mounted(){
    this.sharenetData()
  }

}
</script>

<style scoped>
  .main{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    min-height: 100vh;
    background-color: rgb(255, 255, 255);
    padding-bottom: 2rem;
  }

  .table-settings{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: .5rem;
    gap: 2rem;
    width: 90%;
  }

  .btn{
    border: none;
    color: rgb(12, 12, 12);
    cursor: pointer;
    border: 1px solid rgb(12, 12, 12);
    border-radius: 10px;
    height: 2rem;
    width: 25%;
    background-color: rgba(28, 27, 27, 0);
  }

  .table{
    background-color: rgb(255, 255, 255);
    border-radius: 5px;
    box-shadow: .5px .5px 10px .5px rgba(42, 41, 41, 0.197);
    color: rgb(17, 17, 17);
    text-align: center;
    width: 75%;
    padding: 1rem 1rem 1rem 1rem;
  }

  .table-data:hover{
    background-color: rgb(12, 12, 12);
    cursor: pointer;
    color: whitesmoke;
  }

  /* aligning data text under fullname col*/
  .table-data td:nth-child(1){
    text-align: start;
  }

  .table-data td{
    padding-top: .3rem;
    padding-bottom: .3rem;
  }

  /* applied even widths for each table row so it can stretch evenly across the view port*/
  .row-head td{
    height: 100%;
    border: 1px solid rgba(0, 0, 0, 0.308);
    border-top: 0px;
    border-left: 0px;
    font-weight: bold;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
  .row-head td:nth-child(1){
    width: 25vw;
  }
  .row-head td:nth-child(2){
    width: 25vw;
  }
  .row-head td:nth-child(3){
    width: 25vw;
  }
  .row-head td:nth-child(4){
    width: 25vw;
    border-right: 0px;
  }

  @media (max-width: 768px) {
    * td{
      font-size: .6rem;
    }
    
    .btn{
      font-size: .6rem;
    }

    .table{
      border-radius: 2px;
      width: 100%;
    }
  }

  @media (max-width: 325px) {
    * td{
      font-size: .5rem;
    }
    .btn{
      font-size: .5rem;
    }
    .table-data td{
      padding-left: .3rem;
      padding-right: .3rem;
    }
  }
</style>
