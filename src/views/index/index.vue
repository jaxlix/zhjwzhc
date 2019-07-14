<template>
    <div id="index">
        <header class="head">
            <input class="input" @click="toSearch" type="text">
            <i id="icon-search" @click="toSearch" class="mint-toast-icon mintui mintui-search">&nbsp;&nbsp;搜索</i>
        </header>
        <list :dataList="dataList"></list>
    </div>
</template>
<script>
import list from './list'

export default {
    data(){
        return {
            dataList: []
        }
    },
    components: {
        list
    },
    methods: {
        getList(){
            // let data = {
            //     classes: this.classes,
            //     keyWord: this.keyWord,
            //     dataNumber: this.dataNumber
            // }
            // this.$post(this.$api.findBooksOfPage, data)
            // .then( res => {
            //     if(res.code === 1){
            //         this.dataList = res.content
            //     }
            // })
            let data = [
                {'cphm': '湘A23442', 'xm': '张俊楠', 'dwmc': '长沙公安局', 'dwdm': 'dsadas', 'zzbm': 'gvgbg', 'jh': '192238', 'sjhm': '13678902345', 'xzsj': '2019-07-13'},
                {'cphm': '湘A53322', 'xm': '李炯楷', 'dwmc': '长沙公安局', 'dwdm': 'dsadas', 'zzbm': 'gvgbg', 'jh': '190984', 'sjhm': '13675343343', 'xzsj': '2019-07-14'},
                {'cphm': '湘A98764', 'xm': '王东升', 'dwmc': '长沙公安局', 'dwdm': 'dsadas', 'zzbm': 'gvgbg', 'jh': '133445', 'sjhm': '17444343223', 'xzsj': '2019-07-10'},
                {'cphm': '湘A64657', 'xm': '孙峰', 'dwmc': '长沙公安局', 'dwdm': 'dsadas', 'zzbm': 'gvgbg', 'jh': '164534', 'sjhm': '13664333245', 'xzsj': '2019-07-11'},
                {'cphm': '湘A32333', 'xm': '赵丹丹', 'dwmc': '长沙公安局', 'dwdm': 'dsadas', 'zzbm': 'gvgbg', 'jh': '175655', 'sjhm': '13987636873', 'xzsj': '2019-07-03'}
            ]
            this.dataList = data
        },
        toSearch(){
            this.$router.history.push('/search')
        }
    },
    mounted(){
        this.getList()
    }
}
</script>
<style lang="less" scoped>
    #index{
        padding-top: 50px;
        .head{
            position: fixed;
            top: 0;
            left: 0;
            display: flex;
            width: 100%;
            height: 50px;
            line-height: 50px;
            background-color: #26a2ff;
            color: #fff;
            .input{
                flex: 1;
                margin: 8px 10px;
                padding-left: 40px;
                border-radius: 15px;
                line-height: 30px;
            }
            #icon-search{
                position: absolute;
                left: 45%;
                top: 0;
                color: #999;
                font-size: 16px;
            }
        }
    }
</style>


