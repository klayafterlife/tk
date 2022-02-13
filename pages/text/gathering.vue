<template>
  <div class="container">
    <h1 class="mb-5 mt-5 pb-3">Universe Seed</h1>

    <div class="mb-3">
      우주 씨앗은 오리지널 케플러를 통해 얻을 수 있습니다.<br />
      오리지널 케플러는 매일 하나의 우주 씨앗을 만듭니다.
    </div>

    <div class="mb-3">
      우주 씨앗은 텍스트 케플러를 생육하는데 사용됩니다.
    </div>

    <div class="mb-5">
      우주 씨앗에서 10% 확률로 텍스트 케플러가 태어납니다.<br />
      우주 씨앗을 텍스트 케플러에게 주면 10% 확률로 진화합니다.
    </div>

    <a class="link" @click="seed">채집하기</a>
  </div>
</template>

<script>
import { ABI, ADDR } from '@/plugin/tkUtil.js';

export default {
  methods: {
    async seed() {
      const { klaytn } = window;
      if (!klaytn || !klaytn.isKaikas) {
        alert('KAIKAS 확장프로그램 설치가 필요합니다');
        return;
      }
      if(klaytn.networkVersion !== 8217) {
        alert('Cypress Main Network로 변경해주세요')
        return;
      }

      await klaytn.enable();

      setTimeout(() => {
        const myContract = new caver.klay.Contract(ABI, ADDR);

        myContract.methods.getSeed().send({
          from : klaytn.selectedAddress,
          gas: 800000
        })
        .on('error', () => {
          alert('다시 시도해주세요');
        })
        .on('receipt', receipt => {
          if(receipt.events[0]) {
            const val = parseInt(receipt.events[0].raw.data, 16);
            alert(`${val}개의 씨앗을 얻었습니다!`);
          } else {
            alert('채집할 수 있는 씨앗이 없습니다.');
          }
        })
      }, 500);
    }
  },
}
</script>