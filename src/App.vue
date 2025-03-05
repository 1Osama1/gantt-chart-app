<template>
  <div class="gantt-container">
    <svg :width="chartWidth" :height="chartHeight">
      <!-- Time axis -->
      <g v-for="(date, index) in timelineDates" :key="date.getTime()">
        <line 
          :x1="getXPosition(date)" 
          y1="30" 
          :x2="getXPosition(date)" 
          :y2="chartHeight" 
          stroke="#eee"
        />
        <text 
          :x="getXPosition(date)" 
          y="20" 
          class="axis-label"
        >
          {{ formatDate(date) }}
        </text>
      </g>

      <!-- Tasks -->
      <g v-for="(member, memberIndex) in teamMembers" :key="member.name">
        <!-- Member name -->
        <text 
          x="10" 
          :y="getYPosition(memberIndex) + 20" 
          class="member-name"
        >
          {{ member.name }}
        </text>

        <!-- Separator line between team members -->
        <line
        style="margin: 50px;"
          x1="0"
          :y1="getYPosition(memberIndex) -5"
          x2="100%"
          :y2="getYPosition(memberIndex) -5"
          stroke="#ddd"
          stroke-width="1"
        />

        <!-- Tasks -->
        <g 
          v-for="(task, taskIndex) in sortedTasks(member.tasks)" 
          :key="task.id"
        >
          <rect
            :x="getXPosition(task.startDate)"
            :y="getYPosition(memberIndex) + (taskIndex * 35)"
            :width="getTaskWidth(task)"
            height="30"
            :fill="getPriorityColor(task.priority)"
            rx="4"
            class="task-bar"
            @mouseenter="showTooltip(task)"
            @mouseleave="hideTooltip"
          />
          <text
            :x="getXPosition(task.startDate) + 5"
            :y="getYPosition(memberIndex) + (taskIndex * 35) + 20"
            class="task-label"
            :fill="getTextColor(getPriorityColor(task.priority), task.priority)"
          >
            {{ task.name }} (P{{ task.priority }})
          </text>
        </g>
      </g>
    </svg>

    <!-- Tooltip -->
    <div v-if="activeTooltip" class="tooltip" :style="tooltipPosition">
      <h3>{{ activeTooltip.name }}</h3>
      <p>Priority: {{ activeTooltip.priority }}</p>
      <p>Start: {{ formatDate(activeTooltip.startDate) }}</p>
      <p>End: {{ formatDate(activeTooltip.endDate) }}</p>
      <p v-if="activeTooltip.notes">Notes: {{ activeTooltip.notes }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const teamMembers = [
  {
    name: 'Test Doe',
    tasks: [
      {
        id: 1,
        name: 'Design Homepage',
        startDate: '2024-03-01',
        endDate: '2024-03-05',
        priority: 8,
        notes: 'Need client approval'
      },
      {
        id: 2,
        name: 'No',
        startDate: '2024-03-05',
        endDate: '2024-03-07',
        priority: 4,
        notes: 'Need client approval'
      },
      // More tasks...
    ]
  },
  {
    name: 'John Bro',
    tasks: [
      {
        id: 3,
        name: 'Design Homepage',
        startDate: '2024-03-01',
        endDate: '2024-03-05',
        priority: 8,
        notes: 'Need client approval'
      },
      {
        id: 2,
        name: 'No',
        startDate: '2024-03-05',
        endDate: '2024-03-07',
        priority: 4,
        notes: 'Need client approval'
      },
      // More tasks...
    ]
  },
  {
    name: 'John Snow',
    tasks: [
      {
        id: 3,
        name: 'Design Homepage',
        startDate: '2024-03-01',
        endDate: '2024-03-05',
        priority: 1,
        notes: 'Need client approval'
      },
      {
        id: 4,
        name: 'No',
        startDate: '2024-03-05',
        endDate: '2024-03-07',
        priority: 10,
        notes: 'Need client approval'
      },
      {
        id: 5,
        name: 'Nos',
        startDate: '2024-03-08',
        endDate: '2024-03-09',
        priority: 5,
        notes: 'Need client approval'
      },
      // More tasks...
    ]
  },
  // More team members...
];

// Chart dimensions
const chartWidth = 1200;
const rowHeight = 60;
const taskHeight = 35;
const chartHeight = computed(() => {
  const totalTasks = teamMembers.reduce((acc, member) => acc + member.tasks.length, 0);
  return totalTasks * taskHeight + 100; // Add some padding
});

// Tooltip
const activeTooltip = ref(null);
const tooltipPosition = ref({ left: '0px', top: '0px' });

// Date calculations
const timelineDates = computed(() => {
  const allDates = teamMembers.flatMap(member =>
    member.tasks.flatMap(task => [task.startDate, task.endDate])
  );
  const minDate = new Date(Math.min(...allDates.map(date => new Date(date))));
  const maxDate = new Date(Math.max(...allDates.map(date => new Date(date))));
  return getDatesBetween(minDate, maxDate);
});

const dateRange = computed(() => {
  const dates = timelineDates.value;
  return { start: dates[0], end: dates[dates.length - 1] };
});

// Color scaling for priority (10 = red, 1 = green)
const getPriorityColor = (priority) => {
  const hue = ((10 - priority) * 12); // Scale from 0-120° hue
  return `hsl(${hue}, 100%, 50%)`;
};

// Get text color based on background color and priority
const getTextColor = (backgroundColor, priority) => {
  const color = backgroundColor.replace(/[^\d,]/g, '').split(',');
  const brightness = (parseInt(color[0]) * 299 + parseInt(color[1]) * 587 + parseInt(color[2]) * 114) / 1000;
  return brightness > 125 || priority <= 6 ? 'black' : 'white';
};

// Position calculations
const getXPosition = (date) => {
  const totalDays = (dateRange.value.end - dateRange.value.start) / (1000 * 3600 * 24);
  const daysFromStart = (new Date(date) - dateRange.value.start) / (1000 * 3600 * 24);
  return (daysFromStart / totalDays) * (chartWidth - 200) + 200;
};

const getYPosition = (memberIndex) => {
  let totalTasksBefore = 0;
  for (let i = 0; i < memberIndex; i++) {
    totalTasksBefore += teamMembers[i].tasks.length;
  }
  return totalTasksBefore * taskHeight + 50;
};

const getTaskWidth = (task) => {
  const start = new Date(task.startDate);
  const end = new Date(task.endDate);
  const durationDays = (end - start) / (1000 * 3600 * 24);
  return (durationDays / ((dateRange.value.end - dateRange.value.start) / (1000 * 3600 * 24))) * (chartWidth - 200);
};

// Helpers
const sortedTasks = (tasks) => {
  return [...tasks].sort((a, b) => 
    new Date(a.startDate) - new Date(b.startDate)
  );
};

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    weekday: 'short', // Add day name
    month: 'short',
    day: 'numeric'
  });
};

