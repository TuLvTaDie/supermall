<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else> <slot  name="item-icon-active"></slot></div>
    <!-- 用计算属性动态绑定样式，动态决定文字颜色 -->
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      path: String,
      activeColor: {
        type: String,
        default: 'red'//默认给color赋值红色，在activeColor中改
      }
    },
    data() {
      return {
        // isActive: true,
      }
    },
    computed: {
      isActive() {
        // 用indexOf(查找指定字符串第一次出现的位置，没找到匹配的字符串则返回 -1,找到了则返回0)函数判断当前活跃的路由的path(this.$route.path)中是否有点击的路由的path(this.path)，然后判断返回的结果是否 不等于-1，是则返回'false',否则返回'true'
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle() {
        // 判断路由是否处于活跃，如果this.isActive为true则给color赋值，否则color值为空
        return this.isActive ? {color: this.activeColor} : {}
      }
    },
    methods: {
      itemClick() {
        this.$router.replace(this.path)
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;

  }

  .tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 4px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
</style>
