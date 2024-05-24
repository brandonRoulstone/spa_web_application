import { createStore } from 'vuex';
import axios from 'axios';
import { toast } from 'vue3-toastify';
// https://api.sharenet.co.za/api/v1/px2/spots

export default createStore({
  state: {
    tableData: [],
    tickets: []
  },
  getters: {
  },
  mutations: {
    accessAction(state, payload){
      state.tableData = payload
    },
    accessTicketData(state, payload){
      state.tickets = payload
    }
  },
  actions: {
    async sharenetData({commit}){
      // this action allow me to destructure the data in api and grab the desired array "spots" when i commit my data to my state :)
      try{
        const { data } = await axios.get("https://api.sharenet.co.za/api/v1/px2/spots");
        commit('accessAction', data.spots);
      } catch(error){
        toast.error("Render.com server is down",{
          position: 'bottom-right'
        });
      }
    },
    async ticketsData({commit}){
      try {
        const { data } = await axios.get('https://workshop-api-wd89.onrender.com/workshops');
        commit('accessTicketData', data)
        console.log(data)
      } catch (error) {
        toast.error("Render.com server is down",{
          position: 'bottom-right'
        });
      }
    },
    async ticket({commit}, venueId){
      const { data } = await axios.get(`https://workshop-api-wd89.onrender.com/workshopshttps://workshop-api-wd89.onrender.com/workshops/${venueId}`)
    },
    async bookSpot({commit}, payload){
      try {
        const res = await axios.post(`https://workshop-api-wd89.onrender.com/workshops/${payload}`)
        toast.success(res.data.msg,{
          position: 'bottom-right'
        });
      } catch (error) {
        toast.error("Something went wrong when making this request",{
          position: 'bottom-right'
        });
      }
    }
  },
  modules: {
  }
})
