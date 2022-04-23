<template>
  <div class="navbar">
    <hamburger :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" />

    <breadcrumb class="breadcrumb-container" />

    <div class="right-menu">
      <span class="username">欢迎您~</span>
<!--      <el-dropdown  @command="handleCommand" class="avatar-container" trigger="click">-->
<!--        <el-dropdown-menu slot="dropdown" class="user-dropdown">-->
<!--          <el-dropdown-item command="personal">个人中心</el-dropdown-item>-->
<!--          <el-dropdown-item command="signOut">退出</el-dropdown-item>-->
<!--        </el-dropdown-menu>-->
<!--      </el-dropdown>-->
    </div>
  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'
import {mapActions, mapGetters} from "vuex";

export default {
  components: {
    Breadcrumb,
    Hamburger
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar',
      'adminInfo'
    ])
  },
  methods: {
    ...mapActions(["getAdminInfos"]),
    toggleSideBar() {
      this.$store.dispatch('toggleSideBar')
    },
  },
  mounted () {
  },
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color:transparent;

    &:hover {
      background: rgba(0, 0, 0, .025)
    }
  }
}
</style>
