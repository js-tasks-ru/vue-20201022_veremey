export const CounterButton = {
  // Шаблон потребуется отредактировать
  template: `<button type="button" @click="$emit('increment', countIncrement )">{{ count || 0 }}</button>`,

  props: {
    count: Number,
    default: 0,
    require: true,
    validator: function (value) {
      return value >= 0;
    },
  },

  model: {
    prop: 'count',
    event: 'increment',
  },

  computed: {
    countIncrement: function() {
      return this.count + 1;
    },
  },

  // Компонент должен иметь входной параметр

  // Компонент должен иметь модель

  // Шаблон лучше держать максимально простым, а логику выносить в методы
};
