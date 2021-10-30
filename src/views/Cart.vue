<template>
  <main class="row">
      <main class="col-sm">
            <main class="parent">
                <div>
                    <button @click="backpage"> <i class="fa fa-arrow-left"></i> </button>
                </div>
                <h2>CART PAGE</h2>
                <div class="row shadow-sm py-3">
                   <div class="col-sm-6">
                        <img :src="require(`@/assets/Images/${img}`)" v-if="img" alt="" class="card-img-top bar shadow-sm" >
                    </div>
                    <div class="col-sm-6">
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium repellat perspiciatis maxime, eum itaque ad corrupti magnam recusandae quasi architecto atque obcaecati veniam porro molestias aut nesciunt vitae nisi officiis?
                        </p>
                        <div>
                            <button class="mx-3">
                                <router-link :to="'/check_out/' + each_item.id" class="dey">{{check}}</router-link>
                            </button>
                        </div>
                    </div>
                </div>
            </main>
      </main>
  </main>
</template>

<script>
export default {
    data(){
        return {
            each_item: [],
            id: null,
            img: '',
            check: "CHECK OUT"
        }
    },
    methods: {
        backpage(){
          this.$router.go(-1)
        }
        // showCart(){
        //     let cart = {id: each_item.id, det: each_item.details, price: each_item.price}
        //     each_item.push(cart)
        //     localStorage.setItem('Cart', JSON.stringify(this.each_item))
        //     let a = localStorage.getItem('Cart')
        //     console.log(JSON.parse(a));
        // }
    },
    mounted(){
        // this.showCart()
        let newParams = this.$route.params;
        console.log(newParams);
        this.id = newParams.id
        console.log(this.id);

        fetch(`http://localhost:3000/store`)
        .then(res=> res.json())
        .then(json=>{
            let {phones} = json
            this.each_item = phones[this.id - 1];
            this.img = this.each_item.image
            console.log(this.each_item);
        })

        // fetch(`http://localhost:3000/laptop`)
        // .then(res=> res.json())
        // .then(json=>{
        //     this.each_item = json[this.id - 1];
        //     this.img = this.each_item.image
        //     console.log(this.each_item);
        // })
    }
}
</script>

<style lang="scss">
    $color: purple;
    $color2: black;
    $bc: lightgrey;
    $buttonColor: red;
    $tc:white;
    .parent {
        padding-top: 80px;
        z-index: -1000px !important;
        button{
            background-color: $buttonColor;
            border: 3px double $tc;
            border-radius: 5px;
            margin-top: 10px;
            .dey{
                color: $tc;
                text-decoration: none;
            }
        }
    }
</style>