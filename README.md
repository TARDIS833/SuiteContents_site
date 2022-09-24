## Getting Started


실행 방법:

1. 패키지 설치
    ```bash
     npm install
     # or
     yarn
    ```

2. 실행
   
    ```bash
     npm run dev
     # or
     yarn dev
    ```
3. 확인

    다음 주소로 접속해서 확인 (default port: 3000)

    http://localhost:3000
    
## Storybook

1. 실행
   ```bash
    yarn storybook
   ```

2. 확인
   
   다음 주소로 접속해 확인 (default port: 6006)

   http://localhost:6006

 ## etc

 - component에 있는 버튼이나 pages에 있는 Main은 예제파일입니다.   
  
   내용을 지우고 다시 작성하면 됩니다.   

 - Material UI를 사용하려면 branch 중 mui를 클론해서 사용하시면 됩니다. 

 - REST API 사용시에는 axios를 기본으로 사용하며, graphql, apollo client를 사용하려면 branch 중 graphql을 병합하거나 따로 설치하여서 사용하시면 됩니다.
  

## Vercel
   
1. 설명 
 
    [src/utils/commons.tsx (baseURL)] 사용시

    local, Vercel의 Preview, Production에서 각각의 Base URL을 설정 할 수 있습니다.

    localhost는 http://localhost:3000로 설정되어있고 수정해서 사용하면 됩니다.

2. Vercel env 설정 변수 이름

   - Preview [Preview branch에 설정]

        > NEXT_PUBLIC_DEV_API_URL='API Base URL'


   - Production [Production branch에 설정]

        > NEXT_PUBLIC_PRODUCT_API_URL='API Base URL'
  
## Zustand

   - Devtools 사용 방법

      1. Redux DevTools 설치 링크(Chrome 웹 스토어) : [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=ko)

      2. 설치 후 Redux DevTools 실행


## 환경 구성 정보
   * React TypeScipt 

   * Next Js (Framework) 
   
   * StoryBook (UI Component Develop Tool)
   
   * emotion (css)

   * zustand (상태 관리 라이브러리)
  
## 참조 링크

- [Next.js](https://nextjs.org/learn) 
- [Next.js Documentation](https://nextjs.org/docs) 
- [Emotion](https://emotion.sh/docs/introduction)
- [Storybook Documentation](https://storybook.js.org/docs/react/get-started/introduction) 
- [zustand](https://docs.pmnd.rs/zustand/introduction)
- [zustand github](https://github.com/pmndrs/zustand)
## Deploy on Vercel
***
The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
