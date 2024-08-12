<template>
  <nav class="header">
    <router-link to="/"><font-awesome-icon :icon="['fas', 'map']" /> Season travel</router-link>
    <div class="menu">
      <router-link to="/" class="active">Home</router-link>
      <router-link to="/">ABOUT</router-link>
      <router-link to="/">THISLINK</router-link>
      <router-link to="/">JUST</router-link>
      <router-link to="/">decorate</router-link>
    </div>
  </nav>
  <router-view/>
</template>

<style lang="scss">
@import "./assets/all";

.header{
  position: absolute;
  z-index: 50;
  top: 20px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 20px;

  a{
    display: block;
    color: white;
    text-transform: uppercase;
  }

  .menu{
    display: flex;

    a{
      margin-left: 20px;
    }
    .active{
      position: relative;

      &::before{
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        content: '';
        height: 2px;
        width: 30px;
        background: rgb(255, 196, 0);
      }
    }
  }
}
</style>
