import axios from 'axios'

export abstract class Rest {
  protected static _client = axios.create({
    baseURL: process.env['NEXT_PUBLIC_API_BASE_URL'],
  })
}
