<template>
  <main class="row">
    <main class="col-sm">
      <div class="parent">

      </div>
    </main>
  </main>
</template>

<script>

export default {
  data(){
    return{
      store : [],
    }
  },

  methods:{
    handleClick(){
      console.log(this.$refs.name.value);
      this.$refs.name.focus()
    },
    
  },

  mounted(){
    // fetch('http://localhost:3000/store')
    //   .then(res=>res.json())
    //   .then(data =>this.store = data.image)
    //   .catch(err => console.log(err.message));
  }
}
</script>

<style lang="scss">
.container-fluid, .row, .col-sm{
  margin: 0px;
  padding: 0px;
}
</style>
