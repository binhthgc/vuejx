<template>
  <v-app>
    <v-navigation-drawer temporary v-model="sideNav">
      <v-list>
        <v-list-tile
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar class="card">
      <v-toolbar-side-icon
        @click.stop="sideNav = !sideNav"
        class="hidden-sm-and-up "></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer"> 
        <img src="./assets/logo.png" style="width: 36px; border-radius: 50%;"/> 
        <label style="margin-top: -40px; display: block; margin-left: 40px; cursor: pointer">VueJX</label>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          flat
          v-for="item in menuTopItems"
          :key="item.title"
          :to="item.link">
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
         <v-btn
          flat
          href="https://github.com/binhthgc/vuejx">
          <i class="fa icon icon--left fa-github"></i> Github
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <router-view></router-view>
      
      <v-footer class="card">
          <div style="width: 100%; text-align: center;">
                Made with
                <v-icon class="red--text">favorite</v-icon>
                by <a href="https://Vuejx.heroku.heroku.com" target="_blank">VueJX</a>
                and <a href="https://github.com/binhthgc">binhthgc</a>
          </div>
        </v-footer>
    </main>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        sideNav: false,
        menuItems: [
          { icon: 'fa-book', title: 'Documentation', link: '/documention' },
          { icon: 'room', title: 'Organize Meetup', link: '/meetup/new' },
          { icon: 'person', title: 'Profile', link: '/profile' },
          { icon: 'face', title: 'Sign up', link: '/signup' },
          { icon: 'lock_open', title: 'Sign in', link: '/signin' }
        ],
        menuTopItems: [
          { icon: 'fa-book', title: 'Documentation', link: '/documention' }
        ]
      }
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
