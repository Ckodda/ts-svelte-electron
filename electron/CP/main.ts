import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name:"World 2"
	},
	intro:true
});

export default app;