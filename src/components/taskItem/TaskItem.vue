<template>
  <li :class="task.completed ? 'disabled' : ''">
    <h2>{{ task.title }}</h2>
    <p>{{ task.description }}</p>
    <span>{{ formatDate(task.dueDate) }}</span>
    <input type="checkbox" :checked="task.completed" @click="updateCheckbox()">
    <button @click="deleteTask(task.id)">Delete</button>
  </li>
</template>

<script src="./TaskItem.ts" lang="ts" />
<style src="./TaskItem.css" lang="css" scoped/>