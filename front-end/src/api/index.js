// The one place pages get data from. Import it as: import { api } from '../../api'
// Functions in httpApi (the real back-end) replace the mock versions with the same name, so the app
// moves to the back-end one function at a time. By the end of Sprint 2, everything comes from httpApi.
import { httpApi } from './httpApi'
import { mockApi } from './mockApi'

export const api = { ...mockApi, ...httpApi }
