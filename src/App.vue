<style lang="stylus" src="./global.styl"></style>

<template>
<div id="app" :class="{ app: true, dark: isDark }">
    <div class="header">
        <span class="message-container">
            <transition name="slide-up">
                <span class="message" :key="message">{{ message }}</span>
            </transition>
        </span>
        <a class="button components"
            :class="{ active: tab === 'match'}"
            title="Switch to Components">
            <i class="material-icons">device_hub</i>
            <span class="pane-name">Components</span>
        </a>
        <a class="button refresh"
            @click="refresh"
            title="Force Refresh">
            <i class="material-icons" ref="refresh">refresh</i>
            <span class="pane-name">Refresh</span>
        </a>
        <span class="active-bar"></span>
    </div>
    <match class="container"></match>
</div>
</template>

<script>
import matchContent from 'COMPONENTS/matchContent/matchContent.vue';

export default {
    name: 'app',
    data () {
        return {
            message: 'match',
            tab: 'match',
            isDark: typeof chrome !== 'undefined' &&
            typeof chrome.devtools !== 'undefined' &&
            chrome.devtools.panels.themeName === 'dark'
        }
    },
    components: {
        match: matchContent 
    },
    methods: {
        refresh () {
            const refreshIcon = this.$refs.refresh;
            refreshIcon.style.animation = 'none';
            // flush按钮旋转
            MATCHBRIDGE.once('flush', () => {
                refreshIcon.style.animation = 'rotate 1s'
            });
            MATCHBRIDGE.send('flush');
        },
        updateActiveBar () {
            const activeButton = this.$el.querySelector('.button.active');
            const activeBar = this.$el.querySelector('.active-bar');
            activeBar.style.left = activeButton.offsetLeft + 'px';
            activeBar.style.width = activeButton.offsetWidth + 'px';
        }
    },
    mounted () {
        this.updateActiveBar();
        window.addEventListener('resize', this.updateActiveBar);
    },
    destroyed () {
        window.removeEventListener('resize', this.updateActiveBar);
    }
}
</script>

<style lang="stylus" scoped>
@import "./variables"
.app
  width 100%
  height 100%
  user-select none
  background-color $background-color
  display flex
  flex-direction column
  h1
    color #42b983
  &.dark
    background-color $dark-background-color
.header
  display flex
  align-items center
  border-bottom 1px solid $border-color
  box-shadow 0 0 8px rgba(0, 0, 0, 0.15)
  font-size 14px
  position relative
  .app.dark &
    border-bottom 1px solid $dark-border-color
.message-container
  height 1em
  cursor default
.message
  color $active-color
  transition all .3s ease
  position absolute
.button
  padding 10px
  display flex
  align-items center
  cursor pointer
  position relative
  border-bottom-color transparent
  background-color $background-color
  color #888
  transition color .35s ease
  .app.dark &
    background-color $dark-background-color
  &:hover
    color #555
  &.active
    color $active-color
  &:first-of-type
    margin-left auto
  .material-icons
    font-size 20px
    margin-right 5px
    color inherit
  .pane-name
    display none
  @media (min-width: $wide)
    padding-right 20px
    padding-left 20px
    .pane-name
      display block
  @media (min-height: $tall)
    padding-top 20px
    padding-bottom 20px
.container
  overflow hidden
  flex 1
$event-count-bubble-size = 18px
.event-count
  background-color $active-color
  color #fff
  border-radius 50%
  width $event-count-bubble-size
  height $event-count-bubble-size
  text-align center
  padding-top 4px
  font-size $event-count-bubble-size * 0.5
  position absolute
  right 0
  top 12px
  .app.dark &
    background-color $dark-background-color
.active-bar
  position absolute
  bottom 0
  width 0px
  height 3px
  background-color $active-color
  transition all .32s cubic-bezier(0,.9,.6,1)
</style>
