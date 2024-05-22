import { createStore } from 'vuex';
import axios from 'axios';
// https://api.sharenet.co.za/api/v1/px2/spots

export default createStore({
  state: {
    tableData: [],
    newTableState: []
  },
  getters: {
  },
  mutations: {
    accessAction(state, payload){
      state.tableData = payload
    },
    accessSnet(state, payload){
      state.newTableState = payload
    }
  },
  actions: {
    async sharenetData({commit}){
      // this action allow me to destructure the data in api and grab the desired array "spots" when i commit my data to my state :)
      try{
        const { data } = await axios.get("https://api.sharenet.co.za/api/v1/px2/spots");
        commit('accessAction', data.spots);
      } catch(error){
        console.error(error)
      }
    },
    async sNetData({commit}){
      // this action allow me to destructure the data in api and grab the desired array "spots" when i commit my data to my state :)
      const { data } = await axios.get("https://api.sharenet.co.za/api/v1/px2/spots");
      commit('accessSnet', data);
      console.log(data);
    },
  },
  modules: {
  }
})
