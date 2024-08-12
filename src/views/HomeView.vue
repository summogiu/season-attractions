<template>
  <div class="frame">
    <div class="swiper swiper-frame" ref="swiper">
      <div class="swiper-wrapper swiper-box">
        <div class="swiper-slide swiper-content" v-for="item,i in data" :key="i">
          <img :src="item.imgUrl">
          <h4>{{ item.title1}}</h4>
          <h5>{{ item.season }}</h5>
        </div>
      </div>
    </div>
    <div class="swiper-btn-box">
      <div class="swiper-button-prev swiper-pre"><font-awesome-icon :icon="['fas', 'caret-up']" class="page-icon"/></div>
      <div class="swiper-button-next swiper-next"><font-awesome-icon :icon="['fas', 'caret-down']"  class="page-icon"/></div>
    </div>
    <div class="active-frame" v-for="item,i in data" :key="i">
      <transition name="fade">
        <div class="active-box" v-if="i === nowMainI">
          <img :src="item.imgUrl">
          <div class="text-background"></div>
          <div class="season-box"><h1>{{ item.season }}</h1></div>
          <div class="title-box-1"><h2>{{ item.title1 }}</h2></div>
          <div class="title-box-2"><h2>{{ item.title2 }}</h2></div>
          <div class="title-tcTitle-box"><h3>{{ item.tcTitle }}</h3></div>
          <div class="introduce-box"><p>{{ item.introduce }}</p></div>
          <div class="place-box"><font-awesome-icon :icon="['fas', 'location-dot']" class="place-icon"/><p>{{ item.place }}</p></div>
        </div>
      </transition>
    </div>
  </div>
</template>

<style lang="scss">
@import 'swiper/css';
@import 'swiper/css/navigation';
@import 'swiper/css/autoplay';

$subColor: rgb(255, 196, 0);

// swiper
.swiper-frame{
  height: 360px;
  width: 100%;
  position: fixed;
  z-index: 50;
  bottom: 0;
  left: 20px;

  .swiper-box{
    height: 100px;
    width: 150px;

    .swiper-content{
      position: relative;
      height: 100px;
      width: 150px;

      img{
        height: 100px;
        width: 150px;
        border-radius: 10px;
        object-fit: cover;
        box-shadow: 1px 5px 10px black;
      }
      h4{
        position: absolute;
        left: 10px;
        bottom: 30px;
        color: white;
        font-size: 20px;
        font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        line-height: 1;
        text-transform: uppercase;
      }
      h5{
        position: absolute;
        left: 10px;
        bottom: 75px;
        color: white;
        font-size: 30px;
        font-weight: bold;
      }
      &::before{
        position: absolute;
        top: 40px;
        left: 10px;
        content: '';
        width: 30px;
        height: 3px;
        background: white;
        border-radius: 10px;
      }
    }
  }
}
.swiper-btn-box{
  position: absolute;
  z-index: 20;
  bottom: 380px;
  left: 10px;
  display: flex;

  .swiper-pre, .swiper-next{
    &::after{
      display: none;
    }

    position: relative;
    border-radius: 50%;
    border: 1px solid white;
    opacity: 0.8;
    width: 50px;
    height: 50px;
    margin-right: 30px;

    .page-icon{
      width: 24px;
      height: 24px;
      color: white;
    }
  }
}

// 主圖
.active-frame{
  position: fixed;
  z-index: 1;

  .active-box{
    position: relative;

    img{
      width: 100vw;
      height: 100vh;
      object-fit: cover;
    }
    .text-background{
      position: absolute;
      top:0;
      right: 0;
      z-index: 10;
      width: 50vw;
      height: 100vh;
      background: linear-gradient(to left, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0));
    }
    .season-box{
      position: absolute;
      z-index: 20;
      right: 100px;
      top: 100px;
      height: 350px;
      overflow: hidden;

      h1{
        color: white;
        opacity: 0.8;
        font-size: 300px;
        font-weight: bold;
        animation: slideUp .5s ease-out forwards;
      }
    }
    .title-box-1, .title-box-2{
      position: absolute;
      z-index: 20;
      right: 100px;
      top: 450px;
      height: 100px;
      overflow: hidden;

      h2{
        color: white;
        font-size: 80px;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        text-transform: uppercase;
        animation: slideUp .5s ease-out forwards;
      }
    }
    .title-box-2{
      top: 520px;
    }
    .title-tcTitle-box{
      position: absolute;
      z-index: 20;
      right: 100px;
      top: 620px;
      height: 50px;
      overflow: hidden;

      h3{
        color: white;
        font-size: 40px;
        animation: slideUp .5s ease-out forwards;
      }
    }
    .introduce-box{
      position: absolute;
      z-index: 20;
      right: 100px;
      top: 680px;
      width: 600px;
      height: 120px;
      overflow: hidden;

      p{
        color: white;
        text-indent: 4ch;
        animation: slideUp .5s ease-out forwards;
      }
    }
    .place-box{
      position: absolute;
      z-index: 20;
      right: 100px;
      top: 850px;
      height: 30px;
      overflow: hidden;
      display: flex;
      align-items: flex-end;

      .place-icon{
        color: $subColor;
        font-size: 30px;
        margin-right: 10px;
        animation: slideUp .5s ease-out forwards;
      }
      p{
        color: white;
        font-size: 18px;
        animation: slideUp .5s ease-out forwards;
      }
    }
    &::before{
      content: '';
      position: absolute;
      z-index: 20;
      top: 0;
      left: 0;
      width: 100%;
      height: 10px;
      background: $subColor;
      animation: TimingStrip 5s forwards;
    }
  }
}

