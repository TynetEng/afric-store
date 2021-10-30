<template>
  <main class="row">
    <main class="col-sm">
      <div class="parent">
        <div class="overlay"></div>
        <div class="ph">
            <h2>PHONES</h2>
        </div>
        <div>
            <div class="side-bar">
                <div @click="displayPhones()">
                    <p> SMART PHONES</p>
                </div>
                <div @click="displayWatches()">
                    <p>SMART WATCHES</p>
                </div>
                <div @click="displayIpad()">
                    <p>IPAD</p>
                </div>
            </div>
           
            <div class="main-bar">
                <div class="fill d-flex flex-wrap">
                    <div v-for="(data, index) in store" :key="index">
                        <div class="box card m-3 shadow-bg" style="width: 300px"  v-if="data.name=='ANDROID PHONE'" v-show="display" >
                            <img :src="require('@/assets/Images/' + data.image)" alt="" class="card-img-top bar" >
                            <div class="text card-body">
                                <h4>{{data.model}}</h4>
                                <p>$ {{data.price}}</p>
                                <button>
                                    <router-link :to="'/phone/' + data.id" class="route"> VIEW DETAILS</router-link></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="fill d-flex flex-wrap">
                    <div v-for="(data, index) in store" :key="index">
                        <div class="box card m-3 shadow-bg" style="width: 300px"  v-if="data.name=='SMART WATCH'" v-show="display2" >
                            <img :src="require('@/assets/Images/' + data.image)" alt="" class="card-img-top bar" >
                            <div class="text card-body">
                                <h4>{{data.model}}</h4>
                                <p>$ {{data.price}}</p>
                                <button>
                                    <router-link :to="'/phone/' + data.id" class="route"> VIEW DETAILS</router-link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="fill d-flex flex-wrap">
                    <div v-for="(data, index) in store" :key="index">
                        <div class="box card m-3 shadow-bg" style="width: 300px"  v-if="data.name=='IPAD'" v-show="display3" >
                            <img :src="require('@/assets/Images/' + data.image)" alt="" class="card-img-top bar" >
                            <div class="text card-body">
                                <h4>{{data.model}}</h4>
                                <p>$ {{data.price}}</p>
                                <button @click="displayCart">
                                    <router-link :to="'/phone/' + data.id" class="route"> VIEW DETAILS</router-link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <main class="modal" :id="'modal' + index" v-for="(data, index) in store" :key="index">
            <main class="modal-dialog">
                <main class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title"> ADD TO CART</h5>
                        <button class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        {{data.name}}
                    </div>
                </main>
            </main>
        </main>
        <!-- <div class="addCart border shadow-bg" v-show="modal" v-for="(data, index) in store" :key="index">
            <div>
                <h6>{{data.name}}</h6>
            </div>
        </div> -->
      </div>
    </main>
  </main>
</template>

<script>
export default {
    data(){
        return{
            store: [],
            display:false,
            display2:false,
            display3:false,
            // modal: false
        }
    },
    methods:{
        displayPhones(){
            this.display=true;
            this.display2 = false;
            this.display3 = false;
        },
        displayWatches(){
            this.display=false;
            this.display2 = true;
            this.display3 = false;
        },
        displayIpad(){
            this.display3 = true;
            this.display2 = false;
            this.display=false;
        },
        // displayCart(){
        //     this.$router.push('/')
        // }
    },
    mounted(){
        fetch('http://localhost:3000/store')
        .then(res=>res.json())
        .then(data =>{
            let {phones}= data
            this.store = phones
            console.log(this.store);
        })
        .catch(err => console.log(err.message));
    }
};
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
  .overlay{
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        background: rgba($color: black , $alpha: 0.4);
        z-index: 1;
        display: none;
  }
  .side-bar{
      background-color: $bc;
      left: 0;
      position: sticky;
      height: 300px;
      width: 20%;
      padding-top: 20px;
      border-radius: 0px 5px 5px 0px;
    }
    .main-bar{
        margin-left: 21%;
        margin-top: -25%;
        
        .fill{
            
            .box{
                margin-top: 10px;
                border: 1px solid $bc;
                border-radius: 10px;
                background-color: $bc;
                padding-bottom: 20px;
                .text{
                    text-align: center;
                        button{
                        background-color: $buttonColor;
                        color: $tc;
                        border: 3px double $tc;
                        border-radius: 5px;
                        .route{
                            text-decoration: none;
                            color: $tc;
                        }
                    }
                    .bar{
                        width: 50%;
                        border: 1px solid $bc;
                        height: 224px !important;
                    }
                }
                
            }
        }
    }
    .addCart{
        position: absolute;
        margin: auto !important;
        height: 500px;
        width: 45%;
        left: 31%;
        background-color: $tc;
        z-index: 5;
        border-radius: 2px;
        .overlay{
            display: inherit;
        }
    }
}

@media (max-width:768px){
    .parent{
        .ph{
            display: none;
        }
        .side-bar{
            display: flex !important;
            width: 100% !important;
            height: 30px;
            padding-top: 10px !important;
            font-weight: bold;
            padding-bottom: 30px !important;
            margin-top: -20px;
            justify-content: space-around;
        }
        .main-bar{
            margin-left: 20px !important;
            margin-top: 30px;
        }
    }
}
</style>