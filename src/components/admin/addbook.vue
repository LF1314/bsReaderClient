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
                        <mt-field label="评分" placeholder="书籍评分" type="number" v-model="ratings">

                        </mt-field>

                        <mt-field label="字数" placeholder="请输入书籍字数"  type="number" v-model="wordcount">

                        </mt-field>

                        <mt-field label="分类" placeholder="请输入分类"  v-model="type">

                        </mt-field> 
                        <mt-radio
                          align='right'
                          v-model="serialize"
                          :options="['完结', '连载']">
                        </mt-radio>
                        <mt-field label="收藏" placeholder="收藏人数"  type="number" v-model="like">

                        </mt-field>

                        <mt-field label="简介" placeholder="请输入简介" type="textarea" rows="4" v-model="intro">

                        </mt-field>

                        <div class="button">
                         <mt-button @click.native="addbooks" type="primary" size="large">
                           提交</mt-button>
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
      ratings: null,
      wordcount: null,
      serialize: "",
      like: ""
    };
  },
  methods:{
    addbooks(){
      addbookmes( this.name,
                this.author,
                this.images,
                this.ratings,
                this.wordcount,
                this.type,
                this.serialize,
                this.like,
                this.intro).then((res)=>{
                  if(res.code !='200'){
                    Toast({
                      message: res.msg,
                      position: 'bottom',
                      duration: 5000
                    });
                  }else{
                    Toast({
                      message:'添加成功',
                      iconClass: 'icon icon-success'
                    });
                  }
                })
    }
  }
};
</script>

<style scoped lang='less'>
.addbook_wraper{
  background-color: #e4e5e6;
  width: 100%;
  height: 100%;
}
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
.basemeasage{
  padding: 10px;
  .button{
    width: 100%;
    margin-top: 10px;
  }
}
</style>