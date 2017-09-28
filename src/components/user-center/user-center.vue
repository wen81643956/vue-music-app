<template>
  <transition name="slide">
    <div class="user-center">
      <div class="back" @click="back">
        <i class="icon-back"></i>
      </div>
      <div class="switches-wrapper">
        <switches @switch="switchItem" :switches="switches" :currentIndex="currentIndex"></switches>
      </div>
      <div class="play-btn" ref="playBtn" @click="random" v-show="!noResult">
        <i class="icon-play"></i>
        <span class="text">随机播放全部</span>
      </div>
      <div class="list-wrapper" ref="listWrapper">
        <scroll class="list-scroll" :data="favoriteList" v-if="currentIndex === 0" ref="favoriteList">
          <songs-list class="list-inner" :songs="favoriteList" @select="selectItem"></songs-list>
        </scroll>
        <scroll class="list-scroll" :data="playHistory" v-if="currentIndex === 1" ref="playHistory">
          <songs-list class="list-inner" :songs="playHistory" @select="selectItem"></songs-list>
        </scroll>
      </div>
      <div class="no-result-wrapper" v-show="noResult">
        <no-result :title="noResultDisc"></no-result>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import Switches from 'base/switches/switches'
  import Scroll from 'base/scroll/scroll'
  import SongsList from 'base/songs-list/songs-list'
  import NoResult from 'base/no-result/no-result'
  import { mapGetters, mapActions } from 'vuex'
  import Song from 'common/js/song'
  import { playListMixin } from 'common/js/mixin'

  export default {
    mixins: [playListMixin],
    data () {
      return {
        currentIndex: 0,
        switches: [
          {name: '我喜欢的'},
          {name: '最近听的'}
        ]
      }
    },
    computed: {
      noResult () {
        return (this.currentIndex === 0 && !this.favoriteList.length) || (this.currentIndex === 1 && !this.playHistory.length)
      },
      noResultDisc () {
        if (this.currentIndex === 0) {
          return '暂无收藏歌曲'
        } else {
          return '你还没有听过歌曲'
        }
      },
      ...mapGetters([
        'playHistory',
        'favoriteList'
      ])
    },
    components: {
      Switches,
      Scroll,
      SongsList,
      NoResult
    },
    methods: {
      handlePlayList (playList) {
        const bottom = playList.length > 0 ? '60px' : ''
        this.$refs.listWrapper.style.bottom = bottom
        !this.currentIndex && this.$refs.favoriteList.refresh()
        this.currentIndex && this.$refs.playHistory.refresh()
      },
      back () {
        this.$router.back()
      },
      switchItem (index) {
        this.currentIndex = index
      },
      selectItem (item) {
        this.insertSong(new Song(item))
      },
      random () {
        let list = this.currentIndex === 0 ? this.favoriteList : this.playHistory
        if (list.length === 0) {
          return
        }
        list = list.map((item) => {
          return new Song(item)
        })
        this.randomPlay({list})
      },
      ...mapActions([
        'insertSong',
        'randomPlay'
      ])
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .user-center
    position: fixed
    top: 0
    bottom: 0
    z-index: 100
    width: 100%
    background: $color-background
    &.slide-enter-active, &.slide-leave-active
      transition: all 0.3s
    &.slide-enter, &.slide-leave-to
      transform: translate3d(100%, 0, 0)
    .back
      position absolute
      top: 0
      left: 6px
      z-index: 50
      .icon-back
        display: block
        padding: 10px
        font-size: $font-size-large-x
        color: $color-theme
    .switches-wrapper
      margin: 10px 0 30px 0
    .play-btn
      box-sizing: border-box
      width: 135px
      padding: 7px 0
      margin: 0 auto
      text-align: center
      border: 1px solid  $color-text-l
      color: $color-text-l
      border-radius: 100px
      font-size: 0
      .icon-play
        display: inline-block
        vertical-align: middle
        margin-right: 6px
        font-size: $font-size-medium-x
      .text
        display: inline-block
        vertical-align: middle
        font-size: $font-size-small
    .list-wrapper
      position: absolute
      top: 110px
      bottom: 0
      width: 100%
      .list-scroll
        height: 100%
        overflow: hidden
        .list-inner
          padding: 20px 30px
    .no-result-wrapper
      position: absolute
      width: 100%
      top: 50%
      transform: translateY(-50%)
</style>
