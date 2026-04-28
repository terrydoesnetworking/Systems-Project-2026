 <script lang="ts">
	import { openTab } from '$lib/scripts/slideTabs';
	import { onMount } from 'svelte';

	onMount(() => {
		Array.prototype.forEach.call(document.getElementsByClassName('default-open'), (el) => {
			(el as HTMLElement).click();
		});
	});
</script>

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
						onclick={(evt) => openTab(evt, 'Module 2')}>Module 2: Consequences Of Phishing</button
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
				<div id="Module 2" class="tab-content">
					<div class="mb-6 flex overflow-x-auto border-b border-gray-200">
						<button
							class="default-open tab-btn px-6 py-3 font-medium text-gray-500 transition-colors hover:text-blue-600"
							onclick={(evt) => openTab(evt, 'M2 Intro')}>Introduction</button
						>
						<button
							class="tab-btn px-6 py-3 font-medium text-gray-500 transition-colors hover:text-blue-600"
							onclick={(evt) => openTab(evt, 'M2 Financial')}>Financial Loss</button
						>
						<button
							class="tab-btn px-6 py-3 font-medium text-gray-500 transition-colors hover:text-blue-600"
							onclick={(evt) => openTab(evt, 'M2 Data')}>Data Breaches</button
						>
						<button
							class="tab-btn px-6 py-3 font-medium text-gray-500 transition-colors hover:text-blue-600"
							onclick={(evt) => openTab(evt, 'M2 Identity')}>Identity Theft</button
						>
						<button
							class="tab-btn px-6 py-3 font-medium text-gray-500 transition-colors hover:text-blue-600"
							onclick={(evt) => openTab(evt, 'M2 Reputation')}>Reputation</button
						>
						<button
							class="tab-btn px-6 py-3 font-medium text-gray-500 transition-colors hover:text-blue-600"
							onclick={(evt) => openTab(evt, 'M2 Legal')}>Legal</button
						>
						<button
							class="tab-btn px-6 py-3 font-medium text-gray-500 transition-colors hover:text-blue-600"
							onclick={(evt) => openTab(evt, 'M2 Operations')}>Operations</button
						>
						<button
							class="tab-btn px-6 py-3 font-medium text-gray-500 transition-colors hover:text-blue-600"
							onclick={(evt) => openTab(evt, 'M2 Psychological')}>Psychological</button
						>
						<button
							class="tab-btn px-6 py-3 font-medium text-gray-500 transition-colors hover:text-blue-600"
							onclick={(evt) => openTab(evt, 'M2 Summary')}>Summary</button
						>
					</div>

					<div id="M2 Intro" class="tab-content">
						<h3 class="text-xl font-semibold">Introduction</h3>
						<ul class="list-inside list-disc text-gray-600">
							<li>Phishing tricks users into revealing sensitive information.</li>
							<li>Common methods include emails, fake websites, and texts.</li>
							<li>Understanding consequences helps prevention.</li>
						</ul>
					</div>

					<div id="M2 Financial" class="tab-content">
						<h3 class="text-xl font-semibold">Financial Loss</h3>
						<ul class="list-inside list-disc text-gray-600">
							<li>Direct theft from accounts.</li>
							<li>Costly recovery.</li>
							<li>Businesses may lose large sums.</li>
						</ul>
					</div>

					<div id="M2 Data" class="tab-content">
						<h3 class="text-xl font-semibold">Data Breaches</h3>
						<ul class="list-inside list-disc text-gray-600">
							<li>Access to sensitive data.</li>
							<li>Data sold on dark web.</li>
							<li>Long-term risks.</li>
						</ul>
					</div>

					<div id="M2 Identity" class="tab-content">
						<h3 class="text-xl font-semibold">Identity Theft</h3>
						<ul class="list-inside list-disc text-gray-600">
							<li>Fraud using stolen identity.</li>
							<li>Credit damage.</li>
							<li>Legal issues.</li>
						</ul>
					</div>

					<div id="M2 Reputation" class="tab-content">
						<h3 class="text-xl font-semibold">Reputational Damage</h3>
						<ul class="list-inside list-disc text-gray-600">
							<li>Loss of trust.</li>
							<li>Negative publicity.</li>
							<li>Brand impact.</li>
						</ul>
					</div>

					<div id="M2 Legal" class="tab-content">
						<h3 class="text-xl font-semibold">Legal Consequences</h3>
						<ul class="list-inside list-disc text-gray-600">
							<li>Fines and penalties.</li>
							<li>Regulation violations.</li>
							<li>Lawsuits.</li>
						</ul>
					</div>

					<div id="M2 Operations" class="tab-content">
						<h3 class="text-xl font-semibold">Operational Disruption</h3>
						<ul class="list-inside list-disc text-gray-600">
							<li>Downtime.</li>
							<li>Lost productivity.</li>
							<li>Recovery costs.</li>
						</ul>
					</div>

					<div id="M2 Psychological" class="tab-content">
						<h3 class="text-xl font-semibold">Psychological Impact</h3>
						<ul class="list-inside list-disc text-gray-600">
							<li>Stress and anxiety.</li>
							<li>Loss of trust.</li>
							<li>Fear of future attacks.</li>
						</ul>
					</div>

					<div id="M2 Summary" class="tab-content">
						<h3 class="text-xl font-semibold">Summary</h3>
						<ul class="list-inside list-disc text-gray-600">
							<li>Financial, legal, and reputational damage.</li>
							<li>Affects individuals and businesses.</li>
							<li>Prevention is critical.</li>
						</ul>
					</div>
				</div>

				<div id="Module 3" class="tab-content">
					<div class="mb-6 flex overflow-x-auto border-b border-gray-200">
						<button
							class="default-open tab-btn px-6 py-3 font-medium text-gray-500 transition-colors hover:text-blue-600"
							onclick={(evt) => openTab(evt, 'M3 Intro')}>Intro</button
						>
						<button
							class="tab-btn px-6 py-3 font-medium text-gray-500 transition-colors hover:text-blue-600"
							onclick={(evt) => openTab(evt, 'M3 Strong')}>Strong Passwords</button
						>
						<button
							class="tab-btn px-6 py-3 font-medium text-gray-500 transition-colors hover:text-blue-600"
							onclick={(evt) => openTab(evt, 'M3 Mistakes')}>Mistakes</button
						>
						<button
							class="tab-btn px-6 py-3 font-medium text-gray-500 transition-colors hover:text-blue-600"
							onclick={(evt) => openTab(evt, 'M3 MFA')}>MFA</button
						>
						<button
							class="tab-btn px-6 py-3 font-medium text-gray-500 transition-colors hover:text-blue-600"
							onclick={(evt) => openTab(evt, 'M3 Managers')}>Managers</button
						>
						<button
							class="tab-btn px-6 py-3 font-medium text-gray-500 transition-colors hover:text-blue-600"
							onclick={(evt) => openTab(evt, 'M3 Tips')}>Tips</button
						>
						<button
							class="tab-btn px-6 py-3 font-medium text-gray-500 transition-colors hover:text-blue-600"
							onclick={(evt) => openTab(evt, 'M3 Recap')}>Recap</button
						>
					</div>

					<div id="M3 Intro" class="tab-content">
						<h3>Password Security</h3>
						<ul class="list-inside list-disc text-gray-600">
							<li>First line of defense.</li>
							<li>Weak passwords risk compromise.</li>
							<li>Strong authentication protects data.</li>
						</ul>
					</div>

					<div id="M3 Strong" class="tab-content">
						<h3>Strong Passwords</h3>
						<ul class="list-inside list-disc text-gray-600">
							<li>12+ characters.</li>
							<li>Mix of characters.</li>
							<li>No personal info.</li>
							<li>Use passphrases.</li>
						</ul>
					</div>

					<div id="M3 Mistakes" class="tab-content">
						<h3>Common Mistakes</h3>
						<ul class="list-inside list-disc text-gray-600">
							<li>Reusing passwords.</li>
							<li>Simple passwords.</li>
							<li>Sharing credentials.</li>
							<li>Writing them down insecurely.</li>
						</ul>
					</div>

					<div id="M3 MFA" class="tab-content">
						<h3>MFA</h3>
						<ul class="list-inside list-disc text-gray-600">
							<li>Extra security layer.</li>
							<li>Multiple verification methods.</li>
							<li>Reduces unauthorized access.</li>
						</ul>
					</div>

					<div id="M3 Managers" class="tab-content">
						<h3>Password Managers</h3>
						<ul class="list-inside list-disc text-gray-600">
							<li>Store passwords securely.</li>
							<li>Encrypt data.</li>
							<li>Prevent reuse.</li>
						</ul>
					</div>

					<div id="M3 Tips" class="tab-content">
						<h3>Protection Tips</h3>
						<ul class="list-inside list-disc text-gray-600">
							<li>Enable MFA.</li>
							<li>Avoid public devices.</li>
							<li>Log out.</li>
							<li>Change compromised passwords.</li>
						</ul>
					</div>

					<div id="M3 Recap" class="tab-content">
						<h3>Recap</h3>
						<ul class="list-inside list-disc text-gray-600">
							<li>Strong, unique passwords.</li>
							<li>No reuse.</li>
							<li>MFA is essential.</li>
						</ul>
					</div>
				</div>

				<div id="Module 4" class="tab-content">
					<div class="mb-6 flex overflow-x-auto border-b border-gray-200">
						<button
							class="default-open tab-btn px-6 py-3 font-medium text-gray-500 transition-colors hover:text-blue-600"
							onclick={(evt) => openTab(evt, 'M4 Intro')}>Intro</button
						>
						<button
							class="tab-btn px-6 py-3 font-medium text-gray-500 transition-colors hover:text-blue-600"
							onclick={(evt) => openTab(evt, 'M4 Practices')}>Practices</button
						>
						<button
							class="tab-btn px-6 py-3 font-medium text-gray-500 transition-colors hover:text-blue-600"
							onclick={(evt) => openTab(evt, 'M4 Email')}>Email</button
						>
						<button
							class="tab-btn px-6 py-3 font-medium text-gray-500 transition-colors hover:text-blue-600"
							onclick={(evt) => openTab(evt, 'M4 Wifi')}>Wi-Fi</button
						>
						<button
							class="tab-btn px-6 py-3 font-medium text-gray-500 transition-colors hover:text-blue-600"
							onclick={(evt) => openTab(evt, 'M4 Downloads')}>Downloads</button
						>
						<button
							class="tab-btn px-6 py-3 font-medium text-gray-500 transition-colors hover:text-blue-600"
							onclick={(evt) => openTab(evt, 'M4 Signs')}>Warning Signs</button
						>
						<button
							class="tab-btn px-6 py-3 font-medium text-gray-500 transition-colors hover:text-blue-600"
							onclick={(evt) => openTab(evt, 'M4 Recap')}>Recap</button
						>
					</div>

					<div id="M4 Intro" class="tab-content">
						<h3>Introduction</h3>
						<ul class="list-inside list-disc text-gray-600">
							<li>Internet is a major attack surface.</li>
							<li>Safe browsing reduces risk.</li>
							<li>Stay cautious.</li>
						</ul>
					</div>

					<div id="M4 Practices" class="tab-content">
						<h3>Safe Practices</h3>
						<ul class="list-inside list-disc text-gray-600">
							<li>Trusted sites only.</li>
							<li>Check HTTPS.</li>
							<li>Avoid unknown links.</li>
						</ul>
					</div>

					<div id="M4 Email" class="tab-content">
						<h3>Email Safety</h3>
						<ul class="list-inside list-disc text-gray-600">
							<li>Verify sender.</li>
							<li>Avoid attachments.</li>
							<li>Watch urgency.</li>
						</ul>
					</div>

					<div id="M4 Wifi" class="tab-content">
						<h3>Public Wi-Fi</h3>
						<ul class="list-inside list-disc text-gray-600">
							<li>Unsecured networks.</li>
							<li>Data interception risk.</li>
							<li>Avoid sensitive actions.</li>
						</ul>
					</div>

					<div id="M4 Downloads" class="tab-content">
						<h3>Download Safety</h3>
						<ul class="list-inside list-disc text-gray-600">
							<li>Trusted sources only.</li>
							<li>No pirated software.</li>
							<li>Scan files.</li>
						</ul>
					</div>

					<div id="M4 Signs" class="tab-content">
						<h3>Unsafe Website Signs</h3>
						<ul class="list-inside list-disc text-gray-600">
							<li>Misspelled URLs.</li>
							<li>No HTTPS.</li>
							<li>Too many pop-ups.</li>
						</ul>
					</div>

					<div id="M4 Recap" class="tab-content">
						<h3>Recap</h3>
						<ul class="list-inside list-disc text-gray-600">
							<li>Be cautious.</li>
							<li>Verify sources.</li>
							<li>Avoid risky behavior.</li>
						</ul>
					</div>
				</div>
				<div id="Module 5" class="tab-content"></div>

				<div id="Test Your Knowledge" class="tab-content">
					<div class="text-center">
						<h3 class="mb-2 text-xl font-semibold">Test Your Knowledge</h3>
						<a
							href="/quiz"
							class="mt-4 inline-block rounded bg-blue-600 px-6 py-3 font-bold text-white shadow-xl transition-colors hover:bg-blue-700"
							>Take the Quiz</a
						>
					</div>
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
 
 <!-- <main class="min-h-[75vh] bg-gray-50 py-8">
  <div class="container mx-auto px-4">
    <h1 class="text-3xl font-bold text-center mt-4 mb-8 text-gray-800">Information Slides</h1>
    
    <div class="bg-white rounded-lg shadow-md mb-4 overflow-hidden">
      <div class="p-6">

   
        <div class="flex border-b border-gray-200 mb-6">
          <button class="tab-btn px-6 py-3 font-medium text-blue-600 border-b-2 border-blue-600">Tier 1</button>
          <button class="tab-btn px-6 py-3 font-medium text-gray-500 hover:text-blue-600 transition-colors">Tier 2</button>
          <button class="tab-btn px-6 py-3 font-medium text-gray-500 hover:text-blue-600 transition-colors">Tier 3</button>
        </div>

        
        <div id="tier-1" class="tab-content block">
          <h3 class="text-xl font-semibold mb-2">London</h3>
          <p class="text-gray-600">London is the capital city of England.</p>
        </div>

        
        <div id="tier-2" class="tab-content hidden">
          <h3 class="text-xl font-semibold mb-2">Paris</h3>
          <p class="text-gray-600">Paris is the capital of France.</p>
        </div>

       
        <div id="tier-3" class="tab-content hidden">
          <div class="bg-gray-50 p-4 rounded-lg">
            
            <div class="flex space-x-2 mb-4 bg-gray-200 p-1 rounded-md w-max">
              <button class="nested-btn px-4 py-2 bg-white shadow-sm rounded text-sm font-medium">London</button>
              <button class="nested-btn px-4 py-2 hover:bg-white/50 rounded text-sm font-medium transition-all">Paris</button>
              <button class="nested-btn px-4 py-2 hover:bg-white/50 rounded text-sm font-medium transition-all">Tokyo</button>
            </div>

            <div id="test-1" class="nested-content block">
              <h3 class="text-lg font-bold">Test 1</h3>
              <p class="text-gray-600">Test 1 Text</p>
            </div>

            <div id="test-2" class="nested-content hidden">
              <h3 class="text-lg font-bold">Test 2</h3>
              <p class="text-gray-600">Test 2 Text</p>
            </div>

            <div id="test-3" class="nested-content hidden">
              <h3 class="text-lg font-bold">Test 3</h3>
              <p class="text-gray-600">Test 3 Text</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</main>
