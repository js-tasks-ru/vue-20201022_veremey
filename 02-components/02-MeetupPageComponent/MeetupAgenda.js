import { MeetupAgendaItem } from './MeetupAgendaItem.js';
import { agendaItemIcons, agendaItemTitles } from './data.js';

export const MeetupAgenda = {
  name: 'MeetupAgenda',
  template: `
    <div class="meetup-agenda">
      <p v-if="agenda.length <= -1" class="meetup-agenda__empty">Программа пока пуста, но когда-нибудь в ней обязательно что-нибудь появится!</p>

      <template v-else v-for="item in agenda" >
        <meetup-agenda-item :agendaItem="item"/>
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

};
