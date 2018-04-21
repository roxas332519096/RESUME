setTimeout(function(){
    stieWelcome.classList.remove('active')    
},1000)

window.onscroll = function(xxx){
    if(window.scrollY > 0){
        topNavBar.classList.add('sticky')
    }else{
        topNavBar.classList.remove('sticky')
    }
}

let liTags = document.querySelectorAll('nav.menu > ul > li');
for(let i=0; i<liTags.length; i++){
  liTags[i].onmouseenter = function(x){
    x.currentTarget.classList.add('active')
  }
  liTags[i].onmouseleave = function(x){
    x.currentTarget.classList.remove('active')
  }
}