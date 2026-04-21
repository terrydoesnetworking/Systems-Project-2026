<script lang="ts">
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import type { Pathname } from '$app/types';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { locales, localizeUrl } from '$lib/paraglide/runtime.js';
	import './layout.css';

	const { children } = $props();
</script>

<!-- src/routes/+layout.svelte -->
<!-- <nav style="background: red; padding: 20px;">
	<a href="/">home</a>
	<a href="/demo">demo</a>
</nav> -->
<Header />

<main>
	{@render children()}
</main>
<Footer />

<div style="display:none">
	{#each locales as locale (locale)}
		<a href={resolve(localizeUrl(page.url.pathname, { locale }).pathname as Pathname)}>{locale}</a>
	{/each}
</div>
