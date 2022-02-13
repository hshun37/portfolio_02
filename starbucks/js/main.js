/* 배지 보이기 숨기기 파트 */
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');
// window: 화면, 창이라고 생각하면 됨
// _.throttle(함수, ms단위 시간/함수실행시간) : 사용자가 화면을 스크롤할때 어떤 함수를 실행하는데 그 함수를 적게 실행하기 위해서 사용
window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY); // 스크롤 Y상의 위치를 알려주는 메소드
  if (window.scrollY > 500) {
    //배지 숨기기
    // gsap.to(요소, s단위 시간/지속시간, 옵션/css값들을 넣을 수 있다.);
    gsap.to(badgeEl, 0.6, {
      opacity: 0,
      display: 'none'
    });
    // 버튼 보이기!(to-top)
    gsap.to(toTopEl, 0.2, {
      x: 0
    });
  } else {
    //배지 보이기
    gsap.to(badgeEl, 0.6, {
      opacity: 1,
      display: 'block'
    });
    // 버튼 숨기기!(to-top)
    gsap.to(toTopEl, 0.2, {
      x: 100
    });
  }
}, 300));

// to-top 기능
toTopEl.addEventListener('click', function () {
  gsap.to(window, 0.7, { // window는 화면 자체라고 생각하면 된다.
    scrollTo: 0 // scrollTo를 사용하기 위해서 ScrollToPlugin CDN을 가져와서 사용
  });
})

/* VISUAL 단계별로 나오게 하는 파트 */
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  // gsap.to(요소, s단위 시간/지속시간, 옵션/css값들을 넣을 수 있다.);
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7,  // 0.7, 1.4, 2.1 2.7
    opacity: 1
  });
});

/* SWIPER */
// 프로모션 부분과 토글 부분에서  SWIPER 라이브러리 사용
//new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper', {
  direction: 'vertical', //수직
  autoplay: true,
  loop: true
});

new Swiper('.promotion .swiper', {
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  autoplay: {
    delay: 5000
  },
  loop: true,
  pagination: {
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    // 숨김 처리!
    promotionEl.classList.add('hide');
  } else {
    // 보임 처리!
    promotionEl.classList.remove('hide');
  }
})

// AWARDS SWIPER사용
new Swiper('.awards .swiper', {
  // direction: 'horizontal' 이미 기본값으로 명시되어 있음
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5, // 하나의 화면에 몇개의 슬라이드가 보이게 할것이냐.
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
} 

function floatingObject(selector, delay, size) {
  // gsap.to(요소, 지속시간, 옵션);
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1, // 무한반복
    yoyo: true, // 내려온 것을 다시 올리게끔 만드는 것
    ease: Power1.easeInOuteaseInOut, // https://greensock.com/docs/v2/Easing 사이트 참조
    delay: random(0, delay)
  });
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', 0.5, 15);
floatingObject('.floating3', 1.5, 20);


/* SCROLL MAGIC */
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
      triggerHook: 0.8 // 뷰포트가 시작하는 가장 윗부분은 0, 가장 아랫부분은 1이다. 고로 중간 부분은 0.5이다. 0.8은 0과 1사이의 뷰포트 지정에 트리거훅이 걸려있다. 보여짐 감시에 대한 트리거가 걸려있게 된다.
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});