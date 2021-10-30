<template>
  <main>
      <div class="parent">
          <h2>ELECTRONICS APPLIANCES</h2>
      </div>
  </main>
</template>

<script>
export default {
    data(){
        return{
            store: null
        }
    },
    methods: {

    },
    mounted(){
        fetch('http://localhost:3000/store')
        .then(res => res.json())
        .then(data=>{
            let {electronics} = data
            this.store = electronics;
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