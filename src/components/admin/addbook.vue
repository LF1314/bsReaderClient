<template>
    <div class="addbook_wraper">
                <div class="basemeasage">
                        <div class="top">
                            <h3>添加书籍基本信息</h3>
                        </div>
                        <mt-field label="名称" placeholder="请输入书本名称" v-model="name">

                        </mt-field>
                        <mt-field label="作者" placeholder="请输入书本名称" v-model="author">

                        </mt-field>
                        <mt-field label="封面" placeholder="书籍封面" type="url" v-model="images">

                        </mt-field>
                        <mt-field label="评分" placeholder="评分" type="number" v-model="ratings">

                        </mt-field>

                        <mt-field label="字数" placeholder="请输入书籍字数"  type="number" v-model="wordcount">

                        </mt-field>

                        <mt-field label="类型" placeholder="请输入类型"  v-model="type">

                        </mt-field>
                        <mt-field label="是否完结" placeholder="是否完结"  v-model="serialize">

                        </mt-field>
                    
                        <mt-field label="收藏" placeholder="喜欢人数"  type="number" v-model="like">

                        </mt-field>

                        <mt-field label="简介" placeholder="请输入简介" type="textarea" rows="4" v-model="intro">

                        </mt-field>

                        <div class="button">

                        </div>

                </div>
    </div>
</template>

<script>
    import {addbookmes} from "../../fetch/admin";
export default {
  data() {
    return {
      name: "",
      author: "",
      type: "",
      intro: "",
      images: "",
      ratings: 0.0,
      wordcount: 0,
      serialize: "",
      like: 0
    };
  }
};
</script>

<style scoped lang='less'>
.top {
  text-align: center;
  h3 {
    height: 40px;
    text-align: center;
    line-height: 40px;
    display: inline-block;
    background: linear-gradient(to right, #7359f5, #3ab4f2);
    -webkit-background-clip: text;
    color: transparent;
    font-size: 18px;
  }
}
</style>