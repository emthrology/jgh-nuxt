<template>
    <!-- <div class="z-1000 w-full max-w-[500px] h-[60px] fixed  bg-white text-black flex justify-between items-center px-4"> -->
    <div class="header-container">
      <div class="red-tape">
        <span class="catchphrase">Jesus Korea, Gospel Unification</span>
      </div>
      <div class="header">
        <button v-if="isMainRoute" @click="toggleLeftMenu" class="">
          <!-- 🌐 -->
          <img src="/images/world_2_light_1.png" alt="">
        </button>
        <button v-else @click="back">
          <img src="/images/chevron-left.png" alt="">
        </button>
        <nuxt-link to="/main" @click="closeMenu">
        <img src="/images/jgh.png" alt="Logo" />
        </nuxt-link>
        <!-- <button>오른쪽</button> -->
        <button @click="toggleRightMenu">
          <img src="/images/menubuton.png" alt="">
        </button>
      </div>


    </div>
    <!-- 언어 선택 메뉴 -->
    <transition name="fade">
      <div
        v-if="showLanguageMenu"
        class="language-menu"
        @click.self="toggleLeftMenu"
      >
        <ul>
          <li v-for="lang in languages" :key="lang.code" @click="changeLanguage(lang.code)">
            <span>{{ lang.flag }}</span> {{ t(lang.name) }}
          </li>
        </ul>
      </div>
    </transition>

    <transition name="fade">
      <div
        v-if="showLeftMenu"
        class="left-menu"
        @click.self="toggleRightMenu"
      >
        <img src="/images/jgh.png" alt="Logo" @click="closeMenu" />
        <img src="/images/close.png" alt="close" @click="closeMenu" class="absolute top-10 right-12"/>
        <ul class="flex flex-col mt-4 space-y-2">
          <li v-for="menu in menus" :key="menu.id">
            <NuxtLink
              :to="menu.path"
              @click.prevent="closeMenu"
              class="flex items-center rounded-md px-4 py-3 text-gray-700 hover:bg-gray-200 focus:bg-gray-200"
              :class="{ 'bg-gray-200 font-bold': $route.path === menu.path }"
            >
              <img :src="`/images/${menu.icon}.png`" class="mr-3"></img>
              {{ menu.title }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </transition>
</template>

<script setup>
import { ref } from 'vue'
const { t,locale } = useI18n()
const route = useRoute()
const router = useRouter()
const isMainRoute = computed(() => route.path === '/main')
// 언어 데이터
const languages = [
  { code: 'ko', name: 'Korean', flag: '🇰🇷' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'zh', name: 'Chinese', flag: '🇨🇳' },
  { code: 'fr', name: 'French', flag: '🇫🇷' },
  { code: 'de', name: 'German', flag: '🇩🇪' }
]
const menus = [
  { id: 1, title: "홈화면", path: "/main", icon: "side_main" },
  { id: 2, title: "일정", path: "/schedule", icon: "side_schedule" },
  { id: 3, title: "소개", path: "/introduction", icon: "side_intro" },
  { id: 4, title: "Q&A", path: "/qnas", icon: "side_qna" },
  { id: 5, title: "보도자료", path: "/press", icon: "side_press" },
];

// 상태 관리
const showLanguageMenu = ref(false)
const showLeftMenu = ref(false)

// 메뉴 토글 함수
const toggleLeftMenu = () => {
  showLanguageMenu.value = !showLanguageMenu.value
}

const toggleRightMenu = () => {
  showLeftMenu.value = !showLeftMenu.value
}
const closeMenu = () => {
  showLeftMenu.value = false;
};
// 언어 변경 함수 
const changeLanguage = (code) => {
  locale.value = code;
  console.log(`Language changed to: ${code}`)
  showLanguageMenu.value = false // 메뉴 닫기
}

const back = () => {
  router.back();
}
  
</script>

<style lang="css" scoped>
/* FontAwesome 아이콘 사용 */
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css");

/* 헤더 스타일 */
.header-container {
  z-index: 1000;
  position: fixed;
  display: flex;
  flex-direction: column;
  border-bottom: 0.1px solid black; 
}
.header-container .red-tape {
  height: 25px;
  background-color: #9C0B0E;
  display: flex;
  justify-content: center;
  padding: 1% 0;
}
.red-tape .catchphrase {
  color: white;
  font-size: 12px;
}
.header-container .header {

  width: 100vw;
  max-width: 500px;
  height: 60px;

  background-color: white;
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  padding: 0 1rem;
}

.language-button {
  background-color: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}

/* 언어 선택 메뉴 스타일 */
.language-menu {
  position: fixed;
  display: flex;
  top: 90px; /* 헤더 아래 */
  left: calc(50% - 245px); /* 가운데 정렬 */
  z-index: 900;

  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}
@media (max-width: 860px) {
  .language-menu {
    left: 10px;
  }
}

.language-menu ul {
  list-style-type: none;
  margin: 0;
  padding: 0.5rem;
}

.language-menu li {
  padding: 0.5rem;
  cursor: pointer;
}

.language-menu li:hover {
  background-color: #f0f0f0;
}

/* 좌측 선택 메뉴 스타일 */
.left-menu {
  position: fixed;
  top: 0px; /* 헤더 아래 */
  /* left: calc(50% - 245px);  */
  z-index: 1200;
  padding: 40px;
  width: 100%;
  min-height: 100vh;
  max-width: 480px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}
/* @media (max-width: 860px) {
  .left-menu {
    left: 10px;
  }
} */

.left-menu ul {
  list-style-type: none;
  margin: 0;
  padding: 0.5rem;
}

.left-menu li {
  padding: 0.5rem;
  cursor: pointer;
}

.left-menu li:hover {
  background-color: #f0f0f0;
}

/* 애니메이션 효과 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>