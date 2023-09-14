import { computed, ref } from 'vue'
import { validEmail } from '~/utils/validEmail'

interface LoginValues {
  email: Ref<string>
  password: Ref<string>
  isValid?: ComputedRef<boolean>
  isValidEmail?: ComputedRef<boolean>
  isValidPassword?: ComputedRef<boolean>
}

interface LoginActions {
  submitForm: () => void
}

export interface UseLogin {
  state: LoginValues
  actions: LoginActions
}

export function useLogin(): UseLogin {
  const email = ref('')
  const password = ref('')
  const isValidEmail = computed(() => {
    return validEmail(email.value)
  })
  const isValidPassword = computed(() => {
    return password.value.length >= 32
  })

  const isValid = computed(() => {
    return isValidEmail.value && isValidPassword.value
  })

  const submitForm = async () => {
    if (isValid.value) {
      // call API
    }
  }

  return {
    state: {
      email,
      password,
      isValid,
      isValidEmail,
      isValidPassword,
    },
    actions: {
      submitForm,
    },
  }
}
