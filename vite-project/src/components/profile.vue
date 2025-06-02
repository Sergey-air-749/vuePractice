<template>

  <div class="ProfileInfo">
      
    <header>
      <div class="headItem">

        <button type="button" class="buttonBack" @click="goBack">
          <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#000000"><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/></svg>
        </button>

      </div>
    </header>

    
    <div class="userInfoProfile">

      <div class="userAvatarProfileBlock">
        <img class="userAvatarProfile" :src="userInfo.avatar[0][400]" alt="">
      </div>

      <div class="userNameProfileBlock">
        <h3 class="userNameProfileBlock">{{ userInfo.name }}</h3>
      </div>

    </div>


  </div>

  <div class="ProfileImgs">

    <h4>Все картинки пользователя</h4>

    <ProfileImgList v-if="userInfo != null" :posts="userInfo" />
  </div>

</template>

<script>
import { onMounted, ref, toRaw } from 'vue'
import ProfileImgList from "./profileImgList.vue";
import { watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default {
  setup() {

    const apiUrl = ref('http://localhost:3000')
    const userInfo = ref(null)

    const router = useRouter();
    const route = useRoute()
    console.log(route.params.id);

    const getUserInfoId = async () => {
      try {
        const response = await fetch(`${apiUrl.value}/getUserId/${route.params.id}`)
        userInfo.value = await response.json()

        console.log(toRaw(userInfo.value));
        console.log(toRaw(typeof userInfo.value._id));
      } catch (error) {
        console.error(error)
      }   
    }

    const goBack = () => {
      router.back();
    }

    getUserInfoId()


    return {
      getUserInfoId,
      toRaw,
      goBack,
      userInfo
    }

  },
  components: {
    ProfileImgList
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

  .ProfileImgs h4 {
    border-top: 1px solid #e3e3e3;
    padding: 20px 20px 0px 20px;
  }

  .userAvatarProfile {
    width: 100px;
    height: 100px;
    border-radius: 100px;
  }

  .userInfoProfile {
    display: flex;
    padding: 20px 0px 40px 0px;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

</style>