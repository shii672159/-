<template>
  <div class="out">
    <header> <span class="fanhui" @click="fanhui()">&lt; </span>设计师</header>
    <section>
      <nav>
        <span>全部</span>
        <span>北京</span>
        <span>广东</span>
        <span>浙江</span>
        <span>江苏</span>
        <span>上海</span>
        <span>四川</span>
        <span>湖北</span>
        <span>其他</span>
      </nav>
      <ul>
        <li v-for="item in list">
          <div class="top">
            <article>
              <img :src=item.pic >
              <p>
                <span>{{item.name}}</span>
                <em>{{item.addr}}</em>
              </p>
            </article>
            <p>
              联系他
            </p>
          </div>
          <img :src=item.img >
        </li>
      </ul>
    </section>
    <footer>
      <router-link to='/home' tag="span"><em class="iconfont icon-shouye"></em><p>首页</p></router-link>
      <router-link to='/kantu' tag="span"><em class="iconfont icon-tupian"></em><p>看图</p></router-link>
      <router-link to='/zhuangxiu' tag="span"><em class="iconfont icon-zhuangxiu"></em><p>装修</p></router-link>
      <router-link to='/shop' tag="span"><em class="iconfont icon-shangdian"></em><p>商店</p></router-link>
      <router-link to='/my' tag="span"><em class="iconfont icon-wode"></em><p>我的</p></router-link>
    </footer>
  </div>

</template>

<script>

import axios from 'axios';
import Mock from 'mockjs';

Mock.mock('shejishi.php',{
  'data|3':[
    {
      'name': '@first()',
      "pic": "@image('40x40')",
      "img": "@image('300x180')",
      'sid|+1':0,
      'addr': '@city(true)',
    }
  ]
})

export default {
  name: 'Shejishi',
  data () {
    return {
      list: [],
      username:''
    }
  },
  methods: {
    getdata (msg) {
      this.title = msg;
    },
    fanhui(){
      this.$router.go(-1)
    }
  },
  mounted() {
    var _this = this;
    axios({
      method: 'get',
      url: 'shejishi.php',
      params: {}
    }).then((data)=>{
      console.log(data.data.data);
      _this.list = data.data.data
    })
  },
}
</script>

<style scoped>
  footer .router-link-active{
      color: #999;
    }
  header{
		height: 50px;
		line-height: 50px;
		text-align: center;
    font-size: 18px;
	}
  .fanhui{
		  position: absolute;
   		 left: 10px;
   		 color: #ccc;
   		 font-size: 25px;
	}
  html,body,.out{
    height: 100%;
    width: 100%;
  }
  .out{
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
  footer .router-link-active{
    color: #999;
  }
  footer{
    height: 50px;
    background: #f9f9f9;
    text-align: center;
    line-height: 50px;
  }
  section{
    flex: 1;
    overflow: auto;
    height: 100%;
    width: 100%;
  }
  ul,li{
    list-style: none;
    width: 100%;
  }
  li{
    width: 96vw;
    padding: 0 2vw;
    margin: 15px 0 5px 0;
  }
  li>img{
    width: 100%;
  }
  nav{
    display: flex;
    width: 100%;
    overflow-x: auto;
    justify-content: space-between;
    align-items: center;
    /* height: 30px; */
  }
  nav::-webkit-scrollbar {
        display: none;
    }
  nav span{
    flex-shrink: 0;
    width: 18%;
    display: block;
    text-align: center;
    font-size: 14px;
    height: 20px;
  }
  .top{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
  }
  article{
    font-size: 14px;
    display: flex;
    align-items: center
  }
  article img{
    border-radius: 50%;
  }
  article p{
    margin-left: 8px;
    display: flex;
    flex-direction: column;
  }
  article p span{
    display: block;
  }
  article p em{
    color: #999;
    display: block;
    font-style: normal;
  }
  .top>p{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    width: 80px;
    background: #ccc;
    border-radius: 3px;
  }
  footer{
    border-top: 1px solid #ccc;
    overflow: hidden;
    flex-shrink: 0;
  }

  footer span{
    float: left;
    width: 20%;
    display: flex;
    flex-direction: column;
  }
  footer em{
    line-height: 30px;
  }
  footer p{
    line-height: 14px;
    font-size: 12px;
  }
  .iconfont{
    font-size: 26px;
  }
</style>
