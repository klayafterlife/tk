<template>
  <div class="container">
    <h1 class="mb-5 mt-5">Kepler-452b Evolution</h1>
    
    <div class="mb-3">
      이 페이지는 가드너 분들이 조금 더 편하게 진화된 친구들을 확인하실 수 있도록 하기 위해 만들어졌습니다.
    </div>

    <div class="mb-3">
      팀에서 보다 필요한 일에 집중할 수 있도록 지원하기 위해 만들어졌으며, 공식 지원이 될 때까지 한시적으로 운영됩니다.
    </div>

    <div class="mb-5">
      아래 버튼을 통해 카이카스 지갑 연결 후 날짜를 클릭하면 해당 일자에 진화한 친구들의 번호를 확인할 수 있습니다.
    </div>

    <ConnectWallet v-if="!connected" />
    <div v-else>
      <div class="row data-box">
        <a class="link col-md-3 mb-2 mt-2" @click="evolution(1)">22-02-10</a>
        <a class="link col-md-3 mb-2 mt-2" @click="evolution(2)">22-02-11</a>
        <a class="link col-md-3 mb-2 mt-2" @click="evolution(3)">22-02-12</a>
        <a class="link col-md-3 mb-2 mt-2" @click="evolution(4)">22-02-13</a>
      </div>

      <div v-if="isEvo" class="pt-5 mb-2 row">
        <a
          v-for="e in evoList"
          :key="e"
          class="link col-3 mb-3"
          :href="`https://klu.bs/pfp/0xf1919F40af70394762bed30E98d95DdFbac79080/${e}`"
          target="_blank"
        >{{ e }}</a>
      </div>

      <div v-if="!isEvo && isSelected" class="pt-5 mb-4">
        진화한 친구가 없습니다...
      </div>
    </div>
  </div>
</template>

<script>
import dashboard from '@/mixins/dashboard.js'
import ConnectWallet from '@/components/ConnectWallet.vue';
import { e0210, e0211, e0212, e0213 } from '@/plugin/evo.js';

export default {
  components: {
    ConnectWallet
  },

  mixins: [ dashboard ],

  data() {
    return {
      evoList: [],
      isSelected: false
    }
  },

  computed: {
    isEvo() {
      return this.evoList.length > 0;
    }
  },

  methods: {
    evolution(idx) {
      this.isSelected = true;

      switch(idx) {
        case 1: 
          this.evoList = e0210.filter(e => this.keplerIds.includes(`${e}`));
        break;

        case 2: 
          this.evoList = e0211.filter(e => this.keplerIds.includes(`${e}`));
        break;

        case 3: 
          this.evoList = e0212.filter(e => this.keplerIds.includes(`${e}`));
        break;

        case 4: 
          this.evoList = e0213.filter(e => this.keplerIds.includes(`${e}`));
        break;
      }
    }
  }
}
</script>

<style scoped>
.data-box {
  border: 2px solid;
  border-radius: 10px;
  padding: 15px;
}
</style>