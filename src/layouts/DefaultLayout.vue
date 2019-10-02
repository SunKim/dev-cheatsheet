<template>
  <q-layout view="hHh Lpr fff">
    <q-header reveal elevated class="bg-deep-purple-8 text-white">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />

        <q-toolbar-title>
          <a href="#/" class="q-link text-blue-grey-1">
            <q-avatar>
              <img
                src="statics/icons/favicon-96x96.png"
                style="margin-top:2px;"
              />
            </q-avatar>
            Developer Cheat-Sheet
          </a>
        </q-toolbar-title>

        <!-- <div>
          <a target="_blank" class="ellipsis q-link text-purple-1" href="mailto:sjmarine97@gmail.com">
            sjmarine97@gmail.com
          </a>
        </div> -->
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-blue-grey-1"
    >
      <q-list>
        <q-item-label header>Category</q-item-label>

        <!-- 일반 q-item 사용시 -->
        <!-- <q-item clickable tag="a" href="#/os">
          <q-item-section avatar>
            <q-icon name="fas fa-server" size="1.4" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Operating System</q-item-label>
            <q-item-label caption>Linux</q-item-label>
          </q-item-section>
        </q-item> -->

        <q-expansion-item
          expand-separator
          label="Operating System"
          icon="fas fa-server"
          caption="Linux Ubuntu, MacOs"
        >
          <q-item
            to="/os/ubuntu"
            exact
            active-class="router-sub-active"
            clickable
          >
            <q-item-section>
              <div class="text-subtitle2 pl60 text-blue-grey">
                Ubuntu(16.04)
              </div>
            </q-item-section>
          </q-item>
          <q-item
            to="/os/macos"
            exact
            active-class="router-sub-active"
            clickable
          >
            <q-item-section>
              <div class="text-subtitle2 pl60 text-blue-grey">Mac OS</div>
            </q-item-section>
          </q-item>
        </q-expansion-item>

        <q-expansion-item
          expand-separator
          label="Database"
          icon="fas fa-database"
          caption="MariaDB"
        >
          <q-item
            to="/db/mariadb"
            exact
            active-class="router-sub-active"
            clickable
          >
            <q-item-section>
              <div class="text-subtitle2 pl60 text-blue-grey">MariaDB</div>
            </q-item-section>
          </q-item>
        </q-expansion-item>

        <q-expansion-item
          expand-separator
          label="Front-End"
          icon="fas fa-atom"
          caption="HTML5, CSS, ES6, Vue"
        >
          <q-item
            to="/front/html5"
            exact
            active-class="router-sub-active"
            clickable
          >
            <q-item-section>
              <div class="text-subtitle2 pl60 text-blue-grey">HTML5</div>
            </q-item-section>
          </q-item>
          <q-item
            to="/front/css3"
            exact
            active-class="router-sub-active"
            clickable
          >
            <q-item-section>
              <div class="text-subtitle2 pl60 text-blue-grey">CSS3</div>
            </q-item-section>
          </q-item>
          <q-item
            to="/front/es6"
            exact
            active-class="router-sub-active"
            clickable
          >
            <q-item-section>
              <div class="text-subtitle2 pl60 text-blue-grey">
                ECMA Script 6(2015)
              </div>
            </q-item-section>
          </q-item>
          <q-item
            to="/front/vuejs"
            exact
            active-class="router-sub-active"
            clickable
          >
            <q-item-section>
              <div class="text-subtitle2 pl60 text-blue-grey">Vue.js</div>
            </q-item-section>
          </q-item>
        </q-expansion-item>

        <q-expansion-item
          expand-separator
          label="Back-End"
          icon="fas fa-hdd"
          caption="CI, Laravel, Spring"
        >
          <q-item
            to="/back/ci"
            exact
            active-class="router-sub-active"
            clickable
          >
            <q-item-section>
              <div class="text-subtitle2 pl60 text-blue-grey">CodeIgniter</div>
            </q-item-section>
          </q-item>
          <q-item
            to="/back/laravel"
            exact
            active-class="router-sub-active"
            clickable
          >
            <q-item-section>
              <div class="text-subtitle2 pl60 text-blue-grey">Laravel</div>
            </q-item-section>
          </q-item>
          <q-item
            to="/back/spring"
            exact
            active-class="router-sub-active"
            clickable
          >
            <q-item-section>
              <div class="text-subtitle2 pl60 text-blue-grey">Spring</div>
            </q-item-section>
          </q-item>
        </q-expansion-item>

        <q-expansion-item
          expand-separator
          label="Multi-Platform"
          icon="fas fa-blender"
          caption="Quasar, Flutter, React Native"
        >
          <q-item
            to="/hybrid/quasar"
            exact
            active-class="router-sub-active"
            clickable
          >
            <q-item-section>
              <div class="text-subtitle2 pl60 text-blue-grey">Quasar</div>
            </q-item-section>
          </q-item>
          <q-item
            to="/hybrid/flutter"
            exact
            active-class="router-sub-active"
            clickable
          >
            <q-item-section>
              <div class="text-subtitle2 pl60 text-blue-grey">Flutter</div>
            </q-item-section>
          </q-item>
          <q-item
            to="/hybrid/react"
            exact
            active-class="router-sub-active"
            clickable
          >
            <q-item-section>
              <div class="text-subtitle2 pl60 text-blue-grey">React Native</div>
            </q-item-section>
          </q-item>
        </q-expansion-item>

        <q-expansion-item
          expand-separator
          label="Tools"
          icon="fas fa-tools"
          caption="Chrome Dev, Git, Heroku"
        >
          <q-item
            to="/tool/chromedev"
            exact
            active-class="router-sub-active"
            clickable
          >
            <q-item-section>
              <div class="text-subtitle2 pl60 text-blue-grey">
                Chrome Developer Tool
              </div>
            </q-item-section>
          </q-item>
          <q-item
            to="/tool/git"
            exact
            active-class="router-sub-active"
            clickable
          >
            <q-item-section>
              <div class="text-subtitle2 pl60 text-blue-grey">
                Git &amp; Github
              </div>
            </q-item-section>
          </q-item>
          <q-item
            to="/tool/heroku"
            exact
            active-class="router-sub-active"
            clickable
          >
            <q-item-section>
              <div class="text-subtitle2 pl60 text-blue-grey">Heroku</div>
            </q-item-section>
          </q-item>
          <q-item
            to="/tool/etc"
            exact
            active-class="router-sub-active"
            clickable
          >
            <q-item-section>
              <div class="text-subtitle2 pl60 text-blue-grey">
                ETC (Serveo, ngrok)
              </div>
            </q-item-section>
          </q-item>
        </q-expansion-item>

        <q-expansion-item
          expand-separator
          label="Cloud Service"
          icon="fas fa-cloud"
          caption="Firebase"
        >
          <q-item
            to="/cloud/firebase"
            exact
            active-class="router-sub-active"
            clickable
          >
            <q-item-section>
              <div class="text-subtitle2 pl60 text-blue-grey">FireBase</div>
            </q-item-section>
          </q-item>
        </q-expansion-item>

        <q-item clickable tag="a" href="#/security">
          <q-item-section avatar>
            <q-icon name="fas fa-unlock-alt" size="1.4rem" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Security</q-item-label>
            <q-item-label caption>OWASP</q-item-label>
          </q-item-section>
        </q-item>

        <q-separator spaced />

        <q-item clickable tag="a" href="#/aboutme">
          <q-item-label class="text-purple-4">About Me</q-item-label>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <!-- Quasar transition 사용. 2개가 동시에 transtion되므로 mode="out-in" 써줘야함 -->
      <transition
        appear
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
        mode="out-in"
      >
        <keep-alive>
          <router-view />
        </keep-alive>
      </transition>
    </q-page-container>

    <q-footer bordered class="bg-blue-grey-10 text-white">
      <q-toolbar>
        <q-toolbar-title class="text-subtitle2 tr">
          Powered by
          <q-avatar size="xs">
            <img src="statics/icons/quasar-logo.svg" />
          </q-avatar>
          Quasar {{ $q.version }}
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',

  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>

<style scoped>
.router-sub-active {
  background: #cfd8dc;
  /* background: #b0bec5; */
}
</style>
