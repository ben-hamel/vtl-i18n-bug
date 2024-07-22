<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n({
  messages: {
    en: {
      hello: 'Hello - local'
    },
    fr: {
      hello: 'Bonjour - Local'
    }
  }
})
</script>

<template>
  <h2>{{ t('hello') }}</h2>
</template>
