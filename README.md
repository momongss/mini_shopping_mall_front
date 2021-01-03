# mini_shopping_mall_front

##### # 드림코딩 엘리 미니 쇼핑몰 (강의 듣기 전)

## 내가 짠 코드의 문제점 (강의 듣고 난 후 랑 다른점..)

    1. 데이터를 코드와 분리하지 않은 점.
    2. 이벤트 처리
        - 내가 짠 것 : 버튼마다 따로 이벤트 지정.
        - 강의 버전  : 버튼의 컨테이너에 이벤트 지정하고,
                        event.target에서 버튼 구분.
        - DOM 객체에 onclick 으로 지정했는데
        addEventListener 가 더 좋아보인다.
        (콜백함수 파라미터 전달이 쉬움.)

### 새로 알게 된 것

    # 함수
    - JS 에서 함수는 this 를 가지는데 이 this는 함수를 호출한 객체를 가리킨다. (The object that is executing the current function.)

- 함수 정리노트
  https://www.notion.so/5-5e2dd6eac2874c4aac2e6be67c4f227f
