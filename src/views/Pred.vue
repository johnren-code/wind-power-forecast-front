<template>
    <!-- <body id="paper"> -->
    <Layout header-class="header-transparent" :show-cta="false" :footer-style="1">
        <!-- <p>历史记录！！！</p> -->
        <div class="container">
            <div class="mytable">
                <Menu></Menu>
            </div>

            <div class="content">
                <!-- <div class="col-lg-12">
                    <SectionTitle text-align="center" title="历史记录" description="" data-aos="fade-up" />
                </div> -->
                <router-view></router-view>

            </div>
        </div>
    </Layout>
</template>
<script>
import axios from "axios";
import Layout from '../components/common/Layout'
import SectionTitle from '../components/elements/sectionTitle/SectionTitle'
import BlogSidebar from '../components/blog/BlogSidebar'
import Menu from "@/components/menu/Menu";

export default {
    name: 'Pred',
    components: { Layout, SectionTitle, BlogSidebar, Menu },
    data() {
        return {
            isCollapse: false,
            tableData: [{
                date: '2016-05-0211111'
            }, {
                date: '2016-05-02'
            }, {
                date: '2016-05-02'
            }, {
                date: '2016-05-02'
            }],

            currentRow: null
        }
    },
    methods: {
        getHistory() {
            const _this = this
            axios.post('/history', {
                username: this.loginForm.username,
                password: this.loginForm.password
            })
                .then(rep => {
                    if (rep.data.code === 200) {
                        _this.store.commit('login', rep.data.result)

                        this.$router.push('/video')//否则跳转至首页
                    } else {
                        this.$message(rep.data.message)
                    }

                })
                .catch(failResponse => {
                    console.log(failResponse.response)
                })
        }
    }
}


</script>
<style  scoped>
.container {
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding: 0px;
    position: relative;
    top: 80px;
    max-width: 100%;
    /* height: 800px; */
    height: 100%;
    margin-bottom: 50px;
}

/* .mytable {
    position: relative;
    width: 300px;
    padding: 0;
    height: 100%;

} */
.mytable {
    margin-right: 20px;
    margin-top: 10px;
}

.customer-table th {
    border: none;
}

.customer-table td,
.customer-table th.is-leaf {
    border: none;
}

.customer-table thead tr th.is-leaf {
    border: 1px solid #EBEEF5;
    border-right: none;
}

.customer-table thead tr th:nth-last-of-type(2) {
    border-right: 1px solid #EBEEF5;
}

.el-table--border::after,
.el-table--group::after {
    width: 0;
}

.customer-table::before {
    width: 0;
}

.customer-table .el-table__fixed-right::before,
.el-table__fixed::before {
    width: 0;
}

.el-table--border,
.el-table--group {
    border: none;
}

/* background-color: #ececf1; */
::v-deep .el-button--text {
    background-color: #202123 !important;
    width: 150px
}

.el-button--text {
    /* position: relative;
    left: 20px; */
    background-color: #202123;
    border: solid;
}

.newprogram {
    position: relative;
    left: 20px
}

::v-deep .el-table__row>td {
    /* 去除表格线 */
    border: none;
}

.el-menu {
    border: 0 !important;

}

.content {
    /* display: inline-block; */
    width: 90%;
}
</style>
