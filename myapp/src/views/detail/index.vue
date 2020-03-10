<template>
  <div class="container detail">
    <div class="box">
      <header class="header">详情</header>
      <div class="content">
        <img :src="proimg" alt="">
        <h1>{{ proname }}</h1>
        <h6>{{ note }}</h6>
        <p>{{ price }}</p>
      </div>
    </div>

    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服"/>
      <van-goods-action-icon icon="cart-o" text="购物车" @click="toCart"/>
      <van-goods-action-button type="warning" text="加入购物车" @click="addCart"/>
      <van-goods-action-button type="danger" text="立即购买"/>
    </van-goods-action>
  </div>
</template>

<script>
import { getDetailData } from '@/api/detail'
import { addCart } from '@/api/cart'
import { mapState } from 'vuex'
import { Toast } from 'vant'
export default {
  data () {
    return {
      proname: '',
      proimg: '',
      proid: '',
      note: '',
      price: ''
    }
  },
  mounted () {
    // 获取home传过来的proid
    const { $route: { params: { proid } } } = this
    console.log(proid)
    getDetailData({
      url: '/pro/detail',
      data: {
        proid
      }
    }).then(res => {
      console.log(res)
      const { proname, proimg, price, note } = res.data.data

      this.proname = proname
      this.proimg = proimg
      this.price = price
      this.note = note
      this.proid = proid
    })
  },
  computed: {
    ...mapState({
      loginstate: state => state.login.loginstate
    })
  },
  methods: {
    addCart () {
      if (this.loginstate === 'ok') {
        addCart({
          url: '/cart/add',
          data: {
            userid: localStorage.getItem('userid'),
            proid: this.proid,
            num: 1
          }
        }).then(res => {
          if (res.data.code === '10119') {
            Toast('还未登陆')
            this.$router.push('/login')
          } else {
            Toast('加入购物车成功')
          }
        })
      } else {
        Toast('还未登陆')
        this.$router.push('/login')
      }
    },

    toCart () {
      if (this.loginstate === 'ok') {
        this.$router.push('/cart')
      } else {
        Toast('还未登陆')
        this.$router.push('/login')
      }
    }
  }
}
</script>

<style>

</style>