const getDatesBetween = (startDate, endDate) => {
  const dates = [];
  let currentDate = new Date(startDate);
  while (currentDate <= endDate) {
    dates.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return dates;
};

// Tooltip handlers
const showTooltip = (task) => {
  activeTooltip.value = task;
};

const hideTooltip = () => {
  activeTooltip.value = null;
};
</script>

<style>
.gantt-container {
  position: relative;
  overflow-x: auto;
  background-color: var(--background-color, white);
  color: var(--text-color, black);
  font-family: 'Arial', sans-serif;
}

.tooltip {
  position: absolute;
  background: var(--background-color, white);
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 4px;
  pointer-events: none;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  color: var(--text-color, black);
  font-family: 'Arial', sans-serif;
}

.axis-label {
  font-size: 0.8rem;
  fill: var(--text-color, #666);
  text-anchor: middle;
  font-weight: bold;
}

.member-name {
  font-size: 0.9rem;
  fill: var(--text-color, #333);
  font-weight: bold;
}

.task-label {
  font-size: 0.8rem;
  pointer-events: none;
  font-weight: bold;
}

.task-bar {
  cursor: pointer;
  transition: opacity 0.2s;
}

.task-bar:hover {
  opacity: 0.8;
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
  :root {
    --background-color: #121212;
    --text-color: #ffffff;
  }
}
</style>