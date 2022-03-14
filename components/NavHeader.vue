<template>
  <div id="header">
    <a class="col-4 link" @click="goToPage('/seed')">채집</a>
    <a class="col-4 link" @click="goToPage('/manage')">관리</a>
    <a class="col-4 link" @click="goToPage('/lotto')">뽑기</a>

    <div class="mt-4">
      <a class="col-6 link" href="https://open.kakao.com/o/gTLz1aTd" target="_blank">오픈카톡</a>
      <a class="col-6 link" href="https://klu.bs/pfp/0x0550AF17bE1030E15d0d0dCE980E6929a04FcC55" target="_blank">클럽스</a>
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