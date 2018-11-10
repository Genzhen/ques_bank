<template>
  <div class="container_body">
    <div class="body_info">
      <ul class="topicinfo">
        <template v-if="qtype == 'single_choice'">
          <li class="topicinfonum" :id="topId">
            <p>
              <span class="subnum">{{res.qid+1}}、</span>
              <font>{{res.title}}</font>
            </p>
            <ul class="subchange">
              <li class="subchangeli" v-for="(item,index) in res.choice" :key="item.id">
                <input type="radio" :id="'item'+res.qid+index" :name="'item'+res.qid" v-model="singleVal[res.qid]"
                  :value="index">
                <label :for="'item'+res.qid+index"></label>
                <span class="singlespan">{{item.option}}</span>
              </li>
            </ul>
            <div v-show="singleVal[res.qid] == res.answer" class=" bodykey  bodykey_1">
              <p class="keytitle">试题详解:</p>
              <p>{{res.analysis}}</p>
            </div>
            <button type="button" @click="quesNext(res.qid)" class="btn btn-primary btn-footer btnnextit">
              下一题
            </button>
          </li>
        </template>

        <template v-if="qtype == 'multiple_choice'">
          <li class="topicinfonum" :id="topId">
            <p>
              <span class="subnum">{{res.qid+1}}、</span>
              <font>{{res.title}}</font>
            </p>
            <ul class="subchange">
              <li class="subchangeli" v-for="(item,index) in res.choice" :key="item.id">
                <input type="checkbox" :id="'item'+res.qid+index" :name="'item'+res.qid" v-model="multipleVal" :value="index+1">
                <label :for="'item'+res.qid+index"></label>
                <span class="singlespan">{{item.option}}</span>
              </li>
            </ul>
            <!-- res.answer.sort().toString() == multipleVal.sort().toString() -->
            <div v-show="multipleFlag" class=" bodykey  bodykey_1">
              <p class="keytitle">试题详解:</p>
              <p>{{res.analysis}}</p>
            </div>
            <button type="button" @click="judgment()" class="btn btn- btn-footer btn-success  btngain">
              获取答案
            </button>
            <button type="button" @click="quesNext(res.qid)" class="btn btn-primary btn-footer btnnextit">
              下一题
            </button>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "LeftCon",
  mounted: function() {
    this.getData(0, "single_choice");
  },
  data() {
    return {
      height:
        document.documentElement.clientHeight || document.body.clientHeight,
      qtype: "",
      res: {},
      singleVal: [],
      multipleVal: [],
      multipleFlag: false
    };
  },
  computed: {
    topId: function() {
      return "subnum_" + (this.res.qid + 1);
    }
  },
  methods: {
    quesNext: function(qid) {
      let nextType = "single_choice";
      qid >= 1 && (nextType = "multiple_choice");
      this.getData(qid + 1, nextType);
      this.multipleFlag = false;
    },
    getData: function(qid, qtype) {
      // console.log(qid, qtype);
      // axios.post("/user", {
      //   firstName: "Fred",
      //   lastName: "Flintstone"
      // });
      this.axios
        .get("http://localhost:3000/api/test", {
          params: {
            qid: qid,
            qtype: qtype
          }
        })
      // this.axios
      //   .post("http://192.168.2.151:3000/exam/question/get", {
      //     "uid":123,
      //     "qid":1
      //   })
        .then(res => {
          console.log(res);
          this.qtype = res.data.result.qtype;
          const qType = res.data.result.qtype;
          this.res = res.data.result[qType];
          console.log(this.res);
        });
    },
    judgment: function() {
      this.multipleFlag = true;
    }
  }
};
</script>

<style scoped lang="css">
.container_body {
  padding: 20px;
  font-size: 16px;
}

.body_info {
  margin-bottom: 30px;
}

.subnum {
  margin-right: 10px;
}

.subchange {
  margin-left: 30px;
}

.singlespan {
  margin-left: 20px;
  line-height: 30px;
}

.container_body li {
  margin: 10px 0;
}

.titlemain {
  height: 70px;
  line-height: 70px;
  width: 100%;
  box-shadow: 0 0 10px #000;
  font-size: 18px;
  margin-left: 1px;
}

.bodykey {
  border-top: 1px dotted #bab5b8;
  padding-top: 30px;
  color: #fe6d32;
  /* display: none; */
}

.keytitle {
  margin-bottom: 20px;
}

.btn-footer {
  margin: 30px;
}

/*设置radio样式*/

.subchangeli {
  position: relative;
}

input[type="radio"],
input[type="checkbox"] {
  width: 20px;
  height: 20px;
  opacity: 0;
}

label {
  position: absolute;
  left: 5px;
  top: 7px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid #999;
}

input:checked + label {
  background-color: #fe6d32;
  border: 1px solid #fe6d32;
}

input:checked + label::after {
  position: absolute;
  content: "";
  width: 5px;
  height: 10px;
  top: 3px;
  left: 6px;
  border: 2px solid #fff;
  border-top: none;
  border-left: none;
  transform: rotate(45deg);
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
</style>