<template lang="">
    <div class="contact-page">
        <div class="row-1">
            <div class="wrap-on-vw">
            </div>
            <div class="fluid">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.4949556039073!2d18.62753267574851!3d-33.87690447322349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc41e6218f7ab3%3A0xbdd802ca53b92d43!2sSharenet%20(Pty)%20Ltd!5e0!3m2!1sen!2sza!4v1716457621749!5m2!1sen!2sza" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <hr />
                <h5>Contact our support centre and we'll get back to you as soon as possible. During business hours, we will respond within 48 hours.Email us on <a href="mailto:support@sharenet.co.za" target="_blank" class="sharenNetContactDeets">support@sharenet.co.za</a></h5>
                <div class="justify-evenly-md mt-2">
                    <div class="chat">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="black" class="bi bi-telephone" viewBox="0 0 16 16">
                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                        </svg> Contact us on 
                        <a href="tel:+27217004800" class="sharenNetContactDeets">+27 (0)21 700 4800</a>
                        <br/>
                        <a href="tel:+27217004800" class="sharenNetContactDeets">+27 21 700 4800 (International)</a>
                    </div>
                    <div>
                        <p class="chat">TALK TO US ON <span class="whatsappGreen">WhatsApp</span></p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="balck" class="bi bi-whatsapp" viewBox="0 0 16 16">
                            <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                        </svg> Whatsapp by
                        <button class="btn-link" @click="showModal()">Scanning the QR Code</button> 
                    </div>
                </div>
            </div> 
            
            <div v-if="modalIsDisplaying" class="modal">
                <div class="modal-body">
                    <button @click="closeModal()" class="closeBtn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="red" class="bi bi-x-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                        </svg>
                    </button>
                    <img src="https://www.sharenet.co.za/contact/img/SharenetWhatsApp.737f3fb2.png" alt="qrco_image" class="img"/>
                </div>
            </div>

        </div>
        
        <div class="row-2 pr-3">
            <form action="" class="form-body">
                <div class="input-container">
                    <label for="nameInput">Your name :</label>
                    <input type="text" id="nameInput" placeholder="Your first name" />
                </div>
                <div class="input-container">
                    <label for="surnameInput">Your surname :</label>
                    <input type="text" id="surnameInput" placeholder="Your surname" />
                </div>
                <div class="input-container">
                    <label for="emailInput">Email :</label>
                    <input type="email" id="emailInput" placeholder="Email" />
                </div>
                <div class="input-container">
                    <label for="phoneInput">Phone no. :</label>
                    <input type="text" id="phoneInput" placeholder="+27" />
                </div>
                <div class="input-container">
                    <label for="messageInput">Your message :</label>
                    <textarea type="text" id="messageInput"></textarea>
                </div>
                <div class="btn-center">
                    <button class="btn">Submit</button>
                </div>
                <a href="#home" class="btnIcon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height="12.5" fill="currentColor" class="bi bi-arrow-up-circle" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z"/>
                    </svg>
                </a>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            QrCode: "",
            modalIsDisplaying: false,
        }
    },
    methods: {
        showModal(){
            this.modalIsDisplaying = true
        },

        closeModal(){
            this.modalIsDisplaying = false
        }
    }
}
</script>
<style scoped>
    .contact-page{
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        flex-flow: row;
        background-color: rgb(239, 237, 237);
    }

    .list-style{
        list-style-type: square;
        text-align: start;
        padding-top: 1rem;
    }

    .list-style li{
        margin-bottom: 1rem;
    }

    .chat{
        font-weight: bold;
    }

    .text-start{
        text-align: start;
    }

    .modal{
        position: absolute;
        z-index: 9999;
        /* top: 180%; */
        left: 34%;
        /* left: 20%;
        transform: translate(25%, 25%);  */
    }

    .modal-body img{
        height: 100px;
    }

    .whatsappGreen{
        color: rgb(109, 255, 47);
    }

    .closeBtn{
        border: 0px;
        background: none;
        position: absolute;
        top: -7%;
        cursor: pointer;
        left: 110%;
    } 

    .btn-link{
        text-align: center;
        border: 1px solid rgb(63, 85, 255);
        border-radius: 10px;
        background-color: rgb(63, 85, 255);
        cursor: pointer;
        color: whitesmoke;
        padding-left: .2rem;
        padding-right: .2rem;
    }

    .sharenNetContactDeets{
        color: rgb(63, 85, 255);
        text-decoration: none;
    }

    .mt-2{
        margin-top: 2rem;
    }

    .input-container{
        display: flex;
        justify-content: center;
        text-align: start;
        flex-flow: column;
    }

    .justify-evenly-md{
        display: flex;
        justify-content: space-evenly;
        font-size: 1rem;
    }

    .form-body{
        background-color: rgb(255, 255, 255);
        padding: 4rem 2rem 4rem 2rem;
        box-shadow: .5px .5px 10px .5px rgba(42, 41, 41, 0.197);
    }

    .fluid iframe{
        max-width: 100%;
    }

    .btn{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: .5rem 1.5rem .5rem 1.5rem;
        width: 50%;
        text-decoration: none;
        font-weight: bold;
        color: rgb(247, 237, 247);
        background: rgb(63, 85, 255);
        border-radius: 10px;
        border: none;
    }

    .btnIcon{
        background: none;
        color: rgb(12, 12, 12);
        font-size: 1rem;
        width: 25px;
        height: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        border: 1px solid rgb(63, 85, 255);
    }

    /* tooltip animation */
    .btnIcon:hover::after{
        position: absolute;
        content: "back to top";
        right: 40%;
        height: 2rem;
        width: 5.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgb(63, 85, 255);
        border-radius: 10px;
        color: whitesmoke;
    }

    .btnIcon svg:hover{
        transform: scale(120%);
        transition: all .6s ease-in-out;
        fill: rgb(63, 85, 255);
    }

    .btn-center{
        display: flex;
        justify-content: center;
        gap: 1rem;
        margin-top: 1rem;
    }

    .pt-06{
        padding-top: .6rem;
    }

    .wrap-on-vw{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        flex-flow: row;
        gap: 2rem;
        margin-bottom: 2rem;
    }

    .input-container input{
        height: 3rem;
        border: 1px solid rgba(0, 0, 0, 0.195);
        margin-bottom: 1rem;
        border-radius: 5px;
    }

    .input-container textarea{
        height: 6rem;
        border: 1px solid rgba(0, 0, 0, 0.195);
        margin-bottom: 1rem;
        border-radius: 5px;
    }

    .row-1, .row-2{
        min-width: 50%;
    }

    #messageInput{
        width: 100%;
        resize: none;
    }


    /* I am targeting all unique breakpoints */

    @media(max-width: 1218px){
        .row-1{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-flow: row;
            min-width: 100vw;
            gap: 5rem;
        }

        .contact-page{
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            min-height: 100vh;
            flex-flow: column;
        }


        .fluid iframe{
            max-width: 98%;
        }

        .form-body{
            margin-top: 3rem;
            padding: 6rem 2rem 6rem 2rem;
            border-radius: 5px;
            width: 98vw;
        }
        .btnIcon:hover::after{
            right: 85%;
        }
    }

    @media (max-width: 1110px) {
        .wrap-on-vw{
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            flex-flow: column;
        }
        .btnIcon:hover::after{
            right: 81%;
        }
    }

    @media (max-width: 850px) {
        .row-1{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-flow: column;
            min-width: 100%;
            gap: 5rem;
        }

        .fluid iframe{
            max-width: 90%;
        }

        .form-body{
            padding: 6rem 2rem 6rem 2rem;
            border-radius: 5px;
            width: 90vw;
        }

        .modal{
            position: absolute;
            z-index: 9999;
            left: 31%;
        }

        .modal-body img{
            height: 150px;
            border: 5px solid rgb(1, 255, 1);
        }
        .btnIcon:hover::after{
            right: 73%;
            margin-top: .6rem;
        }
    }
    
    @media (max-width:590px){
        .justify-evenly-md{
            display: flex;
            justify-content: space-evenly;
            flex-direction: column;
            font-size: 1rem;
            gap: 2rem;
        }
        .btnIcon:hover::after{
            right: 65%;
        }
    }
</style>