
(function(){
  'use strict';

  AOS.init();

  const $aboutBtn=document.querySelectorAll('.aboutBtn');
  console.log($aboutBtn)
  const $viewList=document.querySelectorAll('.viewList_about');
  if($aboutBtn){
    $aboutBtn.forEach(item=>{
      item.addEventListener('click',(e)=>{
          $viewList.forEach(subitem=>{
            subitem.classList.toggle('view_none',subitem.dataset.view!==e.target.dataset.view);
          })
        })
    })
  } 
  // 상단 돋보기 _내려오는 검색창
  const searchIcon=document.querySelector('.search');
  const slideSearch=document.querySelector('.search_wrapper');
  searchIcon.addEventListener('click',()=>{
    slideSearch.classList.toggle('active_search');
  })
  //타이핑효과
  const $typingContent="도시의 문화적 수준을 보여주는 곳,";
  const $typingText=document.querySelector('.typing_effect');
  let indexText=0; //문자열 하나하나에 접근하기 위해 사용하는 숫자형 데이터 

  function typing(){
    $typingText.textContent+=$typingContent[indexText++];
    if(indexText>$typingContent.length){
      $typingText.textContent=""
      indexText=0;
    }
  }
  setInterval(typing,300); // 두개의 인자 (주기적으로 동작시키고 싶은 함수이름, 함수동작주기) 

  //스크롤 이벤트 (opacity)
  // let observer= new IntersectionObserver((e)=>{
  //   e.forEach((box)=>{
  //     if(box.isIntersecting){
  //       box.target.style.opacity=1;
  //     }else{
  //       box.target.style.opacity=0;
  //     }
  //   })
  // })
  // let $observeItem=document.querySelectorAll('.observeItem');
  // console.log($observeItem);
  // console.log($observeItem[0]);
  // observer.observe($observeItem[0])
  // observer.observe($observeItem[1])

  // 스와이퍼 텍스트
  
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    autoplay:true,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });
  

})();

