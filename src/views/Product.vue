<template>
  <main>
    <main class="row">
      <main class="col-sm">
        <div class="parent">
          <div class="bodie m-3">
            <h4>PRODUCT PAGE</h4>
            <div class="row">
              <div class="col-sm-6">
                <img :src="require(`@/assets/Images/${img}`)" v-if="img" class="card-img-top bar shadow-sm" alt="">
              </div>
              <div class="col-sm-6">
                <div class="det">
                  <h6>{{ each_item.model }}</h6>
                  <p>{{ each_item.details }}</p>
                </div>
                <div class="det">
                  <p>$ {{ each_item.price }}</p>
                  <button >
                    <span v-if="add" @click="increment()"> ADD TO CART
                      <!-- <router-link :to="'/cart/' + each_item.id" class="dey">
                      ADD TO CART
                      </router-link> -->
                    </span>
                      <span v-else class="file">
                        <button class="bet" @click="addCart">+</button>
                        <button class="bet" @click="removeCart">-</button>
                      </span>
                    
                  </button>
                  <button class="mx-3">
                    <router-link :to="'/cart/' + each_item.id" class="dey">{{
                      buy
                    }}</router-link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </main>
  </main>
</template>

<script>
import {useStore} from  'vuex'
export default {
  data() {
    return {
      each_item: [],
      cart: [],
      id: null,
      add: true,
      buy: "BUY NOW",
      img: "",
      show: this.$route.params,
      qty: []
    };
  },
  
  methods: {
    increment() {
      this.$store.commit("increment");
      console.log(this.$store.state.count);
      this.add = false
      console.log(this.add);
      this.cart.push(this.each_item);
      this.$route.push('/cart/' + each_item.id)

      localStorage.setItem('PhoneCart', JSON.stringify(this.cart))
      localStorage.setItem('Counter', JSON.stringify(this.$store.state.count))
      console.log(this.$store.state.count);
    },
    addCart(){
      alert()
    },
    removeCart(){
      alert()
    }
  },
  mounted() {
    let newParams = this.$route.params;
    console.log(newParams);
    this.id = newParams.id;
    console.log(this.id);

    fetch(`http://localhost:3000/store`)
      .then((res) => res.json())
      .then((json) => {
        let {phones} = json
        this.each_item = phones[this.id - 1];
        this.img = this.each_item.image;
        console.log(this.each_item);
      });

    // fetch(`http://localhost:3000/laptop`)
    //   .then((res) => res.json())
    //   .then((json) => {
    //     this.each_laptop = json[this.id - 1];
    //     this.img = this.each_laptop.image;
    //     console.log(this.each_laptop);
    //   });
    if(localStorage.getItem('PhoneCart')){
      let b = localStorage.getItem('PhoneCart')
      this.cart = JSON.parse(b)
      console.log(JSON.parse(b));
    }
  },
};
</script>

<style lang="scss">
$color: purple;
$color2: black;
$bc: lightgrey;
$buttonColor: red;
$tc: white;
.parent {
  padding-top: 80px;
  z-index: -1000px !important;
  .bodie {
    // img{
    //     height: 300px;
    // }
    .det {
      border-bottom: 2px solid $color;
      padding-top: 10px;
      .file{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 72px;
        height: 22px;
        .bet{
          width: 20px;
          height: 20px;
          display: flex;
          color: $tc;
          margin: 0px;
          align-items: center;
          justify-content: center;
        }
      }
    }
    button {
      background-color: $buttonColor;
      border: 3px double $tc;
      border-radius: 5px;
      margin-top: 10px;
      .dey {
        color: $tc;
        text-decoration: none;
      }
    }
  }
}
</style>