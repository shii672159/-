<template>
  <div>
    <mt-swipe :auto="3000" style="height: 200px;">
      <mt-swipe-item v-for="(item,idx) in lunbo" :key="idx" style="background: url(item.img);">{{item.img}}</mt-swipe-item>
      <!-- <mt-swipe-item style="background: yellow;">2</mt-swipe-item>
      <mt-swipe-item style="background: pink;">3</mt-swipe-item>
      <mt-swipe-item style="background: black;">4</mt-swipe-item> -->
    </mt-swipe>
    <nav>
      <router-link to='/shequ' tag="span">种草</router-link>
      <router-link to='/shejishi' tag="span">设计师</router-link>
      <router-link to='/zhuanti' tag="span">专题</router-link>
      <router-link to='/huati' tag="span">话题</router-link>
    </nav>
    <ul class="out">
      <li v-for="item in list">
        <div class="top">
         <img :src=item.pic alt=""><span>{{item.name}}</span>
        </div>
        <div class="main">
          <h5>{{item.tit}}</h5>
          <p>{{item.txt}}</p>
          <img :src=item.img alt="">
        </div>
        <div class="footer">
          <ul>
            <li class="iconfont icon-zan">{{item.zan}}</li>
            <li class="iconfont icon-pinglun">{{item.ping}}</li>
            <li class="iconfont icon-shoucang">{{item.shou}}</li>
          </ul>
          <span class="iconfont icon-zhuanfa"></span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

import axios from 'axios';
import Mock from 'mockjs';

Mock.mock('lunbotu.php',{
  'data|4':[
    {
      "img":"@image('300x200')",
    }
  ]
})

Mock.mock('home.php',{
  'data|3':[
    {
      'name': '@name()',
      'tit': '@ctitle(5,10)',
      'txt': '@csentence(100,300)',
      "pic":"@image('40x40')",
      "img":"@image('300x150')",
      'zan':'@integer(1,999)',
      'ping':'@integer(1,999)',
      'shou':'@integer(1,999)',
      'pid|+1':0,

    }
  ]
})

export default {
  name: 'Home',
  data () {
    return {
      list:[],
      lunbo:[],
      username:'',
    }
  },
  mounted() {
    var _this = this;
    axios({
      method: 'get',
      url: 'lunbotu.php',
      params: {}
    }).then((data)=>{
      console.log(data.data.data);
      _this.lunbo = data.data.data
    })
    axios({
      method: 'get',
      url: 'home.php',
      params: {}
    }).then((data)=>{
      console.log(data.data.data);
      _this.list = data.data.data
    })
  },
}
</script>

<style scoped>
nav{
  height: 60px;
  width: 100vw;
  background: #eee;
  display: flex;
  text-align: center;
  justify-content: space-around;
  align-items: center
}
nav span{
  float: left;
  width: 40px;
  height: 40px;
  background: #fff;
  font-size: 12px;
  line-height: 40px;
  border-radius: 50%
}
.out{
  padding: 0 8px;
}
.top{
  width: 100%;
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
  font-size: 14px;

}
.main{
  width: 100%;
  line-height: 24px;
  margin-top: 2px;
}
.main p{
  font-size: 14px;
  overflow: hidden;
  text-overflow:ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.main img{
  width: 100%;
  height: 150px;
  margin: 4px 0;
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
.footer li{
  height: 22px;
  line-height: 16px;
  margin-right: 5px;
  font-size: 14px;
}
.out>li{
  padding-top: 4px;
  border-bottom: 1px solid #eee;
}
</style>
