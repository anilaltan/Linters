import axios from 'axios'

import { API_URL, isDev } from '@/constants'

const client = axios.create({
  baseURL: API_URL
})

export const request = (options) => {
  const onSuccess = (response) => {
    if (isDev) {
      // eslint-disable-next-line no-console
      console.debug(
        'Response Successfull',
        'URL: ',
        response.config.url,
        response
      )
    }

    return response
  }

  const onError = (error) => {
    if (isDev) {
      // eslint-disable-next-line no-console
      console.error('Response Failed', error)
    }

    return Promise.reject(error)
  }

  return client(options).then(onSuccess).catch(onError)
}
