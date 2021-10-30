<template>
  <main class="row">
      <main class="col-sm">
        <div class="parent">
          <p class="fill">Page Not Found</p>
        </div>
      </main>
  </main>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  .row, .col-sm{
    margin: 0;
    padding: 0;
  }
  .parent{
    padding-top: 80px;
    z-index: -1000px !important;
    .fill{
      font-weight: bold;
    }
  }
</style>