<main>
	<div>
		<div>
			<div>
				<div>
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
				
				<div id="Module 2" class="tab-content">
					<div class="mb-6 flex overflow-x-auto border-b border-gray-200">
						<button
							class="default-open tab-btn px-6 py-3 font-medium text-gray-500 transition-colors hover:text-blue-600"
							onclick={(evt) => openTab(evt, 'M2 Intro')}>Introduction</button
						>
						<button
							class="tab-btn px-6 py-3 font-medium text-gray-500 transition-colors hover:text-blue-600"
							onclick={(evt) => openTab(evt, 'M2 Financial')}>Financial Loss</button
						>
						<button
							class="tab-btn px-6 py-3 font-medium text-gray-500 transition-colors hover:text-blue-600"
							onclick={(evt) => openTab(evt, 'M2 Data')}>Data Breaches</button
						>
						<button
							class="tab-btn px-6 py-3 font-medium text-gray-500 transition-colors hover:text-blue-600"
							onclick={(evt) => openTab(evt, 'M2 Identity')}>Identity Theft</button
						>
						<button
							class="tab-btn px-6 py-3 font-medium text-gray-500 transition-colors hover:text-blue-600"
							onclick={(evt) => openTab(evt, 'M2 Reputation')}>Reputation</button
						>
						<button
							class="tab-btn px-6 py-3 font-medium text-gray-500 transition-colors hover:text-blue-600"
							onclick={(evt) => openTab(evt, 'M2 Legal')}>Legal</button
						>
						<button
							class="tab-btn px-6 py-3 font-medium text-gray-500 transition-colors hover:text-blue-600"
							onclick={(evt) => openTab(evt, 'M2 Operations')}>Operations</button
						>
						<button
							class="tab-btn px-6 py-3 font-medium text-gray-500 transition-colors hover:text-blue-600"
							onclick={(evt) => openTab(evt, 'M2 Psychological')}>Psychological</button
						>
						<button
							class="tab-btn px-6 py-3 font-medium text-gray-500 transition-colors hover:text-blue-600"
							onclick={(evt) => openTab(evt, 'M2 Summary')}>Summary</button
						>
					</div>

					<div id="M2 Intro" class="tab-content">
						<h3 class="text-xl font-semibold">Introduction</h3>
						<ul class="list-inside list-disc text-gray-600">
							<li>Phishing tricks users into revealing sensitive information.</li>
							<li>Common methods include emails, fake websites, and texts.</li>
							<li>Understanding consequences helps prevention.</li>
						</ul>
					</div>

					<div id="M2 Financial" class="tab-content">
						<h3 class="text-xl font-semibold">Financial Loss</h3>
						<ul class="list-inside list-disc text-gray-600">
							<li>Direct theft from accounts.</li>
							<li>Costly recovery.</li>
							<li>Businesses may lose large sums.</li>
						</ul>
					</div>

					<div id="M2 Data" class="tab-content">
						<h3 class="text-xl font-semibold">Data Breaches</h3>
						<ul class="list-inside list-disc text-gray-600">
							<li>Access to sensitive data.</li>
							<li>Data sold on dark web.</li>
							<li>Long-term risks.</li>
						</ul>
					</div>

					<div id="M2 Identity" class="tab-content">
						<h3 class="text-xl font-semibold">Identity Theft</h3>
						<ul class="list-inside list-disc text-gray-600">
							<li>Fraud using stolen identity.</li>
							<li>Credit damage.</li>
							<li>Legal issues.</li>
						</ul>
					</div>

					<div id="M2 Reputation" class="tab-content">
						<h3 class="text-xl font-semibold">Reputational Damage</h3>
						<ul class="list-inside list-disc text-gray-600">
							<li>Loss of trust.</li>
							<li>Negative publicity.</li>
							<li>Brand impact.</li>
						</ul>
					</div>

					<div id="M2 Legal" class="tab-content">
						<h3 class="text-xl font-semibold">Legal Consequences</h3>
						<ul class="list-inside list-disc text-gray-600">
							<li>Fines and penalties.</li>
							<li>Regulation violations.</li>
							<li>Lawsuits.</li>
						</ul>
					</div>

					<div id="M2 Operations" class="tab-content">
						<h3 class="text-xl font-semibold">Operational Disruption</h3>
						<ul class="list-inside list-disc text-gray-600">
							<li>Downtime.</li>
							<li>Lost productivity.</li>
							<li>Recovery costs.</li>
						</ul>
					</div>

					<div id="M2 Psychological" class="tab-content">
						<h3 class="text-xl font-semibold">Psychological Impact</h3>
						<ul class="list-inside list-disc text-gray-600">
							<li>Stress and anxiety.</li>
							<li>Loss of trust.</li>
							<li>Fear of future attacks.</li>
						</ul>
					</div>

					<div id="M2 Summary" class="tab-content">
						<h3 class="text-xl font-semibold">Summary</h3>
						<ul class="list-inside list-disc text-gray-600">
							<li>Financial, legal, and reputational damage.</li>
							<li>Affects individuals and businesses.</li>
							<li>Prevention is critical.</li>
						</ul>
					</div>
				</div>

				<div id="Module 3" class="tab-content">
					<div class="mb-6 flex overflow-x-auto border-b border-gray-200">
						<button
							class="default-open tab-btn px-6 py-3 font-medium text-gray-500 transition-colors hover:text-blue-600"
							onclick={(evt) => openTab(evt, 'M3 Intro')}>Intro</button
						>
						<button
							class="tab-btn px-6 py-3 font-medium text-gray-500 transition-colors hover:text-blue-600"
							onclick={(evt) => openTab(evt, 'M3 Strong')}>Strong Passwords</button
						>
						<button
							class="tab-btn px-6 py-3 font-medium text-gray-500 transition-colors hover:text-blue-600"
							onclick={(evt) => openTab(evt, 'M3 Mistakes')}>Mistakes</button
						>
						<button
							class="tab-btn px-6 py-3 font-medium text-gray-500 transition-colors hover:text-blue-600"
							onclick={(evt) => openTab(evt, 'M3 MFA')}>MFA</button
						>
						<button
							class="tab-btn px-6 py-3 font-medium text-gray-500 transition-colors hover:text-blue-600"
							onclick={(evt) => openTab(evt, 'M3 Managers')}>Managers</button
						>
						<button
							class="tab-btn px-6 py-3 font-medium text-gray-500 transition-colors hover:text-blue-600"
							onclick={(evt) => openTab(evt, 'M3 Tips')}>Tips</button
						>
						<button
							class="tab-btn px-6 py-3 font-medium text-gray-500 transition-colors hover:text-blue-600"
							onclick={(evt) => openTab(evt, 'M3 Recap')}>Recap</button
						>
					</div>

					<div id="M3 Intro" class="tab-content">
						<h3>Password Security</h3>
						<ul class="list-inside list-disc text-gray-600">
							<li>First line of defense.</li>
							<li>Weak passwords risk compromise.</li>
							<li>Strong authentication protects data.</li>
						</ul>
					</div>

					<div id="M3 Strong" class="tab-content">
						<h3>Strong Passwords</h3>
						<ul class="list-inside list-disc text-gray-600">
							<li>12+ characters.</li>
							<li>Mix of characters.</li>
							<li>No personal info.</li>
							<li>Use passphrases.</li>
						</ul>
					</div>

					<div id="M3 Mistakes" class="tab-content">
						<h3>Common Mistakes</h3>
						<ul class="list-inside list-disc text-gray-600">
							<li>Reusing passwords.</li>
							<li>Simple passwords.</li>
							<li>Sharing credentials.</li>
							<li>Writing them down insecurely.</li>
						</ul>
					</div>

					<div id="M3 MFA" class="tab-content">
						<h3>MFA</h3>
						<ul class="list-inside list-disc text-gray-600">
							<li>Extra security layer.</li>
							<li>Multiple verification methods.</li>
							<li>Reduces unauthorized access.</li>
						</ul>
					</div>

					<div id="M3 Managers" class="tab-content">
						<h3>Password Managers</h3>
						<ul class="list-inside list-disc text-gray-600">
							<li>Store passwords securely.</li>
							<li>Encrypt data.</li>
							<li>Prevent reuse.</li>
						</ul>
					</div>

					<div id="M3 Tips" class="tab-content">
						<h3>Protection Tips</h3>
						<ul class="list-inside list-disc text-gray-600">
							<li>Enable MFA.</li>
							<li>Avoid public devices.</li>
							<li>Log out.</li>
							<li>Change compromised passwords.</li>
						</ul>
					</div>

					<div id="M3 Recap" class="tab-content">
						<h3>Recap</h3>
						<ul class="list-inside list-disc text-gray-600">
							<li>Strong, unique passwords.</li>
							<li>No reuse.</li>
							<li>MFA is essential.</li>
						</ul>
					</div>
				</div>

				<div id="Module 4" class="tab-content">
					<div class="mb-6 flex overflow-x-auto border-b border-gray-200">
						<button
							class="default-open tab-btn px-6 py-3 font-medium text-gray-500 transition-colors hover:text-blue-600"
							onclick={(evt) => openTab(evt, 'M4 Intro')}>Intro</button
						>
						<button
							class="tab-btn px-6 py-3 font-medium text-gray-500 transition-colors hover:text-blue-600"
							onclick={(evt) => openTab(evt, 'M4 Practices')}>Practices</button
						>
						<button
							class="tab-btn px-6 py-3 font-medium text-gray-500 transition-colors hover:text-blue-600"
							onclick={(evt) => openTab(evt, 'M4 Email')}>Email</button
						>
						<button
							class="tab-btn px-6 py-3 font-medium text-gray-500 transition-colors hover:text-blue-600"
							onclick={(evt) => openTab(evt, 'M4 Wifi')}>Wi-Fi</button
						>
						<button
							class="tab-btn px-6 py-3 font-medium text-gray-500 transition-colors hover:text-blue-600"
							onclick={(evt) => openTab(evt, 'M4 Downloads')}>Downloads</button
						>
						<button
							class="tab-btn px-6 py-3 font-medium text-gray-500 transition-colors hover:text-blue-600"
							onclick={(evt) => openTab(evt, 'M4 Signs')}>Warning Signs</button
						>
						<button
							class="tab-btn px-6 py-3 font-medium text-gray-500 transition-colors hover:text-blue-600"
							onclick={(evt) => openTab(evt, 'M4 Recap')}>Recap</button
						>
					</div>

					<div id="M4 Intro" class="tab-content">
						<h3>Introduction</h3>
						<ul class="list-inside list-disc text-gray-600">
							<li>Internet is a major attack surface.</li>
							<li>Safe browsing reduces risk.</li>
							<li>Stay cautious.</li>
						</ul>
					</div>

					<div id="M4 Practices" class="tab-content">
						<h3>Safe Practices</h3>
						<ul class="list-inside list-disc text-gray-600">
							<li>Trusted sites only.</li>
							<li>Check HTTPS.</li>
							<li>Avoid unknown links.</li>
						</ul>
					</div>

					<div id="M4 Email" class="tab-content">
						<h3>Email Safety</h3>
						<ul class="list-inside list-disc text-gray-600">
							<li>Verify sender.</li>
							<li>Avoid attachments.</li>
							<li>Watch urgency.</li>
						</ul>
					</div>

					<div id="M4 Wifi" class="tab-content">
						<h3>Public Wi-Fi</h3>
						<ul class="list-inside list-disc text-gray-600">
							<li>Unsecured networks.</li>
							<li>Data interception risk.</li>
							<li>Avoid sensitive actions.</li>
						</ul>
					</div>

					<div id="M4 Downloads" class="tab-content">
						<h3>Download Safety</h3>
						<ul class="list-inside list-disc text-gray-600">
							<li>Trusted sources only.</li>
							<li>No pirated software.</li>
							<li>Scan files.</li>
						</ul>
					</div>

					<div id="M4 Signs" class="tab-content">
						<h3>Unsafe Website Signs</h3>
						<ul class="list-inside list-disc text-gray-600">
							<li>Misspelled URLs.</li>
							<li>No HTTPS.</li>
							<li>Too many pop-ups.</li>
						</ul>
					</div>

					<div id="M4 Recap" class="tab-content">
						<h3>Recap</h3>
						<ul class="list-inside list-disc text-gray-600">
							<li>Be cautious.</li>
							<li>Verify sources.</li>
							<li>Avoid risky behavior.</li>
						</ul>
					</div>
				</div>
				<div id="Module 5" class="tab-content"></div>

				<div id="Test Your Knowledge" class="tab-content">
						<div class="text-center">
							<h3 class="mb-2 text-xl font-semibold">Test Your Knowledge</h3>
							<a href="/quiz"
							class="mt-4 inline-block rounded bg-blue-600 px-6 py-3 font-bold text-white shadow-xl transition-colors hover:bg-blue-700"
							>Take the Quiz</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</main>

<style>
	.tab-content {
		display: none;
	}
</style> -->
