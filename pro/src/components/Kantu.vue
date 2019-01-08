<template>
  <div>
    <nav>
      <span>空间</span>
      <span>风格</span>
      <span>硬装</span>
      <span>软装</span>
      <span>最热</span>
    </nav>
    <ul>
      <img src="https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268/sign=cb1e310c2f2eb938ec6d7df4ed6085fe/574e9258d109b3de037bd685ccbf6c81810a4c12.jpg" alt="">
      <li v-for="item in list">
        <img :src=item.img>
        <p>{{item.tit}}</p>
        <div class="inn">
          <div>
            <img :src=item.pic>
            <span>{{item.name}}</span>

          </div>
          <em class="iconfont icon-shoucang">{{item.shou}}</em>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

import axios from 'axios';
import Mock from 'mockjs';

Mock.mock('kantu.php',{
  'data|5':[
    {
      'name': '@first()',
      'tit': '@ctitle(5,10)',
      "pic":"@image('40x40')",
      "img":"@image('150x200')",
      'shou':'@integer(1,999)',
      'pid|+1':0,

    }
  ]
})

export default {
  name: 'Kantu',
  data () {
    return {
      list:[],
      username:''
    }
  },
  mounted() {
    var _this = this;
    axios({
      method: 'get',
      url: 'kantu.php',
      params: {}
    }).then((data)=>{
      console.log(data.data.data);
      _this.list = data.data.data
    })
  }
}
</script>

<style scoped>
nav{
  display: flex;
  padding-top: 4px;
  height: 46px;
  justify-content: space-around;
  align-items: center;
}
nav span{
  display: block;
  border: 1px solid #ccc;
  padding: 3px 5px;
  font-size: 14px;
  height: 20px;
  border-radius: 3px;
}

ul>img{
  float: left;
  width: 44vw;
  height: 40vw;
  margin: 0 3vw 2vw 3vw;
}
ul,li{
  list-style: none;
}
ul li {
  width: 44vw;
  height: 78vw;
  background: #ddd;
  margin: 0 3vw 2vw 3vw;
}
ul li:nth-of-type(odd){
  float: right;
}
ul li:nth-of-type(even){
  float: left;
}
li>img{
  display: block;
  width: 100%;
}
p{
  font-size: 14px;
}
.inn{
  display: flex;
  align-items: center;
  justify-content: space-between
}
.inn div{
  display: flex;
  align-items: center
}
.inn img{
  padding: 4px;
  border-radius: 50%
}
.inn span{
  font-size: 12px;
}
.inn em{
  margin-right: 4px;
  font-size: 12px;
  float: right
}
</style>
