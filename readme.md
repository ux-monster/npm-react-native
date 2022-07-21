# 빌드

```
yarn build
```

# 테스트

1. 패키지 덮어쓰기

```
- cp dist examples/node_modules/npm-react-native/dist
- cp package.json examples/node_modules/npm-react-native/package.json
```

2. 컴포넌트 examples/App.js 안에 넣기
3. android/ios 테스트

```
- yarn android
- yarn ios
```

# 배포

yarn publish
