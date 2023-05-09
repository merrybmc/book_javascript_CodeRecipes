const isSupported = !!("ontouchstart" in window || (navigator.pointerEnabled && navigator.maxTouchPoints > 0));

// window.ontouchstart 터치 기능 시작 이벤트 ( 타입 함수 )
// navigator.pointerEnabled 포인터 사용 가능 여부 ( 타입 진리값 )
// navigator.maxTouchPoints 포인터의 최대치 ( 타입 정수 )
