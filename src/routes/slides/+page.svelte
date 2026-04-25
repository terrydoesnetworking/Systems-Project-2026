<script lang="ts">
	import { openTab } from '$lib/scripts/slideTabs';
	import { onMount } from 'svelte';

	onMount(() => {
		Array.prototype.forEach.call(document.getElementsByClassName('default-open'), (el) => {
			(el as HTMLElement).click();
		});
	});
</script>

<style>
	.tab-content {
		display: none;
	}
</style>

<main class="min-h-screen bg-gray-50 py-8">
	<div class="container mx-auto px-4">
		<h1 class="mt-4 mb-8 text-center text-3xl font-bold text-gray-800">Information Slides</h1>

		<div class="mb-4 overflow-hidden rounded-lg bg-white shadow-md">
			<div class="p-6">
				<div class="mb-6 flex overflow-x-auto border-b border-gray-200">
					<button
						class="default-open tab-btn px-6 py-3 font-medium text-gray-500 transition-colors hover:text-blue-600"
						onclick={(evt) => openTab(evt, 'Module 1')}>Module 1: Phishing Basics</button
					>
					<button
						class="tab-btn px-6 py-3 font-medium text-gray-500 transition-colors hover:text-blue-600"
						onclick={(evt) => openTab(evt, 'Module 2')}>Module 2: Cybersecurity Essentials</button
					>
					<button
						class="tab-btn px-6 py-3 font-medium text-gray-500 transition-colors hover:text-blue-600"
						onclick={(evt) => openTab(evt, 'Module 3')}>Module 3: Password Security</button
					>
					<button
						class="tab-btn px-6 py-3 font-medium text-gray-500 transition-colors hover:text-blue-600"
						onclick={(evt) => openTab(evt, 'Module 4')}>Module 4: Safe Browsing</button
					>
					<button
						class="tab-btn px-6 py-3 font-medium text-gray-500 transition-colors hover:text-blue-600"
						onclick={(evt) => openTab(evt, 'Module 5')}>Module 5: Advanced Phishing</button
					>
					<button
						class="tab-btn px-6 py-3 font-medium text-gray-500 transition-colors hover:text-blue-600"
						onclick={(evt) => openTab(evt, 'Test Your Knowledge')}>Test Your Knowledge</button
					>
				</div>

				<div id="Module 1" class="tab-content">
					<div class="mb-6 flex overflow-x-auto border-b border-gray-200">
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
					</div>

					<div id="Introduction to Phishing" class="tab-content">
						<h3 class="mb-2 text-xl font-semibold">Introduction to Phishing</h3>

						<ul class="list-inside list-disc space-y-1 text-gray-600">
							<li>
								<strong>Definition:</strong> Phishing is a cyberattack where attackers pose as legitimate
								entities to steal sensitive information.
							</li>
							<li><strong>Common targets:</strong> Emails, messages, or websites.</li>
						</ul>
					</div>

					<div id="Types of Phishing" class="tab-content">
						<h3 class="mb-2 text-xl font-semibold">Types of Phishing</h3>

						<ul class="list-inside list-disc space-y-1 text-gray-600">
							<li><strong>Email phishing:</strong> Mass emails that appear legitimate.</li>
							<li>
								<strong>Spear phishing:</strong> Targeted attacks aimed at specific individuals or organizations.
							</li>
							<li>
								<strong>Clone phishing:</strong> A legitimate email that is cloned and altered with malicious
								links.
							</li>
							<li><strong>Vishing and Smishing:</strong> Voice and text message phishing.</li>
						</ul>
					</div>

					<div id="Recognizing Phishing Attempts" class="tab-content">
						<h3 class="mb-2 text-xl font-semibold">Recognizing Phishing Attempts</h3>

						<ul class="list-inside list-disc space-y-1 text-gray-600">
							<li>Suspicious email addresses or domain names.</li>
							<li>Generic greetings (e.g., "Dear Customer").</li>
							<li>Urgent or threatening tone.</li>
							<li>Poor grammar and spelling.</li>
							<li>Unusual attachments or links, especially .exe files.</li>
						</ul>
					</div>

					<div id="How Phishing Works" class="tab-content">
						<h3 class="mb-2 text-xl font-semibold">How Phishing Works</h3>

						<ul class="list-inside list-disc space-y-1 text-gray-600">
							<li>Exploiting trust to deceive targets.</li>
							<li>Collecting confidential information (usernames, passwords, credit cards).</li>
							<li>Often leads to further attacks like malware installation.</li>
						</ul>
					</div>

					<div id="Protection Strategies" class="tab-content">
						<h3 class="mb-2 text-xl font-semibold">Protection Strategies</h3>

						<ul class="list-inside list-disc space-y-1 text-gray-600">
							<li>Always check the source.</li>
							<li>Hover over links before clicking to verify URLs.</li>
							<li>Verify sender identity through another communication channel.</li>
							<li>Use updated anti-phishing software.</li>
							<li>Stay trained on new phishing tactics.</li>
						</ul>
					</div>

					<div id="Examples of Phishing Emails and Websites" class="tab-content">
						<h3 class="mb-2 text-xl font-semibold">Examples of Phishing Emails and Websites</h3>

						<p class="text-gray-600">We need to insert pictures here. :-O</p>
					</div>

					<div id="Response to Phishing" class="tab-content">
						<h3 class="mb-2 text-xl font-semibold">Response to Phishing</h3>

						<ul class="list-inside list-disc space-y-1 text-gray-600">
							<li>Report suspicious emails to IT/security immediately.</li>
							<li>Do not click links or download attachments.</li>
							<li>Delete phishing messages.</li>
							<li>Change passwords if compromise is suspected.</li>
						</ul>
					</div>

					<div id="Recap and Key Takeaways" class="tab-content">
						<h3 class="mb-2 text-xl font-semibold">Recap and Key Takeaways</h3>

						<ul class="list-inside list-disc space-y-1 text-gray-600">
							<li>Stay vigilant and informed.</li>
							<li>Security is a shared responsibility.</li>
							<li>Continuous learning is necessary to counter evolving threats.</li>
						</ul>
					</div>
				</div>

				<div id="Module 2" class="tab-content"></div>

				<div id="Module 3" class="tab-content"></div>

				<div id="Module 4" class="tab-content"></div>

				<div id="Module 5" class="tab-content"></div>

				<div id="Test Your Knowledge" class="tab-content">
				<div class="text-center">
						<h3 class="mb-2 text-xl font-semibold">Test Your Knowledge</h3>
						<a href="/quiz" class="mt-4 inline-block rounded bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700 font-bold shadow-xl">Take the Quiz</a>
						</div>
				</div>
			</div>
		</div>
	</div>
</main>