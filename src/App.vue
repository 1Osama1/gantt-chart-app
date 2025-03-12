<template>
  <div class="gantt-container">
    <svg :width="chartWidth" :height="chartHeight">
      <!-- Define a shadow filter -->
      <defs>
        <filter id="task-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="2" dy="2" stdDeviation="2" flood-color="rgba(0, 0, 0, 0.1)" />
        </filter>
      </defs>

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
  :y="getYPosition(memberIndex, taskIndex)"
  :width="getTaskWidth(task)"
  height="30"
  :fill="getPriorityColor(task.priority)"
  rx="4"
  class="task-bar"
  filter="url(#task-shadow)" 
  stroke="#808080" 
  stroke-width="1" 
  @mouseenter="showTooltip(task)"
  @mouseleave="hideTooltip"
/>
<text
  :x="getXPosition(task.startDate) + 5"
  :y="getYPosition(memberIndex, taskIndex) + 20"
  class="task-label"
  :fill="getTextColor(getPriorityColor(task.priority), task.priority)"
>
  {{ task.name }} (P{{ task.priority }})
</text>
        </g>
      </g>
    </svg>

    <!-- Password Input -->
    <div v-if="!isAuthenticated" class="password-form">
      <input
        type="password"
        v-model="password"
        placeholder="Enter password to add tasks"
        @keyup.enter="checkPassword"
      />
      <button @click="checkPassword">Submit</button>
      <p v-if="passwordError" class="error">{{ passwordError }}</p>
    </div>

    <!-- Task Entry Form -->
    <div v-if="isAuthenticated" class="task-form">
      <h3>Add New Task</h3>
      <label for="member">Team Member:</label>
      <select v-model="newTask.member" id="member">
        <option v-for="member in teamMembers" :key="member.name" :value="member.name">
          {{ member.name }}
        </option>
      </select>

      <label for="taskName">Task Name:</label>
      <input v-model="newTask.name" id="taskName" placeholder="Task Name" />

      <label for="startDate">Start Date:</label>
      <input v-model="newTask.startDate" type="date" id="startDate" />

      <label for="endDate">End Date:</label>
      <input v-model="newTask.endDate" type="date" id="endDate" />

      <label for="priority">Priority (1-10):</label>
      <input v-model="newTask.priority" type="number" min="1" max="10" id="priority" />

      <label for="notes">Notes:</label>
      <textarea v-model="newTask.notes" id="notes" placeholder="Additional notes"></textarea>

      <button @click="addTask">Add Task</button>
    </div>
    <div v-if="isAuthenticated" class="team-member-form">
  <h3>Add New Team Member</h3>
  <input v-model="newMemberName" placeholder="Enter member name" />
  <button @click="addTeamMember">Add Member</button>
  <p v-if="teamMemberError" class="error">{{ teamMemberError }}</p>
</div>


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
import { ref, computed , onMounted} from 'vue';
import { db, collection, getDocs, setDoc, doc } from './firebase';


const teamMembers = ref([]);
const loadTasks = async () => {
  const querySnapshot = await getDocs(collection(db, "tasks"));
  teamMembers.value = querySnapshot.docs.map(doc => ({
    name: doc.data().name,
    tasks: doc.data().tasks || [] // Ensure tasks exist
  }));
};

import { updateDoc, arrayUnion } from "firebase/firestore";

const saveTasks = async () => {
  for (const member of teamMembers.value) {
    await updateDoc(doc(db, "tasks", member.name), {
      tasks: arrayUnion(...member.tasks) // Append tasks instead of overwriting
    });
  }
};


// Password and Authentication
const password = ref('');
const isAuthenticated = ref(false);
const passwordError = ref('');


const newMemberName = ref('');
const teamMemberError = ref('');

