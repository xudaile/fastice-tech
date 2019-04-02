<template>
  <div>
    <div><img src="../assets/other/a5.jpg" class="fruit_img"/></div>
    <div style="font-size: 25px;font-weight: bold;margin-top: 20px">拥有自己的外卖平台</div>
    <div style="font-size: 20px;font-weight: normal;margin-top: 20px;margin-bottom: 15px">为商家快速搭建专业的外卖平台 圈住门店半径5公里内的微信用户</div>
    <div class="delivery">
      <div class="deliver_img_parent">
        <img class="fruit_product_img" src="../assets/other/水果外卖.png"/>
      </div>
      <div class="deliver_parent">
        <div class="delivery_border">
          <div>
            <img class="delivery_border_img" :src="delivery[0].img"/>
          </div>
          <div class="delivery_border_title">{{delivery[0].title}}</div>
          <div class="delivery_border_content">{{delivery[0].contents[0]}}</div>
        </div>
        <div class="delivery_border">
          <div>
            <img class="delivery_border_img" :src="delivery[1].img"/>
          </div>
          <div class="delivery_border_title">{{delivery[1].title}}</div>
          <div class="delivery_border_content">{{delivery[1].contents[0]}}</div>
        </div>
        <div class="delivery_border">
          <div>
            <img class="delivery_border_img" :src="delivery[2].img"/>
          </div>
          <div class="delivery_border_title">{{delivery[2].title}}</div>
          <div class="delivery_border_content">{{delivery[2].contents[0]}}</div>
        </div>
      </div>
    </div>
    <!--<div>水果</div>-->

  </div>
</template>
<script>
    export default {
        name: 'Fruit',
        data () {
            return {
               delivery:[
                   {
                       img: require('../assets/other/定位图标.png'),
                       title: "自定义配送范围",
                       contents:["商家后台自定义配送范围"]
                   },{
                       img: require('../assets/other/骑车送.png'),
                       title: "支持自定义配送",
                       contents:["商家自己优选配送路径"]
                   },{
                       img: require('../assets/other/券.png'),
                       title: "线上优惠券福利",
                       contents:["各种优惠福利提升用户消费"]
                   }
               ]
            }
        }
    }
</script>

<style scoped>
  *{
    box-sizing: border-box;
    margin:0;
    padding:0;
  }
  .delivery_border{
    height: auto;
    margin: 20px;
    width: 55%;
    /*border-radius: 6px;*/
    /*border: 1px solid #EBEEF5;*/
  }
  .delivery_border_img{
    margin-top: 20px;
    width: 70px;
    height: 70px;
  }
  .delivery_border_title{
    margin-top: 10px;
    font-size: 1.25em;
    font-weight: normal;
  }
  .delivery_border_content{
    margin-top: 10px;
    font-size: 1.125em;
    font-weight: normal;
  }
  .fruit_img{
    height: 550px;width: 100%;
  }
  .fruit_product_img{
    height: 500px;
    width: 260px;
  }
  .deliver_parent{
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .deliver_img_parent{
    width: 30%;
    height: auto;
  }
  .delivery{
    display: flex;
    height: 550px;
    width: 90%;
    margin: auto;
    justify-content: center;
    align-items: center;
  }
  /* 屏幕设备适配 max-device-width: 400px */
  @media screen and (max-device-width: 415px){
    .fruit_img{
      height: 250px;width: 100%;
    }
    .fruit_product_img{
      height: 400px;
      width: 240px;
    }
    .delivery_border_img{
      margin-top: 20px;
      width: 70px;
      height: 70px;
    }
    .deliver_img_parent{
      width: 100%;
      float: left;
      height: 400px;
    }
    .deliver_parent{
      float: left;
      margin-top: 5px;
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
    }
    .delivery_border{
      height: auto;
      margin:10px 0 auto;
      width: 100%;
      float: right;
      border-radius: 6px;
      border: 1px solid #EBEEF5;
    }
    .delivery{
      display: flex;
      width: 90%;
      height: auto;
      margin: auto;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    .delivery_border_title{
      margin-top: 5px;
      font-size: 1.125em;
      font-weight: normal;
    }
    .delivery_border_content{
      margin-top: 5px;
      font-size: 1.125em;
      font-weight: normal;
      margin-bottom: 10px;
    }
  }
</style>