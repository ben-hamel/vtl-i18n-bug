import { expect, test } from 'vitest'
import { render } from '@testing-library/vue'
import App from './App.vue'
import i18n from './i18n'

test('renders  french translations', async () => {
  i18n.global.locale.value = 'fr'
  const { getByText } = render(App, {
    global: {
      plugins: [i18n]
    }
  })

  expect(getByText('Bonjour - Global')).toBeTruthy()
  expect(getByText('Bonjour - Local')).toBeTruthy()
})

test('renders local english translations', async () => {
  i18n.global.locale.value = 'en'
  const { getByText } = render(App, {
    global: {
      plugins: [i18n]
    }
  })

  expect(getByText('Hello - Global')).toBeTruthy()
  expect(getByText('Hello - local')).toBeTruthy()
})

test('renders local english translations', async () => {
  i18n.global.locale.value = 'en'
  const { getByText } = render(App, {
    global: {
      plugins: [i18n]
    }
  })

  expect(getByText('Hello - Global')).toBeTruthy()
  expect(getByText('Hello - local')).toBeTruthy()
})
