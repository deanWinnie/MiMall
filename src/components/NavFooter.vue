<template>
<div class="footer">
    <div class="footer-logo">
        <img src="/imgs/logo-footer.png" alt="">
        <p>小米商店</p>
    </div>
    <div class="footer-link">
        <a href="https://www.jianshu.com/" target="_blank">简书</a><span>|</span>
        <a href="https://juejin.im/" target="_blank">掘金</a><span>|</span>
        <a href="https://www.csdn.net/" target="_blank">csdn</a><span>|</span>
        <a href="https://gallery.echartsjs.com/" target="_blank">ECharts</a>
    </div>
    <div class="copyRight">
        Copyright©2020 <div class="domain">deanwinnie.com</div> All Rights Reserved
    </div>
    <div class="copyRight">
        <a href="http://beian.miit.gov.cn">浙ICP备2020037814号-1</a>
    </div>
</div>
</template>

<script>
export default {
    name: 'nav-footer'

}
</script>

<style lang="scss">
@import'./../assets/scss/config.scss';

.footer {
    height: 234px;
    border-top: 4px solid $colorA;
    background: $colorB;
    color: #999999;
    text-align: center;
    font-size: 16px;

    .footer-logo {
        margin-top: 46px;
        text-align: center;

        img {
            width: 53px;
            height: 36px;
            margin-bottom: 13px;
        }
    }

    .footer-link {
        margin-top: 31px;
        margin-bottom: 10px;

        a {
            color: #999999;
        }

        span {
            margin: 0 10px;
        }
    }

    .copyRight {
        .domain {
            display: inline-block;
            color: $colorA;
        }

        a {
            color: #999999;
        }
    }
}
</style>
