# 원티드 프리온보딩 프론트엔드 2주차 과제

## 개요

Github의 react 리포지토리에 등록된 issue를 목록과 상세 보기로 확인할 수 있는 사이트 프로젝트입니다.

## 배포 주소

[https://wanted-2nd-week-ofcpire.netlify.app](https://wanted-2nd-week-ofcpire.netlify.app)

배포는 prod 브랜치에서 빌드합니다.

## 실행 방법

main 브랜치를 사용합니다.

```
git clone https://github.com/ofcpire/wanted-pre-onboarding-2nd-week-assignment.git
cd wanted-pre-onboarding-2nd-week-assignment
npm install
npm start
```

## 프로젝트 구조

```
src
 ┣ components
 ┃ ┣ content
 ┃ ┃ ┣ IssueBody.tsx
 ┃ ┃ ┗ IssueContent.tsx
 ┃ ┣ global
 ┃ ┃ ┣ Header.tsx
 ┃ ┃ ┣ IssueInfo.tsx
 ┃ ┃ ┗ Loading.tsx
 ┃ ┗ list
 ┃ ┃ ┣ IssueItem.tsx
 ┃ ┃ ┣ IssueList.tsx
 ┃ ┃ ┣ ListAd.tsx
 ┃ ┃ ┗ LoadPageIndicator.tsx
 ┣ hook
 ┣ lib
 ┃ ┣ api
 ┃ ┃ ┣ api.ts
 ┃ ┃ ┣ axiosInstance.ts
 ┃ ┃ ┗ loader.ts
 ┃ ┗ utils
 ┃ ┃ ┗ dateParser.tsx
 ┣ pages
 ┃ ┣ ContentPage.tsx
 ┃ ┣ ErrorPage.tsx
 ┃ ┗ ListPage.tsx
 ┣ redux
 ┃ ┣ isLoadingSlice.ts
 ┃ ┣ issueListSlice.ts
 ┃ ┗ store.ts
 ┣ types
 ┃ ┗ index.d.ts
 ┣ index.css
 ┣ index.tsx
 ┣ Layout.tsx
 ┣ reset.css
 ┗ Router.tsx
```

- `src`
  - `components` : 각 페이지에서 호출되는 세부 컴포넌트 폴더입니다.
  - `lib` : 개발 중 필요한 함수들을 정리하는 폴더입니다.
    - `api` : API를 호출하는 axios 인스턴스 및 함수 폴더입니다.
    - `utils` : 기타 개발 중 사용되는 함수 폴더입니다.
  - `pages` : Router에서 직접 호출되는 페이지 컴포넌트 폴더입니다.
  - `redux` : Redux toolkit 스토어와 slice를 정리하는 폴더입니다.
  - `type` : 전역으로 사용되는 typescript 타입 폴더입니다.
- `Router.tsx` : `createBrowserRouter`에서 사용되는 라우터 객체입니다.
- `Layout.tsx` : 페이지 기본 레이아웃입니다.

## 사용 스택

- react
- typescript
- react-router-dom
- tailwind css
- redux toolkit
- axios
- eslint
- prettier

## 커밋 규칙

| Commit Type | Format                                                                   |
| ----------- | ------------------------------------------------------------------------ |
| feat        | 새로운 기능 추가                                                         |
| fix         | 버그 수정                                                                |
| docs        | 문서수정                                                                 |
| style       | 코드 스타일 변경(코드 포매팅,세미콜론 누락 등)</br>기능 수정이 없는 경우 |
| design      | 사용자 UI 디자인 변경(CSS 등)                                            |
| test        | 테스트 코드, 리팩토링 테스트 코드 추가                                   |
| refactor    | 코드 리팩토링                                                            |
| build       | 빌드 파일 수정                                                           |
| perf        | 성능 개선                                                                |
| chore       | 빌드 업무 수정, 패키지 매니저 수정(gitignore수정 등)                     |
| rename      | 파일 혹은 폴더명을 수정만 한 경우                                        |
| remove      | 파일을 삭제만 한 경우                                                    |
