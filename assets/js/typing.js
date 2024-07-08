// typing.js

document.addEventListener('DOMContentLoaded', function() {
    // 부드러운 스크롤 기능
    document.querySelectorAll('.nav-right a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 섹션 스크롤 애니메이션 (Intersection Observer API 사용)
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.5
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    // CSS 애니메이션 추가
    const style = document.createElement('style');
    style.innerHTML = `
        section {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        section.visible {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);

    // 타이핑 애니메이션 적용
    const typingElements = document.querySelectorAll('.typing-animation');

    typingElements.forEach(element => {
        element.style.width = '0'; // 초기 상태를 0으로 설정
        observer.observe(element); // Intersection Observer로 감시
    });

    // Intersection Observer 콜백에 타이핑 애니메이션 추가
    const observerTyping = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'typing 8s steps(70, end)';
            } else {
                entry.target.style.animation = 'none';
            }
        });
    }, {
        threshold: 0
    });

    typingElements.forEach(element => {
        observerTyping.observe(element);
    });
});
