<template>
  <main>
    <div>
      <nav class="navbar shadow-sm">
        <div>
            <div></div>
        <div></div>
        <div>
          <button
            class="navbar-toggler bell"
            style="display:none"
          >
            <i class="fa fa-bars but"></i>
          </button>
        </div>
        </div>
        <div class="">
          <ul class="nav">
            <li>
              <router-link class="nav-link" to="/">HOME</router-link>
            </li>
            <li>
              <router-link class="nav-link" to="elect"
                >ELECTRONICS APPLIANCES</router-link
              >
            </li>
            <li>
              <router-link class="nav-link" to="phone">PHONES</router-link>
            </li>
            <li>
              <router-link class="nav-link" to="laptop">LAPTOP</router-link>
            </li>
            <li>
              <router-link class="nav-link tin" to="cart">
                  <i class="fa fa-shopping-cart"></i>
                  <div class="circle">{{count}}</div>
              </router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </main>
</template>

<script>

import {useStore} from  'vuex'
export default {
    data(){
        return{
            count: this.$store.state.count
        }
    },
    setup(){
        const store = useStore()
    },
    methods: {
        showCart(){
            localStorage.setItem('Cart', JSON.stringify(this.$store.state.count))
            let a = localStorage.getItem('Cart')
            console.log(JSON.parse(a));
        },
    },
    computed: {
        count(){
          return this.$store.state.count;
        }    
    },
    mounted(){
        this.showCart()
        if(localStorage.getItem('Counter')){
          let b = localStorage.getItem('Counter')
          this.$store.state.count = JSON.parse(b)
          console.log(localStorage.getItem('Counter'));
        }
    }
};
</script>

<style lang="scss">
$color: purple;
$color2: black;
.navbar {
  border: 2px solid $color;
  background-color: rgba($color: grey , $alpha: 0.2);
  position: fixed;
  z-index: 1000;
  width: 100%;
  height: 60px;
  top: 0;
  .nav-link {
    color: $color2;
    font-weight: bold;
  }
}
.tin{
    position: relative;
    .circle{
        width: 15px;
        height: 15px;
        min-height: fit-content;
        min-width: fit-content;
        border-radius: 50%;
        position: absolute;
        background-color: $color;
        top: 2px;
        margin-left: 5px;
        display: flex;
        justify-content: center;
        align-content: center;
        color: white;
        font-size: 10px;
    }
}

@media (max-width:760px){
    .nav{
        display: none;
    }
    .bell{
        display: inherit !important;;
    }
}
</style>