<main class="min-h-screen bg-gray-50 py-8">
	<div class="container mx-auto px-4">
		<h1 class="mt-4 mb-8 text-center text-3xl font-bold text-gray-800">Information Slides</h1>

		<div class="mb-4 overflow-hidden rounded-lg bg-white shadow-md">
			<div class="p-6">
				<div class="mb-6 flex border-b border-gray-200">
					<button
						class="default-open tab-btn px-6 py-3 font-medium text-gray-500 transition-colors hover:text-blue-600"
						onclick={(evt) => openTab(evt, 'Introduction to Phishing')}
						>Introduction to Phishing</button
					>
					<button
						class="tab-btn px-6 py-3 font-medium text-gray-500 transition-colors hover:text-blue-600"
						onclick={(evt) => openTab(evt, 'Types of Phishing')}>Types of Phishing</button
					>
					<button
						class="tab-btn px-6 py-3 font-medium text-gray-500 transition-colors hover:text-blue-600"
						onclick={(evt) => openTab(evt, 'Recognizing Phishing Attempts')}
						>Recognizing Phishing Attempts</button
					>
					<button
						class="tab-btn px-6 py-3 font-medium text-gray-500 transition-colors hover:text-blue-600"
						onclick={(evt) => openTab(evt, 'How Phishing Works')}>How Phishing Works</button
					>
					<button
						class="tab-btn px-6 py-3 font-medium text-gray-500 transition-colors hover:text-blue-600"
						onclick={(evt) => openTab(evt, 'Protection Strategies')}>Protection Strategies</button
					>
					<button
						class="tab-btn px-6 py-3 font-medium text-gray-500 transition-colors hover:text-blue-600"
						onclick={(evt) => openTab(evt, 'Examples of Phishing Emails and Websites')}
						>Examples of Phishing Emails and Websites</button
					>
					<button
						class="tab-btn px-6 py-3 font-medium text-gray-500 transition-colors hover:text-blue-600"
						onclick={(evt) => openTab(evt, 'Response to Phishing')}>Response to Phishing</button
					>
					<button
						class="tab-btn px-6 py-3 font-medium text-gray-500 transition-colors hover:text-blue-600"
						onclick={(evt) => openTab(evt, 'Recap and Key Takeaways')}
						>Recap and Key Takeaways</button
					>
					<button
						class="tab-btn px-6 py-3 font-medium text-gray-500 transition-colors hover:text-blue-600"
						onclick={(evt) => openTab(evt, 'Test Your Knowledge')}>Test Your Knowledge</button
					>
				</div>

				<div id="Introduction to Phishing" class="tab-content">
					<h3 class="mb-2 text-xl font-semibold">Introduction to Phishing</h3>
					<p class="text-gray-600">London is the capital city of England.</p>
				</div>

				<div id="Types of Phishing" class="tab-content">
					<h3 class="mb-2 text-xl font-semibold">Types of Phishing</h3>
					<p class="text-gray-600">Paris is the capital of France.</p>
				</div>

				<div id="Recognizing Phishing Attempts" class="tab-content">
					<h3 class="mb-2 text-xl font-semibold">Recognizing Phishing Attempts</h3>
					<p class="text-gray-600">Tokyo is the capital of Japan.</p>
				</div>

				<div id="How Phishing Works" class="tab-content">
					<h3 class="mb-2 text-xl font-semibold">How Phishing Works</h3>
					<p class="text-gray-600">Tokyo is the capital of Japan.</p>
				</div>

				<div id="Protection Strategies" class="tab-content">
					<h3 class="mb-2 text-xl font-semibold">Protection Strategies</h3>
					<p class="text-gray-600">Tokyo is the capital of Japan.</p>
				</div>

				<div id="Examples of Phishing Emails and Websites" class="tab-content">
					<h3 class="mb-2 text-xl font-semibold">Examples of Phishing Emails and Websites</h3>
					<p class="text-gray-600">Tokyo is the capital of Japan.</p>
				</div>

				<div id="Response to Phishing" class="tab-content">
					<h3 class="mb-2 text-xl font-semibold">Response to Phishing</h3>
					<p class="text-gray-600">Tokyo is the capital of Japan.</p>
				</div>

				<div id="Recap and Key Takeaways" class="tab-content">
					<h3 class="mb-2 text-xl font-semibold">Recap and Key Takeaways</h3>
					<p class="text-gray-600">Tokyo is the capital of Japan.</p>
				</div>
				<div id="Test Your Knowledge" class="tab-content">
					<h3 class="mb-2 text-xl font-semibold">Test Your Knowledge</h3>
				</div>
			</div>
		</div>
	</div>
</main>

<style>
	.tab-content {
		display: none;
	}
</style>

<script lang="ts">
  import { openTab } from "$lib/scripts/slideTabs";
  import { onMount } from "svelte";

  onMount(() => {
	Array.prototype.forEach.call(document.getElementsByClassName('default-open'), (el) => {
		(el as HTMLElement).click();
	});
  });
</script>