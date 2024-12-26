function tabsHandler(){
  const tabs = document.querySelectorAll('.tab')
  const tabContents = document.querySelectorAll('.tab__content')
  const tabsWrapper = document.querySelector('.tab__wrapper')
  
  let currentTab = 0

  function classListHandler() {
    
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', ()=> {
      clearInterval(intervalSetter)
      tabsWrapper.classList.add('animation')
      function animationRemover(params) {
        tabsWrapper.classList.remove('animation')
      }
      setTimeout(animationRemover,400)
      function changeTab(params) {
        
        // нужный код
        tabs.forEach(t => {
          t.classList.remove('active__tab')
        })
    
        tab.classList.add('active__tab')
        
        const target = tab.dataset.tab;
        // update currentTab
        currentTab = target - 1;
        tabContents.forEach(content => {
          content.classList.remove('active__content')
    
          document.querySelector(`.tab__content[data-content="${target}"]`).classList.add('active__content')
        })    
      }
      setTimeout(changeTab,200)
    
    })
  })

  // auto changing tabs functionality
  
  function autoChanger(params) {
    
    // обновляем каррент таб
    if (currentTab!=2) {
      currentTab += 1
    } else {
      currentTab = 0
    }
    // разбираемся с анимациями
    tabsWrapper.classList.add('animation')
    // чтобы анимация сработала гладко вызываем ченджер таймаут через 200мс после начала анимации
    function changerTimeout() {
      function animationRemover(params) {
        tabsWrapper.classList.remove('animation')
      }
      setTimeout(animationRemover,400)
  
      // убираем статус активен у всех табов
      tabs.forEach((tab)=>{
        tab.classList.remove('active__tab')
      })
      tabContents.forEach(content => {
        content.classList.remove('active__content')
      })
      tabs[currentTab].classList.add('active__tab')
      tabContents[currentTab].classList.add('active__content')
    }
    setTimeout(changerTimeout,200)
    
  }
// устанавливаем частоту смены табов
  const intervalSetter = setInterval(autoChanger, 6000)


// переключение слайдов по свайпу


  let touchstartX = 0
  let touchendX = 0

  function tabChanger() {
    clearInterval(intervalSetter)
    tabsWrapper.classList.add('animation')
    // чтобы анимация сработала гладко вызываем ченджер таймаут через 200мс после начала анимации
    function changerTimeout() {
      function animationRemover(params) {
        tabsWrapper.classList.remove('animation')
      }
      setTimeout(animationRemover,400)
  
      // убираем статус активен у всех табов
      tabs.forEach((tab)=>{
        tab.classList.remove('active__tab')
      })
      tabContents.forEach(content => {
        content.classList.remove('active__content')
      })
      tabs[currentTab].classList.add('active__tab')
      tabContents[currentTab].classList.add('active__content')
    }
    setTimeout(changerTimeout,200)

  }
      
  function checkDirection() {
    // луп слайдов и обновление каренттаба

    if (touchendX < touchstartX - 50) {
      if (currentTab!=2) {
        currentTab += 1
      } else {
        currentTab = 0
      }
      tabChanger()
    }
    if (touchendX > touchstartX + 50) {
      if (currentTab!=0) {
        currentTab -= 1
      } else {
        currentTab = 2
      }
      tabChanger()
    }
  }

  tabsWrapper.addEventListener('touchstart', e => {
    touchstartX = e.changedTouches[0].screenX
  })

  tabsWrapper.addEventListener('touchend', e => {
    touchendX = e.changedTouches[0].screenX
    checkDirection()
  })
  
}
tabsHandler()






