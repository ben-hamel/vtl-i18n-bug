import { expect, test } from 'vitest'
import { render } from '@testing-library/vue'
import LocalTranslation from '../components/LocalTranslation.vue'
import i18n from '../i18n'

test('renders local french translations', async () => {
  i18n.global.locale.value = 'fr'
  const { getByText } = render(LocalTranslation, {
    global: {
      plugins: [i18n]
    }
  })

  expect(getByText('Bonjour - Local')).toBeTruthy()
})

test('renders local english translations', async () => {
  i18n.global.locale.value = 'en'
  const { getByText } = render(LocalTranslation, {
    global: {
      plugins: [i18n]
    }
  })

  expect(getByText('Hello - local')).toBeTruthy()
})
