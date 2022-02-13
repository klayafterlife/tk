<template>
  <div class="container">
    <h1 class="mb-5 mt-5">Manage</h1>

    <div class="mb-3">
      우주 씨앗을 심으면 10% 확률로 텍스트 케플러가 태어납니다.<br />
      우주 씨앗을 먹이면 10% 확률로 텍스트 케플러가 진화합니다.
    </div>

    <div class="mb-3">
      텍스트 케플러의 종과 파츠는 오리지널 케플러를 따릅니다.<br />
      모든 파츠가 같은 확률로 등장하여 레어도가 없습니다.<br />
      배경과 무관하게 산란 시 모두 하나의 세포만 생성합니다.
    </div>

    <div class="mb-5">
      산란 이후 다시 새싹이 된 텍스트 케플러는 레벨이 오릅니다.<br />
      최고 레벨은 9레벨입니다.
    </div>

    <ConnectWallet v-if="!connected" />
    <div v-else>
      <div class="text-right pr-5 mb-2">내 씨앗: {{ seed }}</div>

      <div class="box pt-3 pb-3">
        <a class="link mr-5" @click="changeTab(1)">심기</a>
        <a class="link disable">먹이기</a>
        <!-- <a class="link disable" @click="changeTab(2)">먹이기</a> -->
      </div>

      <div v-if="tab === 1" class="row mt-5">
        <a class="link col" @click="getTk(1)">1개</a>
        <a class="link col" @click="getTk(5)">5개</a>
        <a class="link col" @click="getTk(10)">10개</a>
      </div>
    </div>
  </div>
</template>

<script>
import dashboard from '@/mixins/dashboard.js'
import ConnectWallet from '@/components/ConnectWallet.vue';
import { ABI, ADDR } from '@/plugin/tkManage.js';

export default {
  components: {
    ConnectWallet
  },

  mixins: [ dashboard ],

  data() {
    return {
      tab: 0
    }
  },

  methods: {
    changeTab(idx) {
      if(this.seed == 0) {
        alert('씨앗이 없습니다');
      } else {
        this.tab = idx;
      }
    },

    async getTk(cnt) {
      await klaytn.enable()
      
      setTimeout(() => {
        const myContract = new caver.klay.Contract(ABI, ADDR);

        myContract.methods.multiMint(cnt).send({
          from : klaytn.selectedAddress,
          gas: 800000
        })
        .on('error', err => {
          alert('에러가 발생했습니다 다시 시도해주세요');
          console.log(err);
        })
        .on('receipt', receipt => {
          this.seedChange(cnt * -1);

          if(receipt.events) {
            const eventLen = Object.keys(receipt.events).length;

            if(eventLen > cnt) {
              alert(`${eventLen - cnt}개의 텍스트 케플러가 태어났습니다!`);
            }
          }
        });
      }, 500);
    }
  },
}
</script>

<style scoped>
.box {
  border: 2px solid;
  border-radius: 10px;
}

.disable {
  color: grey;
  text-decoration: none;
  cursor: auto;
}
</style>