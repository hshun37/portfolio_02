/* CLOCK */
function setClock(){
  const dateInfo = new Date(); 
  const hour = modifyNumber(dateInfo.getHours());
  const min = modifyNumber(dateInfo.getMinutes());
  const sec = modifyNumber(dateInfo.getSeconds());
  const year = dateInfo.getFullYear();
  const month = dateInfo.getMonth()+1; //monthIndex를 반환해주기 때문에 1을 더해준다.
  const date = dateInfo.getDate();
  document.getElementById("time").innerHTML = hour + ":" + min  + ":" + sec;
  document.getElementById("date").innerHTML = year + "년 " + month + "월 " + date + "일";
}
function modifyNumber(time){
  if(parseInt(time)<10){
      return "0"+ time;
  }
  else
      return time;
}
window.onload = function(){
  setClock();
  setInterval(setClock,1000); //1초마다 setClock 함수 실행
}


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

// to-top 기능
const toTopEl = document.querySelector('#to-top');
toTopEl.addEventListener('click', function () {
  gsap.to(window, 1, { // window는 화면 자체라고 생각하면 된다.
    scrollTo: 0 // scrollTo를 사용하기 위해서 ScrollToPlugin CDN을 가져와서 사용
  });
})

const skill_one = document.querySelector('.skills .skill-0');
const skill_two = document.querySelector('.skills .skill-0');
const skill_three = document.querySelector('.skills .skill-0');
const skill_four = document.querySelector('.skills .skill-0');
const laEl = document.querySelector('.skills .language');
const frEl = document.querySelector('.skills .front-end');
const baEl = document.querySelector('.skills .back-end');
const veEl = document.querySelector('.skills .version-control');

function open_one() {
  if(laEl.style.display=='none'){
		laEl.style.display = 'block';
    frEl.style.display = 'none';
    baEl.style.display = 'none';
    veEl.style.display = 'none';
	}else{
		laEl.style.display = 'none';
	}
}
function open_two() {
  if(frEl.style.display=='none'){
		frEl.style.display = 'block';
    laEl.style.display = 'none';
    baEl.style.display = 'none';
    veEl.style.display = 'none';
	}else{
		frEl.style.display = 'none';
	}
}
function open_three() {
  if(baEl.style.display=='none'){
		baEl.style.display = 'block';
    laEl.style.display = 'none';
    frEl.style.display = 'none';
    veEl.style.display = 'none';
	}else{
		baEl.style.display = 'none';
	}
}
function open_four() {
  if(veEl.style.display=='none'){
		veEl.style.display = 'block';
    laEl.style.display = 'none';
    baEl.style.display = 'none';
    frEl.style.display = 'none';
	}else{
		veEl.style.display = 'none';
	}
}



/* 배지 보이기 숨기기 파트 */
const badgeEl = document.querySelector('header .badges');
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

const productEl = document.querySelector('header .product');
const aboutMeEl = document.querySelector('header .item-1');
const skillsEl = document.querySelector('header .item-2');
const projectEl = document.querySelector('header .item-3');
const learnEl = document.querySelector('.introduction .learn');

productEl.addEventListener('click', function () {
  gsap.to(window, 0.7, {
    scrollTo: 0
  });
})
aboutMeEl.addEventListener('click', function () {
  gsap.to(window, 0.7, { // window는 화면 자체라고 생각하면 된다.
    scrollTo: 900 // scrollTo를 사용하기 위해서 ScrollToPlugin CDN을 가져와서 사용
  });
})
learnEl.addEventListener('click', function () {
  gsap.to(window, 0.7, {
    scrollTo: 900
  });
})
skillsEl.addEventListener('click', function () {
  gsap.to(window, 0.7, {
    scrollTo: 1750
  });
})
projectEl.addEventListener('click', function () {
  gsap.to(window, 0.7, {
    scrollTo: 2830
  });
})