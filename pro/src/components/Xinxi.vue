<template>
  <div>
    <header>
      <img :src=>
      <p></p>
      <span><em></em><em></em></span>
    </header>
  </div>
</template>

<script>

import axios from 'axios';
import Mock from 'mockjs';
import {mapGetters,mapActions} from 'vuex';

export default {
  name: 'Xinxi',
  data () {
    return {
      title:'个人信息',
      list:{},
      username:''
    }
  },
  mounted() {
    this.$emit('toparent',this.tit)
  },
}
</script>

<style scoped>

</style>
