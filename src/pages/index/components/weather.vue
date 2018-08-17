<template>
  <div class="weather">
      <div class="weatherleft">
          <div class="weltop">{{txt}}</div>
          <div class="welbtm">{{templete}} </div>
      </div>
     <div class="weatherright">
        <i class="iconfont" v-if="isselect=='100'">
        &#xe60c;
       </i>
       <i class="iconfont" v-else-if="isselect=='101'">
        &#xe60a;
       </i>
        <i class="iconfont" v-else-if="isselect=='102'">
        &#xe60a;
       </i>
        <i class="iconfont" v-else-if="isselect=='103'">
        &#xe67a;
       </i>
        <i class="iconfont" v-else-if="isselect=='104'">
        &#xe61b;
       </i>
        <i class="iconfont" v-else-if="isselect=='200'">
        &#xe613;
       </i>
        <i class="iconfont" v-else-if="isselect=='201'">
        &#xe60c;
       </i>
        <i class="iconfont" v-else-if="isselect=='202'">
        &#xe613;
       </i>
        <i class="iconfont" v-else-if="isselect=='203'">
       &#xe613;
       </i>
        <i class="iconfont" v-else-if="isselect=='204'">
        &#xe613;
       </i>
        <i class="iconfont" v-else-if="isselect=='205'">
        &#xe613;
       </i>
        <i class="iconfont" v-else-if="isselect=='206'">
       &#xe607;
       </i>
        <i class="iconfont" v-else-if="isselect=='207'">
        &#xe607;
       </i>
        <i class="iconfont" v-else-if="isselect=='208'">
        &#xe607;
       </i>
        <i class="iconfont" v-else-if="isselect=='209'">
        &#xe607;
       </i>
        <i class="iconfont" v-else-if="isselect=='210'">
        &#xe607;
       </i>
        <i class="iconfont" v-else-if="isselect=='211'">
        &#xe607;
       </i>
        <i class="iconfont" v-else-if="isselect=='212'">
        &#xe65f;
       </i>
        <i class="iconfont" v-else-if="isselect=='213'">
       &#xe65f;
       </i>
        <i class="iconfont" v-else-if="isselect=='300'">
        &#xe642;
       </i>
        <i class="iconfont" v-else-if="isselect=='301'">
       &#xe642;
       </i>
        <i class="iconfont" v-else-if="isselect=='302'">
        &#xe661;
       </i>
        <i class="iconfont" v-else-if="isselect=='303'">
        &#xe661;
       </i>
        <i class="iconfont" v-else-if="isselect=='304'">
        &#xe661;
       </i>
        <i class="iconfont" v-else-if="isselect=='305'">
        &#xe62a;
       </i>
        <i class="iconfont" v-else-if="isselect=='306'">
        &#xe604;
       </i>
        <i class="iconfont" v-else-if="isselect=='307'">
        &#xe8b6;
       </i>
        <i class="iconfont" v-else-if="isselect=='308'">
        &#xe608;
       </i>
        <i class="iconfont" v-else-if="isselect=='309'">
        &#xe62a;
       </i>
        <i class="iconfont" v-else-if="isselect=='310'">
        &#xe615;
       </i>
        <i class="iconfont" v-else-if="isselect=='311'">
        &#xe615;
       </i>
        <i class="iconfont" v-else-if="isselect=='312'">
        &#xe615;
       </i>
        <i class="iconfont" v-else-if="isselect=='313'">
        &#xe62a;
       </i>
        <i class="iconfont" v-else-if="isselect=='314'">
       &#xe62a;
       </i>
        <i class="iconfont" v-else-if="isselect=='315'">
        &#xe62a;
       </i>
        <i class="iconfont" v-else-if="isselect=='316'">
        &#xe62a;
       </i>
        <i class="iconfont" v-else-if="isselect=='317'">
        &#xe62a;
       </i>
        <i class="iconfont" v-else-if="isselect=='318'">
        &#xe62a;
       </i>
        <i class="iconfont" v-else-if="isselect=='399'">
        &#xe62a;
       </i>
        <i class="iconfont" v-else-if="isselect=='400'">
        &#xe603;
       </i>
        <i class="iconfont" v-else-if="isselect=='401'">
        &#xe6ea;
       </i>
        <i class="iconfont" v-else-if="isselect=='402'">
        &#xe62e;
       </i>
        <i class="iconfont" v-else-if="isselect=='403'">
        &#xe62e;
       </i>
        <i class="iconfont" v-else-if="isselect=='404'">
        &#xe62d;
       </i>
        <i class="iconfont" v-else-if="isselect=='405'">
        &#xe62d;
       </i>
        <i class="iconfont" v-else-if="isselect=='406'">
        &#xe62d;
       </i>
        <i class="iconfont" v-else-if="isselect=='407'">
        &#xe64a;
       </i>
        <i class="iconfont" v-else-if="isselect=='408'">
        &#xe683;
       </i>
        <i class="iconfont" v-else-if="isselect=='409'">
        &#xe683;
       </i>
        <i class="iconfont" v-else-if="isselect=='410'">
        &#xe683;
       </i>
        <i class="iconfont" v-else-if="isselect=='499'">
        &#xe61c;
       </i>
        <i class="iconfont" v-else-if="isselect=='500'">
        &#xe609;
       </i>
        <i class="iconfont" v-else-if="isselect=='501'">
        &#xe609;
       </i>
        <i class="iconfont" v-else-if="isselect=='502'">
        &#xe6f2;
       </i>
        <i class="iconfont" v-else-if="isselect=='503'">
        &#xe8b9;
       </i>
        <i class="iconfont" v-else-if="isselect=='504'">
       &#xe8b9;
       </i>
        <i class="iconfont" v-else-if="isselect=='507'">
        &#xe624;
       </i>
        <i class="iconfont" v-else-if="isselect=='508'">
        &#xe60f;
       </i>
        <i class="iconfont" v-else-if="isselect=='509'">
        &#xe609;
       </i>
        <i class="iconfont" v-else-if="isselect=='510'">
        &#xe609;
       </i>
        <i class="iconfont" v-else-if="isselect=='511'">
        &#xe609;
       </i>
        <i class="iconfont" v-else-if="isselect=='512'">
        &#xe609;
       </i>
        <i class="iconfont" v-else-if="isselect=='513'">
        &#xe609;
       </i>
        <i class="iconfont" v-else-if="isselect=='514'">
        &#xe609;
       </i>
        <i class="iconfont" v-else-if="isselect=='515'">
        &#xe609;
       </i>
        <i class="iconfont" v-else-if="isselect=='900'">
        &#xe605;
       </i>
        <i class="iconfont" v-else-if="isselect=='901'">
        &#xe61c;
       </i>
       <i class="iconfont" v-else>
        &#xe6a0;
       </i>
     </div>
  </div>
</template>

<script>
export default {
  name: 'weather',
  props: ['isselect', 'txt', 'templete'],
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
 .weather
   width: 150px
   height: 75px
   display: flex
   .weatherleft
      width: 100px
      height: 65px
      font-size: 10px
      padding:5px 0px
      .weltop
       width: 100px
       height: 32px
       line-height: 32px
       fon-size: 10px
       text-align: right
      .welbtm
       width: 100px
       height: 33px
       line-height: 33px
       fon-size: 10px
       text-align: right
   .weatherright
      width: 50px
      height: 75px
      line-height: 75px
      font-size: 40px
      .iconfont
        font-size: 40px
        line-height: 75px
        text-align: center
</style>
