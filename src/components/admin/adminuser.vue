<template>
    <div >
        <div class="titles">
              <h3>
                  用户列表
              </h3>
           <div class="listtab">
                           <mt-cell
                            class="user-item"
                            v-for="item in userlists" :key="item.id">
                            <li :to="{path:'book',query:{bookId:item.id}}">
                                <h5>{{item.name}}</h5>
                                <p>{{item.email}}</p>
                            </li>
                        </mt-cell>
           </div>

        </div>
    </div>
</template>

<script>
import {adminuserlist} from '../../fetch/admin'
    export default {
        data(){
            return{
                userlists:[]
            }
        },
        mounted(){
            this.getuser()
        },
        methods:{
            getuser(){
                adminuserlist().then(res=>{
                    this.userlists=res
                })
            }
        }
    }
</script>

<style scoped>

</style>