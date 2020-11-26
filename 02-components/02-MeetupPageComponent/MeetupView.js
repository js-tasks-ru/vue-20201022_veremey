import { MeetupCover } from './MeetupCover.js';
import { MeetupDescription } from './MeetupDescription.js';
import { MeetupAgenda } from './MeetupAgenda.js';
import { MeetupInfo } from './MeetupInfo.js';
import { API_URL } from './data.js';
// import { getMeetupCoverLink } from './data.js';

export const MeetupView = {
  name: 'MeetupView',

  template: `
    <div v-if="meetup">
      <!-- meetup cover -->
      <meetup-cover :link="cover" :title="meetup.title"/>
      <div class="container">
        <div class="meetup">
          <div class="meetup__content">
            <h3>Описание</h3>
            <!-- meetup description -->
            <meetup-description :description="meetup.description" />

            <h3>Программа</h3>
            <!-- meetup agenda -->
            <meetup-agenda :agenda="meetup.agenda" />
          </div>
          <div class="meetup__aside">
            <!-- meetup info -->
            <meetup-info
              :organizer="meetup.organizer"
              :place="meetup.place"
              :date="date"/>
          </div>
        </div>
      </div>
    </div>`,

  components: {
    MeetupCover,
    MeetupInfo,
    MeetupAgenda,
    MeetupDescription,
  },

  props: {
    meetup: {
      type: Object,
      required: true,
    },
  },

  computed: {
    cover() {
      return this.meetup.imageId ? `${API_URL}/images/${this.meetup.imageId}` : '';
    },

    date() {
      return new Date(this.meetup.date);
    },
  },
};
