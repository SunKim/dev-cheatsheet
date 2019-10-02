<template>
  <q-page :class="paddingClass">
    <page-title>Git &amp; Github</page-title>

    <section-title>Config</section-title>
    <section>
      <p class="p-title">Global 설정 확인</p>
      <p class="p-content shell-prompt">git config --global --list</p>

      <p class="p-title">Global 설정 추가</p>
      <p class="p-content shell-prompt">git config --global user.name "SunKim"</p>
      <p class="p-content shell-prompt">git config --global user.email sjmarine97@gmail.com</p>
      <p class="p-content shell-prompt">git config --global user.password "sj0374Tjs@"</p>
    </section>

    <section-title>Clone</section-title>
    <section>
      <p class="p-title">Project root의 상위에서 Clone</p>
      <p class="p-content shell-prompt">git clone &lg;github 주소&gt;</p>
    </section>

    <section-title>Pull</section-title>
    <section>
      <p class="p-title">Remote와의 차이 확인</p>
      <p class="p-content shell-prompt">git diff master github/master</p>

      <p class="p-title">Pull</p>
      <p class="p-content shell-prompt">git pull --rebase origin master</p>
      <p class="p-cf">rebase :
        <a target="_blank" href="https://victorydntmd.tistory.com/279">https://victorydntmd.tistory.com/279</a>
        (jsfiddle의 set as base와 비슷)<br />
        만약 pull하기 전 나도 변경한게 있으면 --rebase가 실패하므로 git pull origin master 로 우선 pull<br />
        그후 git push origin master로 내걸 push
      </p>
    </section>

    <section-title>Push</section-title>
    <section>
      <p class="p-title">github에서 repo 생성</p>
      <p class="p-content">readme, .gitignore, license 다 없이 (안그럼 최초 push할때 충돌)</p>
    </section>
    <section>
      <p class="p-title">Project root에서 Git init</p>
      <p class="p-content shell-prompt">git init</p>
    </section>
    <section>
      <p class="p-title">모든 파일 staging</p>
      <p class="p-content shell-prompt">git add *</p>
    </section>
    <section>
      <p class="p-title">Local commit</p>
      <p class="p-content shell-prompt">git commit -m "initial commit"</p>
    </section>
    <section>
      <p class="p-title">Remote 추가</p>
      <p class="p-content shell-prompt">git remote add <b>github</b> <i>&lt;github 주소&gt;</i></p>
    </section>
    <section>
      <p class="p-title">Push</p>
      <p class="p-content shell-prompt">git push <b>github</b> master</p>
    </section>

    <section-title>기타</section-title>
    <section>
      <p class="p-title">git clone vs git pull vs git fetch</p>
      <p class="p-content">
        git clone : .git directory를 포함한 모든 파일을 local repo로 복사<br />
        git fetch : 최신 head만 내 local로 fetch(끌어만 옴. merge 필요)<br />
        git pull : 최신 head만 내 local로 fetch + merge
      </p>
    </section>

    <p class="p-title"></p>
    <p class="p-content shell-prompt"></p>
  </q-page>
</template>

<script>
export default {
  name: 'Git',
  components: {
    PageTitle: () => import('components/PageTitle.vue'),
    SectionTitle: () => import('components/SectionTitle.vue')
  },
  data () {
    return {
      paddingClass: this.$q.screen.lt.md ? 'q-pa-sm' : 'q-pa-md'
    }
  }
}
</script>
