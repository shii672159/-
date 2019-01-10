<template>
    <div class="zhu">
        <router-link to="/Yindaoye" tag="span" class="fanhui">x</router-link>
        <div class="con">
            <h2>注册</h2>
            <div class="con-I">
                <input type="text" placeholder="请输入电话/邮箱"/>
                <div class="yanzheng">
                    <input type="text" placeholder="请输入验证码"/>
                    <span>获取验证码</span>
                </div>
                <input type="text" placeholder="设置密码">
                <input type="text" placeholder="请再次输入密码">
                <button>注册</button>
                <div class="xieyi"><input type="checkbox" name="like">我已阅读并同意优乐用户协议条款</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'Zhuce'
}
</script>
<style scoped>
    .zhu{
        height:100vh;
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content:center;
        background: #eee;
        font-family: PingFangSC-regular;
    }
    .fanhui{
        display:block;
        width:24px;
        height: 24px;
        font-size: 20px;
        text-align: center;
        line-height:24px;
        position: absolute;
        left: 9px;
        top: 20px;
        color: rgba(16, 16, 16, 1);

    }
    .con{
        width:351px;
        height:472px;

    }
    .con h2{
        height: 26px;
        line-height: 26px;
        color: rgba(0, 0, 0, 1);
        font-size: 18px;
        text-align: left;
        font-weight:100;

    }
    .con-I{
        width:324px;
    }
    .con-I>input{
        margin-top:27px;
        width:324px;
        height:40px;
        border:0;
        border-bottom: 1px solid #666;
    }
    .yanzheng{
        margin-top:28px;
        display: flex;
        justify-content: space-between;
        
    }
    .yanzheng input{
        width:200px;
        height:40px;
         border:0;
        border-bottom: 1px solid #666;
    }
    .yanzheng span{
        display: block;
        width:112px;
        height:39px;
        text-align: center;
        line-height: 39px;
        background: #999;
    }
    .con-I button{
        width:327px;
        height:49px;
        margin-top:50px;
        background:#fff;
        border:0;
    }
    .xieyi{
        display: flex;
        justify-content: center;
        margin-top:10px;
        height:20px;
        color: rgba(16, 16, 16, 1);
        font-size: 14px;
        line-height: 20px;
        

    } 
</style>
