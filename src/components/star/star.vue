<template>
<div class="starwrap" :class="starstyle.width">
    <div v-for="(item,index) in stararry" :class="item" class="star" :style="starstyle.wrapstyle" :key="index">
    </div>
</div>
</template>

<script>
export default {
  props: {
    score: {
      default: 0
    },
    starstyle: {
      default: {
        wrapstyle: '',
        starstyle: '',
        starsize: 24
      }
    }
  },
  data () {
    return {
      classmap: {
        24: ['sstar', 'sstarh', 'sstarof'],
        36: ['mstar', 'mstarh', 'mstarof'],
        48: ['lstar', 'lstarh', 'lstarof']
      }
    }
  },
  mounted () {
  },
  computed: {
    starsize () {
      let starnum = 0
      let halfnum = 0
      let offnum = 0
      let score = this.score + 0
      if (score>5) {
        starnum = 5
        return{
          starnum,
          halfnum,
          offnum
        }
      }
      else{
        if (Math.round(score)>score) {
           starnum = Math.floor(score)
           halfnum = 1
           offnum = 5-starnum-halfnum
          return{
            starnum,
            halfnum,
            offnum
          }
        }
        else if (Math.round(score)==score){
          starnum = score
          offnum = 5 - starnum-halfnum
          return{
            starnum,
            halfnum,
            offnum
          }
        }else{
          starnum = Math.floor(score)
          offnum = 5-starnum-halfnum
          return{
            starnum,
            halfnum,
            offnum
          }
        }
      }
    },
    stararry(){
      let arry = []
      for(var i=0;i<this.starsize.starnum;i++){
        arry.push(this.classmap[this.starstyle.starsize][0])
      }
      for(var o=0;o<this.starsize.halfnum;o++){
        arry.push(this.classmap[this.starstyle.starsize][1])
      }
      for(var p=0;p<this.starsize.offnum;p++){
        arry.push(this.classmap[this.starstyle.starsize][2])
      }
      return arry
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sstar{
  width: 24px;
  height: 24px;
  display: inline-block;
  background-repeat: no-repeat;
  background-size:cover;
  background-position: center;
  background-image: url("./static/star24_on@2x.png");
}
.sstarh{
  width: 24px;
  height: 24px;
  display: inline-block;
  background-repeat: no-repeat;
  background-size:cover;
  background-position: center;
  background-image: url("./static/star24_half@2x.png");
}
.sstarof{
  width: 24px;
  height: 24px;
  display: inline-block;
  background-repeat: no-repeat;
  background-size:cover;
  background-position: center;
  background-image: url("./static/star24_off@2x.png");
}
.mstar{
  width: 36px;
  height: 36px;
  display: inline-block;
  background-repeat: no-repeat;
  background-size:cover;
  background-position: center;
  background-image: url("./static/star36_on@2x.png");
}
.mstarh{
  width: 36px;
  height: 36px;
  display: inline-block;
  background-repeat: no-repeat;
  background-size:cover;
  background-position: center;
  background-image: url("./static/star36_half@2x.png");
}
.mstarof{
  width: 36px;
  height: 36px;
  display: inline-block;
  background-repeat: no-repeat;
  background-size:cover;
  background-position: center;
  background-image: url("./static/star36_off@2x.png");
}
.lstar{
  width: 48px;
  height: 48px;
  display: inline-block;
  background-repeat: no-repeat;
  background-size:cover;
  background-position: center;
  background-image: url("./static/star48_on@2x.png");
}
.lstarh{
  width: 48px;
  height: 48px;
  display: inline-block;
  background-repeat: no-repeat;
  background-size:cover;
  background-position: center;
  background-image: url("./static/star48_half@2x.png");
}
.lstarof{
  width: 48px;
  height: 48px;
  display: inline-block;
  background-repeat: no-repeat;
  background-size:cover;
  background-position: center;
  background-image: url("./static/star48_off@2x.png");
}
.starwrap{
  display: flex;
  justify-content: center;
}
.star:last-child{ /*最后一个 class为star 的元素*/
  margin: 0px !important;
}
.width1{
  width:130px
}

</style>
