<template>
  <div class="userAllImges">

    <ProfileImgItem
      v-for="(post, index) in posts.posts" 
      :key="index"
      :post="post"
      :userId="posts._id"
    />

  </div>
</template>

<script>
import ProfileImgItem from "./profileImgItem.vue";
export default {
  setup() {

    return {
      
    }
  },
  props: {
    posts: {
      type: Array,
      required: true
    }
  },
  components: {
    ProfileImgItem
  },
}
</script>

<style>
  .userAllImges {
    column-count: 2;
    padding: 10px;
  }
</style>