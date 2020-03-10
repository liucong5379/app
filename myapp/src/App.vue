<template>
  <div class="container">
    <router-view></router-view>
    <router-view name="footer"></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
// 导入重置样式库的scss文件 其内部导入了别的scss文件
@import '@/lib/reset.scss';
// 查看lib/class.scss 文件 内含各个函数的使用
html, body, .container {
  @include rect(100%, 100%);
}

.container {
  @include flexbox(); // display: flex
  @include flex-direction(column);
  .box {
    @include flex(); // flex: 1
    @include rect(100%, auto);
    @include flexbox(); // display: flex
    @include flex-direction(column);
    @include overflow(auto); // 产生滚动条

    .header {
      @include rect(100%, .44rem);
      @include background-color(#f66);

      ul {
        @include rect(100%, 100%);
        @include flexbox();
        @include color(#fff);
        li {
          @include flexbox();
          &:nth-child(1), &:nth-child(3) {
            @include rect(.5rem, 100%);
            @include flex-direction(column);
            @include justify-content();
            @include align-items();
          }
          &:nth-child(2) {
            @include flex();
            @include flexbox();
            @include align-items();
            @include background-color(#fff);
            @include color(#F66);
            @include margin(8px);
            @include padding(5px 10px);
            @include border-radius(10px);
          }
        }
      }
    }

    .content {
      @include flex();
      @include rect(100%, auto);
      @include overflow(auto); // 产生滚动条
    }
  }
  .footer {
    @include rect(100%, .5rem);
    @include background-color(#efefef);
    ul {
      @include rect(100%, 100%);
      @include flexbox(); // display: flex

      li {
        @include flex();
        // 内部元素水平垂直居中
        @include flexbox();
        @include flex-direction(column);
        @include justify-content();
        @include align-items();

        span {
          @include font-size(0.24rem);
        }

        p {
          @include font-size(.12rem);
          @include margin(-3px 0 0 0);
        }
      }
    }
  }
}
</style>
