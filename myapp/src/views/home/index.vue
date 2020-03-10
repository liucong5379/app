<template>
  <div class="box">
    <header class="header">
      <ul>
        <li>logo</li>
        <li>
          <span class="iconfont icon-qianggou"></span>
          请输入查找的产品
        </li>
        <li>消息</li>
      </ul>
    </header>
    <div class="content">
      <!-- <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in bannerList" :key="index">
        </van-swipe-item>
      </van-swipe> -->
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <van-card
            v-for="(item, index) in prolist"
            :key="index"
            :price="item.price"
            :desc="item.note"
            :title="item.proname"
            :thumb="item.proimg"
            @click="toDetail(item.proid)"
          />
        </van-list>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script>
import { getBannerList, getProlist } from '@/api/home'
export default {
  data () {
    return {
      bannerList: [],
      prolist: [],
      isLoading: false, // true表示现在正在下拉刷新状态中
      pageCode: 1,
      finished: false, // true表示没有更多数据
      loading: false
    }
  },
  mounted () {
    getBannerList({ url: '/pro/banner' }).then(res => {
      console.log(res)
      const arr = []
      res.data.data.map(item => {
        arr.push('http://daxun.kuboy.top' + item)
      })

      this.bannerList = arr
    })

    getProlist({ url: '/pro' }).then(res => {
      this.prolist = res.data.data
    })
  },
  methods: {
    onRefresh () {
      console.log('下拉刷新')
      this.isLoading = true

      getProlist({ url: '/pro' }).then(res => {
        this.isLoading = false
        this.prolist = res.data.data
        this.pageCode = 1
        this.finished = false // 表示可以继续上拉finished 显示没有数据
      })
    },

    onLoad () {
      console.log('下拉加载')
      this.loading = true
      getProlist({ url: 'pro', data: { pageCode: this.pageCode } }).then(res => {
        this.loading = false
        this.pageCode++
        if (res.data.code === '10000') {
          this.finished = true
        } else {
          this.prolist = [...this.prolist, ...res.data.data]
        }
      })
    },

    toDetail (proid) {
      this.$router.push('/detail/' + proid)
      // this.$router.push({ name: 'detail', params: { proid } })
      // this.$router.push({ path: '/detail/' + proid })
    }
  }
}
</script>

<style lang="scss">
.van-swipe {
  max-height: 180px;
  img {
    width: 100%;
  }
}
</style>
