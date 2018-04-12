<template>
  <div>
    <div class="middle w">
      <div class="middleLeft">
        <div class="search">
          <div class="title">
            <p>缤纷四季优惠搜不停</p>
            <p>从宽敞的大学教室到专业的会场场馆</p>
          </div>
          <form action="" class="content">
            <p class="name">场馆名称或地址：</p>
            <input type="text" class="nameInput" name="nameInput" placeholder="如：教室">
            <p class="startTime">预定日期</p>
            <input type="text" class="startTimeInput" name="startTimeInput">
            <p class="leaveTime">退定日期</p>
            <input type="text" class="leaveTimeInput" name="leaveTimeInput">
            <!-- 筛选预留 -->
            <input type="text" class="screen">
            <input type="text" class="screen">
            <input type="text" class="screen last">
            <input type="button" class="submit" value="搜索">
          </form>
        </div>

        <!-- 推广注册 -->
        <div class="register">
          <p class="text">注册、预定，为梦想买单</p>
          <p class="title">在Fuyuumi.com预定您的场馆</p>
          <a href="javascript:void(0);" class="more">了解更多</a>
        </div>

        <!-- 订阅推广 -->
        <div class="subscription" id="test">
          <svg class="svgImg" height="32" width="32" viewBox="0 0 57 57">
            <path fill="#FBB910" d="M28.5 57C12.8 57 0 44.2 0 28.5S12.8 0 28.5 0 57 12.8 57 28.5 44.2 57 28.5 57"></path>
            <g opacity=".7">
              <path clip-path="url(#svg-5764)" fill="#D0812E" d="M27.4 9.7L19.3 14s-5 3.2-5.2 3.5-2.7 2.6-2.7 3.1-2.2 2.3-1.9 2.6c.3.3-1.5 2.9-1.4 3.2.1.3.5 9.5.5 9.5-.1-1.7.8-3.9 1.5-5.4 2.2-5.1 7.4-7.5 11.8-10.4.8-.6 1.7-1.1 2.4-1.8-.3-.4-.4-.8-.4-.8 1.1-.8 1.8-.8 1.8-.8h.1c.7-.8 1.4-1.7 2-2.6.4-.6.7-1.3 1.1-2 .1-.3.6-2 .9-2.2l.7-.3h-3.1v.1z"></path>
            </g>
            <path fill="#203B74" d="M24.5 18.3c.1.2.3.4.5.6.2.3.6.4.9.4.7 0 1.3-.6 1.3-1.3 0-.7-.5-1.2-1.2-1.3-.1.2-.3.3-.4.5-.4.5-.7.8-1.1 1.1"></path>
            <path fill="#02214C" d="M24.1 17.6s.1.4.4.8c.4-.3.8-.7 1.1-1 .2-.2.3-.3.4-.5h-.1c0-.1-.7-.2-1.8.7"></path>
            <path fill="#003580" d="M30.8 7c-.4-.1-.8-.1-1.2-.1-6-.4-12.1 1.6-16.6 6.2-6.6 6.6-8 16.4-4.1 24.4-.1-.9-.1-1.8 0-2.7.2-2.2.5-4.6 1.2-6.7 1.1-3.7 3-6.9 6.3-8.9 3-1.9 6.4-3 9.2-5.1 1.4-1 3.6-2.4 4.5-4 0 0 0-.1.1-.2.1 1.3 0 2.3 0 2.8 0 1.3.1 2.5-.5 3.3-.6.8-.7 1.2-.2 3.1.5 1.8 1.5 3.1 3 5.4 1.4 2.3-1.7 2.8-2.6 3.2-1 .3-.5 1.5-.3 1.7s1.1.2.4 1.3c-.6 1-1.8 2-1.8 2 1.2 1.3.5 2.8-.7 2.6-1.2-.2-1.3.6-1.3.6.1 1.7-.2 2.6-.2 2.6-.8 2.5-5.5 1.2-6.4.8-1-.4-3.9-2.5-6.5-.1-1 .9-1.5 1.8-1.8 2.5 3.9 5.3 10.3 8.8 17.4 8.8h.2c.1-2 .2-3.9.3-5.1.4-3.9 3-15.4 3-15.4.2-.8.6-1.5 1.5-1.3.8.1 1 .8.9 1.9l-1.1 8.3v.3c-.2 1 .6 1 .6 1 .2-.1.5-.1.8-.1.7.1 1.3.8 1.3 1.5 0 .1.1.3.5.3.3-.1.6-.2.9-.1.8.1 1.3.8 1.3 1.5 0 0 .1.4.8.2.2 0 .4-.1.6 0 .8.2 1.4.9 1.2 1.8-.1.4-.2.7-.3 1.1 0 .1 0 .1-.1.2 5.6-3.9 9.3-10.4 9.3-17.7C50.2 17.3 41.7 8.1 30.8 7"></path>
            <path fill="#02214C" d="M29.7 9.1c.5 0 .9.1 1.3.1 8.3.9 15.2 6.2 18.5 13.5-2.3-8.5-9.6-14.9-18.6-15.8-.4-.1-.8-.1-1.2-.1-6-.4-12.1 1.6-16.6 6.2-2.7 2.7-4.5 6-5.5 9.4 1.1-2.4 2.6-4.7 4.6-6.7 4.8-4.9 11.2-7 17.5-6.6"></path>
          </svg>
          <p class="title">
            订阅即可查看隐藏优惠
          </p>
          <p class="text">
            订阅即可看到优惠价格
          </p>
          <i class="iconfont icon-jiantoushang" @click="iconJiantoushang()" v-show="jiantoushangShow"></i>
          <i class="iconfont icon-jiantouxia" @click="iconJiantouxia($event)" v-show="jiantouxiaShow"></i>
          <div class="email">
            <input type="email" name="" id="" class="emailInput" placeholder="输入电子邮箱地址">
            <button class="button">订阅电子报!</button>
          </div>
        </div>

        <!-- 好友推广 -->
        <div class="friend">
          <svg class="svgImg" height="60" width="67" viewBox="0 0 61 54">
            <g fill="none" fill-rule="evenodd" transform="translate(0 -1)">
              <path fill="#003580" fill-rule="nonzero" stroke="#07C" stroke-width=".5" d="M49.5341327,26.923172 C49.7500573,26.923172 50.7217182,27.517548 51.369492,27.8957873 C52.6650398,28.6522659 53.3667948,29.0305052 53.7986441,29.0305052 C53.8526252,29.0305052 53.9605875,29.0305052 54.0145687,28.9764711 C54.122531,28.9224369 54.2304933,28.8684027 54.2304933,28.7603343 C54.2844745,28.6522659 54.2844745,28.5441976 54.2304933,28.4361292 C53.6906818,27.1933429 53.3128137,25.8424882 53.3667948,25.4642489 C58.8188916,22.3302661 61.1940625,15.7921295 59.0887974,9.90240313 C56.7136265,3.20216398 49.3182081,-0.310058162 42.6245447,2.12148024 C37.6042972,3.9046084 34.2034843,8.76768521 34.095522,14.0090013 C32.3141439,12.5500783 30.2628599,11.3613262 28.0496325,10.6048476 C17.3073824,6.71438612 5.431528,12.3339415 1.54488475,23.0867447 C-1.90990926,32.6507958 2.03071515,43.1874622 10.8296436,48.1586074 C11.1535306,48.4828125 10.5057567,50.8603167 9.48011473,53.2378209 C9.42613357,53.3458893 9.42613357,53.4539577 9.48011473,53.562026 C9.53409588,53.6700944 9.58807704,53.7241286 9.69603935,53.7781628 C9.75002051,53.832197 9.85798282,53.832197 9.96594513,53.832197 C10.613719,53.832197 11.7473233,53.2378209 13.7986072,51.9950346 C14.8782304,51.3466244 16.497665,50.4280432 16.8755331,50.4280432 C26.9160282,52.4813423 37.0644856,46.8077527 40.5192796,37.1356333 C41.8148274,33.4613086 42.0847331,29.5708471 41.2750158,25.8424882 C43.8661113,27.0852745 46.7810937,27.517548 49.5341327,26.923172 Z M42.8944505,2.87795886 C49.1562646,0.608523012 56.0658526,3.9046084 58.3330612,10.1725741 C60.330364,15.7380953 58.0631554,21.8979926 52.9349456,24.7618045 C52.395134,25.0860096 52.5030963,26.1126592 53.1508702,27.8957873 C52.7190209,27.6796506 52.1252282,27.3554455 51.7473601,27.1393087 C50.5057935,26.3828301 49.9120008,26.058625 49.5341327,26.058625 C49.4801516,26.058625 49.4261704,26.058625 49.4261704,26.058625 C46.5651691,26.653001 43.5962055,26.1666933 41.0590912,24.7618045 C41.00511,24.4916336 40.8971477,24.2754968 40.8431666,24.0053259 C40.7891854,23.7891891 40.7352042,23.5730524 40.6812231,23.4109498 C40.5732608,23.1407789 40.4652985,22.8165738 40.3573361,22.5464028 C40.303355,22.3843003 40.1953927,22.1681635 40.1414115,22.006061 C40.0334492,21.6818558 39.8715057,21.4116849 39.7095623,21.0874798 C39.6555811,20.9253772 39.5476188,20.7632747 39.4936376,20.6011721 C39.277713,20.1688986 39.0617884,19.7906593 38.7918826,19.3583858 C38.7379015,19.3043516 38.6839203,19.2503174 38.6839203,19.1422491 C38.4679957,18.7640098 38.1980899,18.3857705 37.9281841,18.0075311 C37.8202218,17.8454286 37.7122595,17.683326 37.6042972,17.5752577 C37.3883725,17.3050867 37.2264291,17.08895 37.0105045,16.818779 C36.848561,16.6566765 36.7405987,16.4945739 36.5786552,16.3324714 C36.3627306,16.1163346 36.2007871,15.9001979 35.9848625,15.6840611 C35.822919,15.5219586 35.6609755,15.359856 35.4990321,15.1977534 C35.3370886,15.0356509 35.121164,14.8195141 34.9592205,14.6574116 C34.7432959,9.52416383 37.9821653,4.66108702 42.8944505,2.87795886 Z M39.7635434,36.8654623 C36.4167117,46.1593424 26.6461224,51.6167953 17.0374766,49.6175304 C16.497665,49.509462 15.5260042,50.0498039 13.366758,51.2925902 C12.4490783,51.8329321 11.2075117,52.5353765 10.4517755,52.8595816 C11.2614929,50.8603167 12.2331537,47.9965048 11.2075117,47.4561629 C2.78645134,42.6471203 -0.992229601,32.5427274 2.30062093,23.3569156 C5.21560338,15.2517876 12.8809276,10.1725741 21.0320822,10.1725741 C23.2453096,10.1725741 25.5125182,10.5508134 27.7257456,11.3613262 C30.1548976,12.2258732 32.3141439,13.5226936 34.2034843,15.1977534 C34.9592205,15.8461637 35.6609755,16.5486081 36.2547683,17.3050867 C37.8202218,19.1962833 39.0617884,21.3576507 39.8175246,23.6811208 C39.979468,24.2214626 40.0874304,24.6537361 40.1953927,25.1400438 C41.328997,29.0305052 41.1130723,33.0830693 39.7635434,36.8654623 Z"></path>
              <path fill="#FF6C6C" d="M6.51524768,12.9342561 C6.79249226,13.2114187 7.11594427,13.35 7.48560372,13.35 C7.85526316,13.35 8.2249226,13.2114187 8.45595975,12.9342561 L13.5849845,7.8067474 C14.4629257,6.92906574 14.925,5.77422145 14.925,4.57318339 C14.925,3.32595156 14.4629257,2.17110727 13.5849845,1.33961938 C12.7070433,0.461937716 11.5518576,0 10.3504644,0 C9.2876935,0 8.27113003,0.369550173 7.48560372,1.01626298 C6.65386997,0.369550173 5.6373065,0 4.5745356,0 C3.37314241,0 2.21795666,0.461937716 1.34001548,1.33961938 C0.462074303,2.21730104 0,3.37214533 0,4.57318339 C0,5.82041522 0.462074303,6.92906574 1.34001548,7.8067474 L6.51524768,12.9342561 Z" transform="translate(39.3 8.4)"></path>
              <g transform="translate(9 16.95)">
                <path fill="#003580" d="M15 9.05L23.3333333 9.05C23.7038921 9.05 24 9.33509693 24 9.64736851L24 11.4846749C24 11.7969465 23.7038921 12.05 23.3333333 12.05L15 12.05 15 9.05zM9 9.05L.666666667 9.05C.296107924 9.05 1.18423789e-15 9.33509693 1.18423789e-15 9.64736851L0 11.4846749C0 11.7969465.296107924 12.05.666666667 12.05L9 12.05 9 9.05z"></path>
                <path fill="#07C" d="M10,24.3114615 L10,9.84226499 C10,9.43764219 10.4192046,9.05 10.787863,9.05 L13.333147,9.05 C13.7018054,9.05 14,9.43764219 14,9.84226499 L14,24.3114615 C14,24.7160843 13.7018054,25.05 13.333147,25.05 L10.787863,25.05 C10.4192046,25.05 10,24.81724 10,24.3114615 Z"></path>
                <path fill="#003580" d="M9,13.05 L9,23.05 L2.66758246,23.05 C1.83637288,23.05 1,22.4722805 1,21.5941839 L1,13.05 L9,13.05 Z"></path>
                <path fill="#003580" d="M23,13.05 L23,23.05 L16.6675825,23.05 C15.8363729,23.05 15,22.4722805 15,21.5941839 L15,13.05 L23,13.05 Z" transform="matrix(-1 0 0 1 38 0)"></path>
                <path fill="#07C" d="M10 7.79758398C6.26747684 8.34112587 2.89270545 8.00066222-2.59237076e-14 6.83592958.279939237 6.60298306.553394096 6.38198012.833333333 6.14903359.833333333 5.83843822.833333333 5.36059537.833333333 5.05 2.41965568 5.90413727 5.9875376 7.64228629 10 7.79758398zM18.0854188 1.05484966C19.2571371 2.24337801 19.1210426 4.11400839 17.9493243 5.393962 16.777606 6.4910651 13.950687 6.51873864 12.2381757 6.70158915 12.5085722 5.05593451 12.3718628 2.16924872 13.5435811.980720364 14.8054315-.207807987 16.8235683-.133678694 18.0854188 1.05484966zM14.2998674 4.89471049C15.3814535 4.80328523 16.4630396 4.62043471 16.8235683 4.25473368 17.3643614 3.70618213 17.3643614 2.88335481 16.8235683 2.33480327 16.2827752 1.78625172 15.4715857 1.78625172 14.9307926 2.33480327 14.5702639 2.60907904 14.3899995 3.79760739 14.2998674 4.89471049zM6.6902027 2.28834752C5.67389475 3.19509865 5.67389475 4.88689593 6.6902027 5.88432218 7.30614692 6.48882294 8.88351178 6.8702142 11.4222973 7.02849594 11.3383494 4.47289775 10.9576062 2.89284827 10.2800676 2.28834752 9.26375961 1.29092127 7.70651066 1.29092127 6.6902027 2.28834752zM9.96427257 5.43661736C9.04035625 5.34594225 8.11643992 5.25526713 7.83926503 4.98324179 7.37730686 4.52986622 7.37730686 3.80446531 7.83926503 3.35108975 8.30122319 2.98838929 9.04035625 2.98838929 9.40992278 3.35108975 9.68709767 3.62311509 9.87188094 4.62054134 9.96427257 5.43661736zM14 7.7134453C17.3517906 8.43816783 20.3357562 7.9842163 23 6.43123945 22.74217 6.12064408 22.481968 5.82597349 22.2241379 5.51537812 22.2241379 5.10125096 22.3793103 4.46412716 22.3793103 4.05 20.9182734 5.18884969 17.6096207 7.50638172 14 7.7134453z"></path>
              </g>
            </g>
          </svg>
          <p class="text">
            推荐朋友使用Fuyuumi.com，你们都能赚取现金奖励！
          </p>
          <a href="javascript:void(0);" class="button">
            开始赚取奖励!
          </a>
        </div>
      </div>

      <div class="middleRight w">
        <!-- 推荐头部 -->
        <div class="favourable">
          <div class="svgImg">
            <div class="eb-icon-percentage">
              <svg class="bk-icon -iconset-percentage" height="20" width="20" viewBox="0 0 128 128">
                <path id="svg-8499" d="M45.1,107.1l-10.3-6.2l48-80l10.3,6.2L45.1,107.1z M56,42c0,14.4-10.7,26-24,26S8,56.4,8,42  c0-14.4,10.7-26,24-26S56,27.6,56,42z M43,42c0-6.9-4.9-12.6-11-12.6S21,35.1,21,42s4.9,12.6,11,12.6S43,48.9,43,42z M121,86  c0,14.4-10.7,26-24,26s-24-11.6-24-26c0-14.4,10.7-26,24-26S121,71.6,121,86z M108,86c0-6.9-4.9-12.6-11-12.6S86,79.1,86,86  s4.9,12.6,11,12.6S108,92.9,108,86z"></path>
              </svg>
            </div>
            <div class="eb-icon-label">
              <svg class="bk-icon -iconset-label" height="20" width="20" viewBox="0 0 128 128">
                <g id="svg-d119" data-name="8x">
                  <path id="svg-14ba2" d="M118.81,70.09,59.1,10.38A8.12,8.12,0,0,0,53.36,8H16.12A8.12,8.12,0,0,0,8,16.12V53.36a8.12,8.12,0,0,0,2.38,5.74l59.71,59.71a4.06,4.06,0,0,0,5.74,0l43-43A4.06,4.06,0,0,0,118.81,70.09ZM36,48A12,12,0,1,1,48,36,12,12,0,0,1,36,48Z"></path>
                </g>
              </svg>
            </div>
          </div>
          <span class="title">
            即日起，搜索校园季学生优惠，最低1.1折等你来享
          </span>
          <p class="time">
            <!-- 推荐预定: -->
            {{dateStr}}
          </p>
          <ul class="add">
            <li>
              <a href="">场馆</a>
            </li>
            <li>
              <a href="">场馆</a>
            </li>
            <li>
              <a href="">场馆</a>
            </li>
            <li>
              <a href="">场馆</a>
            </li>
            <li>
              <a href="">场馆</a>
            </li>
            <li>
              <a href="">场馆</a>
            </li>

          </ul>
        </div>
        <!-- 推荐 -->
        <div class="recommend" v-for="(item,index) in recommend" :key="index">
          <img class="img" :src=item.img alt="">
        </div>

      </div>

    </div>

    <div class="playground w clearfix">
      <div class="title">
        <p></p>
      </div>
      <div class="box" v-for="(item,index) in playgroundData" :key="index">
        <img :src=item.img alt="" class="img">
      </div>
    </div>

    <div class="classRoom w">
      <p class="title">不仅仅有场馆...还有更多教室与图书馆等你体验宁静的学习</p>
      <!-- Swiper -->
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item,index) in classRoomData" :key="index">
          <div class="class">
            <img class="img" :src="item.img" alt="">
            <p class="name">{{item.name}}</p>
            <p class="add">深圳</p>
            <span class="scroe"></span>
          </div>
        </swiper-slide>

      </swiper>

      <!-- Add Arrows -->
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      // 中左部订阅箭头初始化
      jiantouxiaShow: true,
      jiantoushangShow: false,
      // 日期数据初始化
      dateStr: '',
      // 教室数据初始化
      classRoomData: '',
      // 运动场数据初始化
      playgroundData: '',
      // 推荐场馆数据初始化
      recommend: '',
      // 轮播图初始化
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 30,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  methods: {
    // 点击箭头下
    iconJiantouxia(event) {
      // console.log(event.target)
      $(event.target)
        .parent()
        .animate({
          height: '105px'
        })
      this.jiantouxiaShow = false
      this.jiantoushangShow = true
    },
    // 点击箭头上
    iconJiantoushang() {
      $(event.target)
        .parent()
        .animate({
          height: '46px'
        })
      this.jiantouxiaShow = true
      this.jiantoushangShow = false
    },

    getData: function getData() {
      var dateStr = ''
      var date = new Date()
      var dateSeven = new Date(new Date() - -5 * 24 * 60 * 60 * 1000)
      var mon = date.getMonth() + 1
      var monSeven = dateSeven.getMonth() + 1
      var day = date.getDate()
      var daySeven = dateSeven.getDate()
      var week = this.weekNumToStr(date.getDay())
      var weekSeven = this.weekNumToStr(dateSeven.getDay())

      dateStr =
        mon +
        '月' +
        day +
        '日 星期' +
        week +
        ' 至 ' +
        monSeven +
        '月' +
        daySeven +
        '日 星期' +
        weekSeven +
        ' 推荐预定:'
      // $('.middleRight .time').text(dateStr)
      this.dateStr = dateStr
    },

    // weekNumToStr
    weekNumToStr: function weekNumToStr(week) {
      switch (week) {
        case 0:
          return '日'
          break
        case 1:
          return '一'
          break
        case 2:
          return '二'
          break
        case 3:
          return '三'
          break
        case 4:
          return '四'
          break
        case 5:
          return '五'
          break
        case 6:
          return '六'
          break
      }
    },
    //获取ClassRoom数据
    getClassRoomData: function getClassRoomData() {
      this.$http
        .post(
          'https://www.easy-mock.com/mock/5acf023200a2457ce2e50639/classRoomData'
        )
        .then(response => {
          this.classRoomData = response.data.data.classRoom
        })
    },

    //获取ClassRoom数据
    getplaygroundData: function getplaygroundData() {
      this.$http
        .post(
          'https://www.easy-mock.com/mock/5acf023200a2457ce2e50639/playgroundData'
        )
        .then(response => {
          this.playgroundData = response.data.data.playgroundData
          // console.log(this.playgroundData);
        })
    },

    //recommend
    getrecommend: function getrecommend() {
      this.$http
        .get(
          'https://www.easy-mock.com/mock/5acf023200a2457ce2e50639/recommend'
        )
        .then(response => {
          this.recommend = response.data.data.recommend
          console.log(this.recommend)
        })
    }
  },
  mounted() {
    this.getData(),
      this.getClassRoomData(),
      this.getplaygroundData(),
      this.getrecommend()
  }
}
</script>


