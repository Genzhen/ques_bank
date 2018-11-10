<template>
<div class="left_aside">
    <LeftHeader></LeftHeader>
    <LeftCon></LeftCon>

    
 </div>

</template>

<script>
import LeftHeader from "./LeftHeader";
import LeftCon from "./LeftCon";
export default {
  name: "LeftAside",
  components: { LeftHeader, LeftCon }
};
</script>
<style lang="css">
.left_aside {
  width: 70%;
  border: 1px solid;
  float: left;
  margin: 2% 0 0 2%;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>
