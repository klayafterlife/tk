<template>
  <div class="container">
    <h1 class="mb-5 mt-5">Ketto</h1>

    <div class="mb-3">
      케또는 <a class="link" href="https://twitter.com/UppxS" target="_blank">축복님</a>의 아이디어로 탄생했습니다.<br />
      1 KLAY, 10%의 확률, 메타세포 케플러!
    </div>

    <div class="mb-3">
      10%의 확률로 세포 상태의 진짜 케플러에 당첨됩니다.<br />
      90% 확률로 두 개의 씨앗이 채집됩니다.
    </div>

    <div class="mb-5">
      수익의 90%는 추첨을 위한 케플러 확보에 사용됩니다.<br />
      케또는 재미있게 메타세포를 얻을 수 있는 소소한 즐거움과 동시에 FP 반등을 위한 케플러 락업을 추구합니다.
    </div>

    <ConnectWallet v-if="!connected" />
    <a v-else class="link" @click="runLotto">뽑기</a>
  </div>
</template>

<script>
import dashboard from '@/mixins/dashboard.js'
import ConnectWallet from '@/components/ConnectWallet.vue';
import { ABI, ADDR } from '@/plugin/lotto.js';

export default {
  components: {
    ConnectWallet
  },

  mixins: [ dashboard ],

  methods: {
    async runLotto() {
      await klaytn.enable()
      
      setTimeout(() => {
        const myContract = new caver.klay.Contract(ABI, ADDR);

        myContract.methods.lotto().send({
          from : klaytn.selectedAddress,
          value: caver.utils.toPeb('1', 'KLAY'),
          gas: 8000000
        })
        .on('error', err => {
          if(!`${err}`.includes('User denied transaction signature')) {
            alert('에러가 발생했습니다');
            console.log(err);
          };
        })
        .on('receipt', receipt => {
          const val = parseInt(receipt.events[0].raw.data, 16);
           if(val === 1) {
            alert(`${val}개의 씨앗을 얻었습니다!`);

            this.seedChange(val);
          } else {
            alert('진짜 케플러를 얻었습니다! 축하합니다!');
          }
        });
      }, 500);
    }
  },
}
</script>