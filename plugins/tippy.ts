import VueTippy from 'vue-tippy'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/themes/light-border.css'
import 'tippy.js/animations/shift-away.css'


// Adapted by:
// https://github.com/KABBOUCHI/vue-tippy/issues/273#issuecomment-1357915054
const onlyOneVisible = {
  name: 'onlyOneVisible',
  defaultValue: true,
  fn() {
    return {
      onShow() {
        [...document.querySelectorAll('[data-tippy-root]')].forEach((e) => e._tippy?.hide())
      },
    }
  },
}

// Adapted by:
// https://atomiks.github.io/tippyjs/v6/plugins/#hideonesc
const hideOnEsc = {
  name: 'hideOnEsc',
  defaultValue: true,
  fn({ hide }: { hide: () => void }) {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        hide()
      }
    }

    return {
      onShow() {
        document.addEventListener('keydown', onKeyDown)
      },
      onHide() {
        document.removeEventListener('keydown', onKeyDown)
      },
    }
  },
}

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(VueTippy, {
    defaultProps: {
      plugins: [onlyOneVisible, hideOnEsc],
    },
  })
})
