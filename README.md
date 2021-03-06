# typescript-todo-vue

타입스크립트로 만든 todo입니다.

## vue 프로젝트에 타입스크립트 적용하기

```bash
vue add typescript
```

기존에 타입스크립트 없이 프로젝트를 만들었다면 해당 명령어로 타입스크립트를 적용 시킬 수 있음.

```js
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>
```

타입스크립트를 사용할 경우 script의 lang속성에 ts를 넣어준다.  
또한 vue 컴포넌트 내의 타입을 올바르게 추론할 수 있게 defineComponent를 통해서 컴포넌트를 정의해주면 타입스크립트를 활용할 수 있다.

## sass 적용하기

[공식문서 확인](https://cli.vuejs.org/guide/css.html#referencing-assets)

```bash
npm install -D sass-loader sass
# 만약 웹팩 버전이 4라면 아래 명령어를 이용
# npm install -D sass-loader@^10 sass
```

위의 명령어로 상황에 맞게 다운로드 한다. 웹팩 버전이 4였기 때문에 아래 명령어로 다운로드 했음.

```scss
<style lang="scss">
  $color: red;
</style>
```

이처럼 style에 scss를 전달해주면 scss가 적용되는 것을 확인할 수 있음

### scss에서 공통적인 부분 처리하기

reset부분이나 앱에서 사용할 수 있는 색의 경우 한곳에 정의해두고 공통적으로 처리할 수 있다.

```js
// vue.config.js 파일

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
            @import "@/styles/reset.scss";
          `,
      },
    },
  },
};
```

vue.config.js 파일에 sass 부분에 additionalData를 주고 각 페이지 마다 삽입될 부분을 적어주면 된다.  
기본적으로 src/styles에 공통적인 스타일을 적용하도록 폴더를 만들었다.
