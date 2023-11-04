<template>
  <div class="main">
    <div class="square" v-for="(data,index) in array" :key="data" :id="index"
         @mouseover="start(data,index,$event)">
      {{data.data}}
    </div>
  </div>
</template>

<script setup>
// export default {
//   name: "TestPinia"
// }
import $ from 'jquery'
import {useCounterStore} from "@/stores/counter";
import {ref,reactive} from 'vue';
import {ElMessage} from "element-plus";

const datas=reactive([])
for(let i=0;i<25;i++){
  datas[i]=1;
}

const array=[];

for(let i=0;i<datas.length;i++){
  array.push({id: i,data: datas[i],down: false,up: false});
}

const start=(data,index,e)=> {
  ElMessage.success(data)
  // datas[index].data;
  console.log($("#"+index+1)[0])
  console.log($("#"+index-1)[0])
  console.log($("#"+index-5)[0])
  console.log($("#"+index+5)[0])
}

const mouseover=(e)=>{
  console.log(e)
  ElMessage.success("HelloWorld!!")
}


</script>

<style scoped lang="less">
.main{
  width: 450px;
  height: 450px;
  //border: #3395ff solid 2px;
  margin: 100px auto;
  .square{
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    float: left;
    box-sizing: border-box;
    width: calc(450px / 5 );
    border: white solid 1px;
    height: calc(450px / 5 );
    background: #ff9393;
    cursor: pointer;
    user-select: none;
    transition: all 0.2s;
    &:hover{
      background: #3395ff;
    }
    &:active{
      background: #005bbd;
    }
  }
}
</style>