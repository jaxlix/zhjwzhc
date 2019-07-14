<template>
    <div id="search">
        <header class="head">
            <mt-button class="left-btn" icon="back" @click="$router.history.go(-1)">返回</mt-button>
            <input class="input" v-model="keyWord" @input="search" type="text" placeholder="搜索车牌/警号">
            <i id="search-icon" class="mint-toast-icon mintui mintui-search"></i>
        </header>
        <list :dataList="dataList"></list>
    </div>
</template>
<script>
import list from './list'

var times
export default {
    data(){
        return {
            dataList: [],
            keyWord: ''
        }
    },
    components: {
        list
    },
    methods: {
        search(){
            clearTimeout(times)
            let _this = this
            times = setTimeout(function(){
                _this.getList()
            },500)
        },
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

            let arr = []
            for(let i = 0; i < data.length; i++){
                let cp = data[i].cphm
                let jh = data[i].jh
                if(cp.indexOf(this.keyWord) != -1 || jh.indexOf(this.keyWord) != -1){
                    arr.push(data[i])
                }
            }
            this.dataList = arr
        }
    }
}
</script>

<style lang="less" scoped>
    #search{
        padding-top: 50px;
        .head{
            display: flex;
            position:fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 50px;
            background-color: #26a2ff;
            .left-btn{
                width: 50px;
                height: 50px;
                padding: 0;
                margin-left: 9px;
                border: 0;
                background-color: transparent;
                font-size: 1.4rem;
                color: #fff;
                box-shadow: none;
            }
            .input{
                flex: 1;
                margin: 8px 10px;
                border-radius: 15px;
                padding-left: 40px;
            }
            #search-icon{
                position: absolute;
                left: 80px;
                top: 16px;
                font-size: 20px;
            }
        }
    }
</style>

