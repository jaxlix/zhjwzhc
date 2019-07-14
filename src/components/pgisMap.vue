<template>
  <div id="pgis"></div>
</template>

<script>
// @ is an alias to /src
// import { loadModules } from 'esri-loader'
import * as esriLoader from "esri-loader"
import { Indicator } from 'mint-ui'
import img from '../assets/car.png'

export default {
  props: ['data'],
  methods: {
    mapInit() {
      Indicator.open('加载中...')
      var data = this.data
      const options = {
        url: "https://js.arcgis.com/3.15/"
      };
      esriLoader
        .loadModules(
          [
            "esri/basemaps",
            "esri/map",
            "esri/geometry/Point",
            "esri/SpatialReference",
            'esri/symbols/PictureMarkerSymbol',
            "esri/graphic",
            'esri/layers/GraphicsLayer',
            "esri/layers/ArcGISTiledMapServiceLayer",
            "dojo/domReady!"
          ],
          options
        )
        .then(([basemaps, Map, Point, SpatialReference, PictureMarkerSymbol, Graphic, GraphicsLayer, ArcGISTiledMapServiceLayer]) => {
          // 地图实例化
          var map = new Map("pgis", {
            basemap: "delorme",
            center: [data[0].x, data[0].y],
            // center: [114.309, 30.578],
            zoom: 12,
            maxZoom: 16,
            logo: false,
            slider: false
          })
          var _layer = new GraphicsLayer();
          var burl = "https://map.geoq.cn/arcgis/rest/services/ChinaOnlineStreetWarm/MapServer";
          var electronicmap = new ArcGISTiledMapServiceLayer(burl);
          map.addLayer(electronicmap);
          map.addLayer(_layer);
          //数据上图
          map.on("load", function () {
            for (let i = 0; i < data.length; i++) {
              let point = new Point(
                data[i].x,
                data[i].y,
                new SpatialReference({ wkid: 4326 })
              )
              let symbo = new PictureMarkerSymbol({
                url: img,
                type: "esriPMS"
              })
              symbo.width = 30;
              symbo.height = 30;
              let attr = data[i];
              let graphic = new Graphic(point, symbo, attr);
              _layer.add(graphic);
            }

            // 关闭loading
            Indicator.close()

            // 绑定点击事件
            _layer.on("click", function (evt) {
                var sinfoTemplate = new esri.InfoTemplate(evt.graphic.attributes.cphm,
                    '<div class="content_info">' +
                    '<span>车牌号:' + evt.graphic.attributes.cphm + '</span>' +
                    '</div>' +
                    '<div class="content_info">' +
                    '<span>速度:' + evt.graphic.attributes.sd + '</span>' +
                    '</div>' +
                    '<div class="content_info">' +
                    '<span>角度:' + evt.graphic.attributes.jd + '</span>' +
                    '</div>' +
                    '<div class="content_info">' +
                    '<span>终端使用人:' + evt.graphic.attributes.zdsyry + '</span>' +
                    '</div>' +
                    '<div class="content_info">' +
                    '<span>所属单位:' + evt.graphic.attributes.sszz + '</span>' +
                    '</div>' +
                    '<div class="content_info">' +
                    '<span>创建日期:' + evt.graphic.attributes.cjsj + '</span>' +
                    '</div>');
                evt.graphic.infoTemplate = sinfoTemplate;
            });
          })
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.mapInit()
  }
};
</script>
<style lang="less" scoped>
@import url("https://js.arcgis.com/3.15/esri/css/esri.css");
#pgis {
  width: 100%;
  height: 100%;
}
</style>

