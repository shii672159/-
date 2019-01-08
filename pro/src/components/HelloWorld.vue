<template>
  <div class="hello">

      <mt-search
        style="height:52px;flex-shrink:0"
        v-model="value"
        cancel-text="取消"
        placeholder="搜索">
      </mt-search>
    <section>
      <router-view @toparent='getdata'></router-view>
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
export default {
  name: 'HelloWorld',
  data () {
    return {
      value: ''
    }
  },
  methods: {
    getdata(msg){
      this.title=msg
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  footer .router-link-active{
    color: #999;
  }

  .hello{
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
   footer{
    height: 50px;
    background: #fff;
    text-align: center;
    line-height: 50px;
  }

  section{
    flex: 1;
    overflow: auto;
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
