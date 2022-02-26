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
      최고 9레벨이며, 레벨에 따라 채집되는 씨앗이 늘어납니다.
    </div>

    <ConnectWallet v-if="!connected" />
    <div v-else>
      <div class="text-right pr-5 mb-2">내 씨앗: {{ seed }}</div>

      <div class="box pt-3 pb-3">
        <a class="link mr-5" @click="changeTab(1)">심기</a>
        <a class="link" @click="changeTab(2)">먹이기</a>
      </div>

      <div v-if="tab === 1" class="row mt-5">
        <a class="link col" @click="getText(1)">1개</a>
        <a class="link col" @click="getText(5)">5개</a>
        <a class="link col" @click="getText(10)">10개</a>
      </div>

      <div v-if="tab === 2" class="mt-5">
        <div class="row mb-5">
          <p :class="['col', {'active': evoCnt === 1}]" @click="evoCnt = 1">1개</p>
          <p :class="['col', {'active': evoCnt === 5}]" @click="evoCnt = 5">5개</p>
          <p :class="['col', {'active': evoCnt === 10}]" @click="evoCnt = 10">10개</p>
        </div>

        <div class="row">
          <a
            v-for="id in textIds"
            :key="id"
            class="link col-md-3 mb-3"
            @click="tryEvolution(id)"
          >
            {{ id }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dashboard from '@/mixins/dashboard.js'
import ConnectWallet from '@/components/ConnectWallet.vue';
import { ABI, ADDR } from '@/plugin/manage.js';
import axios from 'axios';

export default {
  components: {
    ConnectWallet
  },

  mixins: [ dashboard ],

  data() {
    return {
      tab: 0,
      evoCnt: 1
    }
  },

  methods: {
    changeTab(idx) {
      if(this.seed == 0) {
        alert('씨앗이 없습니다');
        this.tab = 0;
      } else {
        this.tab = idx;
      }
    },

    async getText(cnt) {
      await klaytn.enable()
      
      setTimeout(() => {
        const myContract = new caver.klay.Contract(ABI, ADDR);

        myContract.methods.multiMint(cnt).send({
          from : klaytn.selectedAddress,
          gas: 800000
        })
        .on('error', err => {
          if(!`${err}`.includes('User denied transaction signature')) {
            alert('에러가 발생했습니다');
            console.log(err);
          };
        })
        .on('receipt', receipt => {
          this.seedChange(cnt * -1);

          let newCnt = 0;
          for(const key in receipt.events) {
            const raw = receipt.events[key].raw;
            if(raw.data === '0x') {
              this.addText(parseInt(raw.topics[3], 16));
              newCnt += 1;
            }
          }

          if(newCnt > 0) {
            alert(`${newCnt}개의 텍스트 케플러가 태어났습니다!`);
          } else {
            alert('씨앗에서 텍스트 케플러가 자라나지 못했습니다...');
          }
        });
      }, 500);
    },

    async tryEvolution(id) {
      await klaytn.enable()
      
      setTimeout(() => {
        const myContract = new caver.klay.Contract(ABI, ADDR);

        myContract.methods.multiEvo(this.evoCnt, id).send({
          from : klaytn.selectedAddress,
          gas: 800000
        })
        .on('error', err => {
          if(!`${err}`.includes('User denied transaction signature')) {
            alert('에러가 발생했습니다');
            console.log(err);
          };
        })
        .on('receipt', receipt => {
          this.seedChange(this.evoCnt * -1);

          let resCnt = 0;
          let newCnt = 0;
          for(const key in receipt.events) {
            if(key == 'Evolution') {
              resCnt += 1;
            } else {
              const raw = receipt.events[key].raw;
              if(raw.data === '0x') {
                this.addText(parseInt(raw.topics[3], 16));
                newCnt += 1;
              }
            }
          }

          if(resCnt > 0) {
            alert(`${id}번 텍스트 케플러가 ${resCnt}번 진화했습니다!`);
            if(newCnt > 0) {
              alert(`산란으로 새로운 텍스트 케플러가 태어났습니다!`);
            }

            try {
              axios.get(`https://api.klu.bs/v2/pfp/0x0550AF17bE1030E15d0d0dCE980E6929a04FcC55/${id}/metadata/cache`);
            } catch {
              console.log('metadata update fail');
            }

          } else {
            alert('텍스트 케플러가 진화하지 못했습니다...');
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

.active {
  color: grey;
  text-decoration: line-through;
}
</style>