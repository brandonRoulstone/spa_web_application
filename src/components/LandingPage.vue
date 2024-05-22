<template>
  <div class="main">
    <div class="table-settings">
      <button class="btn">Sort by percentage</button>
      <button class="btn">Sort by price</button>
    </div>

    <table class="table">

      <tr class="row-head">
        <td>FullName</td>
        <td>Price</td>
        <td>Percentage Move</td>
        <td>Time</td>
      </tr>

      <tr class="table-data" v-for="data in $store.state.tableData" v-bind:key="data.categoryId">
        <td>{{ data.fullName }}</td>
        <td>{{ data.price }}</td>
        <td>{{ data.pmove.toFixed(2) }} 
          <!-- <span v-if="data.pmove > 0">+</span> <span v-else>-</span> -->
        </td>
        <td>{{ data.datetime }}</td>
      </tr>
    </table>

  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'LandingPage',
  props: {
    fullName: String,
    price: String,
    pmove: String,
    datetime: String
  },
  
  methods: {
    // kept naming conventions consistent
    // since we fetching it from the store
    sharenetData(){
      this.$store.dispatch('sharenetData')
    },

    // async created(){
    //   let {data} = await axios.get('https://api.sharenet.co.za/api/v1/px2/spots');
    //   let newdata = data.spots;
    //   console.log(newdata[2]);
    //   for(let i = 0; i < newdata.length; i++){
    //     console.log(newdata[i]);
    //   }
    // }
  },

  mounted(){
    this.sharenetData()
    // this.created()
  }
}
</script>

<!-- create table showing the latest 5 prices of each category and it must include the following columns:[FullName|Price|Move|Percentage Move|Time] -->

<style scoped>
  .main{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    min-height: 100vh;
  }

  .table-settings{
    /* position: absolute; */
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 1.5rem;
    gap: 5rem;
    width: 100%;
    background-color: rgb(248, 241, 241);
    box-shadow: .3px .3px 1em .5px rgba(107, 106, 106, 0.26);
  }

  .btn{
    border: none;
    color: white;
    border-radius: 2px;
    height: 2rem;
    width: 100%;
    background-color: rgb(18, 18, 18);
  }

  .table{
    background-color: rgb(223, 220, 220);
    color: rgb(17, 17, 17);
    text-align: center;
    width: 100%;
    padding: 0px;
  }

  .table-data:hover{
    background-color: rgb(194, 194, 190);
    cursor: pointer;
  }

  /* aligning data text under fullname col*/
  .table-data td:nth-child(1){
    text-align: start;
  }

  /* applied even widths for each table row so it can stretch evenly across the view port*/
  .row-head td{
    height: 100%;
    border: 1px solid white;
    border-top: 0px;
    border-left: 0px;
    font-weight: bold;
    /* padding: 10px 10px 10px 10px; */
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
  }

  @media (max-width: 768px) {
    * td{
      font-size: .6rem;
    }
    .btn{
      font-size: .6rem;
    }
  }
</style>
