<template>

  <div class="NotFound">
    <h1>404</h1>
    <p>Такой страницы не существует, или вам дали битую ссылку</p>

    <router-link class="homeLink" to="/">
      На главную 
      <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#000000"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg>
    </router-link>
  </div>

</template>

<script>
export default {
  setup() {

  }
}
</script>

<style>
  .NotFound {
    margin-top: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 10px;
  }

  .homeLink {
    display: flex;
    align-items: center;
    gap: 2px;
    color: rgb(0, 104, 207);
  }
</style>