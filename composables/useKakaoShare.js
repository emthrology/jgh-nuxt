export function useKakaoShare() {
  const initKakao = () => {
    if (process.client && !window.Kakao.isInitialized()) {
      window.Kakao.init(process.env.KAKAO_JAVASCRIPT_KEY);
    }
  };

  const shareKakao = (options) => {
    initKakao();
    if (process.client && window.Kakao) {
      window.Kakao.Link.sendDefault(options);
    }
  };

  return {
    shareKakao
  };
}
