<template>
  <div className="z-1000 flex flex-col w-full max-w-[500px] h-[120px] bg-white text-black justify-center items-center">
    <div class="flex justify-center gap-2 items-center">
      <Button class="w-[40px] h-[40px] flex justify-center items-center" round="2xl" variant="danger" @onclick="handleClick">
        <!-- <img src="/public/images/mark/Social_Media_facebook.png" alt=""> -->
        <SocialShare
          network="facebook"
          :label="false"
          class="text-white py-2 px-4 "
        />
      </Button>
      <Button class="w-[40px] h-[40px] flex justify-center items-center" round="2xl"  variant="danger" @onclick="shareKakao">
        <img src="/public/images/mark/Social_Media_kakao.png" alt="">
      </Button>
      <Button class="w-[40px] h-[40px] flex justify-center items-center" round="2xl"  variant="danger" @onclick="shareContent">
        <img src="/public/images/mark/share.png" alt="">
      </Button>
    </div>
    <div class="w-[150px] border border-b-1 my-4"></div>
    <div class="flex justify-center gap-2 items-center font-thin text-gray-400">
      Ⓒ 2025 전광훈목사
    </div>
  </div>

</template>

<script setup>
  const handleClick = (e) => {
    console.log(e,333)
  }

  const shareContent = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: '전광훈 - 광화문 국민의장',
          text: '광화문 집회 정보',
          url: window.location.href
        });
        console.log('공유 성공');
      } catch (error) {
        console.error('공유 실패:', error);
      }
    } else {
      alert('공유 기능이 지원되지 않는 브라우저입니다.');
    }
  };


  

  const nuxtApp = useNuxtApp()
  const config = useRuntimeConfig()
  const shareKakao = () => {
    if (!nuxtApp.isHydrating && window.Kakao) {
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init(config.public.kakaoJsKey);
      }

      window.Kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
          title: '전광훈 - 광화문 국민의장',
          description: '전광훈 - 광화문 국민의장 공유합니다.',
          imageUrl: '',
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
        buttons: [
          {
            title: '웹으로 보기',
            link: {
              mobileWebUrl: window.location.href,
              webUrl: window.location.href,
            },
          },
        ],
      });
    }
  };
</script>

<style lang="scss" scoped>

</style>