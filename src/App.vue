<template>
    <div class="container" :style="{height:height+'px'}">
       <LeftAside :style="{height:(height-0.06*height)+'px'}"></LeftAside>
       <RightAside :style="{height:(height-0.06*height)+'px'}"></RightAside>
    </div>
</template>

<script>
import LeftAside from './components/LeftAside';
import RightAside from './components/RightAside';
export default {
  name: "app",
  components: {LeftAside,RightAside},
  mounted:function(){
      const that = this;
      window.onresize = () => {
        return (() => {
          that.height = document.documentElement.clientHeight || document.body.clientHeight;
        })()
      }
  },
  data(){
    return {
      height:document.documentElement.clientHeight || document.body.clientHeight,
    }
  }
};
</script>
<style lang="postcss" scoped>
:root{
    --bgColor:#202020;
    --fontColor:#fff;
}
.container {
  width: 100%;
  float: left;
  background: var(--bgColor);
  color: var(--fontColor);
}
</style>



