<template>
  <div>
    <nav>
      <span>全部</span>
      <span>1月征文</span>
      <span>软装搭配</span>
      <span>日常生活</span>
    </nav>
    <ul class="out">
      <router-link v-for="(item,idx) in list"  :key="idx" to='/wenzhang' tag="span">
        <div class="top">
          <img :src=item.pic alt="">
          <p>
           <span>{{item.name}}</span>
           <em>{{item.time}}分钟前</em>
          </p>
        </div>
        <div class="main">
          <p>{{item.txt}}</p>
          <img :src=item.img alt="">
        </div>
        <article>
          <img :src=item.pimg alt="">
          <p>
           <span>{{item.pname}}</span>
           <em>￥{{item.pri}}</em>
          </p>
        </article>
        <div class="footer">
          <ul>
            <li class="iconfont icon-zan"><span>{{item.zan}}</span></li>
            <li class="iconfont icon-pinglun"><span>{{item.ping}}</span></li>
            <li class="iconfont icon-shoucang"><span>{{item.shou}}</span></li>
          </ul>
          <span class="iconfont icon-zhuanfa"></span>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>

import axios from 'axios';
import Mock from 'mockjs';

Mock.mock('zhongcao.php',{
  'data|3':[
    {
      'name': '@first()',
      'txt': '@csentence(1,140)',
      "pic":"@image('40x40')",
      "time":"@date(m)",
      "img":"@image('300x120')",
      'pimg':"@image('80x70')",
      'pname': '@cword(4,8)',
      'pri':'@integer(100,600)',
      'zan':'@integer(1,999)',
      'ping':'@integer(1,999)',
      'shou':'@integer(1,999)',
      'pid|+1':0,

    }
  ]
})

export default {
  name: 'Zhongcao',
  data () {
    return {
      tit:'种草社区',
      list:[],
      username:''
    }
  },
  mounted() {
    this.$emit('toparent',this.tit)
    var _this = this;
    axios({
      method: 'get',
      url: 'zhongcao.php',
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
  font-size: 14px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.out{
  padding: 0 8px;
  font-size: 14px;
}
.top{
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: left;
  align-items: center;
}
.top img{
  display: block;
  height: 40px;
  width: 40px;
  border-radius: 50%;
}
.top span{
  display: block;
  margin-left: 10px;
  color: #000;
}
.top em{
  display: block;
  margin-left: 10px;
  font-style: normal;
  color: #999;
}
.main{
  width: 100%;
}
.main img{
  width: 100%;
  height: 120px;
  margin: 5px 0;
}
.footer{
  display: flex;
  justify-content: space-between
}
ul,li{
  list-style: none;
}
.footer ul{
  display: flex;
}
article{
  display: flex;
  margin-bottom: 4px;
}
article p{
  margin-left: 10px;
  line-height: 24px;
}
article span{
  display: block;
}
article em{
  font-style: normal;
  display: block;
}
.footer li{
  height: 30px;
  line-height: 30px;
  margin-right: 10px;
  font-size: 18px;
  color: #333
}
.footer li span{
  font-size: 14px;
}
.footer span{
  height: 30px;
  line-height: 30px;
  font-size: 18px;
  color: #333
}
.out>li{
  padding: 10px 0 20px 0;
}
</style>
