<template>
    <div class='task-grid'>
        <template v-if="tasks.length">
            <Task 
                @taskChanged="$emit('taskChanged', i)"
                @taskDeleted="$emit('taskDeleted', i)" 
                v-for="(task, i) in tasks" :key="task.name" 
                :task="task" 
            />
        </template>
        <p v-else>Sua vida está em dias</p>
    </div>
</template>

<script>
import Task from './Task.vue';
export default {
    components: {Task},
    props: {
        tasks: {type: Array, required: true}
    }
}
</script>

<style>
    .task-grid {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
    .task-grid .task
    {
        margin: 10px;
    } 
</style>