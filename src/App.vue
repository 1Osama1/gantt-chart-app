<template>
  <div class="gantt-application rounded">
    <!-- Header Section -->
    <header class="app-header">
      <div class="header-content">
        <h1 class="app-title">
          <span class="title-icon">📊</span>
          Project Timeline Management
        </h1>
        <p class="app-subtitle">Track team progress and manage project deadlines</p>
      </div>
    </header>

    <div class="gantt-container">
      <div class="chart-wrapper">
        <div class="chart-scroll-container">
          <svg :width="chartWidth" :height="chartHeight" class="gantt-chart">
            <!-- Define gradients and filters -->
            <defs>
              <filter id="task-shadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="3" dy="3" stdDeviation="3" flood-color="rgba(0, 0, 0, 0.15)" />
              </filter>
              <linearGradient id="headerGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#f8f9fa;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#e9ecef;stop-opacity:1" />
              </linearGradient>
            </defs>

            <!-- Chart Background -->
            <rect width="100%" height="100%" fill="url(#headerGradient)" />

            <!-- Time axis header background -->
            <rect x="0" y="0" :width="chartWidth" height="50" fill="#2c3e50" />

            <!-- Weekend Shading and Time axis -->
            <g v-for="(date, index) in timelineDates" :key="date.getTime()">
              <!-- Weekend shading -->
              <rect
                v-if="isWeekend(date)"
                :x="getXPosition(date)"
                y="50"
                :width="dayWidth"
                :height="chartHeight - 50"
                fill="rgba(108, 117, 125, 0.1)"
                class="weekend-shade"
              />

              <!-- Grid lines -->
              <line
                :x1="getXPosition(date)"
                y1="50"
                :x2="getXPosition(date)"
                :y2="chartHeight"
                stroke="#dee2e6"
                stroke-width="1"
              />

              <!-- Date labels with smart frequency -->
              <text
                v-if="shouldShowLabel(index)"
                :x="getXPosition(date) + dayWidth/2"
                :y="isLongRange ? 45 : 30"
                class="axis-label"
                :class="{ 'rotated': isLongRange }"
                fill="white"
                text-anchor="middle"
                :transform="isLongRange ? `rotate(-45, ${getXPosition(date) + dayWidth/2}, 45)` : ''"
              >
                {{ formatDate(date) }}
              </text>
            </g>

            <!-- Tasks -->
            <g v-for="(member, memberIndex) in teamMembers" :key="member.name">
              <!-- Member name background -->
              <rect
                x="0"
                :y="getYPosition(memberIndex) - 10"
                width="200"
                :height="getMemberRowHeight(member)"
                fill="#34495e"
                class="member-background"
              />

              <!-- Member name -->
              <text
                x="15"
                :y="getYPosition(memberIndex) + 15"
                class="member-name"
                fill="white"
              >
                {{ member.name }}
              </text>

              <!-- Separator line between team members -->
              <line
                x1="0"
                :y1="getYPosition(memberIndex) - 10"
                :x2="chartWidth"
                :y2="getYPosition(memberIndex) - 10"
                stroke="#495057"
                stroke-width="2"
              />

              <!-- Tasks -->
              <g
                v-for="(task, taskIndex) in sortedTasks(member.tasks)"
                :key="task.id"
              >
                <rect
                  :x="getXPosition(task.startDate)"
                  :y="getYPosition(memberIndex, taskIndex)"
                  :width="Math.max(getTaskWidth(task), 80)"
                  height="30"
                  :fill="getPriorityColor(task.priority)"
                  rx="6"
                  class="task-bar"
                  filter="url(#task-shadow)"
                  stroke="#fff"
                  stroke-width="2"
                  @mouseenter="showTooltip(task, $event)"
                  @mouseleave="hideTooltip"
                />
                <text
                  :x="getXPosition(task.startDate) + 8"
                  :y="getYPosition(memberIndex, taskIndex) + 20"
                  class="task-label"
                  :fill="getTextColor(getPriorityColor(task.priority), task.priority)"
                >
                  {{ truncateTaskName(task.name, getTaskWidth(task)) }}
                </text>
              </g>
            </g>
          </svg>
        </div>
      </div>

      <!-- Password Input -->
      <div v-if="!isAuthenticated" class="auth-section">
    <div class="auth-card">
      <div class="auth-header">
        <h3>🔐 Admin Access Required</h3>
        <p>Enter your credentials to manage tasks and team members</p>
      </div>
      <div class="auth-form">
       <div class="password-input-wrapper">
    <input
      :type="showPassword ? 'text' : 'password'"
      v-model="password"
      placeholder="Enter admin password"
      @keyup.enter="checkPassword"
      class="auth-input"
    />
    <button 
      @click="togglePasswordVisibility" 
      class="password-toggle"
      type="button"
      :aria-label="showPassword ? 'Hide password' : 'Show password'"
    >
      <svg v-if="!showPassword" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
        <circle cx="12" cy="12" r="3"></circle>
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
        <line x1="1" y1="1" x2="23" y2="23"></line>
      </svg>
    </button>
  </div>
        <div class="demo-hint">
    <span class="hint-icon">💡</span>
    <span class="hint-text">Demo Password: <code class="demo-password">{{ demoPassword }}</code></span>
    <button @click="copyPassword" class="copy-button" type="button" :title="copied ? 'Copied!' : 'Copy password'">
      <Transition name="copy-icon" mode="out-in">
        <svg v-if="!copied" key="copy" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
        </svg>
        <svg v-else key="check" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </Transition>
    </button>
  </div>
        <button @click="checkPassword" class="auth-button">
          Access Dashboard
        </button>
        <p v-if="passwordError" class="error-message">{{ passwordError }}</p>
      </div>
    </div>
  </div>

      <!-- Management Dashboard -->
      <div v-if="isAuthenticated" class="management-dashboard">
        <!-- Task Entry Form -->
        <div class="dashboard-card">
          <div class="card-header">
            <h3>➕ Add New Task</h3>
          </div>
          <div class="card-content">
            <div class="form-row">
              <div class="form-group">
                <label for="member">Team Member</label>
                <select v-model="newTask.member" id="member" class="form-control">
                  <option value="">Select team member</option>
                  <option v-for="member in teamMembers" :key="member.name" :value="member.name">
                    {{ member.name }}
                  </option>
                </select>
              </div>
              <div class="form-group">
                <label for="taskName">Task Name</label>
                <input v-model="newTask.name" id="taskName" placeholder="Enter task name" class="form-control" />
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label for="startDate">Start Date</label>
                <input v-model="newTask.startDate" type="date" id="startDate" class="form-control" />
              </div>
              <div class="form-group">
                <label for="endDate">End Date</label>
                <input v-model="newTask.endDate" type="date" id="endDate" class="form-control" />
              </div>
              <div class="form-group">
                <label for="priority">Priority (1-10)</label>
                <input v-model="newTask.priority" type="number" min="1" max="10" id="priority" class="form-control" />
              </div>
            </div>

            <div class="form-group">
              <label for="notes">Notes</label>
              <textarea v-model="newTask.notes" id="notes" placeholder="Additional notes (optional)" class="form-control"></textarea>
            </div>
            <button @click="addTask" class="btn-primary mt-2">Add Task</button>
          </div>
        </div>

        <!-- Team Member Form -->
        <div class="dashboard-card">
          <div class="card-header">
            <h3>👥 Add Team Member</h3>
          </div>
          <div class="card-content">
            <div class="form-row">
              <div class="form-group flex-grow">
                <input v-model="newMemberName" placeholder="Enter team member name" class="form-control" />
              </div>
              <button @click="addTeamMember" class="btn-secondary">Add Member</button>
            </div>
            <p v-if="teamMemberError" class="error-message">{{ teamMemberError }}</p>
          </div>
        </div>
      </div>

      <!-- Enhanced Tooltip -->
      <div v-if="activeTooltip" class="tooltip-enhanced" :style="tooltipPosition">
        <div class="tooltip-header">
          <h4>{{ activeTooltip.name }}</h4>
          <span class="priority-badge" :style="{ backgroundColor: getPriorityColor(activeTooltip.priority) }">
            P{{ activeTooltip.priority }}
          </span>
        </div>
        <div class="tooltip-content">
          <div class="tooltip-row">
            <span class="tooltip-label">📅 Start:</span>
            <span>{{ formatDisplayDate(activeTooltip.startDate) }}</span>
          </div>
          <div class="tooltip-row">
            <span class="tooltip-label">🏁 End:</span>
            <span>{{ formatDisplayDate(activeTooltip.endDate) }}</span>
          </div>
          <div class="tooltip-row">
            <span class="tooltip-label">⏱️ Duration:</span>
            <span>{{ getTaskDuration(activeTooltip) }} days</span>
          </div>
          <div v-if="activeTooltip.notes" class="tooltip-notes">
            <span class="tooltip-label">📝 Notes:</span>
            <p>{{ activeTooltip.notes }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { db, collection, getDocs, setDoc, doc } from './firebase';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

const teamMembers = ref([]);
const showPassword = ref(false);

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};
const copied = ref(false);

