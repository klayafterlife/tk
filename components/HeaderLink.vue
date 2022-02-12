<template>
  <span>
    <a v-if="$route.path !== link" class="col-4 link" @click="goToPage(link)">{{ text }}</a>
    <a v-else class="col-4 link" @click="goToPage('/')">메인</a>
  </span>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  },

  methods: {
    goToPage(page) {
      this.$router.push(page);
    }
  }
}
</script>