  import Vue from 'vue'
  import Router from 'vue-router'

  import SliderComp from '@/components/SliderComp'
  import SchedaFilm from '@/components/SchedaFilm'
  import SelezioneData from '@/components/SelezioneData'
  import SelezionePosto from '@/components/SelezionePosto'
  import SelezionePagamento from '@/components/SelezionePagamento'
  import DownloadTicket from '@/components/DownloadTicket'
  import TheTariffe from '@/components/TheTariffe'
  import TheContatti from '@/components/TheContatti'




  Vue.use(Router)

  export default new Router({
    routes: [{
        path: '/',
        name: 'SliderComp',
        component: SliderComp,
      },
      {
        path: '/schedafilm',
        name: 'SchedaFilm',
        component: SchedaFilm,
      },
      {
        path: '/selezionedata',
        name: 'SelezioneData',
        component: SelezioneData,
      },
      {
        path: '/selezioneposto',
        name: 'SelezionePosto',
        component: SelezionePosto,
      },
      {
        path: '/selezionepagamento',
        name: 'SelezionePagamento',
        component: SelezionePagamento,
      },
      {
        path: '/DownloadTicket',
        name: 'DownloadTicket',
        component: DownloadTicket,
      },
      {
        path: '/tariffe',
        name: 'TheTariffe',
        component: TheTariffe,
      },
      {
        path: '/contact',
        name: 'TheContatti',
        component: TheContatti,
      },


    ]
  })