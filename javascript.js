// 햄버거 메뉴 기능
document.addEventListener('DOMContentLoaded', function() {
    // 1. 모바일 메뉴 항목 전체를 선택합니다.
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');
    
    // 2. 전체 <details> 태그를 선택합니다.
    const menuDetails = document.querySelector('header details');

    // 3. 각 메뉴 링크에 이벤트 리스너를 추가합니다.
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function() {
            // 4. 클릭 시 <details> 요소의 'open' 속성을 제거합니다.
            if (menuDetails.hasAttribute('open')) {
                menuDetails.removeAttribute('open');
            }
        });
    });
});