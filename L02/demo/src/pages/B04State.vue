<template>
  <div>
    {{ count }}
  </div>
</template>

<script>
import store from '@/store'
export default {
  name: 'app',
  components: {},
  data() {
    return {}
  },
  methods: {},
  computed:{
    count(){
      return store.state.count
    }
  }
}
</script>

<style scoped></style>
