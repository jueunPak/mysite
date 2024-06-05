let currentSection = 0;
const sections = document.querySelectorAll('.section');
const totalSections = sections.length;
let isThrottled = false;

window.addEventListener('wheel', (e) => {
    if (isThrottled) return;

    isThrottled = true;
    setTimeout(() => {
        isThrottled = false;
    }, 1000);

    if (e.deltaY > 0) {
        currentSection = Math.min(currentSection + 1, totalSections - 1);
    } else {
        currentSection = Math.max(currentSection - 1, 0);
    }
    
    document.querySelector('.container').style.transform = `translateX(-${currentSection * 100}vw)`;
});

// MouseFollower 라이브러리 설정
document.addEventListener('DOMContentLoaded', () => {
    const cursor = new MouseFollower({
        el: '.mf-cursor',
        container: 'body',
        visible: true,
    });

    document.querySelectorAll('a, button').forEach(el => {
        el.addEventListener('mouseenter', () => cursor.addState('-pointer'));
        el.addEventListener('mouseleave', () => cursor.removeState('-pointer'));
    });
});
