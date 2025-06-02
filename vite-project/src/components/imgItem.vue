<template>

  <div class="post">
    <router-link class="userProfileLink" :to="`/img/${img._id}/${img.post[0].PostId}`">
      <div>
        <img class="userImgPost" :src="img.post[0].img.mini" alt="">
      </div>
    </router-link>

    <div class="userInfo">
      <!-- <img class="userAvotar" :src="img.avatar[0][200]" alt=""> -->
      <span>{{ img.post[0].description }}</span>
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
    img: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
  .userAvotar {
    width: 25px;
    height: 25px;
    border-radius: 1000px;
  }

  .userInfo {
    display: flex;
    align-items: center;
    padding: 5px;
    gap: 10px;
  }

  .post {
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