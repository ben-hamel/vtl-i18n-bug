import { mount } from '@vue/test-utils'
import LocalTranslation from '../components/LocalTranslation.vue'
import { expect, test } from 'vitest'
import i18n from '../i18n'

test('renders French', () => {
  i18n.global.locale.value = 'fr'
  const wrapper = mount(LocalTranslation, {
    global: {
      plugins: [i18n]
    }
  })

  expect(wrapper.text()).toContain('Bonjour - local')
})

test('renders English', () => {
  i18n.global.locale.value = 'en'
  const wrapper = mount(LocalTranslation, {
    global: {
      plugins: [i18n]
    }
  })

  expect(wrapper.text()).toContain('Hello - local')
})
