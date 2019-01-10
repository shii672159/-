<template>
  <div>
    <nav>
      <span>新手攻略</span>
      <span>装修必看</span>
      <span>找设计师</span>
    </nav>
    <ul>
      <h4>装修前</h4>
      <li v-for="item in list0">{{item.kind}}</li>
    </ul>
    <ul>
      <h4>装修中</h4>
      <li v-for="item in list1">{{item.kind}}</li>
    </ul>
    <ul>
      <h4>装修后</h4>
      <li v-for="item in list2">{{item.kind}}</li>
    </ul>
  </div>
</template>

<script>

import axios from 'axios';
import Mock from 'mockjs';

Mock.mock('shop.php',{
  'data|3':[
    {
      'tit|6-9':[
        {
          'kind': '@ctitle(2,4)',
        }
      ]
    }
  ]
})

export default {
  name: 'Shop',
  data () {
    return {
      list0:[],
      list1:[],
      list2:[],
      username:''
    }
  },
  mounted() {
    var _this = this;
    axios({
      method: 'get',
      url: 'shop.php',
      params: {}
    }).then((data)=>{
      _this.list0 = data.data.data[0].tit
      _this.list1 = data.data.data[1].tit
      _this.list2 = data.data.data[2].tit
    })
  },
}
</script>

<style scoped>
nav{
  display: flex;
  padding-top: 4px;
  height: 60px;
  padding: 3vw;
  justify-content: space-between;
  align-items: center;
  background: #eee;
}
nav span{
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  border: 1px solid #aaa;
  font-size: 14px;
  width: 20vw;
  height: 13vw;
  border-radius: 3px;
}
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
