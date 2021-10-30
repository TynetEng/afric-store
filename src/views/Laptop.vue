<template>
  <main class="row">
    <main class="col-sm">
      <div class="parent">
        <div class="ph">
            <h2>LAPTOP</h2>
        </div>
        <div>
            <div class="side-bar">
                <div @click="displayApple()">
                    <p> APPLE</p>
                </div>
                <div @click="displayHp()">
                    <p>HP</p>
                </div>
                <div @click="displayIpad()">
                    <p>IPAD</p>
                </div>
            </div>
           
            <div class="main-bar">
                <div class="fill d-flex flex-wrap">
                    <div v-for="(data, index) in store" :key="index">
                        <div class="box card m-3 shadow-bg" style="width: 300px"  v-if="data.name=='APPLE'" v-show="display" >
                            <img :src="require('@/assets/Images/' + data.image)" alt="" class="card-img-top bar" >
                            <div class="text card-body">
                                <h4>{{data.model}}</h4>
                                <p>$ {{data.price}}</p>
                                <button>
                                    <router-link :to="'/laptop/' + data.id" class="route"> VIEW DETAILS</router-link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="fill d-flex flex-wrap">
                    <div v-for="(data, index) in store" :key="index">
                        <div class="box card m-3 shadow-bg" style="width: 300px"  v-if="data.name=='HP'" v-show="display2" >
                            <img :src="require('@/assets/Images/' + data.image)" alt="" class="card-img-top bar" >
                            <div class="text card-body">
                                <h4>{{data.model}}</h4>
                                <p>$ {{data.price}}</p>
                                <button>
                                    <router-link :to="'/laptop/' + data.id" class="route"> VIEW DETAILS</router-link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </main>
  </main>
</template>

<script>
export default {
    data(){
       return{
            store: null,
            display: false,
            display2: false
       }
    },
    methods: {
        displayApple(){
            this.display = true;
            this.display2 = false;
        },
        displayHp(){
            this.display2 = true;
            this.display = false;
        }
    },
    mounted(){
        fetch('http://localhost:3000/store')
        .then(res=> res.json())
        .then(data =>{
            let {laptop} = data
            this.store = laptop
            console.log(this.store);
        })
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
}

@media (max-width:760px){
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