<template>
  <div class="outt">
    <div class="top">
      <img :src=list.pic >
      <p>
        <span>{{list.name}}</span>
        <em>{{uid}}</em>
      </p>
    </div>
    <div class="main">
      <article>
        <h5>{{list.tit}}</h5>
        <p>{{list.pname}}</p>
        <img :src=list.pimg alt="">
        <p>{{list.ptxt}}</p>
      </article>
      <p>{{list.txt}}</p>
      <img :src=list.img alt="">
    </div>
  </div>
</template>

<script>

import axios from 'axios';
import Mock from 'mockjs';


Mock.mock('wenzhang.php',{
  'data':[
    {
      'name': '@first()',
      'tit': '@ctitle(5,10)',
      'txt': '@csentence(500,800)',
      "pic":"@image('40x40')",
      "img":"@image('300x200')",
      'pimg':"@image('300x120')",
      'pname': '@cword(4,8)',
      'ptxt':'@csentence(20,30)',
      'pid|+1':0,

    }
  ]
})

export default {
  name: 'Wenzhang',
  data () {
    return {
      tit:'文章详情',
      list:{},
      username:'',
      uid:'123456',
    }
  },
  mounted() {
    this.$emit('toparent',this.tit);
    var _this = this;
    axios({
      method: 'get',
      url: 'wenzhang.php',
      params: {}
    }).then((data)=>{
      console.log(data.data.data[0]);
      _this.list = data.data.data[0]
    })
  },
}
</script>

<style scoped>
.outt{
  width: 94vw;
  margin: 3vw;
  flex-shrink: 0;
}
.top{
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  flex-shrink: 0
}
.top img{
  width: 70px;
  height: 70px;
  border-radius: 50%;
}
.top p{
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  line-height: 24px;
}
.top span{
  display: block;
}
.top em{
  display: block;
  font-style: normal;
}
.main p{
  font-size: 14px;
}
article{
  margin-left: 8px;
  line-height: 20px;
  color: rgba(164, 162, 162, 1);
}
h5{
  width: 100%;
  font-weight: normal;
  font-size: 20px;
  color: rgb(108, 108, 108);
  line-height: 29px;
}
.main img{
  width: 100%
}
</style>