const copyPassword = async () => {
  try {
    await navigator.clipboard.writeText(demoPassword.value);
    copied.value = true;
    setTimeout(() => {
      copied.value = false;
    }, 2000);
  } catch (err) {
    console.error('Failed to copy password:', err);
  }
};
// Load password from environment variable first, then fallback to Firebase
const getAdminPassword = async () => {
  // Try to get password from environment variable first
  const envPassword = import.meta.env.VITE_ADMIN_PASSWORD;
  
  if (envPassword) {
    console.log('Password loaded from environment variable');
    return envPassword;
  }
  
  // Fallback to Firebase if env variable not found
  try {
    console.log('Password not found in environment, checking Firebase...');
    const configDoc = await getDocs(collection(db, "config"));
    if (!configDoc.empty) {
      const config = configDoc.docs[0].data();
      return config.adminPasswordHash;
    }
    return false;
  } catch (error) {
    console.error('Error loading admin password:', error);
    return false;
  }
};

const correctPassword = ref('');
const demoPassword = ref(''); // For displaying in the UI

onMounted(async () => {
  correctPassword.value = await getAdminPassword();
  demoPassword.value = correctPassword.value || 'Not configured';
  await loadTasks();
});

const loadTasks = async () => {
  const querySnapshot = await getDocs(collection(db, "tasks"));
  teamMembers.value = querySnapshot.docs.map(doc => ({
    name: doc.data().name,
    tasks: doc.data().tasks || []
  }));
};

