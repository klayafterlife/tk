<template>
  <div>
    <div class="mb-3">
      이 프로젝트는 진화와 증식이 가능한 메타세포(Evol NFT)<br />
      <a class="link" href="http://kepler-452b.net" target="_blank">Kepler-452b</a>의 Text 버전 비공식 스핀오프입니다.
    </div>

    <div class="mb-5">
      텍스트 케플러는 100% 온체인으로 구축되었습니다.<br />
      클레이튼 네트워크가 존재하는 한 무한히 증식합니다.
    </div>

    <div class="mb-3">
      보다 재밌는 서비스로 거듭나기 위해 준비 중입니다.
    </div>

    <!-- <a class="link" @click="start">시작하기</a> -->
  </div>
</template>

<script>
export default {
  methods: {
    start() {
      const { klaytn } = window;
      if (!klaytn || !klaytn.isKaikas) {
        alert('KAIKAS 확장프로그램 설치가 필요합니다');
        return;
      }
      if(klaytn.networkVersion !== 8217) {
        alert('Cypress Main Network로 변경해주세요')
        return;
      }

      klaytn.enable().then(() => {
        this.$emit('connected');
      });
    }
  }
}
</script>