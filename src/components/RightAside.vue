<template>
    <div class="right_aside">
            <div class="right_asideinfo">
                <div class="right_header clearfix">
                    <div class="rightl">答题卡</div>
                    <div class="rightr">
                        <a href="/">返回</a>
                    </div>
                </div>
                <section class="right_answer clearfix">
                    <div class="righttitle">
                        <button type="button" class="btn btn-success  totaltitle">vue</button>
                        <div class="numtotal">共30题</div>
                    </div>
                    <li class="rightnuminfo  clearfix">
                        <a class="rightnum" id="rightnum_1">1 </a>
                        <a class="rightnum" id="rightnum_2">2</a>
                        <a class="rightnum" id="rightnum_3">3</a>
                        <a class="rightnum" id="rightnum_4">4</a>
                        <a class="rightnum" id="rightnum_5">5</a>
                        <a class="rightnum" id="rightnum_6">6</a>
                        <a class="rightnum" id="rightnum_7">7</a>
                        <a class="rightnum" id="rightnum_8">8</a>
                        <a class="rightnum" id="rightnum_9">9</a>
                    </li>
                </section>
                <section class="right_answer moreanswer clearfix">
                    <div class="righttitle">
                        <div class=""></div>
                        <button type="button" class="btn btn-success  totaltitle">webpack</button>
                        <div class="numtotal">共20题</div>
                    </div>
                    <li class="rightnuminfo  clearfix">
                        <a class="rightnum" id="rightnum_1">1 </a>
                        <a class="rightnum" id="rightnum_2">2</a>
                        <a class="rightnum" id="rightnum_3">3</a>
                        <a class="rightnum" id="rightnum_4">4</a>
                        <a class="rightnum" id="rightnum_5">5</a>
                        <a class="rightnum" id="rightnum_6">6</a>
                        <a class="rightnum" id="rightnum_7">7</a>
                        <a class="rightnum" id="rightnum_8">8</a>
                        <a class="rightnum" id="rightnum_9">9</a>
                    </li>
                </section>
                <section class="right_answer clearfix">
                    <div class="righttitle">
                        <button type="button" class="btn btn-success  totaltitle">vue</button>
                        <div class="numtotal">共30题</div>
                    </div>
                    <li class="rightnuminfo  clearfix">
                        <a class="rightnum" id="rightnum_1">1 </a>
                        <a class="rightnum" id="rightnum_2">2</a>
                        <a class="rightnum" id="rightnum_3">3</a>
                        <a class="rightnum" id="rightnum_4">4</a>
                        <a class="rightnum" id="rightnum_5">5</a>
                        <a class="rightnum" id="rightnum_6">6</a>
                        <a class="rightnum" id="rightnum_7">7</a>
                        <a class="rightnum" id="rightnum_8">8</a>
                        <a class="rightnum" id="rightnum_9">9</a>
                    </li>
                </section>
                <section class="right_answer moreanswer clearfix">
                    <div class="righttitle">
                        <button type="button" class="btn btn-success  totaltitle">webpack</button>
                        <div class="numtotal">共20题</div>
                    </div>
                    <li class="rightnuminfo  clearfix">
                        <a class="rightnum" id="rightnum_1">1 </a>
                        <a class="rightnum" id="rightnum_2">2</a>
                        <a class="rightnum" id="rightnum_3">3</a>
                        <a class="rightnum" id="rightnum_4">4</a>
                        <a class="rightnum" id="rightnum_5">5</a>
                        <a class="rightnum" id="rightnum_6">6</a>
                        <a class="rightnum" id="rightnum_7">7</a>
                        <a class="rightnum" id="rightnum_8">8</a>
                        <a class="rightnum" id="rightnum_9">9</a>
                    </li>
                </section>
            </div>
        </div>

</template>
<script>
export default {
  name: "RightAside"
};
</script>

<style lang="css">
/*exam.html右侧样式*/

.right_aside {
  width: 23%;
  float: left;
  border: 1px solid;
  margin: 2% 2% 0 2%;
  position: fixed;
  right: 0%;
  overflow-y: auto;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1),
    0 0 8px rgba(82, 168, 236, 0.6);
}

.right_header {
  border-bottom: 1px dotted;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1),
    0 0 8px rgba(82, 168, 236, 0.6);
}

.rightl {
  width: 65px;
  height: 50px;
  background: #2e6da5;
  text-align: center;
  line-height: 50px;
  color: #fff;
  float: left;
}

.rightr {
  width: 50px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  float: right;
}

.rightr a {
  color: #fe6d32;
  cursor: pointer;
}

.right_answer {
  margin-bottom: 20px;
}

.right_answer .righttitle {
  border-bottom: 1px dotted;
  padding: 12px;
  width: 95%;
  margin: 0 auto;
  height: 45px;
  color: #fff;
  line-height: 45px;
}

.totaltitle {
  float: left;
  margin-left: 13%;
  margin-top: 8px;
}

.numtotal {
  float: right;
  margin-right: 13%;
}

.rightnum {
  border: 1px solid;
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  float: left;
  margin: 0 0 10px 10px;
  color: #fff;
}

.rightnum:hover {
  border: 1px solid #fe6d32;
  color: #fff;
  text-decoration: none;
}

.rightnuminfo {
  margin: 10px 10px 10px 0;
}

.moreanswer {
  border-top: 1px solid #bab5b8;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1),
    0 0 8px rgba(82, 168, 236, 0.6);
}

/* .topicinfonum {
  display: none;
} */

.btn-footer {
  margin: 30px;
}

.btn-primary {
  color: #fff;
  background-color: #337ab7;
  border-color: #2e6da4;
}

.btn {
  display: inline-block;
  padding: 6px 12px;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 4px;
}

.btn-success {
  color: #fff;
  background-color: #5cb85c;
  border-color: #4cae4c;
}

#subnum_1 {
  display: block;
}

.btn-footer2 {
  margin: 5px;
}

.sourcetotalinfo {
  margin: 20px;
}

.sourcetotalinfo button {
  margin-bottom: 20px;
}

.btn-defalt {
  background: #ccc;
  color: #333;
}

.sourcetotal {
  color: #fe6d32;
}

.btnprimary {
  color: #fff;
  background: #fe6d32;
}

#tag-cloud {
  width: 640px;
  height: 480px;
  margin: 50px auto;
}
#tag-cloud a {
  color: #a0b3d6;
}
/*exam.html右侧样式结束*/
</style>

