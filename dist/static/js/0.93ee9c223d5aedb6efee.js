webpackJsonp([0],{200:function(t,i,e){function a(t){e(591)}var s=e(8)(e(565),e(603),a,"data-v-d71dcafe",null);t.exports=s.exports},551:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=e(54),s=e.n(a),n=e(63),l=e.n(n),r=e(187),o=e.n(r),c=e(122),d=e(186),g=e.n(d),p=e(45),f=e(81),u=e.i(c.a)("transform"),h=e.i(c.a)("backdrop-filter");i.default={mixins:[f.c],props:{bgImage:{type:String,default:""},songs:{type:Array,default:[]},title:{type:String,default:""},rank:{type:Boolean,default:!1}},data:function(){return{scrollY:0}},computed:{bgStyle:function(){return"background-image: url("+this.bgImage+")"}},mounted:function(){this.imageHeight=this.$refs.bgImage.clientHeight,this.minTranslateY=40-this.imageHeight,this.$refs.list.$el.style.top=this.$refs.bgImage.clientHeight+"px"},created:function(){this.probeType=3,this.listenScroll=!0},components:{Scroll:l.a,SongsList:o.a,Loading:g.a},methods:s()({handlePlayList:function(t){var i=t.length>0?"60px":"";this.$refs.list.$el.style.bottom=i,this.$refs.list.refresh()},random:function(){this.randomPlay({list:this.songs})},back:function(){this.$router.back()},scroll:function(t){this.scrollY=t.y},selectItem:function(t,i){this.selectPlay({list:this.songs,index:i})}},e.i(p.c)(["selectPlay","randomPlay"])),watch:{scrollY:function(t){var i=Math.max(this.minTranslateY,t),e=0,a=1,s=0;this.$refs.layer.style[u]="translate3d(0, "+i+"px, 0)";var n=Math.abs(t/this.imageHeight);t>0?(a=1+n,s=1-n,e=10):s=Math.min(20*n,20),this.$refs.filter.style[h]="blur("+s+"px)",t<this.minTranslateY?(e=10,this.$refs.bgImage.style.paddingTop=0,this.$refs.bgImage.style.height="40px",this.$refs.playBtn.style.display="none"):(this.$refs.bgImage.style.paddingTop="70%",this.$refs.bgImage.style.height=0,this.$refs.playBtn.style.display=""),this.$refs.bgImage.style.zIndex=e,this.$refs.bgImage.style[u]="scale("+a+")"}}}},552:function(t,i,e){i=t.exports=e(542)(!1),i.push([t.i,".music-list[data-v-2442a40a]{position:fixed;z-index:100;top:0;left:0;bottom:0;right:0;background:#222}.music-list .back[data-v-2442a40a]{position:absolute;top:0;left:6px;z-index:50}.music-list .back .icon-back[data-v-2442a40a]{display:block;padding:10px;font-size:22px;color:#ffcd32}.music-list .title[data-v-2442a40a]{position:absolute;top:0;left:10%;z-index:40;width:80%;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;text-align:center;line-height:40px;font-size:18px;color:#fff}.music-list .bg-image[data-v-2442a40a]{position:relative;width:100%;height:0;padding-top:70%;-webkit-transform-origin:top;transform-origin:top;background-size:cover}.music-list .bg-image .play-wrapper[data-v-2442a40a]{position:absolute;bottom:20px;z-index:50;width:100%}.music-list .bg-image .play-wrapper .play[data-v-2442a40a]{box-sizing:border-box;width:135px;padding:7px 0;margin:0 auto;text-align:center;border:1px solid #ffcd32;color:#ffcd32;border-radius:100px;font-size:0}.music-list .bg-image .play-wrapper .play .icon-play[data-v-2442a40a]{display:inline-block;vertical-align:middle;margin-right:6px;font-size:16px}.music-list .bg-image .play-wrapper .play .text[data-v-2442a40a]{display:inline-block;vertical-align:middle;font-size:12px}.music-list .bg-image .filter[data-v-2442a40a]{position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(7,17,27,.4)}.music-list .bg-layer[data-v-2442a40a]{position:relative;height:100%;background:#222}.music-list .list[data-v-2442a40a]{position:fixed;top:0;bottom:0;width:100%;background:#222}.music-list .list .song-list-wrapper[data-v-2442a40a]{padding:20px 30px}.music-list .list .loading-container[data-v-2442a40a]{position:absolute;width:100%;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}",""])},553:function(t,i,e){var a=e(552);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e(543)("1e8d1f1c",a,!0)},554:function(t,i,e){function a(t){e(553)}var s=e(8)(e(551),e(555),a,"data-v-2442a40a",null);t.exports=s.exports},555:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"music-list"},[e("div",{staticClass:"back",on:{click:t.back}},[e("i",{staticClass:"icon-back"})]),t._v(" "),e("h1",{staticClass:"title",domProps:{innerHTML:t._s(t.title)}}),t._v(" "),e("div",{ref:"bgImage",staticClass:"bg-image",style:t.bgStyle},[e("div",{staticClass:"play-wrapper"},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.songs.length,expression:"songs.length"}],ref:"playBtn",staticClass:"play",on:{click:t.random}},[e("i",{staticClass:"icon-play"}),t._v(" "),e("span",{staticClass:"text"},[t._v("随机播放全部")])])]),t._v(" "),e("div",{ref:"filter",staticClass:"filter"})]),t._v(" "),e("div",{ref:"layer",staticClass:"bg-layer"}),t._v(" "),e("scroll",{ref:"list",staticClass:"list",attrs:{"probe-type":t.probeType,"listen-scroll":t.listenScroll,data:t.songs},on:{scroll:t.scroll}},[e("div",{staticClass:"song-list-wrapper"},[e("songs-list",{attrs:{songs:t.songs,rank:t.rank},on:{select:t.selectItem}})],1),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.songs.length,expression:"!songs.length"}],staticClass:"loading-container"},[e("loading")],1)])],1)},staticRenderFns:[]}},558:function(t,i,e){"use strict";function a(){var t=l()({},o.b,{platform:"yqq",channel:"singer",page:"list",key:"all_all_all",pagesize:200,pagenum:1,g_tk:1664029744,hostUin:0,needNewCode:0});return e.i(r.a)("https://c.y.qq.com/v8/fcg-bin/v8.fcg",t,o.c)}function s(t){var i=l()({},o.b,{singermid:t,begin:0,num:100,songstatus:1,platform:"yqq",order:"listen",needNewCode:0,g_tk:1664029744});return e.i(r.a)("https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg",i,o.c)}i.b=a,i.a=s;var n=e(82),l=e.n(n),r=e(185),o=e(62)},565:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=e(54),s=e.n(a),n=e(45),l=e(558),r=e(62),o=e(123),c=e(554),d=e.n(c);i.default={data:function(){return{songs:[]}},components:{MusicList:d.a},computed:s()({title:function(){return this.singer.name},bgImage:function(){return this.singer.avator}},e.i(n.a)(["singer"])),created:function(){this._getDetail()},methods:{_getDetail:function(){var t=this;if(!this.singer.id)return void this.$router.push("/singer");e.i(l.a)(this.singer.id).then(function(i){i.code===r.a&&(t.songs=t._nromalizeSongs(i.data.list))})},_nromalizeSongs:function(t){var i=[];return t.forEach(function(t){var a=t.musicData;a.songid&&a.albumid&&i.push(e.i(o.b)(a))}),i}}}},581:function(t,i,e){i=t.exports=e(542)(!1),i.push([t.i,".slide-enter-active[data-v-d71dcafe],.slide-leave-active[data-v-d71dcafe]{transition:all .3s}.slide-enter[data-v-d71dcafe],.slide-leave-to[data-v-d71dcafe]{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}",""])},591:function(t,i,e){var a=e(581);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e(543)("34e4090f",a,!0)},603:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("transition",{attrs:{name:"slide"}},[e("music-list",{attrs:{songs:t.songs,title:t.title,"bg-image":t.bgImage}})],1)},staticRenderFns:[]}}});