// src/stores/session.ts

import { defineStore } from 'pinia'
import axios from 'axios'

export interface User {
  readonly id: number
  email: string
  name: string
  role: boolean
  avatar?: string
}

export interface UserState {
  loggedIn: boolean
  value: User
  status: 'idle' | 'loading' | 'failed'
  error: string
}

const initialState: UserState = {
  loggedIn: false,
  value: {} as User,
  status: 'idle',
  error: ''
}

export const useSessionStore = defineStore('session', {
  state: () => initialState,
  actions: {
    async fetchUser() {
      this.status = 'loading'
      try {
        const response = await axios.get('/sessions')
        this.status = 'idle'
        this.loggedIn = true
        this.value = response.data.user
        this.error = ''
      } catch (error: any) {
        this.status = 'idle'
        this.loggedIn = false
        this.value = {} as User
        this.error = error.response?.data || error.message
      }
    }
  }
})
