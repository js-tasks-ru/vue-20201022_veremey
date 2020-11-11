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
      meetup: null,
      //agenda: null,
    };
  },

  mounted() {
    this.getData();
    //this.agendas();
  },

  computed: {
    cover() {
      return this.meetup.imageId ? `${API_URL}/images/${this.meetup.imageId}` : '';
    },

    getDateOnlyString() {
      const date = new Date(this.meetup.date);
      const YYYY = date.getFullYear();
      const MM = (date.getMonth() + 1).toString().padStart(2, '0');
      const DD = (date.getDate() + 1).toString().padStart(2, '0');

      return `${YYYY}-${MM}-${DD}`;
    },

    localDate() {
      const date = new Date(this.meetup.date).toLocaleDateString(
        navigator.language,
        {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        },
      );

      return date;
    },

    // берем параметры и изменяем их - здесь такого нельзя делать, верно?
    agendas() {
      return this.meetup.agenda.map((item) => ({
        ...item,
        title: item.title || agendaItemTitles[item.type],
        icon: agendaItemIcons[item.type],
      }));
    },
  },

  methods: {
    getData: function () {
      fetch(`${API_URL}/meetups/6/`)
        .then((response) => response.json())
        .then((data) => (this.meetup = data))
        .catch((error) => console.log('error', error));
    },

    // Получение данных с API предпочтительнее оформить отдельным методом,
    // а не писать прямо в mounted()
  },
});