const addTeamMember = async () => {
  if (!newMemberName.value.trim()) {
    teamMemberError.value = 'Member name cannot be empty';
    return;
  }

  const memberName = newMemberName.value.trim();
  const memberRef = doc(db, "tasks", memberName);

  try {
    // Save new member with an empty task list
    await setDoc(memberRef, {
      name: memberName,
      tasks: []
    });

    // Update local teamMembers list
    teamMembers.value.push({ name: memberName, tasks: [] });

    console.log(`Added team member: ${memberName}`);
    
    // Clear input field and error message
    newMemberName.value = '';
    teamMemberError.value = '';
  } catch (error) {
    console.error("Error adding team member:", error);
    teamMemberError.value = 'Failed to add member. Try again.';
  }
};


const correctPassword = '940'; // Set your password here

const checkPassword = () => {
  if (password.value === correctPassword) {
    isAuthenticated.value = true;
    passwordError.value = '';
  } else {
    passwordError.value = 'Incorrect password. Try again.';
  }
};

// New Task Form
const newTask = ref({
  member: '',
  name: '',
  startDate: '',
  endDate: '',
  priority: 1,
  notes: ''
});

const addTask = async () => {
  const member = teamMembers.value.find(m => m.name === newTask.value.member);
  if (member) {
    // Add the new task to the member's tasks array
    member.tasks.push({
      id: generateUniqueId(),
      name: newTask.value.name,
      startDate: newTask.value.startDate,
      endDate: newTask.value.endDate,
      priority: newTask.value.priority,
      notes: newTask.value.notes
    });

    await saveTasks(); // Save updated data to Firestore ✅

    console.log('Updated teamMembers:', teamMembers.value);

    // Reset form
    newTask.value = {
      member: '',
      name: '',
      startDate: '',
      endDate: '',
      priority: 1,
      notes: ''
    };
  } else {
    console.error('Selected team member not found');
  }
};

function generateUniqueId() {
  const timestamp = Date.now(); // Current timestamp in milliseconds
  const randomFactor = Math.floor(Math.random() * 1000); // Random number (0-999)
  return `${timestamp}-${randomFactor}`; // Combine them to ensure uniqueness
}

// Chart dimensions
const chartWidth = 1200;
const rowHeight = 60;
const taskHeight = 35;
// Calculate dynamic chart height
const chartHeight = computed(() => {
  let totalHeight = 100; // Add some padding
  teamMembers.value.forEach(member => {
    // Each team member's row height is base rowHeight + taskHeight * number of tasks
    totalHeight += member.tasks.length >0 ?  (member.tasks.length * taskHeight) : rowHeight;
  });
  return totalHeight;
});
// Tooltip
const activeTooltip = ref(null);
const tooltipPosition = ref({ left: '0px', top: '0px' });

// Date calculations
const timelineDates = computed(() => {
  const allDates = teamMembers.value.flatMap(member =>
    member.tasks.flatMap(task => [task.startDate, task.endDate])
  );
  const minDate = new Date(Math.min(...allDates.map(date => new Date(date))));
  const maxDate = new Date(Math.max(...allDates.map(date => new Date(date))));
  
  // Add one extra day after the last deadline
  const extraDay = new Date(maxDate);
  extraDay.setDate(extraDay.getDate() + 1);

  return getDatesBetween(minDate, extraDay); // Include the extra day
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
const getYPosition = (memberIndex, taskIndex = 0) => {
  let totalHeight = 50; // Initial offset for the timeline

  // Calculate the height of all previous team members' rows
  for (let i = 0; i < memberIndex; i++) {
    const member = teamMembers.value[i];
        totalHeight += member.tasks.length >0 ?  (member.tasks.length * taskHeight) + 10 : rowHeight;

  }

  // Add the height of the current team member's tasks up to the current task
  totalHeight += taskIndex * taskHeight;

  return totalHeight;
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

onMounted(loadTasks);

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
.password-form {
  margin-bottom: 1rem;
}

.password-form input {
  padding: 0.5rem;
  margin-right: 0.5rem;
}

.password-form button {
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.password-form button:hover {
  background-color: #0056b3;
}

.error {
  color: red;
  margin-top: 0.5rem;
}

.task-form {
  margin-bottom: 2rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f9f9f9;
}

.task-form label {
  display: block;
  margin-top: 0.5rem;
}

.task-form input,
.task-form select,
.task-form textarea {
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.25rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.task-form button {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.task-form button:hover {
  background-color: #218838;
}
</style>