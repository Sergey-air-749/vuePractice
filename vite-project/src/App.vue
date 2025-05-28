<template>

<button @click="getAlbum">getAlbum</button>

</template>

<script>
import { ref } from 'vue';
export default {
  setup() {

    const getAlbum = async () => {

      const response = await fetch('https://api.spotify.com/v1/me/albums/', {
        headers: {
          Authorization: 'Bearer BQAsJsSmi2TeFEoyWo5oVBedpv7f8HT0w__NrFFLQ5PjmafvvZyQst7bsQedg4q-sezAU9ZrcBhEKDO7kXd6oJ_26yDVtKvCbfiCbv8k4GKR9maKJynlJ4A6VLOrdNhlmfCJVsCrSw8'
        }
      });
      const data = await response.json();
      console.log(data);
    }




    return {
      getAlbum,
    }
  }
}
</script>

<style>

</style>