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