<template>
  <div class="container">
    <h1 class="mb-5 mt-5 pb-5">Universe Seed</h1>

    <div class="mb-3">
      우주 씨앗은 케플러를 통해 얻을 수 있습니다.<br />
      오리지널 케플러는 매일 하나의 우주 씨앗을 만듭니다.<br />
      텍스트 케플러는 매일 최대 10개의 우주 씨앗을 만듭니다.
    </div>

    <div class="mb-5">
      우주 씨앗을 심으면 텍스트 케플러가 태어납니다.<br />
      우주 씨앗을 먹은 텍스트 케플러는 진화합니다.
    </div>

    <ConnectWallet v-if="!connected" />
    <a v-else class="link" @click="getSeed">채집하기</a>
  </div>
</template>

<script>
import dashboard from '@/mixins/dashboard.js'
import ConnectWallet from '@/components/ConnectWallet.vue';
import { ABI, ADDR } from '@/plugin/manage.js';

export default {
  components: {
    ConnectWallet
  },

  mixins: [ dashboard ],

  methods: {
    async getSeed() {
      await klaytn.enable()
      
      setTimeout(() => {
        const myContract = new caver.klay.Contract(ABI, ADDR);

        myContract.methods.getSeed().send({
          from : klaytn.selectedAddress,
          gas: 8000000
        })
        .on('error', err => {
          if(!`${err}`.includes('User denied transaction signature')) {
            alert('에러가 발생했습니다');
            console.log(err);
          };
        })
        .on('receipt', receipt => {
          if(receipt.events[0]) {
            const val = parseInt(receipt.events[0].raw.data, 16);
            alert(`${val}개의 씨앗을 얻었습니다!`);

            this.seedChange(val);
          } else {
            alert('채집할 수 있는 씨앗이 없습니다');
          }
        });
      }, 500);
    }
  },
}
</script>