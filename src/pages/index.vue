<template>
    <div class="index">
        <div class="container">
            <div class="swiper-box">
                <swiper  :options="swiperOptions">
                    <swiper-slide v-for="(item,index) in slideList" :key="index">
                        <a :href="'/#/product'+item.id"><img :src="item.img"></a>
                    </swiper-slide>
                    <div class="swiper-pagination"  slot="pagination"></div>
                    <div class="swiper-button-prev" slot="button-prev"></div><!--左箭头。如果放置在swiper-container外面，需要自定义样式。-->
                    <div class="swiper-button-next" slot="button-next"></div><!--右箭头。如果放置在swiper-container外面，需要自定义样式。-->
                </swiper>
            </div>
            <div class="ads-box"></div>
            <div class="banner"></div>
            <div class="product-box"></div>
        </div>
        <service-bar></service-bar>
    </div>
</template>
<script>
import ServiceBar from './../components/ServiceBar'
import { Swiper, SwiperSlide} from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
    name:'index',
    components:{
        ServiceBar,
        Swiper,
        SwiperSlide
    },
    data(){
        return{
           swiperOptions:{
               autoplay:true,
               loop:true,
                effect : 'cube',
                cubeEffect: {
                    slideShadows: true,
                    shadow: true,
                    shadowOffset: 100,
                    shadowScale: 0.6
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable :true,
                },
           } ,
           slideList:[
               {
                   id:'42',
                   img:'/imgs/slider/slide-1.jpg'
               },
                {
                   id:'45',
                   img:'/imgs/slider/slide-2.jpg'
               },
                {
                   id:'46',
                   img:'/imgs/slider/slide-3.jpg'
               },
                {
                   id:'42',
                   img:'/imgs/slider/slide-4.jpg'
               },
                {
                   id:'42',
                   img:'/imgs/slider/slide-5.jpg'
               }
           ]
        }
    }
}
</script>
<style lang="scss">
    .index{
        .swiper-box{
            .swiper-container{
                height: 451px;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
</style>