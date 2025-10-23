document.addEventListener('DOMContentLoaded', () => {
    // 1. 모든 <details> 항목을 선택합니다.
    const details = document.querySelectorAll('details');

    // 2. 각 <details> 항목에 'toggle' 이벤트 리스너를 추가합니다.
    details.forEach(targetDetail => {
        targetDetail.addEventListener('toggle', () => {
            // 현재 <details> 항목이 '열린' 상태인지 확인합니다.
            if (targetDetail.open) {
                // 3. 다시 모든 <details> 항목을 순회합니다.
                details.forEach(detail => {
                    // 현재 이벤트가 발생한 항목이 아니면서,
                    // 동시에 다른 항목이 '열린' 상태라면 닫아줍니다.
                    if (detail !== targetDetail && detail.open) {
                        detail.open = false; // open 속성을 제거하여 닫습니다.
                    }
                });
            }
        });
    });
});