<template lang="">
    <div class="reservation" id="themeChange">
        <div class="childOne">
            <h2 class="heading-text">Reserve 
                <span>your spot now! <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-arrow-right hide-on-shrink" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/></svg>
                </span>
            </h2>
            <h3 class="sub-txt">Simply Affordable because it is free!</h3>
            <p class="super-sub">Book your spot now by a click of a <span class="typeOfBtn" @click="filterAvailability()">Button</span></p>
        </div>
        <div class="childTwo">
            <h3 class="smore">Scroll Here to <span>see more!</span></h3>
            <div class="sorting-container">
                <button @click="filterAlphabetically()">Sort Alphabetically</button>
                <button @click="filterAvailability()">available workshops</button>
            </div>
            <div class="grid">
                <div v-for="ticket in renderData || filterAlphabetically() || filterAvailability()" v-bind:key="ticket.venueId">  
                    <div class="card-responsive">
                        <h4>{{ ticket.venue }}</h4>
                        <div class="card-text-content">Date of event: {{ ticket.date }}</div>
                        <div class="card-btn-center">
                            <button class="card-btn" v-if="ticket.soldOut === 0" @click="reserveSpot(ticket.venueId)">Book now</button>
                            <button class="card-btn-soldout" @click="soldoutToastification()" v-else>Book now</button>
                            <span v-if="ticket.soldOut === 1" class="sold-out-notification">All Soldout</span>
                            <span class="available-notification" v-else>Available seats</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { toast } from 'vue3-toastify';
export default {
    name: 'ReservationComp',
    props: {
        renderData: Object
    },
    data(){
        return{
            isDarkMode: false,
            isLightMode: true
        }
    },
    methods : {
        ticketsData(){
            this.$store.dispatch('ticketsData')
        },
        soldoutToastification(){
            toast.warning("All the tickets to this venue has been sold out", {
                position: 'bottom-right'
            });
        },
        reserveSpot(venueId){
            this.$store.dispatch('bookSpot', venueId);
        },
        filterAlphabetically(){
            const arr = this.$store.state.tickets;
            arr.sort((a, b) => {
                if(a.venue < b.venue){
                    return -1;
                }

                if(a.venue > b.venue){
                    return 1;
                }

                return 0;
            });
        },
        filterAvailability(){
            const arr = this.$store.state.tickets;
            arr.sort((a, b) => {
                if(a.soldOut > b.soldOut){
                    return 1
                }
                if(a.soldOut < b.soldOut){
                    return -1;
                }
                return 0;
            });          
        }
    },
    mounted(){
        this.ticketsData();
    }
}
</script>
<style scoped>
    .reservation{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: row;
        min-height: 100vh;
        min-width: 100%;
        background-color: rgb(255, 255, 255);
    }

    .heading-text{
        font-size: 3rem;
    }

    .heading-text span {
        color: rgb(63, 85, 255);
    }

    .smore{
        margin-bottom: 2rem;
        font-size: 2rem;
        text-align: center;
    }

    .smore span{
        color: rgb(63, 85, 255);
    }

    .sub-txt{
        font-size: 1.6rem;
    }

    .super-sub{
        font-size: 1.3rem;
        color: rgb(158, 157, 157);
    }
    
    .childOne, .childTwo{
        min-width: 50%;
        min-height: 100vh;
    }

    .hide-on-shrink{
        transform: translateY(.5rem);
        transition: all 1s ease-in-out !important;
    }

    .childOne{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: column;
        gap: 1.5rem;
    }

    .childTwo{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: column;
        border-left: 1px solid rgb(63, 85, 255);
        border-top-left-radius: 150px;
        border-bottom-left-radius: 150px;
        box-shadow: 5px 10px 10px 10px rgba(171, 169, 169, 0.399);
    }

    .sorting-container{
        display: flex;
        gap: 1.5rem;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        border: 1px solid rgba(0, 0, 0, 0.289);
        border-bottom: 1px solid white;
        padding: .3rem .3rem .3rem .3rem;
    }
    
    .sorting-container button{
        padding: .5rem .5rem .5rem .5rem;
        background-color: rgb(40, 65, 255);
        color: whitesmoke;
        border: 0px;
        border-radius: 5px;
        cursor: pointer;
    }
    
    .grid{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        width: 100%;
        gap: .5rem;
        max-height: 500px;
        padding: .4rem;
        border-top: 1px solid rgba(0, 0, 0, 0.156);
        overflow: scroll;
    }

    .grid::-webkit-scrollbar{
        display: none;
    }

    .card-responsive{
        margin-bottom: 1rem;
        border: 1px solid rgba(149, 148, 148, 0.415);
        height: 160px;
        width: 100%;
        gap: .3rem;
        display: flex;
        justify-content: center;
        flex-flow: column;
        border-radius: 20px;
    }

    .available-notification, .sold-out-notification{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .available-notification{
        color: rgb(5, 219, 5);
        border-radius: 10px;
        border: 1px solid rgba(37, 196, 12, 0.24);
        padding: .1rem;
    }
    .sold-out-notification{
        color: rgb(219, 5, 5);
        border: 1px solid rgba(196, 12, 12, 0.24);
        padding: .1rem;
        border-radius: 10px;
    }

    .card-btn-center{
        display: flex;
        justify-content: space-evenly;
    }

    .card-btn, .card-btn-soldout{
        padding: .9rem .9rem .9rem .9rem;
        border: 1px solid rgba(0, 0, 0, 0.2);
        color: whitesmoke;
        width: 50%;
        border-radius: 10px;
    }

    .card-btn-soldout{
        background-color: rgb(148, 160, 250);
    }

    .card-btn{
        background-color: rgb(63, 85, 255);
    }

    .typeOfBtn{
        background-color: rgb(63, 85, 255);
        color: white;
        padding: .1rem .1rem .1rem .1rem;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    .card-btn:hover{
        background-color: rgb(40, 65, 255);
        cursor: pointer;
    }

    @media (max-width: 1120px) {
        .childTwo{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-flow: column;
            border-left: 1px solid rgb(63, 85, 255);
            border-top-left-radius: 100px;
            border-bottom-left-radius: 100px;
            box-shadow: 5px 10px 10px 10px rgba(171, 169, 169, 0.399);
        }
    }

    @media (max-width: 960px) {
        .reservation{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-flow: column;
            min-height: 100vh;
            min-width: 100%;
            background-color: rgb(255, 255, 255);
        }

        .childTwo{
            display: flex;
            justify-content: center;
            align-items: center;
            border-left: none;
            border-top: 1px solid rgb(63, 85, 255);
            border-top-left-radius: 50px;
            border-top-right-radius: 50px;
            border-bottom-left-radius: 0px;
            box-shadow: 5px 10px 10px 10px rgba(171, 169, 169, 0.399);
        }

        .hide-on-shrink{
            transform: rotateZ(90deg);
            height: 2rem;
        }

        .childOne{
            min-height: 50vh;
        }

        .childTwo{
            min-width: 100%;
            min-height: 100vh;
        }
    }

    @media (max-width: 769px) {
        .grid{
            border-top: 1px solid black;
            grid-template-columns: repeat(1, 1fr);
        }
    }

    @media (max-width: 460px) {
        .heading-text{
            font-size: 2rem;
        }
    }
    @media (max-width: 300px) {
        .heading-text{
            font-size: 1.4rem;
        }
    }
</style>