<style lang="less">
.middle {
  position: relative;
  overflow: hidden;
  .middleLeft {
    float: left;
    overflow: hidden;
    .search {
      position: relative;
      margin-top: 10px;
      width: 539px;
      height: 318px;
      background-color: #ffd2a2;
      border-radius: 3px;
      .title {
        position: relative;
        top: 4px;
        left: 50%;
        transform: translateX(-50%);
        width: 531px;
        height: 71px;
        background-color: #febb02;
        p:nth-of-type(1) {
          position: absolute;
          top: 10px;
          left: 10px;
          color: #383838;
          font-size: 24px;
        }
        p:nth-of-type(2) {
          position: absolute;
          top: 40px;
          left: 10px;
          color: #383838;
          font-size: 14px;
        }
      }
      .content {
        padding-left: 16px;
        p {
          margin-bottom: 2px;
        }
        .name {
          margin-top: 14px;
        }
        .nameInput {
          width: 497px;
          height: 34px;
          border-radius: 3px;
          padding-left: 10px;
          color: #383838;
          font-size: 14px;
        }
        .startTime,
        .leaveTime {
          margin-top: 10px;
        }
        .startTimeInput,
        .leaveTimeInput {
          width: 245px;
          height: 32px;
          border-radius: 3px;
        }
        .leaveTime {
          position: absolute;
          top: 138px;
          left: 278px;
        }
        .leaveTimeInput {
          margin-left: 13px;
        }
        .screen {
          margin-top: 18px;
          margin-right: 12px;
          width: 158px;
          height: 33px;
          border-radius: 3px;
        }
        .submit {
          position: absolute;
          right: 16px;
          bottom: 14px;
          width: 96px;
          height: 42px;
          background-color: #07c;
          border-radius: 3px;
          color: #fff;
          font-size: 23px;
        }
      }
    }
    .register {
      box-sizing: border-box;
      margin-top: 12px;
      padding-left: 16px;
      width: 539px;
      height: 127px;
      border: 1px solid #ededed;
      border-radius: 3px;
      .text {
        margin-top: 18px;
        color: #383838;
        font-size: 13px;
      }
      .title {
        font-size: 16px;
        line-height: 24px;
        font-weight: bold;
        margin: 5px 0 15px;
      }
      .more {
        color: #fff;
        font-size: 14px;
        font-weight: bold;
        line-height: 20px;
        padding: 8px 35px;
        border-radius: 3px;
        background-color: #07c;
      }
    }
    .subscription {
      position: relative;
      padding-top: 16px;
      padding-left: 16px;
      margin-top: 15px;
      width: 523px;
      height: 46px;
      background-color: #fde29d;
      border-radius: 3px;
      overflow: hidden;
      .svgImg {
        float: left;
        margin-right: 10px;
      }
      .title {
        margin-top: -3px;
        font-size: 17px;
        font-weight: 200;
      }
      .text {
        font-size: 12px;
        font-weight: 200;
        padding-right: 40px;
      }
      .iconfont {
        position: absolute;
        top: 22px;
        right: 36px;
        color: #e2aa11;
        font-size: 22px;
        font-weight: bold;
      }
      .email {
        position: relative;
        margin-top: 12px;
        width: 500px;
        height: 40px;
        background-color: #fff;
        border: 2px solid #0077cc;
        border-radius: 4px;
        .emailInput {
          position: absolute;
          top: 50%;
          left: 10px;
          transform: translateY(-50%);
          width: 300px;
          height: 20px;
          color: #383838;
          font-size: 16px;
          line-height: 16px;
        }
        .button {
          position: absolute;
          top: 50%;
          right: 5px;
          transform: translateY(-50%);
          width: 35%;
          font-weight: 200;
          color: #fff;
          font-size: 14px;
          background: #537bb4;
          border: 1px solid #537bb4;
          padding: 7px;
          cursor: pointer;
          border-radius: 2px;
          -webkit-box-sizing: border-box;
          -moz-box-sizing: border-box;
          box-sizing: border-box;
        }
      }
    }
    .friend {
      position: relative;
      margin-top: 17px;
      width: 537px;
      height: 88px;
      border: 1px solid #ededed;
      border-radius: 3px;
      .svgImg {
        float: left;
        margin-top: 14px;
        margin-left: 15px;
      }
      .text {
        margin-top: 22px;
        margin-left: 92px;
        width: 240px;
        font-size: 16px;
        font-weight: bold;
        padding: 0 0.45em;
      }
      .button {
        position: absolute;
        top: 50%;
        right: 15px;
        transform: translateY(-50%);
        background: #07c;
        border-radius: 4px;
        border: 0;
        color: #fff;
        font-weight: bold;
        padding: 10px 45px;
        text-align: center;
      }
    }
  }
  .middleRight {
    float: right;
    width: 540px;
    margin-top: 10px;
    .favourable {
      position: relative;
      width: 537px;
      height: 154px;
      border: 1px solid #ededed;
      border-radius: 3px;
      .svgImg {
        float: left;
        margin-top: 20px;
        margin-left: 15px;
        .eb-icon-percentage {
          background: #cce1ff;
        }
        .eb-icon-label {
          background: #ff6c6c;
        }
        .eb-icon-percentage,
        .eb-icon-label {
          width: 37px;
          height: 37px;
          display: inline-block;
          text-align: center;
          border-radius: 50%;
          svg {
            fill: #fff;
            padding: 9px;
          }
        }
      }
      .title {
        display: inline-block;
        margin-top: 28px;
        margin-left: 7px;
        font-size: 14px;
        line-height: 20px;
        font-weight: 700;
      }
      .time {
        position: absolute;
        top: 70px;
        left: 15px;
        font-size: 12px;
        line-height: 18px;
        font-weight: 400;
      }
      .add {
        position: absolute;
        top: 96px;
        left: 15px;
        width: 100%;
        li {
          float: left;
          width: 30%;
          text-align: left;
          a {
            color: #07c;
            font-weight: bold;
            text-decoration: underline;
          }
        }
      }
    }
    .recommend {
      margin-top: 11px;
      width: 537px;
      height: 270px;
      border: 1px solid #ededed;
      border-radius: 3px;
      .img {
        width: 100%;
        height: 100%;
        border-radius: 3px;
      }
    }
  }
}

.playground {
  margin-top: 10px;
  .box {
    float: left;
    width: 358px;
    height: 270px;
    border: 1px solid #febb02;
    border-radius: 3px;
    margin-right: 10px;
    .img {
      width: 100%;
      height: 100%;
    }
  }
  .box:last-of-type {
    margin-right: 0;
  }
}

.classRoom {
  position: relative;
  margin-top: 10px;
  //height: 1000px; // background-color: paleturquoise;
  .title {
    margin: 0;
    padding: 16px 8px;
    font-size: 140%;
    font-weight: bold;
  }
  .class {
    width: 260px;
    height: 380px;
    border: 1px solid #ededed;
    border-radius: 3px;
    .img {
      display: block;
      width: 100%;
      height: 224px;
    }
    .name {
      margin-top: 20px;
      margin-left: 16px;
      font-size: 118%;
      font-weight: bold;
    }
    .add {
      margin-top: 40px;
      margin-left: 16px;
      color: #838383;
    }
  }
  .swiper-button-next,
  .swiper-button-prev {
    position: absolute;
    top: 50%;
    right: -40px;
    transform: translateY(-50%);
    z-index: 10;
  }

  .swiper-button-prev {
    left: -40px;
  }
}
</style>

 