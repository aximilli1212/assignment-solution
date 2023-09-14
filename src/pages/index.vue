<script setup lang="ts" generic="T extends any, O extends any">
import { useLogin } from '~/hooks/useLogin'

defineOptions({
  name: 'IndexPage',
})

const {
  state: {
    email,
    password,
    isValid,
    isValidEmail,
    isValidPassword,
  },
  actions:
    { submitForm },
} = useLogin()
</script>

<template>
  <div flex justify-center>
    <div mt-10 rounded-md bg-white px-8 py-6 shadow-lg>
      <div i-carbon-campsite inline-block bg-teal-600 text-4xl />
      <p>
        <a rel="noreferrer" href="https://github.com/antfu/vitesse-lite" target="_blank">
          Login Page
        </a>
      </p>
      <p>
        <em text-sm op75>Terramate Assignment</em>
      </p>

      <div py-10 />

      <TheInput
        v-model="email"
        placeholder="Email"
        autocomplete="false"
        :error="!isValidEmail"
        :error-message="!isValid ? 'Invalid email.' : ''"
      />
      <br>

      <TheInput
        v-model="password"
        placeholder="Password"
        autocomplete="false"
        :is-password="true"
        :error="!isValidPassword"
        :error-message="!isValid ? 'Password must be at least 32 characters.' : ''"
        @keydown.enter="submitForm()"
      />

      <div mt-2>
        <button
          class="m-3 text-sm btn"
          :disabled="!isValid"
          @click.prevent="submitForm()"
        >
          Submit
        </button>
      </div>
    </div>
  </div>
</template>
