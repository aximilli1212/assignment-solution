import { computed, ref } from 'vue'
import { validEmail } from '~/utils/validEmail'

interface User {
  id: number
  name: string
  email: string
  role: 'user' | 'admin'
  createdAt: Date
}
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

interface LoginResponse {
  user: User
  token: string
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
    // Send the data to the fake backend
      try {
        const response = await fetch('/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        })

        // eslint-disable-next-line unused-imports/no-unused-vars
        const data = await response.json() as LoginResponse

        // Success handling
      }
      catch (error) {

        // Error handling

      }
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
