<template>
  <main class="row">
      <main class="col-sm">
          <div class="parent">
              <h2>CHECK OUT PAGE</h2>
          </div>
      </main>
  </main>
</template>

<script>
export default {
    data(){
        return {
            each_item: [],
            id: null,
        }
    },
    methods: {

    },
    mounted(){
        let newParams = this.$route.params;
        console.log(newParams);
        this.id = newParams.id
        console.log(this.id);

        fetch(`http://localhost:3000/phones`)
        .then(res=> res.json())
        .then(json=>{
            this.each_item = json[this.id - 1];
            this.img = this.each_item.image
            console.log(this.each_item);
        })

        fetch(`http://localhost:3000/laptop`)
        .then(res=> res.json())
        .then(json=>{
            this.each_item = json[this.id - 1];
            this.img = this.each_item.image
            console.log(this.each_item);
        })
    }
}
</script>

<style>

</style>