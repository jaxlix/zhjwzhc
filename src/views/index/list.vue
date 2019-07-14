<template>
  <div id="list">
    <div class="item" v-for="(item, index) in dataList" :key="index">
      <router-link to="/detail">
        <div class="title">
          <img src="../../assets/car.png" alt />
          <div class="msg">
            <p>
              {{item.cphm}}
              <span>{{item.xm}}</span>
            </p>
            <p>
              {{item.xzsj}}
              <span>{{item.sjhm}}</span>
            </p>
          </div>
        </div>
        <div class="line">
          <p>
            <span>单位名称</span>
            <span>{{item.dwmc}}</span>
          </p>
          <p>
            <span>单位代码</span>
            <span>{{item.dwdm}}</span>
          </p>
          <p>
            <span>组织编码</span>
            <span>{{item.zzbm}}</span>
          </p>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
    props: ['dataList']
}
</script>
<style lang="less" scoped>
#list {
  padding: 10px;
  .item {
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 8px;
    box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.3);
    .title {
      display: flex;
      padding-bottom: 5px;
      border-bottom: 1px solid #f5f5f5;
      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
      .msg {
        flex: 1;
        margin-left: 10px;
        p {
          height: 22px;
          line-height: 22px;
          span {
            float: right;
          }
        }
      }
    }
    .line {
      display: flex;
      margin-top: 10px;
      p {
        flex: 1;
        display: flex;
        flex-direction: column;
        text-align: center;
        span:first-child {
          flex: 1;
          color: #aaa;
        }
        span:last-child {
          flex: 1;
        }
      }
    }
  }
}
</style>


