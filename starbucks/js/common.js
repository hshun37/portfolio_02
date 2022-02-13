/* 헤더 검색창 파트 */
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});


/* FOOTER부분 자동 년도 생성 */
const thisYear = document.querySelector('.this-year');
// textContent 메소드는 그 요소가 가지고 있는 글자 내용들의 값들을 알아내거 나 값을 지정할 수 있다.
// 자바스크립드에서는 현재 날짜 정보를 가지고 있는 new Date();라는 객체를 가지고 있다.
thisYear.textContent = new Date().getFullYear(); 