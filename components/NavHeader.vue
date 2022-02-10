<template>
  <div id="header">
    <a v-if="!$route.path.includes('evolution')" class="p-5 link" href="/evolution">진화 확인</a>
    <a v-else class="p-5 link" href="/">메인</a>
    <a class="p-5 link" href="https://open.kakao.com/o/gTLz1aTd" target="_blank">오픈카톡</a>
    <a class="p-5 link" href="https://klu.bs/pfp/0xf1919F40af70394762bed30E98d95DdFbac79080" target="_blank">클럽스</a>
  </div>
</template>