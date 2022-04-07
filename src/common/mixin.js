import {debounce} from "./utils";
import BackTop from 'components/content/backTop/BackTop';
import {BACKTOP_DISTANCE} from "common/const";

export const itemListenerMixin = {
  data() {
    return {
      itemImgListener: null
    }
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 100)
    this.itemImgListener = () => {refresh()}
    this.$bus.$on('itemImageLoad', this.itemImgListener )
    // console.log('混入');
  }
}

export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isShowBackTop: false
    }
  },
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 300)
    },
    listenShowBackTop(position) {
      this.isShowBackTop = -position.y > BACKTOP_DISTANCE
    }
  }
}
