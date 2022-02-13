<template>
  <div id="header">
    <header-link link="/evolution" text="진화 확인" />
    <header-link link="/seed" text="채집" />
    <header-link link="/manage" text="관리" />

    <div class="mt-4">
      <a class="col-6 link" href="https://open.kakao.com/o/gTLz1aTd" target="_blank">오픈카톡</a>
      <a class="col-6 link" href="https://klu.bs/pfp/0x0550AF17bE1030E15d0d0dCE980E6929a04FcC55" target="_blank">클럽스</a>
    </div>
  </div>
</template>

<script>
import HeaderLink from './HeaderLink.vue';

export default {
  components: { HeaderLink }
}
</script>