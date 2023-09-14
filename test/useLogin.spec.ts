// useLogin.spec.ts

import { describe, expect, it } from 'vitest'
import { useLogin } from '~/hooks/useLogin'

describe('useLogin', () => {
  it('should validate email', () => {
    const { state } = useLogin()

    state.email.value = 'invalid'
    expect(state.isValidEmail.value).toBe(false)

    state.email.value = 'valid@email.com'
    expect(state.isValidEmail.value).toBe(true)
  })

  it('should validate password', () => {
    const { state } = useLogin()

    state.password.value = 'short'
    expect(state.isValidPassword.value).toBe(false)

    state.password.value = 'longerpasswor23423423423234234234234234234234234d123'
    expect(state.isValidPassword.value).toBe(true)
  })

  it('should submit form', async () => {
    const { actions, state } = useLogin()

    state.email.value = 'test@email.com'
    state.password.value = 'validpassword123'

    await actions.submitForm()

    // Assert form submitted successfully
  })
})