// 文字進場動畫
@keyframes slideUp {
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 0.8;
  }
}
// 計時條動畫
@keyframes TimingStrip {
  0% {
    width: 0;
  }
  50% {
    width: 100%;
    transform: translateX(0);
  }
  100% {
    transform: translateX(100%);
  }
}

// 主圖切換動畫(淡出淡入)
.fade-enter-from, .fade-leave-to{
  opacity: 0;
}
.fade-enter-active, .fade-leave-active{
  transition: all .5s;
}
.fade-enter-to, .fade-leave-from{
  opacity: 1;
}
</style>

<script>
import { ref, onMounted, watch } from 'vue'
import Swiper from 'swiper'
import { Navigation, Autoplay } from 'swiper/modules'

// import { gsap } from 'gsap'

export default {
  name: 'HomeView',
  setup () {
    const data = ref([
      {
        season: '春',
        title1: 'Springtime Blossoms',
        title2: 'at Mount Fuji',
        tcTitle: '春日富士山的花海盛景',
        subtitle: "Witness Nature's Blooming Symphony 欣賞自然的綻放交響曲",
        place: '日本 山梨縣',
        introduce: '富士山的春天是一年四季中最迷人的時刻，當櫻花樹沿著山腳綻放，整個地區被粉紅色的花朵覆蓋，形成壯觀的自然畫卷。遊客可以在此時攀登山峰或漫步於湖畔，感受清新的空氣和美麗的花海。這是一個絕佳的機會來捕捉自然界的瞬間之美，並沉浸在日本傳統文化與自然風光的完美結合之中。春日的富士山不僅是攝影愛好者的天堂，也是尋求內心平靜的旅客的理想選擇。',
        imgUrl: require('@/assets/images/spring.jpg')
      },
      {
        season: '夏',
        title1: 'Summer Adventures',
        title2: 'in the Grand Canyon',
        tcTitle: '夏季大峽谷的冒險之旅',
        subtitle: 'Explore the Depths of Natural Wonder 探索自然奇觀的深度',
        place: '美國 亞利桑那州',
        introduce: '夏天的大峽谷充滿了壯麗與挑戰。無論是徒步遠足、騎馬穿越，還是乘坐直升機俯瞰這片壯觀的峽谷，每一刻都讓人屏息。炎熱的氣候下，大峽谷的紅色岩層在陽光的映照下閃爍著奇異的光芒，展示出大自然的無盡力量。來到這裡，你不僅能感受到大自然的壯麗，更能挑戰自我，尋找到一種與自然深度連結的獨特體驗。這是一個你必須親身體驗的目的地，無論是大自然愛好者還是冒險家，都會被其深深吸引。',
        imgUrl: require('@/assets/images/summer.jpg')
      },
      {
        season: '秋',
        title1: 'Autumn Tranquility',
        title2: 'in Canada’s Algonquin Park',
        tcTitle: '秋日阿岡昆公園的寧靜時光',
        subtitle: 'Embrace the Beauty of Changing Leaves 擁抱楓葉變換的美麗',
        place: '加拿大 安大略省',
        introduce: '阿岡昆公園的秋天是大自然的絕美畫作。當楓葉變成金黃、橙紅色時，整個公園彷彿被染成了一片秋色的海洋。這裡是徒步旅行、划獨木舟和野外露營的理想之地，無論你是想要深入森林探索，還是尋找一個安靜的湖邊放鬆身心，都能在這片廣袤的自然保護區找到心靈的慰藉。每年秋季，阿岡昆吸引了無數喜愛大自然的遊客，他們來這裡享受寧靜的時光，感受與大自然的深度連結，這裡的美景將為你帶來無盡的秋日回憶。',
        imgUrl: require('@/assets/images/autumn.jpg')
      },
      {
        season: '冬',
        title1: 'Winter Wonderland',
        title2: "at Switzerland's Zermatt",
        tcTitle: '冬日策馬特的童話仙境',
        subtitle: 'Ski Down Majestic Alpine Slopes 滑雪於壯麗的阿爾卑斯',
        place: '瑞士 策馬特',
        introduce: '冬季的策馬特彷彿童話般的仙境，尤其是當白雪覆蓋整個村莊時。馬特洪峰的壯麗景色與阿爾卑斯山的純淨雪景相映成趣，為滑雪愛好者提供了無數絕佳的滑雪道。無論你是初學者還是專業滑雪者，這裡都有適合你的雪道和無與倫比的景色。策馬特的冬天不僅是滑雪的天堂，還有機會在溫暖的木屋中享受瑞士巧克力和熱飲，度過一個完美的冬日假期。這裡的每一刻都將成為你難忘的冬季記憶。',
        imgUrl: require('@/assets/images/winter.jpg')
      }
    ])

    const nowMainI = ref(0)

    // swiper
    Swiper.use([Navigation, Autoplay])
    const swiper = ref(null)
    let mainSwiper = null

    onMounted(() => {
      if (swiper.value) {
        mainSwiper = new Swiper(swiper.value, {
          slidesPerView: 3,
          initialSlide: 1,
          direction: 'vertical',
          loop: true,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          autoplay: {
            delay: 5000
          }
        })
      }
      // 取出當前active的前一滑快
      mainSwiper.on('slideChange', () => {
        nowMainI.value = mainSwiper.realIndex === 0 ? data.value.length - 1 : mainSwiper.realIndex - 1
      })
      // 切換當前主題
      watch(nowMainI, () => {
        // changeMainAni()
      })
    })

    return {
      data,
      nowMainI,
      swiper,
      mainSwiper
    }
  }
}
</script>
