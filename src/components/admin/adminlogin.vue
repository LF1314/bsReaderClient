<template>
    <div class="login">
     
            <h4 class="title">
                管理员登录
            </h4>
     
        <div class="logo"></div>
        <div class="login-form">
            <div class="form-item">
                <i class="icon icon-user"></i>
                <mt-field placeholder="管理员昵称" v-model="username"></mt-field>
            </div>
            <div class="form-item">
                <i class="icon icon-lock"></i>
                <mt-field type="password" placeholder="输入密码" v-model="password"></mt-field>
            </div>
         
            <mt-button type="primary" @click="logins">登录</mt-button>
        </div>

    </div>
</template>

<script>
    import {adminLogin} from "../../fetch/admin";
    import {Toast} from "mint-ui"
    import md5 from 'md5'

    export default {
        name: "adminLogin",
        data() {
            return {
                username: '',
                password: ''
            }
        },
        methods: {
            logins() {
                adminLogin(this.username,this.password).then(res => {
                    // console.log(res);
                    if (res) {
                        // this.$store.dispatch('getInfo', res);
                        localStorage.setItem('adminInfo', JSON.stringify(res));
                        this.$router.push('/admincenter')
                    } else {
                        Toast({
                            message: '用户名或密码错误，请重新登录'
                        })
                    }
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    .login {
        padding-top: 40%;
        .title{
            text-align: center;
            font-size: 20px;
            width:100%;
            padding-bottom: 30px;
        }
        .logo {
            width: 60px;
            height: 60px;
            margin: 0 auto 30px;
            background-image: url(../../assets/logo.svg);
            background-repeat: no-repeat;
        }
        .login-form {
            width: 80%;
            margin: 0 auto;

            .form-item {
                display: block;
                height: 48px;
                line-height: 48px;
                display: flex;
                margin-bottom: 15px;
                border-bottom: 1px solid #d9d9d9;

                .mint-cell-wrapper {
                    background: none;
                }

                i {
                    margin-top: 13px;
                }

                .mint-cell {
                    flex: 1;
                }


            }

            .others {
                display: flex;
                justify-content: space-between;
                font-size: 14px;
                color: #26a2ff;
                padding: 20px 0;

                span {
                    flex: 1;
                    text-align: right;
                }

                a {
                    flex: 1;
                    color: #26a2ff;
                }
            }

            .mint-button {
                width: 100%;
            }
        }

    }
</style>
