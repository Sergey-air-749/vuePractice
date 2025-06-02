<template>

  <HomeImgs v-if="randomPosts != null" :imgs="randomPosts" />

</template>

<script>
import { onMounted, ref, toRaw } from 'vue'
import HomeImgs from "./imgList.vue";
export default {
  setup() {

    const apiUrl = ref('http://localhost:3000')
    const randomPosts = ref(null)

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

    onMounted(async () => {
      getRandomPosts()
    })

    return {
      getRandomPosts,
      toRaw,
      randomPosts
    }

  },
  components: {
    HomeImgs
  }

}
</script>

<style>

</style>