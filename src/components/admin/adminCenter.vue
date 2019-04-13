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
                    <mt-cell title="添加书籍信息" is-link @click="gtoaddbook">
                    <span style="color: green"></span>
                    </mt-cell>
                </li>
                <li @click="gtobooklist" class="li_items"> 
                        <mt-cell title="书籍列表" is-link @click="gtoaddbook">
                        <span style="color: green"></span>
                        </mt-cell>
                </li>
               <li @click="gtouserlist" class="li_items"> 
                        <mt-cell title="用户列表" is-link @click="gtoaddbook">
                        <span style="color: green"></span>
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
             },
             gtobooklist(){
                 this.$router.push('/adminbooklist')
             },
             gtouserlist(){
                 this.$router.push('/adminuserlist')
                  
             }
        },
};
</script>

<style scoped lang='less'>
.wraper{
    height: 100%;
    width: 100%;
    background-color: #f6f2fa;
    .menu_item{
        margin-top: 20px;
        .li_items{
            margin-top: 10px
        }
    }
              
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
    background: url(../../assets/admincenterbg.png);
    .admindetails{
        width: 100%;
        height: 200px;
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