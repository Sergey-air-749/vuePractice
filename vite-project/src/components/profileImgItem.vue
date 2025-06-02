<template>

  <div class="post">
    <router-link class="userProfileLink" :to="`/img/${userId}/${post.PostId}`">
      <div>
        <img class="userImgPost" :src="post.img.mini" alt="">
      </div>
    </router-link>

    <div class="userInfo">
      <!-- <img class="userAvotar" :src="img.avatar[0][200]" alt=""> -->
      <span>{{ post.description }}</span>
    </div>
  </div>

</template>

<script>
export default {
  setup() {

    return {
      
    }

  },
  props: {
    post: {
      type: Object,
      required: true
    },
    userId: {
      type: String,
      required: true
    }
  }
}
</script>

<style>

  .userPost {
    display: inline-block;
    padding: 10px;
  }

  .userImgPost {
    width: 100%;
    border-radius: 10px;
  }

  .userProfileLink {
    color: #000;
    text-decoration: none;
  }
</style>