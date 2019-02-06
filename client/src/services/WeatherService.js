import Api from '@/services/Api'

export default {
  fetchWeather () {
    return Api().get('weather')
  }
}
