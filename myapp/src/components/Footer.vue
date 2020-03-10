<template>
  <div class="footer">
      <ul>
        <!-- router-link 默认渲染的是a 标签 使用tag标签生成需要的标签 -->
        <router-link to="/home" tag="li">
          <span class="iconfont icon-shouye"></span>
          <p>首页</p>
        </router-link>
        <router-link to="/kind" tag="li">
          <span class="iconfont icon-fenlei"></span>
          <p>分类</p>
        </router-link>
        <router-link to="/cart" tag="li">
          <span class="iconfont icon-icon22fuzhi"></span>
          <p>购物车</p>
        </router-link>
        <router-link to="/user" tag="li">
          <span class="iconfont icon-weibiaoti-"></span>
          <p>我的</p>
        </router-link>
      </ul>
    </div>
</template>

<style lang="scss">
@import '@/lib/reset.scss';
.footer {
  ul {
    li {
      // 设置高亮颜色
      &.router-link-exact-active.router-link-active {
        @include text-color(#f66)
      }
    }
  }
}
</style>
