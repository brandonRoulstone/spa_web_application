<template lang="">
    <div class="contact-page">
        <div class="row-1">
            <h2>Contact us</h2>
        </div>

        <div class="row-2 pr-3">
            <form action="">
                <div class="input-container">
                    <label for="emailInput">Email</label>
                    <input type="email" id="emailInput" placeholder="Email" />
                </div>
                <div class="input-container">
                    <label for="nameInput">Your name</label>
                    <input type="text" id="nameInput" placeholder="Your first name" />
                </div>
                <div class="input-container">
                    <label for="messageInput">Your message</label>
                    <textarea type="text" id="messageInput"></textarea>
                </div>
                <button>submit</button>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .contact-page{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        min-height: 100vh;
        flex-flow: row;
    }

    .input-container{
        display: flex;
        justify-content: center;
        text-align: start;
        flex-flow: column;
    }

    .pt-06{
        padding-top: .6rem;
    }

    .pr-3{
        padding-right: .5rem;
    }

    .input-container input{
        height: 3rem;
        border: none;
    }
    .input-container textarea{
        height: 6rem;
        border: none;
    }

    .row-1, .row-2{
        min-width: 50vw;
    }

    #messageInput{
        width: 100%;
    }


    @media(max-width: 550px){
        .contact-page{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        min-height: 100vh;
        flex-flow: column;
    }
    }
</style>