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
					<p class="text-gray-600">    • Definition: Phishing is a cyberattack where attackers pose as legitimate entities to steal sensitive information.
    • Common targets: Emails, messages, or websites.</p>
				</div>

				<div id="Types of Phishing" class="tab-content">
					<h3 class="mb-2 text-xl font-semibold">Types of Phishing</h3>
					<p class="text-gray-600">• Email phishing: Mass emails that appear legitimate.
    • Spear phishing: Targeted attacks aimed at specific individuals or organizations.
    • Clone phishing: A legitimate email that is cloned and altered with malicious links.
    • Vishing and Smishing: Voice and text message phishing.</p>
				</div>

				<div id="Recognizing Phishing Attempts" class="tab-content">
					<h3 class="mb-2 text-xl font-semibold">Recognizing Phishing Attempts</h3>
					<p class="text-gray-600">    • Suspicious email addresses or domain names.
    • Greeting is generic (e.g., "Dear Customer").
    • Urgent or threatening tone.
    • Poor grammar and spelling.
    • Unusual attachments or links, especially .exe files.</p>
				</div>

				<div id="How Phishing Works" class="tab-content">
					<h3 class="mb-2 text-xl font-semibold">How Phishing Works</h3>
					<p class="text-gray-600">    • Exploiting trust to deceive targets.
    • Collecting confidential information (username, passwords, credit card numbers).
    • Often leads to further attacks like installing malware.</p>
				</div>

				<div id="Protection Strategies" class="tab-content">
					<h3 class="mb-2 text-xl font-semibold">Protection Strategies</h3>
					<p class="text-gray-600">    • Always check the source.
    • Hover over links before clicking to check the URL.
    • Verify the sender's email or message through another communication channel.
    • Use anti-phishing software and keep it updated.
    • Educate and train regularly on new phishing tactics.</p>
				</div>

				<div id="Examples of Phishing Emails and Websites" class="tab-content">
					<h3 class="mb-2 text-xl font-semibold">Examples of Phishing Emails and Websites</h3>
					<p class="text-gray-600"> We need to insert pictures here. :-O </p>
				</div>

				<div id="Response to Phishing" class="tab-content">
					<h3 class="mb-2 text-xl font-semibold">Response to Phishing</h3>
					<p class="text-gray-600">    • Report any suspicious emails to IT/security department immediately.
    • Do not click on links or download attachments.
    • Delete the phishing message.
    • Change passwords if you suspect information was leaked.</p>
				</div>

				<div id="Recap and Key Takeaways" class="tab-content">
					<h3 class="mb-2 text-xl font-semibold">Recap and Key Takeaways</h3>
					<p class="text-gray-600">    • Stay vigilant and informed.
    • Security is a shared responsibility.
    • Continuous learning is necessary to counteract evolving threats.</p>
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
