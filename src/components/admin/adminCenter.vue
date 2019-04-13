<template>

    <div class="wraper">
         <div class="top">
               <h3>管理员中心</h3>
         </div>
         <div class="adminmes">
             <div class="admindetails">
                   {{admindata.user_name}}
             </div>
         </div>
         <div class="menu_item"> 
                <ul>
                    <li @click="gtoaddbook"> 
                        <mt-cell title="添加书籍" is-link @click="gtoaddbook">
                        <span style="color: green">这里是元素</span>
                        </mt-cell>
                     </li>
                </ul>
         </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            admindata:{}
        }
    },
    mounted(){
     this.admindata = JSON.parse(localStorage.getItem('adminInfo'))
   
     console.log(this.admindata.user_name)
    },
     methods: {
             gtoaddbook(){
                 this.$router.push('/addbook')
             }
        },
};
</script>

<style scoped lang='less'>
.wraper{
    height: 100%;
    width: 100%;
    background-color: #fff;
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
.adminmes{
    width: 100%;
    .admindetails{
        width: 100%;
        height: 100px;
        border: 1px solid #ddd;
        line-height: 100px;
        text-align: center;
        font-size: 12px;
        border-radius: 2%;
        color: #3ab4f2;
        margin: 0 auto;
    }
}
</style>