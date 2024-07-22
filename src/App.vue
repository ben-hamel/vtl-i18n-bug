<script setup>
import { useI18n } from 'vue-i18n'
import LocalTranslation from './components/LocalTranslation.vue'

const { t, locale } = useI18n()
</script>

<template>
  <h1>Vue I18n Testing Issue</h1>
  <p>{{ t('hello') }}</p>
  <LocalTranslation />

  <select v-model="locale">
    <option value="en">English</option>
    <option value="fr">French</option>
  </select>
</template>
