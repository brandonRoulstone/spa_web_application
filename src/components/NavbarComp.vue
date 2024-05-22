<template>
  <nav class="nav">
    <div class="logo">
        Spa_Web_<span>Application</span>
    </div>
    <div class="nav-links">
        <router-link to="/">Home</router-link>
        <router-link to="/contact">Contact us</router-link>
        <router-link to="/about">Reservation</router-link> 
    </div>
  </nav>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .nav {
        background-color: rgb(231, 227, 227);
        position: fixed;
        width: 100%;
        top: 0;
        height: 4rem;
    }

    .nav a {
        font-weight: 600;
        color: rgb(12,12,12);
        text-decoration: none;
    }

    .logo{
        position: absolute;
        color: rgb(0, 0, 0);
        height: 100%;
        display: flex;
        left: 1.5%;
        justify-content: center;
        align-items: center;
    }

    .logo span {
        color: blueviolet;
    }

    .logo span::before {
        position: absolute;
        content: "";
        height: .6rem;
        width: .6rem;
        background-color: blueviolet;
        left: -9%;
        top: 42%;
        border-radius: 50%;
    }

    .nav a.router-link-exact-active {
        color: blueviolet;
    }

    .nav-links{
        display: flex;
        justify-content: end;
        gap: 3rem;
        height: 100%;
        margin-right: 1.5rem;
        font-size: 1.2rem;
        align-items: center;
    }

    @media (max-width: 950px) {
        .nav-links{
            font-size: .9rem;
            gap: 1rem;
        }

        .logo{
            font-size: .9rem;
            position: absolute;
            left: 5%;
        }
        .logo span::before {
            position: absolute;
            content: "";
            height: .5rem;
            width: .5rem;
            left: -9%;
            top: 42%;
        }
    }
    @media (max-width: 550px) {
        .nav-links{
            font-size: .6rem;
            gap: 1rem;
        }
    }
    @media (max-width: 325px) {
        .logo{
            font-size: .6rem;
            position: absolute;
        }
        .logo span::before {
            position: absolute;
            content: "";
            height: .3rem;
            width: .3rem;
            left: -9%;
            top: 45%;
        }
    }
</style>