<template>
  <div>
    <ul>
      <h4>装修主材</h4>
      <li v-for="item in list0">{{item.kind}}</li>
    </ul>
    <ul>
      <h4>装修辅材</h4>
      <li v-for="item in list1">{{item.kind}}</li>
    </ul>
    <ul>
      <h4>全屋定制</h4>
      <li v-for="item in list2">{{item.kind}}</li>
    </ul>
    <ul>
      <h4>全屋定制</h4>
      <li v-for="item in list3">{{item.kind}}</li>
    </ul>
    <ul>
      <h4>家居软装</h4>
      <li v-for="item in list4">{{item.kind}}</li>
    </ul>
    <ul>
      <h4>厨房电器</h4>
      <li v-for="item in list5">{{item.kind}}</li>
    </ul>
  </div>
</template>

<script>

import axios from 'axios';
import Mock from 'mockjs';

Mock.mock('zhuangxiu.php',{
  'data|6':[
    {
      'tit|1-9':[
        {
          'kind': '@ctitle(2,4)',
        }
      ]
    }
  ]
})

export default {
  name: 'Zhuangxiu',
  data () {
    return {
      list0:[],
      list1:[],
      list2:[],
      list3:[],
      list4:[],
      list5:[],
      username:''
    }
  },
  mounted() {
    var _this = this;
    axios({
      method: 'get',
      url: 'zhuangxiu.php',
      params: {}
    }).then((data)=>{
      _this.list0 = data.data.data[0].tit
      _this.list1 = data.data.data[1].tit
      _this.list2 = data.data.data[2].tit
      _this.list3 = data.data.data[3].tit
      _this.list4 = data.data.data[4].tit
      _this.list5 = data.data.data[5].tit
    })
  },
}
</script>

<style scoped>
h4{
  width: 98vw;
  padding: 2vw;
  font-weight: 500;
  height: 26px;
  line-height: 30px;
}
ul,li{
  list-style: none;
}
ul{
  display: flex;
  flex-wrap: wrap;
}
li{
  display: flex;
  width: 28.7vw;
  height: 30vw;
  margin: 2vw;
  border: 1px solid #ccc;
  justify-content: center;
  align-items: center;
}
</style>
