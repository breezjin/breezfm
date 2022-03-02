# BREEZ.fm

> **_Stand by your side with Music_**
>
> BREEZ.fm은 당신이 있는 그곳의 날씨와 무드를 파악하고, 그것을 반영한 플레이리스트를 준비해 음악을 전합니다. 오늘같은 날씨에 듣고싶은 음악. 평소 내 취향이 아니라도 일상 속에서 편안하게 전해오는 적절한 음악이 필요할 때가 있죠. 당신의 일상과 함께하는 BREEZ.fm을 만나 보세요.

`Music`, `Streaming`, `Feed`

## 기능

- 위치정보 기반으로 사용자의 위치와 날씨를 파악해서 음악이 자동으로 스트리밍 됩니다.
- 파악한 사용자의 위치와 날씨에 따라 적절한 분위기의 배경 이미지와 비주얼이펙트가 구성 됩니다.
- 기본 선택된 무드(감정상태)를 변경해서 다른 분위기로 전환할 수도 있습니다.
- 음악을 듣다가 드는 소회, 잡담 등을 이 공간에 함께있는 사람들과 Feed를 통해 나눌 수 있습니다.
- Feed에서 작성하는 글 등은 회원가입을 통해서만 가능합니다.

## 기술 스택

- Node v16.14.0 (latest LTS at 2022.02.25)
- Frontend
  - React
  - React Redux / Redux Toolkit
  - styled-components
  - amime.js
  - sweetalert2
  - Dayjs
  - Axios
  - browser-image-compression
- Backend
  - ExpressJS
  - MongoDB, Mongoose
  - jsonwebtoken
- Common
  - Amazon S3
  - eslint
  - prettier
  - husky
- API
  - Open Weather Map api
  - unsplash api
  - Shazam api
  - Auto DJ api
  - youtube api
- Test
  - Front: Jest, React Testing library
  - Back: mocha, chai, sinon, supertest
- Deploy
  - Front: Netlify
  - Back: Amazon Elastic Beanstalk, Amazon **CodePipeline**

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
