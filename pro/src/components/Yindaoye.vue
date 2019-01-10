<template>
    <div class="head">
        <header>
            <img src="" alt=""/>
            <span>优乐，独自欣赏不如分享</span>
        </header>
        <section>
            <span>登录</span>
            <router-link to="/zhuce" tag="span">注册</router-link>
            <span>游客登录</span>
        </section>
        <footer>
            <span class="iconfont icon-weixin1"></span>
            <span class="iconfont icon-qq"></span>
            <span class="iconfont icon-xinlang"></span>
        </footer>
    </div>

</template>

<script>
export default {
    name:'Yindaoye'
}
</script>
<style scoped>
    .head{
        height:100vh;
        display: flex;
        flex-direction: column;
        background: #eee;
    }
    .head header{
        display:flex;
        flex-direction: column;
        align-items: center
    }
    .head header img{
        display:block;
        width:100px;
        height:100px;
        color: rgba(16, 16, 16, 1);
        border-radius: 50%;
        border: 1px solid rgba(255, 255, 255, 0);
        background: #fff;
        margin-top:110px;
    }
    .head header span{
        display:block;
        margin-top:30px;
        line-height: 20px;
        height: 20px;
        color: rgba(136, 136, 136, 1);
        font-size: 14px;
        text-align: left;
        font-family: PingFangSC-regular;

    }
    section{
        margin-top:41px;
        display: flex;
        flex-direction: column;
        align-items: center
    }
    section span{
        display: block;
        width: 197px;
        height: 30px;
        line-height:30px;
        border-radius: 4px;
        color: rgba(16, 16, 16, 1);
        font-size: 14px;
        text-align: center;
        font-family: Microsoft Yahei;
        border: 1px solid rgba(255, 255, 255, 0);
        background: #fff;
        margin-top:15px;
    }
    footer{
        display: flex;
        justify-content: space-around;
        height:211px;
        align-items: center
    }
    footer span{
        display: block;
        width:37px;
        height:37px;
    }
    footer .iconfont{
        font-size:36px;
        color:#888888
    }
</style>

