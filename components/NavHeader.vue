<template>
  <div id="header">
    <a v-if="!$route.path.includes('evolution')" class="col-4 link" @click="goToPage('evolution')">진화 확인</a>
    <a v-else class="col-4 link" @click="goToPage('/')">메인</a>
    <a class="col-4 link disable">채집</a>
    <a class="col-4 link disable">진화</a>

    <div class="mt-4">
      <a class="col-6 link" href="https://open.kakao.com/o/gTLz1aTd" target="_blank">오픈카톡</a>
      <a class="col-6 link" href="https://klu.bs/pfp/0xf1919F40af70394762bed30E98d95DdFbac79080" target="_blank">클럽스</a>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goToPage(page) {
      this.$router.push(page);
    }
  }
}
</script>

<style scoped>
.disable {
  color: grey;
  text-decoration: none;
  cursor: auto;
}
</style>