<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <h1>Vue I18n Testing Issue</h1>
  <p>{{ t('hello') }}</p>
</template>
