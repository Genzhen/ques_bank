<template>
    <header class="container_head">
        <div class="header-content_logo ">
            <h1>
                <a href="https://www.yidengxuetang.com">京程一灯</a>
            </h1>
        </div>
        <p class="titlemain">京程一灯题库</p>
    </header>
</template>

<script>
export default {
  name: "LeftHeader"
};
</script>

<style  lang="css" >
:root {
  --shadowColor: #000;
}
.container_head {
  & {
    margin: 0 auto;
    text-align: center;
    margin-top: 1px;
  }
  & .header-content_logo {
    float: left;
  }
  & .header-content_logo h1 a {
    text-indent: -9999px;
    display: inline-block;
    width: 157px;
    height: 48px;
    background: url(../public/images/logo.png) no-repeat;
    background-size: 157px 48px;
    margin: 10px 20px;
  }
  & .titlemain {
    height: 70px;
    line-height: 70px;
    width: 100%;
    box-shadow: 0 0 10px var(--shadowColor);
    font-size: 18px;
    margin-left: 1px;
  }
}
</style>

