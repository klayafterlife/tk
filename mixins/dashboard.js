import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      connected: 'dashboard/connected',
      keplerIds: 'dashboard/keplerIds',
      seed: 'dashboard/seed'
    })
  }
}