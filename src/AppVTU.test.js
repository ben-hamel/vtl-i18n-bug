import { mount } from '@vue/test-utils'
import App from './App.vue'
import { expect, test } from 'vitest'
import i18n from './i18n'

test('renders French', () => {
  i18n.global.locale.value = 'fr'
  const wrapper = mount(App, {
    global: {
      plugins: [i18n]
    }
  })

  expect(wrapper.text()).toContain('Bonjour - Global')
  expect(wrapper.text()).toContain('Bonjour - Local')
})

test('renders English', () => {
  i18n.global.locale.value = 'en'
  const wrapper = mount(App, {
    global: {
      plugins: [i18n]
    }
  })

  expect(wrapper.text()).toContain('Hello - Global')
  expect(wrapper.text()).toContain('Hello - local')
})
