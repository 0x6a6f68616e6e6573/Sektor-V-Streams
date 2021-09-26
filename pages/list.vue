<template>
  <div class="p-3 grid grid-rows-3 grid-cols-4 grid-flow-row gap-4 select-none">
    <div
      v-for="(_, index) in organisations.length - 1"
      :key="_.name"
      class="bg-dark-300 rounded-t"
    >
      <div
        class="
          p-1.5
          bg-green-300
          text-dark-700 text-center
          font-semibold
          rounded-t
        "
      >
        {{ organisations[index + 1] }}
      </div>
      <draggable
        class="list-group h-full"
        tag="ul"
        v-model="lists[index + 1]"
        v-bind="dragOptions"
        :move="onMove"
      >
        <transition-group name="no" class="list-group h-full" tag="ul">
          <li
            class="m-1 p-1 rounded bg-dark-500 cursor-pointer"
            v-for="element in lists[index + 1]"
            :key="element.order"
          >
            {{ element.char.name }}
            <span class="badge">{{ element.order }}</span>
          </li>
        </transition-group>
      </draggable>
    </div>

    <div class="grid grid-rows-3 grid-flow-col gap-4">
      <div class="bg-dark-300 row-span-3 rounded-t">
        <div
          class="
            p-1.5
            bg-green-300
            text-dark-700 text-center
            font-semibold
            rounded-t
          "
        >
          {{ organisations[0] }}
        </div>
        <button
          class="
            relative
            left-1/2
            transform
            -translate-x-1/2
            m-1
            p-1
            px-5
            rounded
            bg-green-800
            transition-colors
            hover:bg-green-900
          "
        >
          Create New
        </button>
        <draggable
          class="list-group h-full"
          tag="ul"
          v-model="lists[0]"
          v-bind="dragOptions"
          :move="onMove"
        >
          <transition-group name="no" class="list-group h-full" tag="ul">
            <li
              class="m-1 p-1 rounded bg-dark-500 cursor-pointer"
              v-for="element in lists[0]"
              :key="element.order"
            >
              {{ element.char.name }}
              <span class="badge">{{ element.order }}</span>
            </li>
          </transition-group>
        </draggable>
      </div>
    </div>
    <div
      class="
        bg-dark-300
        rounded
        font-bold
        text-10xl
        h-full
        align-middle
        text-center
        items-center
        leading-relaxed
        cursor-pointer
        transition-colors
        hover:bg-dark-400
      "
    >
      +
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable';

const message = [
  { name: 'John Doe' },
  { name: 'John Doe' },
  { name: 'John Doe' },
  { name: 'John Doe' },
  { name: 'John Doe' },
  { name: 'John Doe' },
  { name: 'John Doe' },
];
export default {
  name: 'hello',
  layout: 'list',
  components: {
    draggable,
  },
  data() {
    return {
      organisations: ['Zivilist', 'Polizei', 'Mediziner', 'Taxi', 'Autohaus'],
      lists: [
        message.map((char, index) => {
          return { char, order: index + 1, fixed: false };
        }),
      ],

      editable: true,
      isDragging: false,
      delayedDragging: false,
    };
  },
  created() {
    for (let i = 0; i < this.organisations.length; i++) {
      this.lists.push([]);
    }
  },
  methods: {
    orderList() {
      this.list = this.list.sort((one, two) => {
        return one.order - two.order;
      });
    },
    onMove({ relatedContext, draggedContext }) {
      const relatedElement = relatedContext.element;
      const draggedElement = draggedContext.element;
      return (
        (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
      );
    },
  },
  computed: {
    dragOptions() {
      return {
        animation: 0,
        group: 'description',
        disabled: !this.editable,
        ghostClass: 'ghost',
      };
    },
  },
  watch: {
    isDragging(newValue) {
      if (newValue) {
        this.delayedDragging = true;
        return;
      }
      this.$nextTick(() => {
        this.delayedDragging = false;
      });
    },
  },
};
</script>

<style>
.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
.list-group {
  min-height: 20px;
}
.list-group-item {
  cursor: move;
}
.list-group-item i {
  cursor: pointer;
}
</style>
