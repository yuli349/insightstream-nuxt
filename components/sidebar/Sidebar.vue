<template>
  <div class="sidebar">
    <ul class="sidebar__menu">
      <li class="sidebar__menu-item">
        <nuxt-link class="sidebar__menu-link sidebar__menu-link--album"
                     to="#">
          <i class="icon"></i>
        </nuxt-link>
      </li>
      <li class="sidebar__menu-item">
        <nuxt-link class="sidebar__menu-link sidebar__menu-link--user"
                     to="#">
          <i class="icon"></i>
        </nuxt-link>
      </li>
      <li class="sidebar__menu-item">
        <nuxt-link class="sidebar__menu-link sidebar__menu-link--mail"
                     to="#">
          <i class="icon"></i>
        </nuxt-link>
      </li>
      <li class="sidebar__menu-item">
        <nuxt-link class="sidebar__menu-link sidebar__menu-link--messages-square"
                     to="#">
          <i class="icon"></i>
        </nuxt-link>
      </li>
      <li class="sidebar__menu-item">
        <nuxt-link class="sidebar__menu-link sidebar__menu-link--folder-clock"
                     to="#">
          <i class="icon"></i>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
@import './Sidebar.scss';
</style>
