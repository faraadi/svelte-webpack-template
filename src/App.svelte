<script>
	import SvelteLogo from './svelte-logo.svg';
	export let name;
</script>

<style>
	:root {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}

	h1 {
		color: #ff3e00
	}

	span {
		color: #454545;
	}

	ul {
		list-style-type: none;
		display: flex;
		justify-content: center;
	}

	a {
		color: #ff3e00;
		padding: 20px;
	}

	footer {
		position: fixed;
		bottom: 0;
		width: 100%;
	}

	code {
		background-color: #eee;
		padding: 3px;
	}
</style>

<center>
	<img src={SvelteLogo} alt="Svelte Logo">
	<h1>Hello {name}!</h1>
	<span>Start by Editing <code>App.svelte</code></span>
</center>
<footer>
	<ul>
		<li>
			<a href="https://svelte.dev">Official Website</a>
		</li>
		<li>
			<a href="https://svelte.dev/tutorial/basics">Tutorial</a>
		</li>
		<li>
			<a href="https://github.com/faraadi/svelte-webpack-template">GitHub</a>
		</li>
	</ul>
</footer>