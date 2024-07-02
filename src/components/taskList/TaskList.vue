<template>
  <div>
    <div class="display-container">
      <button :class="{ active: isAllTasksActive }" @click="changeTasksDisplayed('all')">All Tasks</button>
      <button :class="{ active: isPendingTasksActive }" @click="changeTasksDisplayed('pending')">Pending Tasks</button>
      <button :class="{ active: isCompletedTasksActive }" @click="changeTasksDisplayed('completed')">Completed Tasks</button>
    </div>
    <task-form />
    <ul>
      <task-item v-for="task in tasksDisplayed" :key="task.id" :task="task" />
    </ul>
    <button @click="deleteCompletedTasks">Delete Completed Tasks</button>
    <button @click="deleteAllTasks">Delete All</button>
  </div>
</template>

<script src="./TaskList.ts" lang="ts" />
<style src="./TaskList.css" lang="css" scoped/>
