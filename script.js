// 移动菜单切换
document.querySelector('.mobile-menu-toggle').addEventListener('click', function() {
  const nav = document.querySelector('.nav');
  nav.classList.toggle('active');
});

// 子菜单显示/隐藏
document.querySelectorAll('.main-menu > li > a').forEach(link => {
  link.addEventListener('click', function(e) {
    if (this.nextElementSibling && this.nextElementSibling.classList.contains('sub-menu')) {
      e.preventDefault();
      this.nextElementSibling.style.display = (this.nextElementSibling.style.display === 'block') ? 'none' : 'block';
    }
  });
});

// 点击页面其他地方关闭子菜单
document.addEventListener('click', function(e) {
  const subMenus = document.querySelectorAll('.sub-menu');
  subMenus.forEach(menu => {
    if (!menu.contains(e.target) && !menu.previousElementSibling.contains(e.target)) {
      menu.style.display = 'none';
    }
  });
});

// 滚动时改变导航栏样式
window.addEventListener('scroll', function() {
  const header = document.querySelector('.header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// 响应式调整
window.addEventListener('resize', function() {
  const nav = document.querySelector('.nav');
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  
  if (window.innerWidth > 768) {
    nav.style.display = 'block';
  } else {
    nav.style.display = 'none';
  }
});

// 初始化导航状态
window.dispatchEvent(new Event('resize'));

// 轮播图逻辑
const sliderImages = document.querySelectorAll('.slider-image');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

function showSlide(index) {
  sliderImages.forEach((image, i) => {
    if (i === index) {
      image.classList.add('active');
    } else {
      image.classList.remove('active');
    }
  });
  dots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % sliderImages.length;
  showSlide(currentIndex);
}
// 自动切换轮播图
setInterval(nextSlide, 3000);

// 点击指示器切换轮播图
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
    showSlide(currentIndex);
  });
});