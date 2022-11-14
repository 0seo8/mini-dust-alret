![header](https://capsule-render.vercel.app/api?type=waving&text=미세먼지알림이&color=auto&height=250&animation=scaleIn)

## 🛠 Tech Stack

<img src="https://img.shields.io/badge/REACT-61DAFB?style=for-the-badge&logo=React&logoColor=white"/> 
<img src="https://img.shields.io/badge/REDUX-764ABC?style=for-the-badge&logo=Redux&logoColor=white"/>
<img src="https://img.shields.io/badge/STYLED-COMPONENTS-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/>
<img src="https://img.shields.io/badge/VITE-646CFF?style=for-the-badge&logo=Vite&logoColor=white"/>
<img src="https://img.shields.io/badge/ReactRouter-F7DF1E?style=for-the-badge&logo=redux&logoColor=white"/>
<img src="https://img.shields.io/badge/javascript-red?style=for-the-badge&logo=javascript&logoColor=white"/>
<img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
<img src="https://img.shields.io/badge/HTML5-008000?style=for-the-badge&logo=HTML5&logoColor=#E34F26"/>

## 📗 프로젝트 설명

```
⏰ 공공데이터를 이용한 미세먼지 알림이입니다.
   셀렉박스를 통해 선택한 지역의 미세먼지 정보를 보여줍니다.
```
- 프로젝트는 모바일 사이즈로 만들어졌습니다.

<a href='https://ifh.cc/v-m1W6Nr' target='_blank'><img src='https://ifh.cc/g/m1W6Nr.gif' border='0' width="200"></a>

## 📎 브랜치 설명

- main 브랜치 : Javascript로 작성
- TS 브랜치 : TypeScript로 작성

## 📌 구현기능

- 공공데이터 api 로 데이터 받아오기
- 기본 지역 보기/ 전체 보기 / 즐겨찾기 페이지 구현
- 미세먼지 수치에 따른 카드 색상 변화
- 로컬스토로지를 이용한 즐겨찾기 기능 구현

## 📦 폴더트리

📦src
┣ 📂app
┃ ┗ 📜store.ts
┣ 📂assets
┃ ┣ 📜GmarketSansTTFBold.ttf
┃ ┣ 📜GmarketSansTTFLight.ttf
┃ ┣ 📜GmarketSansTTFMedium.ttf
┃ ┣ 📜react.svg
┃ ┗ 📜selectImg.svg
┣ 📂components
┃ ┣ 📂Card
┃ ┃ ┣ 📜Favorite.tsx
┃ ┃ ┣ 📜index.tsx
┃ ┃ ┗ 📜style.ts
┃ ┣ 📂FetchData
┃ ┃ ┣ 📜index.tsx
┃ ┃ ┗ 📜style.ts
┃ ┣ 📂SelectBox
┃ ┃ ┣ 📜index.tsx
┃ ┃ ┗ 📜style.ts
┃ ┗ 📂Tab
┃ ┃ ┣ 📜index.tsx
┃ ┃ ┗ 📜style.ts
┣ 📂feature
┃ ┗ 📜dustSlice.ts
┣ 📂model
┃ ┗ 📜types.ts
┣ 📂pages
┃ ┣ 📂Favorites
┃ ┃ ┣ 📜index.tsx
┃ ┃ ┗ 📜style.ts
┃ ┣ 📂MyPlace
┃ ┃ ┗ 📜index.tsx
┃ ┗ 📂ViewAllPlace
┃ ┃ ┣ 📜Container.tsx
┃ ┃ ┣ 📜index.tsx
┃ ┃ ┗ 📜style.ts
┣ 📂style
┃ ┣ 📜global.ts
┃ ┗ 📜theme.ts
┣ 📂utils
┃ ┣ 📜addLocalStoroge.ts
┃ ┗ 📜constants.ts
┣ 📜App.tsx
┣ 📜index.css
┣ 📜main.tsx
┗ 📜vite-env.d.ts
