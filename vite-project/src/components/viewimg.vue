<template>

  <header>
    <div class="headItem headItemBorder">

      <button type="button" class="buttonBack" @click="goBack">
        <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#000000"><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/></svg>
      </button>

    </div>
  </header>

  <div class="imgOriginal">
    <img class="userPostImg" v-if="userPost != null" :src="userPost.post.img.original" alt="">
  </div>

  <div class="postInfo">

  <router-link class="userProfileLink" :to="`/profile/${userPost._id}/`">

    <div class="postUserInfo">
      <img class="userAvatarPost" :src="userPost.avatar[0][200]" alt="">
      <h3>{{ userPost.name }}</h3>
    </div>

  </router-link>

  <div class="postDescription">
    <h3>{{ userPost.post.description }}</h3>
  </div>

  </div>


  <div class="otherImages">
    <h4>Другие изображения</h4>
    <HomeImgs v-if="randomPosts != null" :imgs="randomPosts" />
  </div>
  



</template>

<script>
import { ref, toRaw, watch } from 'vue'
import HomeImgs from "./imgList.vue";
import { useRoute, useRouter } from 'vue-router'

export default {
  setup() {

    const apiUrl = ref('http://localhost:3000')
    const userPost = ref(null)
    const randomPosts = ref(null)

    const router = useRouter();
    const route = useRoute()




    const getUserPost = async () => {
      try {
        const response = await fetch(`${apiUrl.value}/getPostId/${route.params.userId}/${route.params.id}`)
        userPost.value = await response.json()
        console.log(toRaw(userPost.value));
      } catch (error) {
        console.error(error)
      }   
    }

    const getRandomPosts = async () => {
      try {
        const response = await fetch(`${apiUrl.value}/randomPosts`)
        randomPosts.value = await response.json()
        
        console.log(toRaw(randomPosts.value));
        console.log(toRaw(randomPosts.value[0].avatar[0][200]));
        console.log(toRaw(randomPosts.value[0].post[0].description));
      } catch (error) {
        console.error(error)
      }   
    }

    watch(() => route.params, (newParams, oldParams) => {
      getRandomPosts(),
      getUserPost()
    });
    
    const goBack = () => {
      router.back();
    }

    getRandomPosts(),
    getUserPost()

    return {
      getUserPost,
      toRaw,
      goBack,
      userPost,
      randomPosts 
    }

  },
  components: {
    HomeImgs
  }

}
</script>

<style>

  .headItem {
    padding: 15px;
    background-color: #ffffff;
  }

  .headItemBorder {
    border-bottom: 1px solid #e3e3e3;
  }

  .buttonBack {
    background: none;
    border: none;
  }

  .userPostImg {
    width: 100%;
  }
  


  .postUserInfo {
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 20px;
  }

  .postDescription {
    padding: 0px 20px 20px 20px;
  }

  .userAvatarPost {
    width: 40px;
    height: 40px;
    border-radius: 100px;
  }

  .otherImages h4 {
    border-top: 1px solid #e3e3e3;
    padding: 20px 20px 0px 20px;
  }


  .userProfileLink {
    color: #000000;
    text-decoration: none;
  }


</style>