const country = document.querySelectorAll('.link-country')
const tabItem = document.querySelectorAll('.picture-text-block')
country.forEach((item) => {
  item.addEventListener("click", function(){
    
    let tabId = item.getAttribute("data-tab")
    let currentTab = document.querySelector(tabId)

    
    country.forEach((item, index)=>{
      item.classList.remove('active')
      tabItem[index].classList.remove('active')
    })
    item.classList.add('active')
    currentTab.classList.add('active')
  })
})

const advantages = document.querySelectorAll('.advantages')
const tabItemAdvantages = document.querySelectorAll('.image-advantages')
advantages.forEach(function(item){

  let tabIdAdvantages = item.getAttribute("data-tab")
  let currentTabIdAdvantages = document.querySelector(tabIdAdvantages)
  item.addEventListener('click', function(){
    advantages.forEach(function(item){
      item.classList.remove('active')
    })
    item.classList.add('active')

    tabItemAdvantages.forEach(function(item){
     item.classList.remove('active')
    })
    currentTabIdAdvantages.classList.add('active')
})
})

const linkFurniture = document.querySelectorAll('.text-link-furniture')
const ourWorkBlock = document.querySelectorAll('.our-work-block')
linkFurniture.forEach(function(item){
  item.addEventListener('click', function(){
   
    let tabIdWork=item.getAttribute("data-tab")
    let currentTabIdWork = document.querySelector(tabIdWork)

    linkFurniture.forEach(function(item){
      item.classList.remove('active')
    })
    item.classList.add('active')

    ourWorkBlock.forEach(function(item){
      item.classList.remove('active')
    })
    currentTabIdWork.classList.add('active')
  })
})
//  const arrowfoo = () => {
//   console.log('fsfsd')
//  }
//  arrowfoo()
let offset = 0 // смещение от левого края
let sliderLine = document.querySelector('.slider')
let progresSli = document.querySelector('.progress-sli')
sliderLine.style.left = 0 + 'px'
document.querySelector('.button-slider-right').addEventListener('click', function(){
  offset+=570
  if(offset>2280){
    offset=0
  }
  if(offset===0){
    progresSli.style.left = 0 + 'px'
  }
  if(offset===570){
    progresSli.style.left = 89 + 'px'
  }
  if(offset===1140){
    progresSli.style.left = 178 + 'px'
  }
  if(offset===1710){
    progresSli.style.left = 267 + 'px'
  }
  if(offset===2280){
    progresSli.style.left = 315 + 'px'
  }
  sliderLine.style.left = -offset + 'px'

})
document.querySelector('.button-slider-left').addEventListener('click', function(){
  offset-=570
  if(offset<0){
    offset=2280
  }
  if(offset===0){
    progresSli.style.left = 0 + 'px'
  }
  if(offset===570){
    progresSli.style.left = 89 + 'px'
  }
  if(offset===1140){
    progresSli.style.left = 178 + 'px'
  }
  if(offset===1710){
    progresSli.style.left = 267 + 'px'
  }
  if(offset===2280){
    progresSli.style.left = 315 + 'px'
  }
  sliderLine.style.left = -offset + 'px'
})

const lineSliderCertificates = document.querySelector(".sliders-certificates")
let progresSliderCertificates = document.querySelector('.progress-sli2')
let pixelChange=0
document.querySelector('.left-button-slider').addEventListener('click', function(){
  pixelChange -= 1150
  if(pixelChange<0){
    pixelChange=1150
  }
  if(pixelChange===0){
    progresSliderCertificates.style.left = 0+'px'
  }
  if(pixelChange===1150){
    progresSliderCertificates.style.left = 314+'px'
  }
  lineSliderCertificates.style.left = -pixelChange + 'px'
  console.log(pixelChange)
})
document.querySelector('.right-button-slider').addEventListener('click', function(){
  pixelChange += 1150
  if(pixelChange>1150){
    pixelChange=0
  }
  if(pixelChange===1150){
    progresSliderCertificates.style.left = 314+'px'
  }
  if(pixelChange===0){
    progresSliderCertificates.style.left = 0+'px'
  }
  lineSliderCertificates.style.left = -pixelChange + 'px'
  console.log(pixelChange)
})
