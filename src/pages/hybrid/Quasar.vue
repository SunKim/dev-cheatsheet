<template>
  <q-page :class="paddingClass">
    <page-title>Quasar Framework</page-title>

    <section-title>일반</section-title>
    <section>
      <p class="p-title">개요</p>
      <p class="p-content">Vue.js 기반, MIT license, open source</p>

      <p class="p-title">Default Features</p>
      <p class="p-content">
        <ul>
          <li>HTML/CSS/JS minification</li>
          <li>Cache busting (resource들의 browser caching 때문에 refresh 안되는 문제 해결)</li>
          <li>Tree shaking (css, js 등의 안쓰는 snippet 제거)</li>
          <li>Sourcemapping (combined, minified된 css, js등의 resource를 개발버전 source와 연결하여 dev-tool에서 확인 가능)</li>
          <li>Code-splitting with lazy loading (bundling시 코드를 쪼개서 runtime시 필요한 코드를 dynamic load)</li>
          <li>ES6 transpiling (ES6 지원 안하는 브라우저용)</li>
          <li>Linting code</li>
          <li>CSS preprocessor(sass, scss, stylus)</li>
          <li>Accessibility features (장애인 접속)</li>
        </ul>
      </p>

      <p class="p-title">Extended Features</p>
      <p class="p-content">
        <ul>
          <li>App Extensions</li>
          <li>RTL support (Right-To-Left 지원)</li>
          <li>Quasar CLI</li>
          <li> - HMR(Hot Module Reload)</li>
          <li> - Lint-on-save</li>
        </ul>
      </p>

      <p class="p-title">Multi Platforms</p>
      <p class="p-content">
        <ul>
          <li>SPA (Single Page Application)</li>
          <li>SSR (Server Side Rendering)</li>
          <li>PWA (Progressive Web Application)</li>
          <li>Mobile Apps (iOS, Android using Apache Cordova)</li>
          <li>Multi-platform Desktop Apps (using Electron)</li>
        </ul>
      </p>

      <p class="p-title">참고문서</p>
      <p class="p-content">
        <ul>
          <li>
            공식 DOCS -
            <a target="_blank" class="q-link text-blue-grey" href="https://quasar.dev/introduction-to-quasar">
              https://quasar.dev/introduction-to-quasar
            </a>
          </li>
          <li>
            quasar awesome -
            <a target="_blank" class="q-link text-blue-grey" href="https://github.com/quasarframework/quasar-awesome">
              https://github.com/quasarframework/quasar-awesome
            </a>
          </li>
          <li>
            i18n 추가적용 -
            <a target="_blank" class="q-link text-blue-grey" href="https://medium.com/quasar-framework/adding-full-i18n-to-quasar-150da2d5bba4">
              https://medium.com/quasar-framework/adding-full-i18n-to-quasar-150da2d5bba4
            </a>
          </li>
        </ul>
      </p>
    </section>

    <section-title>Quasar CLI</section-title>
    <section>
      <p class="p-title">Quasar CLI install (Node 8.0이상, NPM 5.0 이상)</p>
      <p class="p-content shell-prompt">npm install -g @quasar/cli</p>

      <p class="p-title">Quasar project init</p>
      <p class="p-content shell-prompt">quasar create my-project</p>

      <p class="p-title">dev / build 등 (package.json 참고)</p>
      <p class="p-content shell-prompt">quasar dev</p>
      <p class="p-content shell-prompt">quasar build</p>

      <p class="p-title">quasar.config.js</p>
      <p class="p-content">
        <a target="_blank" class="q-link text-blue-grey" href="https://quasar.dev/quasar-cli/quasar-conf-js#Introduction">
          https://quasar.dev/quasar-cli/quasar-conf-js#Introduction
        </a>
      </p>

      <p class="p-title">App Icon</p>
      <p class="p-content shell-prompt">quasar ext add @quasar/icon-genie</p>
      <p class="p-cf">
        Icon Genie를 통해 1240*1240사이즈 app-icon.png를 project root에 넣으면 자동 생성<br />
        아이콘 교체 : 재기동시 자동반영<br />
        <a target="_blank" class="q-link text-blue-grey" href="https://github.com/quasarframework/app-extension-icon-genie">
          https://github.com/quasarframework/app-extension-icon-genie
        </a>
      </p>
    </section>

    <section-title>IDE 설정</section-title>
    <section>
      <p class="p-title">VS Code</p>
      <p class="p-content">
        <a target="_blank" class="q-link text-blue-grey" href="https://medium.com/vue-mastery/best-code-editor-for-vue-js-8b0d9cca6be">
          https://medium.com/vue-mastery/best-code-editor-for-vue-js-8b0d9cca6be
        </a>
      </p>

      <p class="p-title">ATOM</p>
      <p class="p-content">
        <ul>
          <li>autoclose-html : html tag auto-close</li>
          <li>language-vue : atom에서 vue syntax hightlight</li>
          <li>vue2-autocomplete : vscript, vtemplate, vstyle</li>
          <li>prettier-atom : 파일 저장시(manual:ctrl+opt+f) 자동으로 lint 수행</li>
        </ul>
      </p>
    </section>

    <section-title>CLI Documentation</section-title>
    <section>
      <p class="p-title">Directory Structure</p>
      <p class="p-content">
        <a target="_blank" class="q-link text-blue-grey" href="https://quasar.dev/quasar-cli/cli-documentation/directory-structure#Introduction">
          https://quasar.dev/quasar-cli/cli-documentation/directory-structure#Introduction
        </a>
      </p>

      <p class="p-title">Build 명령어</p>
      <p class="p-content">
        <a target="_blank" class="q-link text-blue-grey" href="https://quasar.dev/quasar-cli/cli-documentation/build-commands#Introduction">
          https://quasar.dev/quasar-cli/cli-documentation/build-commands#Introduction
        </a>
      </p>
      <p class="p-content shell-prompt">quasar dev -p 9090</p>
      <p class="p-content shell-prompt">quasar dev -m pwa</p>
      <p class="p-content shell-prompt">quasar dev -m android</p>
      <p class="p-content shell-prompt">quasar build</p>
      <p class="p-content shell-prompt">quasar build -m ssr</p>

      <p class="p-title">Command list</p>
      <p class="p-content">
          <ul>
              <li class="shell-prompt">quasar create my-project</li>
              <li class="shell-prompt">quasar upgrade <span class="inline-cmt">업그레이드 가능한 package가 있는지 확인</span></li>
              <li class="shell-prompt">quasar upgrade --install <span class="inline-cmt">실제 upgrade</span></li>
              <li class="shell-prompt">quasar info</li>
              <li class="shell-prompt">quasar new layout shop/Checkout.vue <span class="inline-cmt">src/layout/shop/Checkout.vue 생성</span></li>
              <li class="shell-prompt">quasar mode <span class="inline-cmt">어떤 모드 설치되어 있는지 - pwa/ssr/cordova/electron</span></li>
              <li class="shell-prompt">quasar mode [add|remove pwa|ssr|cordova|electron]</li>
              <li class="shell-prompt">quasar describe (component/directive/Quasar plugin) <span class="inline-cmt">ex. quasar describe QIcon</span></li>
              <li class="shell-prompt">quasar inspect <span class="inline-cmt">webpack config 확인</span></li>
              <li class="shell-prompt">quasar ext <span class="inline-cmt">App extension 확인</span></li>
              <li class="shell-prompt">quasar ext add 'ext-id'</li>
              <li class="shell-prompt">quasar ext remove 'ext-id'</li>
              <li class="shell-prompt">quasar run 'ext-id' 'command' [args, params] <span class="inline-cmt">App extension에서 사용 가능한 command 실행</span></li>
          </ul>
      </p>

      <p class="p-title">Routing</p>
      <p class="p-content">Vue Router Initialize : /src/router/index.js</p>
      <p class="p-content">실제 Routes : /src/router/routes.js</p>
      <p class="p-cf">
        Vue Router :
        <a target="_blank" class="q-link text-blue-grey" href="https://router.vuejs.org">
          https://router.vuejs.org
        </a>
      </p>

      <p class="p-title">Lazy-load Components</p>
      <p class="p-content">
        <pre>
    //original Routing
    import SomePage from 'pages/SomePage'

    const routes = [
      {
        path: '/some-page',
        component: SomePage
      }
    ]

    //Lazy-load Components Routing
    const routes = [
      {
        path: '/some-page',
        component: () => import('pages/SomePage')
      }
    ]
        </pre>

        <pre>
    //original component import
    import SomeComponent from 'components/SomeComponent'

    export default {
      components: {
        SomeComponent,
      }
    }
        </pre>
      </p>
      <p class="p-cf"></p>

      <p class="p-title"></p>
      <p class="p-content"></p>
      <p class="p-cf"></p>
    </section>

    <section-title>Testing &amp; Auditing</section-title>
    <section>
      <p class="p-title">나중에 정리</p>
      <p class="p-content"></p>
      <p class="p-cf"></p>
    </section>

    <section-title>Practical</section-title>
    <section>
      <p class="p-title">QCard with ExpansionItem</p>
      <q-card dark bordered class="bg-grey-9">
        <q-card-section>
          <div class="text-h6">사용자 관리</div>
          <!-- <div class="text-subtitle2" align="right">by John Doe</div> -->
        </q-card-section>

        <q-separator dark inset />

        <q-card-section>
          <div class="text-label">사용자 추가</div>
          <div class="text-caption">~$ adduser</div>
        </q-card-section>

        <q-card-section>
          <q-expansion-item
            expand-separator
            dark
            label="Account settings"
            caption="John Doe 캡션이 엄청 길면 어케 되는겨 ㅋㅋㅋㅋㅋ 마구마구 길게 해보자. John Doe 캡션이 엄청 길면 어케 되는겨 ㅋㅋㅋㅋㅋ 마구마구 길게 해보자. John Doe 캡션이 엄청 길면 어케 되는겨 ㅋㅋㅋㅋㅋ 마구마구 길게 해보자"
            header-class="pa0"
          >
            <q-card dark class="bg-grey-8">
              <q-card-section class="pa10">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem,
                eius reprehenderit eos corrupti commodi magni quaerat ex numquam,
                dolorum officiis modi facere maiores architecto suscipit iste
                eveniet doloribus ullam aliquid.
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </q-card-section>
      </q-card>
    </section>

    <p class="p-title">QTap &amp; QTapPanel</p>
    <div class="bg-grey-2">
      <q-tabs
        v-model="tab"
        align="left"
        :dense="$q.screen.lt.md"
        class="text-grey"
        active-color="primary"
        indicator-color="primary"
      >
        <q-tab name="post" label="Posts" />
        <q-tab name="archive" label="Archive" />
      </q-tabs>

      <q-tab-panels
        v-model="tab"
        keep-alive
        animated
        transition-prev="fade"
        transition-next="fade"
      >
        <q-tab-panel name="post" class="bg-grey-2">
          <div>
            <div class="text-h6">Some Post Title</div>
            <div class="q-mt-lg">포스트 내용</div>
          </div>
        </q-tab-panel>

        <q-tab-panel name="archive" class="bg-grey-2">
          <div>
            아카이브
          </div>
        </q-tab-panel>
      </q-tab-panels>
    </div>

  </q-page>
</template>

<script>
export default {
  name: 'Quasar',
  components: {
    PageTitle: () => import('components/PageTitle.vue'),
    SectionTitle: () => import('components/SectionTitle.vue')
  },
  data () {
    return {
      paddingClass: this.$q.screen.lt.md ? 'q-pa-sm' : 'q-pa-md',
      tab: 'post'
    }
  }
}
</script>
