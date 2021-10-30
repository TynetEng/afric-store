<template>
  <main>
    <main>
      <Navbar/>
      <Store />
      <router-view />
    </main>
  </main>
</template>


<script>
import Navbar from '@/components/Navbar.vue'
import Store from './components/Store.vue'
export default {
  components:{
    Navbar,
    Store
  },
  data(){
    return{
      name: "Oluwatoyin",
      store : []

    }
  },

  methods:{

  },

  mounted(){
    
  }
}
</script>
<style lang="scss">

</style>