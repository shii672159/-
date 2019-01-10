<template>
  <div>
    <header>
      <img :src=list.pic>
      <p>{{list.name}}</p>
      <span>资料未完善</span>
    </header>
    <article>
      <span>收藏</span>
      <span>家装经验</span>
      <span>评论</span>
      <span>购物单</span>
    </article>
    <ul>
      <li>装修状态<span>&gt;</span></li>
      <li>关注的话题<span>&gt;</span></li>
      <li>设计师入住<span>&gt;</span></li>
      <li>浏览历史<span>&gt;</span></li>
      <li>设置<span>&gt;</span></li>
    </ul>
  </div>
</template>

<script>

import axios from 'axios';
import Mock from 'mockjs';
import {mapGetters,mapActions} from 'vuex';

Mock.mock('my.php',{
  'data':[
    {
      'name': '@name()',
      "pic":"@image('80x80')",
    }
  ]
})

export default {
  name: 'My1',
  data () {
    return {
      title:'个人中心',
      list:{},
      username:''
    }
  },
  computed: {
    ...mapGetters([''])
  },
  methods:{
    ...mapActions([])
  },
  mounted() {
    this.$emit('toparent',this.tit);
    var _this = this;
    axios({
      method: 'get',
      url: 'my.php',
      params: {}
    }).then((data)=>{
      console.log(data.data.data);
      _this.list = data.data.data[0]
    })
  }
}
</script>

<style scoped>
header{
  width: 100vw;
  height: 50vw;
  background: #eee;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-size: 14px;
}
header img{
  border-radius: 50%
}
article{
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  height: 22vw;
  border-bottom: 1px solid #ddd;
}
article span{
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding: 3vw;
  width: 10vw;
  height: 10vw;
  font-size: 14px;
  border-radius: 50%;
  border: 2px solid #ddd;
}
ul,li{
  list-style: none;
}
ul{
  margin-top: 2vw;
  width: 100vw;
}
li{
  width: 93vw;
  border-bottom: 2px solid #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3vw 2vw 0 2vw;
  height: 8vw;
  font-size: 14px;
  color: #888;
}
li span{
  color: #222;
  font-size: 24px;
}
</style>
