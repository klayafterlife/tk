<template>
  <div id="container">
    <nav-header />

    <div class="container">
      <h1 class="mb-5 mt-5">Text Kepler</h1>

      <div class="mb-3">
        이 프로젝트는 진화와 증식이 가능한 메타세포(Evol NFT)<br />
        <a class="link" href="http://kepler-452b.net" target="_blank">Kepler-452b</a>의 Text 버전 비공식 스핀오프입니다.
      </div>

      <div class="mb-3">
        텍스트 케플러는 100% 온체인으로 구축되었습니다.<br />
        클레이튼 네트워크가 존재하는 한 무한히 증식합니다.
      </div>

      <div class="mb-3">
        성장주기: 세포 -> 새싹 -> 성체 -> 산란 -> 새싹<br />
        *산란 후 레벨이 오르며, 새로운 세포가 생깁니다.
      </div>

      <div class="mb-3">
        채집을 통해 우주 씨앗을 얻을 수 있습니다.<br />
        우주 씨앗으로 텍스트 케플러를 얻거나 진화시킬 수 있습니다.<br />
      </div>
    </div>
  </div>
</template>

<script>
import NavHeader from '@/components/NavHeader.vue';

export default {
  components: {
    NavHeader
  }
}
</script>

<style>
@font-face {
    font-family: 'neo';
    src: url('/neodgm.ttf') format('truetype');
}

#container {
  font-family: 'neo';
  width: 100vw;
  min-height: 100vh;
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 1.2rem;
}

.container {
  margin-top: 20vh;
  margin-bottom: 20vh;
  margin-left: 1rem;
  margin-right: 1rem;
  border: 0.3rem solid white;
  border-radius: 1.5rem;
  padding: 2.5rem;
  min-height: 30vh;
  max-width: 650px;
}

.link {
  color: white;
  text-decoration: underline;
  cursor: pointer;
}

#header {
  position: absolute;
  top: 2rem;
  /* font-size: 1rem; */
}

a:hover {
  color: white;
}
</style>