import { updateDoc, arrayUnion } from "firebase/firestore";

const saveTasks = async () => {
  for (const member of teamMembers.value) {
    await updateDoc(doc(db, "tasks", member.name), {
      tasks: arrayUnion(...member.tasks)
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
    await setDoc(memberRef, {
      name: memberName,
      tasks: []
    });

    teamMembers.value.push({ name: memberName, tasks: [] });
    newMemberName.value = '';
    teamMemberError.value = '';
  } catch (error) {
    console.error("Error adding team member:", error);
    teamMemberError.value = 'Failed to add member. Try again.';
  }
};

const checkPassword = () => {
  if (password.value === correctPassword.value) {
    isAuthenticated.value = true;
    passwordError.value = '';
  } else {
    passwordError.value = 'Incorrect password. Please contact your administrator.';
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
    member.tasks.push({
      id: generateUniqueId(),
      name: newTask.value.name,
      startDate: newTask.value.startDate,
      endDate: newTask.value.endDate,
      priority: newTask.value.priority,
      notes: newTask.value.notes
    });

    await saveTasks();

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
  const timestamp = Date.now();
  const randomFactor = Math.floor(Math.random() * 1000);
  return `${timestamp}-${randomFactor}`;
}

// Chart calculations
const timelineDates = computed(() => {
  const allDates = teamMembers.value.flatMap(member =>
    member.tasks.flatMap(task => [task.startDate, task.endDate])
  );

  if (allDates.length === 0) {
    // Default to current month if no tasks
    const today = new Date();
    const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    return getDatesBetween(startOfMonth, endOfMonth);
  }

  const minDate = new Date(Math.min(...allDates.map(date => new Date(date))));
  const maxDate = new Date(Math.max(...allDates.map(date => new Date(date))));

  // Add buffer days
  const startBuffer = new Date(minDate);
  startBuffer.setDate(startBuffer.getDate() - 2);

  const endBuffer = new Date(maxDate);
  endBuffer.setDate(endBuffer.getDate() + 2);

  return getDatesBetween(startBuffer, endBuffer);
});

const isLongRange = computed(() => timelineDates.value.length > 30);

// Fixed chart width calculation
const dayWidth = computed(() => {
  const minDayWidth = 40;
  const maxDayWidth = 80;
  const totalDays = timelineDates.value.length;

  if (totalDays === 0) return minDayWidth;

  // Adjust day width based on range length
  if (totalDays <= 14) return maxDayWidth; // 2 weeks or less
  if (totalDays <= 30) return 60; // 1 month or less
  if (totalDays <= 90) return minDayWidth; // 3 months or less
  return 30; // Very long ranges
});

const chartWidth = computed(() => {
  if (timelineDates.value.length === 0) return 1200;
  return 200 + (timelineDates.value.length * dayWidth.value);
});

// Label frequency based on range length
const labelFrequency = computed(() => {
  const totalDays = timelineDates.value.length;
  if (totalDays > 90) return 7; // Weekly labels for 3+ month ranges
  if (totalDays > 30) return 5; // Every 5 days for 1-3 month ranges
  if (totalDays > 14) return 3; // Every 3 days for 2-4 week ranges
  return 1; // Daily for short ranges
});

// Determine if we should show label for this index
const shouldShowLabel = (index) => {
  // Always show first and last labels
  if (index === 0 || index === timelineDates.value.length - 1) return true;
  // Show labels according to frequency
  return index % labelFrequency.value === 0;
};

const formatDate = (date) => {
  const d = new Date(date);
  const dayAbbr = d.toLocaleDateString('en-US', { weekday: 'short' }); // e.g., "Tue"

  if (timelineDates.value.length > 30) {
    // Compact format: DD/MM (Tue)
    return ` ${dayAbbr} ${d.getDate()}/${d.getMonth() + 1} `;
  }

  // Detailed format: Tue, Aug 5
  return d.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  });
};

const formatDisplayDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

const rowHeight = 60;
const taskHeight = 35;

const chartHeight = computed(() => {
  let totalHeight = 100;
  teamMembers.value.forEach(member => {
    totalHeight += member.tasks.length > 0 ? (member.tasks.length * taskHeight) : rowHeight;
  });
  return totalHeight;
});

// Tooltip
const activeTooltip = ref(null);
const tooltipPosition = ref({ left: '0px', top: '0px' });

const dateRange = computed(() => {
  const dates = timelineDates.value;
  if (dates.length === 0) return { start: new Date(), end: new Date() };
  return { start: dates[0], end: dates[dates.length - 1] };
});

const isWeekend = (date) => {
  const dayOfWeek = new Date(date).getDay();
  return dayOfWeek === 0 || dayOfWeek === 6; // Sunday = 0, Saturday = 6
};

// Enhanced color scaling for priority
const getPriorityColor = (priority) => {
  const colors = {
    1: '#28a745', 2: '#32d74b', 3: '#66d366',
    4: '#99d699', 5: '#ffc107', 6: '#ffb347',
    7: '#ff8c42', 8: '#fd7e14', 9: '#dc3545', 10: '#b02a37'
  };
  return colors[priority] || '#6c757d';
};

const getTextColor = (backgroundColor, priority) => {
  return priority >= 7 ? 'white' : '#2c3e50';
};

// Text truncation for long task names
const truncateTaskName = (taskName, taskWidth) => {
  const maxCharsPerPixel = 0.1;
  const maxChars = Math.floor(taskWidth * maxCharsPerPixel);
  if (taskName.length <= maxChars) {
    return taskName;
  }
  return taskName.substring(0, maxChars - 3) + '...';
};

// Position calculations - FIXED
const getXPosition = (date) => {
  const dateObj = new Date(date);
  const startDate = dateRange.value.start;
  const daysFromStart = Math.floor((dateObj - startDate) / (1000 * 3600 * 24));
  return 200 + (daysFromStart * dayWidth.value);
};

const getYPosition = (memberIndex, taskIndex = 0) => {
  let totalHeight = 70;

  for (let i = 0; i < memberIndex; i++) {
    const member = teamMembers.value[i];
    totalHeight += member.tasks.length > 0 ? (member.tasks.length * taskHeight) + 10 : rowHeight;
  }

  totalHeight += taskIndex * taskHeight;
  return totalHeight;
};

const getMemberRowHeight = (member) => {
  return member.tasks.length > 0 ? (member.tasks.length * taskHeight) + 10 : rowHeight;
};

const getTaskWidth = (task) => {
  const start = new Date(task.startDate);
  const end = new Date(task.endDate);
  const durationDays = Math.ceil((end - start) / (1000 * 3600 * 24)) + 1; // +1 to include both start and end days
  return durationDays * dayWidth.value;
};

const getTaskDuration = (task) => {
  const start = new Date(task.startDate);
  const end = new Date(task.endDate);
  return Math.ceil((end - start) / (1000 * 3600 * 24)) + 1;
};

// Helpers
const sortedTasks = (tasks) => {
  return [...tasks].sort((a, b) =>
    new Date(a.startDate) - new Date(b.startDate)
  );
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

// Enhanced tooltip handlers
const showTooltip = (task, event) => {
  activeTooltip.value = task;
  tooltipPosition.value = {
    left: (event.clientX + 15) + 'px',
    top: (event.clientY - 10) + 'px'
  };
};

const hideTooltip = () => {
  activeTooltip.value = null;
};
</script>

<style scoped>
/* Global Styles */
.gantt-application {
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem auto;
  padding: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding: 0 2rem;
}

/* Header Styles */
.app-header {
  background: rgba(255, 255, 255, 0.799);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding: 2rem 0;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  width: 100%;
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.app-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin: 0 0 0.5rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.title-icon {
  font-size: 2.5rem;
}

.app-subtitle {
  font-size: 1.1rem;
  color: #6c757d;
  margin: 0;
  font-weight: 400;
}

/* Main Container */
.gantt-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  width: 100%;
  margin: 2rem;
  position: relative;
  overflow: hidden;
  padding-bottom: 4rem;
}

/* Chart Wrapper for Centering */
.chart-wrapper {
  display: flex;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 2rem;
  overflow-x: auto;
  padding-bottom: 20px;
}

.chart-scroll-container {
  min-width: fit-content;
  position: relative;
}

/* Chart Styles */
.gantt-chart {
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
}

.weekend-shade {
  opacity: 0.3;
}

.axis-label {
  font-size: 11px;
  font-weight: 500;
  dominant-baseline: central;
}

.axis-label.rotated {
  text-anchor: start;
}

.member-name {
  font-size: 0.95rem;
  font-weight: 700;
}

.member-background {
  opacity: 0.9;
}

.task-label {
  font-size: 0.8rem;
  font-weight: 600;
  pointer-events: none;
}

.task-bar {
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: flex-end;
}

.task-bar:hover {
  opacity: 0.8;
  transform: translateY(-1px);
}

/* Authentication Styles */
.auth-section {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  width: 100%;
}

.auth-card {
  background: white;
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  padding: 2.5rem;
  max-width: 400px;
  width: 100%;
  text-align: center;
}

.auth-header h3 {
  color: #2c3e50;
  font-size: 1.5rem;
  margin: 0 0 0.5rem 0;
  font-weight: 700;
}

.auth-header p {
  color: #6c757d;
  margin: 0 0 2rem 0;
  line-height: 1.5;
}

.auth-input {
  width: 100%;
  padding: 1rem;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  font-size: 1rem;
  margin-bottom: 0.75rem;
  transition: border-color 0.3s ease;
}

.auth-input:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

/* Demo Hint Styles */
.demo-hint {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: linear-gradient(135deg, #fff3cd 0%, #fff8e1 100%);
  border: 1px solid #ffc107;
  border-radius: 8px;
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

.hint-icon {
  font-size: 1.2rem;
  flex-shrink: 0;
}

.hint-text {
  color: #856404;
  font-weight: 500;
}

.demo-password {
  background: #fff;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  font-weight: 700;
  color: #667eea;
  border: 1px solid #e9ecef;
  letter-spacing: 0.5px;
}

.copy-button {
  background: #fff;
  border: 1px solid #ffc107;
  border-radius: 6px;
  padding: 0.4rem 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #856404;
  transition: all 0.2s ease;
  font-size: 0.85rem;
  font-weight: 600;
  margin-left: 0.25rem;
  min-width: 36px; /* Constant width */
  height: 32px; /* Constant height */
}

.copy-button:hover {
  background: #fff;
  border-color: #f59e0b;
  color: #92400e;
  transform: translateY(-1px);
  box-shadow: 0 2px 4px rgba(245, 158, 11, 0.2);
}

.copy-button:active {
  transform: translateY(0);
  box-shadow: none;
}

.copy-button svg {
  display: block;
}

/* Icon transition animations */
.copy-icon-enter-active,
.copy-icon-leave-active {
  transition: all 0.3s ease;
}

.copy-icon-enter-from {
  opacity: 0;
  transform: scale(0.5) rotate(-180deg);
}

.copy-icon-leave-to {
  opacity: 0;
  transform: scale(0.5) rotate(180deg);
}

.copy-icon-enter-to,
.copy-icon-leave-from {
  opacity: 1;
  transform: scale(1) rotate(0deg);
}

.auth-button {
  width: 100%;
  padding: 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.auth-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
}

/* Dashboard Styles */
.management-dashboard {
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}

.dashboard-card {
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  overflow: hidden;
}

.card-header {
  background: #f8f9fa;
  padding: 1.5rem 2rem;
  border-bottom: 1px solid #e9ecef;
}

.card-header h3 {
  margin: 0;
  color: #2c3e50;
  font-size: 1.25rem;
  font-weight: 700;
}

.card-content {
  padding: 2rem;
}

.form-row {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  margin-bottom: 1rem;
}

.form-row:last-child {
  margin-bottom: 0;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.flex-grow {
  flex: 1;
}

.form-group label {
  font-weight: 600;
  color: #495057;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.form-control {
  padding: 0.75rem;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.form-control:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.form-control[type="textarea"] {
  min-height: 80px;
  resize: vertical;
}

.btn-primary {
  background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
  color: white;
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: flex-start;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(40, 167, 69, 0.3);
}

.btn-secondary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  align-self: flex-end;
}

.btn-secondary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
}

/* Enhanced Tooltip */
.tooltip-enhanced {
  position: fixed;
  background: white;
  border-radius: 12px;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.15);
  pointer-events: none;
  z-index: 1000;
  min-width: 250px;
  border: 1px solid #e9ecef;
}

.tooltip-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem 0.5rem;
  border-bottom: 1px solid #f1f3f4;
}

.tooltip-header h4 {
  margin: 0;
  color: #2c3e50;
  font-size: 1.1rem;
  font-weight: 700;
}

.priority-badge {
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
}

.tooltip-content {
  padding: 0.5rem 1.5rem 1.5rem;
}

.tooltip-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.tooltip-label {
  font-weight: 600;
  color: #495057;
}

.tooltip-notes {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #f1f3f4;
}

.tooltip-notes p {
  margin: 0.5rem 0 0 0;
  color: #6c757d;
  font-size: 0.9rem;
  line-height: 1.4;
}

/* Error Messages */
.error-message {
  color: #dc3545;
  font-size: 0.9rem;
  margin-top: 0.5rem;
  margin-bottom: 0;
  font-weight: 500;
}


.chart-scroll-container {
  min-width: fit-content;
  position: relative;
}

/* Optional: Style scrollbar */
.chart-wrapper::-webkit-scrollbar {
  height: 8px;
}

.chart-wrapper::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

.chart-wrapper::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px;
}

.chart-wrapper::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.password-input-wrapper {
  position: relative;
  width: 100%;
}

.password-input-wrapper .auth-input {
  width: 100%;
  padding-right: 45px;
}

.password-toggle {
  position: absolute;
  right: 12px;
  top: 45%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #64748b;
  transition: all 0.2s ease;
  border-radius: 4px;
}

.password-toggle:hover {
  background-color: rgba(100, 116, 139, 0.1);
  color: #334155;
}

.password-toggle:active {
  transform: translateY(-50%) scale(0.95);
}

.password-toggle:focus-visible {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}

.password-toggle svg {
  display: block;
}

/* Responsive Design */
@media (max-width: 768px) {
  .gantt-container {
    padding: 0 1rem;
    margin: 1rem auto;
  }
  
  .app-title {
    font-size: 2rem;
  }
  
  .form-row {
    grid-template-columns: 1fr;
  }
  
  .auth-card {
    margin: 1rem;
    padding: 2rem;
  }
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  .gantt-application {
    background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
  }
  
  .dashboard-card,
  .auth-card,
  .gantt-chart {
    background: #2c3e50;
    color: white;
  }
  
  .card-header {
    background: #34495e;
  }
  
  .form-control {
    background: #34495e;
    border-color: #495057;
    color: white;
  }
  
  .tooltip-enhanced {
    background: #2c3e50;
    color: white;
  }
}
body {
  background-color: #555;
}
</style>