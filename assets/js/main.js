// // main.js

// // 부드러운 스크롤 기능
// document.addEventListener('DOMContentLoaded', function() {
//     document.querySelectorAll('.nav-right a').forEach(anchor => {
//         anchor.addEventListener('click', function(e) {
//             e.preventDefault();

//             document.querySelector(this.getAttribute('href')).scrollIntoView({
//                 behavior: 'smooth'
//             });
//         });
//     });

//     // 섹션 스크롤 애니메이션 (Intersection Observer API 사용)
//     const sections = document.querySelectorAll('section');

//     const observer = new IntersectionObserver(entries => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 // entry.target.classList.add('visible');
//             } else {
//                 entry.target.classList.remove('visible');
//             }
//         });
//     }, {
//         threshold: 0.5
//     });

//     sections.forEach(section => {
//         observer.observe(section);
//     });

//     // CSS 애니메이션 추가
//     const style = document.createElement('style');
//     style.innerHTML = `
//         section {
//             opacity: 0;
//             transform: translateY(40px);
//             transition: opacity 0.8s ease-out, transform 0.8s ease-out;
//         }
//         section.visible {
//             opacity: 1;
//             transform: translateY(0);
//         }
//     `;
//     document.head.appendChild(style);
// });
