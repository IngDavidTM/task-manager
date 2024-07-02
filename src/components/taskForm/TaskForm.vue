<template>
  <form @submit.prevent="submitTask">
    <input v-model="title" placeholder="Title" required>
    <textarea
      v-model="description"
      placeholder="Description"
      required
    />
    <input v-model="dueDate" type="date" required>
    <button type="submit">Add Task</button>
  </form>
</template>

<script src="./TaskForm.ts" lang="ts" />
<style src="./TaskForm.css" lang="css" scoped />
