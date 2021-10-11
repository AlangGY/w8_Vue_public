
## 🎥 Alang Movie

### 기본 요구사항

- [x] 검색어를 입력해 영화를 검색할 수 있어야 합니다.
- [x] 검색된 결과를 통해 영화의 상세 정보를 볼 수 있어야 합니다.
- [x] 클라이언트에서 API Key가 노출되지 않아야 합니다.
- [x] 실제 서비스로 배포하고 접근 가능한 링크를 추가해야 합니다.

### 선택 요구사항

- [x] API 요청(Request)에 대한 로딩 애니메이션을 추가해 보세요.
- [x] 영화 상세 검색으로 출력할 영화 포스터를 더 높은 해상도 사용해 보세요.
  - [x] 영화 포스터 주소에 포함된 `SX300`를 `SX700`과 같이 더 큰 숫자로 수정해 요청하세요.
- [x] Infinite Scroll 로 영화 리스트 구현
- [x] Movie Viewer Close 버튼 추가
- [x] 스크롤바 디자인
### 컴포넌트 구성
```
- Button
- Header
- Loading : Spinner Animation
- MovieLoader : IntersectionObserver를 이용한 이벤트 전달
- MoviesList : MoviesGrid
- MovieViewer : 상세 영화 모달
- SearchBar : 검색창
```

### Router 구성
```
- App
  |
  |- Header
  |
  |- ( RouterView )
          |
          |- Home
          |
          |- Search /search/?keyword
          |
          |- NotFound 
```
