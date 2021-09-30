## Notion Clone w. Vue

- [Vue3 version GiHub Repo](https://github.com/Leon-Miller/notion-clone-programmers)
- [NuxtJS(Vue2) Version GitHub Repo](https://github.com/Leon-Miller/notion-clone-programmers-nuxt)

# 📌 8주차 과제[Mission8]

API 사용에 대해 궁금한 점은 '질의응답' 채널에 질문 남겨주세요!

## 🎥 영화 검색 프로젝트

- 과제 기간: 9월 28일 ~ 10월 10일 오후 23시 59분
- 리뷰 기간: 10월 11일 ~ 10월 16일
- 내용: Vue.js와 영화 검색 API를 활용해 프로젝트를 만드세요.

### 기본 요구사항

- [ ] 검색어를 입력해 영화를 검색할 수 있어야 합니다.
- [ ] 검색된 결과를 통해 영화의 상세 정보를 볼 수 있어야 합니다.
- [ ] 클라이언트에서 API Key(`7035c60c`)가 노출되지 않아야 합니다.
- [ ] 실제 서비스로 배포하고 접근 가능한 링크를 추가해야 합니다.

### 선택 요구사항

- [ ] API 요청(Request)에 대한 로딩 애니메이션을 추가해 보세요.
- [ ] 영화 상세 검색으로 출력할 영화 포스터를 더 높은 해상도 사용해 보세요.
  - [ ] 영화 포스터 주소에 포함된 `SX300`를 `SX700`과 같이 더 큰 숫자로 수정해 요청하세요.
  - [ ] 실시간으로 이미지의 크기를 다르게 요청하는 것이 어떤 원리로 가능한지 조사해 보세요.
- [ ] 요청 주소에 HTTP가 아닌 HTTPS 프로토콜을 사용해야 하는 이유를 조사해 보세요.
- [ ] Bootstrap 등의 UI 프레임워크를 구성해 프로젝트를 최대한 예쁘게(?) 만들어 보세요.
- [ ] Open Graph 혹은 Twitter Cards로 Meta 정보를 제공해 보세요.
- [ ] NuxtJS를 활용해 Server Side Rendering(SSR)과 검색 엔진 최적화(SEO)를 도입해 보세요.  
     (만약 SSR에 익숙치 않다면, SPA 프로젝트를 먼저 만들어 보고 도전하세요!)

## API 사용법

- 참고 사이트: [The Open Movie Database](http://www.omdbapi.com/)
- 요청 주소: `https://www.omdbapi.com`
- Method: `GET`
- API_KEY: `7035c60c`

### 영화 목록 검색

파라미터 | 필수 | 설명 | 기본값 | 유효 값
--|--|--|--|--
`s` | 예 | 검색할 영화 제목 | | 
`y` | | 영화 출시 년도 | | 
`page` | | 검색 결과 페이지 | `1` | `1`~`100`

요청 예시: 

```url
https://www.omdbapi.com?apikey=7035c60c&s=frozen&page=3
```

응답 예시: 

- `Search`: 영화 목록, 1페이지(`page`) 당 최대 10개
- `totalResults`: 검색 가능한 모든 영화 개수

```json
{
  "Search": [
    {
      "Title": "Frozen",
      "Year": "2013",
      "imdbID": "tt2294629",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjA0YjYy...eQXVyNDg4NjY5OTQ@._V1_SX300.jpg"
    },
    "...최대10개"
  ],
  "totalResults": "263",
  "Response": "True"
}
```

### 영화 상세 검색

파라미터 | 필수 | 설명 | 기본값 | 유효 값
--|--|--|--|--
`i` | 예 | 검색할 영화 아이디(`imdbID`) | | 
`plot` | | 영화 줄거리 길이 | `short` | `full` 

요청 예시: 

```url
https://www.omdbapi.com?apikey=7035c60c&i=tt4520988&plot=full
```

응답 예시:

```json
{
  "Title": "Frozen II",
  "Year": "2019",
  "Rated": "PG",
  "Released": "22 Nov 2019",
  "Runtime": "103 min",
  "Genre": "Animation, Adventure, Comedy",
  "Director": "Chris Buck, Jennifer Lee",
  "Writer": "Jennifer Lee, Hans Christian Andersen, Chris Buck",
  "Actors": "Kristen Bell, Idina Menzel, Josh Gad",
  "Plot": "Having harnessed her ever-growing power after lifting the dreadful curse of the eternal winter in Frozen (2013),",
  "Language": "English",
  "Country": "United States",
  "Awards": "Nominated for 1 Oscar. 17 wins & 90 nominations total",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMjA0YjYy...eQXVyNDg4NjY5OTQ@._V1_SX300.jpg",
  "Ratings": [
    {
      "Source": "Internet Movie Database",
      "Value": "6.8/10"
    },
    {
      "Source": "Rotten Tomatoes",
      "Value": "77%"
    },
    {
      "Source": "Metacritic",
      "Value": "64/100"
    }
  ],
  "Metascore": "64",
  "imdbRating": "6.8",
  "imdbVotes": "151,940",
  "imdbID": "tt4520988",
  "Type": "movie",
  "DVD": "22 Nov 2019",
  "BoxOffice": "$477,373,578",
  "Production": "Walt Disney Animation, Walt Disney Pictures",
  "Website": "N/A",
  "Response": "True"
}
```

<br/>
<br/>
<br/>

---

<br/>
<br/>
<br/>

# 📌 7주차 과제[Mission7]

모든 CSS 과제는 개발자 도구로 긁어오지 않고, 본인이 직접 구현해봅니다!

## 💡 네이버 or 유튜브 메인 레이아웃 클론
- 과제 기간: 9월 16일(목) ~ 9월 26일(일)
- 리뷰 기간: 9월 26일(일) ~ 10월 2일(토) 
- 내용: [네이버 모바일](https://m.naver.com/) 혹은 [유튜브](https://www.youtube.com) 메인 페이지 중 하나를 선택해 레이아웃을 클론 코딩하세요.

### 기본 요구사항

- [ ] SCSS로 스타일을 작성하세요.
- [ ] 작성된 SCSS를 CSS로 컴파일하세요.
- [ ] 제출 프로젝트에 확인 가능한 HTML, CSS, SCSS 파일이 모두 포함돼야 합니다.
- [ ] 브라우저에서 정상적으로 출력돼야 합니다.
- [ ] `@media`를 활용해 반응형 레이아웃으로 구현해야 합니다.

### 선택 요구사항

- [ ] JS가 필요한 부분은 생략하고 이유를 명시해 보세요.(CSS로 대체 가능한지 피드백이 있을 수 있어요)
- [ ] JS가 필요한 부분 중 구현할 부분이 있다면 자유롭게 구현해 보세요.
- [ ] 레거시 코드 활용보단 최신의 CSS Flex와 Grid를 활용해 보세요.
- [ ] 시멘틱 태그를 최대한 활용해 보세요.
- [ ] SCSS 컴파일에 Webpack이나 Parcel 같은 번들러를 활용해 보세요.
- [ ] BEM 방법론을 도입해 보세요.

## 💡 자신이 원하는 사이트 레이아웃 클론

- 과제 기간: 9월 16일(목) ~ 9월 26일(일)
- 리뷰 기간: 9월 26일(일) ~ 10월 2일(토) 
- 내용: 
  - 원하는 사이트(페이지)를 자유롭게 선택하고 레이아웃을 클론 코딩하세요.
  - 평소에 도전해 보고 싶었거나 혹은 자신의 수준에 맞는 사이트(페이지)를 선택하세요.

### 기본 요구사항

- [ ] 결과와 비교할 수 있도록 선택한 클론 사이트의 URL 주소를 명시하세요.
- [ ] SCSS로 스타일을 작성하세요.
- [ ] 작성된 SCSS를 CSS로 컴파일하세요.
- [ ] 제출 프로젝트에 확인 가능한 HTML, CSS, SCSS 파일이 모두 포함돼야 합니다.
- [ ] 브라우저에서 정상적으로 출력돼야 합니다.

### 선택 요구사항

- [ ] JS가 필요한 부분은 생략하고 이유를 명시해 보세요.(CSS로 대체 가능한지 피드백이 있을 수 있어요)
- [ ] JS가 필요한 부분 중 구현할 부분이 있다면 자유롭게 구현해 보세요.
- [ ] 레거시 코드 활용보단 최신의 CSS Flex와 Grid를 활용해 보세요.
- [ ] 시멘틱 태그를 최대한 활용해 보세요.
- [ ] SCSS 컴파일에 Webpack이나 Parcel 같은 번들러를 활용해 보세요.
- [ ] BEM 방법론을 도입해 보세요.

## 이미지 추출 방법

사이트 클론에 필요한 이미지를 좀 더 쉽게 추출하기 위해서 Chrome 확장 프로그램인 [Image Downloader](https://chrome.google.com/webstore/detail/image-downloader/cnpniohnfphhjihaiiggeabnkjhpaldj?hl=ko)를 사용하세요.

1. 원하는 사이트 접속
1. Image Downloader 확장 프로그램 실행
1. 다운로드 원하는 이미지 선택
1. 서브 폴더 이름(Save to subfolder) 명시
1. 다운로드!
