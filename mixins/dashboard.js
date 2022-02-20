import { mapGetters, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      connected: 'dashboard/connected',
      keplerIds: 'dashboard/keplerIds',
      textIds: 'dashboard/textIds',
      seed: 'dashboard/seed'
    })
  },

  methods: {
    ...mapMutations({
      seedChange: 'dashboard/seedChange',
      addText: 'dashboard/addText'
    })
  }
}