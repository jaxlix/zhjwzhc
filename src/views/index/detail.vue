<template>
    <div id="detail">
        <header class="head">
            <mt-button class="left-btn" icon="back" @click="$router.history.go(-1)">返回</mt-button>
        </header>
        <pgisMap :data="data"></pgisMap>
    </div>
</template>
<script>
import pgisMap from '../../components/pgisMap'

export default {
    data(){
        return {
            data: [
                {x: 113.014324, y: 28.115632, 'cphm': '湘A23442', 'zdsyry': '张俊楠', 'sszz': '长沙公安局', 'sd': '60km/h', 'jd': '28', 'jh': '192238', 'sjhm': '13678902345', 'cjsj': '2019-07-13'},
                {x: 113.023206, y: 28.174104, 'cphm': '湘A53322', 'zdsyry': '李炯楷', 'sszz': '长沙公安局', 'sd': '30km/h', 'jd': '33', 'jh': '190984', 'sjhm': '13675343343', 'cjsj': '2019-07-14'},
                {x: 113.051206, y: 28.154104, 'cphm': '湘A98764', 'zdsyry': '王东升', 'sszz': '长沙公安局', 'sd': '43km/h', 'jd': '53', 'jh': '133445', 'sjhm': '17444343223', 'cjsj': '2019-07-10'},
                {x: 113.086206, y: 28.127104, 'cphm': '湘A64657', 'zdsyry': '孙峰', 'sszz': '长沙公安局', 'sd': '55km/h', 'jd': '42', 'jh': '164534', 'sjhm': '13664333245', 'cjsj': '2019-07-11'},
                {x: 113.013806, y: 28.194904, 'cphm': '湘A32333', 'zdsyry': '赵丹丹', 'sszz': '长沙公安局', 'sd': '65km/h', 'jd': '67', 'jh': '175655', 'sjhm': '13987636873', 'cjsj': '2019-07-03'}
            ]
        }
    },
    components: {
        pgisMap
    }
}
</script>
<style lang="less" scoped>
    #detail{
        width: 100%;
        height: 100%;
        .head{
            position: fixed;
            top: 0;
            left: 0;
            display: flex;
            width: 100%;
            height: 40px;
            line-height: 40px;
            background-color: rgba(38,162,255, .2);
            color: #fff;
            z-index: 9999;
            .left-btn{
                width: 50px;
                height: 40px;
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
                margin: 5px 10px;
                padding-left: 20px;
                border-radius: 15px;
                line-height: 30px;
            }
        }
    }
</style>

