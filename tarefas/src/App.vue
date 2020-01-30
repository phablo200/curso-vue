<template>
	<div id="app">
		<h1>Tarefas</h1>
		<NewTask @taskAdded="addTask"/>
		<TaskProgress :progress="progress" />
		<TasksGrid 
			@taskChanged="changeTask"
			@taskDeleted="deleteTask" 
			:tasks="tasks" 
		/>
	</div>
</template>

<script>

import TaskProgress from '@/components/TaskProgress.vue';
import TasksGrid from '@/components/TasksGrid.vue';
import NewTask from '@/components/NewTask.vue';
export default {
	components: {TaskProgress, TasksGrid, NewTask},
	data () {
		return {
			tasks: [
				{name: 'Lavar louça', pending: false},
				{name: 'Comprar', pending: true},
				{name: 'Opa', pending: true}
			]
		}
	},

	computed: {
		progress () {
			const total = this.tasks.length;
			const done = this.tasks.filter(t => !t.pending).length;
			return Math.round(done/total*100) || 0;
		}
	},


	watch: {
		tasks()
		{
			localStorage.setItem('tasks', JSON.stringify(this.tasks));
		}
	},
	methods: {
		addTask(task) {
			const sameName = t => t.name === task.name;
			const reallyName=this.tasks.filter(sameName).length==0;
			if (reallyName)
			{
				this.tasks.push({
					name: task.name,
					pending: task.pending || true
				});
			}
		},

		deleteTask (task) {
			this.tasks.splice(task, 1);
		},

		changeTask (i) {
			this.tasks[i].pending=!this.tasks[i].pending;
		}
	},
	created () {
		const json = localStorage.getItem('tasks');
		const array = JSON.parse(json);
		this.tasks  = JSON.parse(json) || [];
	}
}
</script>

<style>
	body {
		font-family: 'Lato', sans-serif;
		background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
		color: #FFF;
	}

	#app {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	#app h1 {
		margin-bottom: 5px;
		font-weight: 300;
		font-size: 3rem;
	}
</style>
