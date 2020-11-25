import { agendaItemIcons, agendaItemTitles } from './data.js';

export const MeetupAgendaItem = {
  name: 'MeetupAgendaItem',

  template: `<div class="meetup-agenda__item">
      <div class="meetup-agenda__item-col">
        <img class="icon" alt="icon" :src="agendaItemArray.icon"/>
      </div>
      <div class="meetup-agenda__item-col">{{ agendaItemArray.startsAt }} - {{ agendaItemArray.endsAt }}</div>
      <div class="meetup-agenda__item-col">
        <h5 class="meetup-agenda__title">{{ agendaItemArray.title || "Регистрация"  }}</h5>
        <p v-if="agendaItemArray.speaker">
          <span>{{ agendaItemArray.speaker }}</span>
          <span class="meetup-agenda__dot"></span>
          <span class="meetup-agenda__lang">{{ agendaItemArray.language }}</span>
        </p>
        <p v-if="agendaItemArray.description">{{ agendaItemArray.description }}</p>
      </div>
    </div>`,

  props: {
    agendaItem: {
      type: Object,
      required: true,
    },
  },

  computed: {
    agendaItemArray() {
      return {
        ...this.agendaItem,
        title: this.agendaItem.title || agendaItemTitles[this.agendaItem.type],
        icon: `/assets/icons/icon-${agendaItemIcons[this.agendaItem.type]}.svg`,
      }
    },
  }
};
