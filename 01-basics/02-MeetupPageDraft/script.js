import Vue from './vue.esm.browser.js';

/** URL адрес API */
const API_URL = 'https://course-vue.javascript.ru/api';

/** ID митапа для примера; используйте его при получении митапа */
const MEETUP_ID = 6;

/**
 * Возвращает ссылку на изображение митапа для митапа
 * @param meetup - объект с описанием митапа (и параметром meetupId)
 * @return {string} - ссылка на изображение митапа
 */
function getMeetupCoverLink(meetup) {
  return `${API_URL}/images/${meetup.imageId}`;
}

/**
 * Словарь заголовков по умолчанию для всех типов элементов программы
 */
const agendaItemTitles = {
  registration: 'Регистрация',
  opening: 'Открытие',
  break: 'Перерыв',
  coffee: 'Coffee Break',
  closing: 'Закрытие',
  afterparty: 'Afterparty',
  talk: 'Доклад',
  other: 'Другое',
};

/**
 * Словарь иконок для для всех типов элементов программы.
 * Соответствует имени иконок в директории /assets/icons
 */
const agendaItemIcons = {
  registration: 'key',
  opening: 'cal-sm',
  talk: 'tv',
  break: 'clock',
  coffee: 'coffee',
  closing: 'key',
  afterparty: 'cal-sm',
  other: 'cal-sm',
};

export const app = new Vue({
  el: '#app',

  data() {
    return {
      loading: false,
      meetups: null,
      meetupCover: null,
    };
  },

  mounted() {
    this.getData();
    // Требуется получить данные митапа с API
  },

  watch: {
    meetups: function () {
      this.loading = true;
    },
  },

  computed: {
    cover() {
      return this.meetupCover = this.meetups.imageId ? `${API_URL}/images/${this.meetups.imageId}` : '';
    },
  },

  methods: {
    getData: function () {
      fetch(`${API_URL}/meetups/6/`)
        .then((response) => response.json())
        .then((data) => (this.meetups = data))
        .catch((error) => console.log('error', error));
    },

    getAgenda: function () {
      const agenda = this.meetups.agenda;
      return agenda;
    },

    agendaTitles: function(val) {
      if (val.title) {
        return val.title;
      }
      return agendaItemTitles[val.type];
    },

    agendaIcon: function (val) {
      return agendaItemIcons[val.type];
    },

    getDateOnlyString(date) {
      const YYYY = date.getFullYear();
      const MM = (date.getMonth() + 1).toString().padStart(2, '0');
      const DD = (date.getDate() + 1).toString().padStart(2, '0');
      return `${YYYY}-${MM}-${DD}`;
    },

    localDate() {
      return new Date(this.meetups.date).toLocaleDateString(
        navigator.language,
        {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        },
      );
    },

    dateOnlyString() {
      return new Date(this.meetups.date);
    },

    // Получение данных с API предпочтительнее оформить отдельным методом,
    // а не писать прямо в mounted()
  },
});
