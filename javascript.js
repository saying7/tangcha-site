document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('dropdown-toggle');
    const dropdownMenu = document.getElementById('dropdown-menu');
    const dropdownItems = document.querySelectorAll('.dropdown-item');

    // 1. 버튼 클릭 시 드롭다운 메뉴 토글 기능
    toggleButton.addEventListener('click', () => {
        // 'show' 클래스를 토글하여 메뉴를 보이거나 숨깁니다.
        dropdownMenu.classList.toggle('show');
        
        // 접근성(ARIA) 속성 업데이트
        const isExpanded = toggleButton.getAttribute('aria-expanded') === 'false';
        toggleButton.setAttribute('aria-expanded', isExpanded);
    });

    // 2. 드롭다운 항목 선택 시 동작
    dropdownItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault(); // 링크 이동 방지

            const selectedValue = item.getAttribute('data-value');
            const selectedText = item.textContent.trim();

            // 1) 버튼 텍스트를 선택된 항목으로 업데이트
            toggleButton.textContent = selectedText;

            // 2) 메뉴 닫기
            dropdownMenu.classList.remove('show');
            toggleButton.setAttribute('aria-expanded', 'false');

            // (선택 사항) 선택된 값을 콘솔에 출력하거나 다른 로직 실행
            console.log("선택된 값:", selectedValue);
        });
    });

    // 3. 드롭다운 외부 영역 클릭 시 메뉴 닫기 (핵심)
    document.addEventListener('click', (e) => {
        // 클릭된 요소가 드롭다운 컨테이너 내부에 포함되어 있지 않다면
        if (!e.target.closest('.custom-dropdown') && dropdownMenu.classList.contains('show')) {
            dropdownMenu.classList.remove('show');
            toggleButton.setAttribute('aria-expanded', 'false');
        }
    });
});