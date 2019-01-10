<template>
    <div class="shezhi">
         <header>
          <h2><router-link to="/zhuce" tag="span" class="iconfont icon-houtui"></router-link>设置密码</h2>
        </header>
       <div class="touxiang">
           <div>点击设置</div>
       </div>
        <label for="nc">昵称：<input id="nc" type="text"></label>
        <label for="mm">密码：<input id="mm" type="text"></label>
        <label for="mmqr">密码确认：<input id="mmqr" type="text"></label>
        <div class="foot">
            <div class="cf" style="display:none;">失败！昵称重复，请修改</div>
            <div class="byz" style="display:none;">两次密码不一致，请修改</div>
            <div class="cg" style="display:none;">设置成功，请登录</div>
        </div>
            <button>提交</button>


    </div>
</template>
<script>
export default {
    name:'Shezhimima'
}
</script>
<style scoped>
    .shezhi{
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center
    }
    .shezhi header{
        height: 44px;
        width:100%;
        line-height:44px;
        background-color: rgba(219, 219, 219, 1);
        text-align: center;
        border: 1px solid rgba(255, 255, 255, 0);
    }
    .shezhi .iconfont{
        display: block;
        position: absolute;
        left: 0px;
        top: 7px;
        width: 30px;
        height: 30px;
        line-height:30px;
    }
    .shezhi h2{
        font-size:18px;
        font-weight: 100;
    }
    .touxiang{
        width:375px;
        height:164px;
        display:flex;
        justify-content: center;
        align-items: center;

    }
    .touxiang div{
        width: 100px;
        height: 100px;
        line-height: 20px;
        color: rgba(16, 16, 16, 1);
        font-size: 14px;
        text-align: center;
        line-height: 100px;
        font-family: Arial;
        border: 1px solid rgba(187, 187, 187, 1);
        border-radius:50%;
    }
    label{
        border-bottom: 1px solid #999;
        width:300px;
        height:32px;
        color: rgba(16, 16, 16, 1);
        font-size: 14px;
        font-family: PingFangSC-regular;
        margin-bottom: 30px;

    }
    label input{
        border:0;
        height:30px;
    }
    .shezhi label:nth-of-type(1) input,.shezhi label:nth-of-type(2) input{
        width:247px
    }
    .shezhi label:nth-of-type(3) input{
        width:224px;
    }
    .cf,.byz,.cg{

        height: 20px;
        line-height: 20px;
        color: rgba(16, 16, 16, 1);
        font-size: 14px;
        font-family: PingFangSC-regular;
        color:red;
    }
    .cg{
        color:green;
    }
    .foot{
        width:100%;
        height:20px;
        display: flex;
        justify-content:center;
        align-items: flex-end
    }
    button{
        margin-top:10px;
        width: 187px;
        height: 30px;
        border-radius: 4px;
        color: rgba(16, 16, 16, 1);
        font-size: 14px;
        text-align: center;
        font-family: Microsoft Yahei;
        border: 1px solid rgba(187, 187, 187, 1);

    }
</style>
