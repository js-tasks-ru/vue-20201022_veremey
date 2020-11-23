import { MeetupAgendaItem } from './MeetupAgendaItem.js';
import { agendaItemIcons, agendaItemTitles } from './data.js';

export const MeetupAgenda = {
  name: 'MeetupAgenda',
  template: `
    <div class="meetup-agenda">
      <p v-if="agenda.length <= -1" class="meetup-agenda__empty">Программа пока пуста, но когда-нибудь в ней обязательно что-нибудь появится!</p>

      <template v-else v-for="item, i in agenda" >
        <meetup-agenda-item :agendaItem="agendaItem[i]"/>
      </template>
    </div>`,

  components: {
    MeetupAgendaItem,
  },

  props: {
    agenda: {
      type: Array,
      required: true,
    },
  },

  computed: {
    agendaItem() {
      return { ...this.agendaItemArray };
    },

    agendaItemArray() {
      return this.agenda.map( (item) => ({
        ...item,
        title: item.title || agendaItemTitles[item.type],
        icon: `/assets/icons/icon-${agendaItemIcons[item.type]}.svg`,
      }));
    },
  },

};
