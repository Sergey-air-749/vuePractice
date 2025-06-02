<template>
  <div class="imges">

  <HomeImgItem
    v-for="(img, index) in imgs"
    :key="index"
    :img="img"
  />

  </div>
</template>

<script>
import HomeImgItem from "./imgItem.vue";
export default {
  setup() {
    

    return {
      
    }
  },
  components: {
    HomeImgItem
  },
  props: {
    imgs: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>
  .imges {
    column-count: 2;
    padding: 10px;
  }
</style>