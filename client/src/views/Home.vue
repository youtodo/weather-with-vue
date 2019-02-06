<template>
  <div class="home">
    <div class="section section1">
      <div class="top">
        <div class="top__city">
          <div class="top__city__data my-city">
            <div class="my-city">
              <div
                class="city-selection"
                :show="isActiveGradus"
              >
                <div class="city-selection__city">Петропавловск Камчатский</div>
                <div
                  @click="changeCF()"
                  class="city-selection__ok"
                >OK</div>
              </div>
              <div class="my-city__value">Омск</div>
            </div>
          </div>
        </div>
        <div
          class="top__gradus"
        >
          <div
            class="top__gradus__element"
            @click="changeCF()"
          >
          <div class="top__gradus__element__o">º</div>
          <div
            class="top__gradus__element__c"
            :class="{'active-gradus': isActiveGradus}"
          >
            C
          </div>
          <div
            class="top__gradus__element__f"
            :class="{'active-gradus': !isActiveGradus}"
          >
            F
          </div>

          </div>
        </div>
      </div>
      <div class="change">Сменить город</div>
      <div class="icon"> <img src="@/assets/Path2.svg" alt=""> </div>
      <div class="my">Мое местоположение</div>
    </div>
    <div class="section">
      <div class="center">
        <div class="center__weather">
          <div class="center__weather__icon"><img src="@/assets/sunny.png" alt=""></div>
          <div class="center__weather__value">19º</div>
          <div class="center__weather__description">Преимущественно солнечно</div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="data-weather">
        <div class="data-weather__block">
          <div class="data-weather__block__title">Ветер</div>
          <div class="data-weather__block__value">5 м/c, западный</div>
        </div>
        <div class="data-weather__block">
          <div class="data-weather__block__title">Давление</div>
          <div class="data-weather__block__value">752 мм рт. ст.</div>
        </div>
        <div class="data-weather__block">
          <div class="data-weather__block__title">Влажность</div>
          <div class="data-weather__block__value">60%</div>
        </div>
        <div class="data-weather__block">
          <div class="data-weather__block__title">Вероятность дождя</div>
          <div class="data-weather__block__value">10%</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import WeatherService from '@/services/WeatherService'
// import fake from './data.json'

export default {
  
  name: 'weather',
  data () {
    return {
      // fake: fake,
      isActiveGradus: true,
      yourCity: {
        id: '',
        name: '',
        view: true
      },
      weather: []
    }
  },
  mounted () {
    this.getWeathers()
  },
  methods: {
    async getWeathers () {
      const response = await WeatherService.fetchWeather()
      this.weather = response.data
    },
    changeCF: function() {
      this.isActiveGradus? this.isActiveGradus=false:this.isActiveGradus=true
    }
  }
}
</script>
<style lang="sass" scoped>
.section
.section1
  margin-bottom: 100px
.top
  display: flex
  // flex-wrap: nowrap    
  justify-content: space-between
  &__city
    // background-color: green    
    flex: 0 0 450px
    order: -1
    padding: 0px
  &__gradus
    // background-color: green
    flex: 75px 0 130px
    justify-content: space-between
    order: -1
    padding: 0 10px  
    &__element
      display: inline-block
      min-width: 94px
      min-height: 29px
      // background-color: #f0f
      padding: 10px
      color: #6DA3F0
      &:hover
        cursor: pointer
      &__o
        display: inline-block
        width: 17px
      &__c, &__f
        display: inline-block
        width: 30px
        border: 1px solid #92BAF4
        text-align: center        
      &__c
        border-radius: 8px 0px 0px 8px
        border-right: 0px
      &__c 
      &__f
        border-radius: 0px 8px 8px 0px
        border-left: 0px
.my-city
  margin-left: 0px
  &__value
    font-size: 50px
    color: #fff
.change, .icon, .my
  color: #B6D1F7
  display: inline-block
  font-size: 18px
  font-style: normal
  font-weight: normal
  line-height: 22px
  font-size: 18px
.change
  margin-right: 30px
.icon img
  width: 30px
  height: 20px
  margin-right: 14px
  vertical-align: -5px


/*BEGIN section2*/ 

.center
  display: flex
  justify-content: space-around
  align-content: center   
  margin-bottom: 100px
  &__weather  
    flex: 0px 0px 450px
    order: -1  
    // background-color: #f0f
    &__value, &__icon
      display: inline-block
    &__value
      font-family: Proxima Nova Condensed
      font-style: normal
      font-weight: 300
      line-height: normal
      font-size: 180px
    &__description
      font-size: 25px


/*END section2*/ 

/*BEGIN section3*/ 
.data-weather
  display: flex
  flex-wrap: wrap    
  align-content: center
  justify-content: space-between
  align-items: flex-end
  &__block    
    order: -1
    min-width: 100px
    margin: 20px 0px
    &__title
      color: #B6D1F7
    &__value
      color: #fff



/*END section3*/ 

    
/*BEGIN elements*/
.home
  font-family: 'Proxima Nova',sans-serif
.active-gradus
  background-color: #6DA3F0
  color: #fff
  font-weight: bold
.city-selection
  display: inline-block
  display: none
  background-color: #fff
  position: absolute
  padding: 25px  
  margin-top: 11px
  min-width: 500px
  &__city, &__ok
    color: #000
    display: inline-block
    line-height: 37px
    font-size: 30px
  &__ok
    color: #1086FF
    margin-left: 70px

/*END elements*/ 
</style>