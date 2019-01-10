<template>
  <div class="out">
    <header> <span class="fanhui" @click="fanhui()">&lt; </span>个人中心</header>
    <section>
      <router-view @toparent='getdata'></router-view>
    </section>
    <footer>
      <router-link to='/home' tag="span"><em class="iconfont icon-shouye"></em><p>首页</p></router-link>
      <router-link to='/kantu' tag="span"><em class="iconfont icon-tupian"></em><p>看图</p></router-link>
      <router-link to='/zhuangxiu' tag="span"><em class="iconfont icon-zhuangxiu"></em><p>装修</p></router-link>
      <router-link to='/shop' tag="span"><em class="iconfont icon-shangdian"></em><p>商店</p></router-link>
      <router-link to='/my' tag="span" class=" router-link-exact-active router-link-active"><em class="iconfont icon-wode"></em><p>我的</p></router-link>
    </footer>
  </div>

</template>

<script>

export default {
  name: 'My',
  data () {
    return {
      title:'个人中心',
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
  }
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
    height: 100%
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
