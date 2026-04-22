 <main class="min-h-[75vh] bg-gray-50 py-8">
  <div class="container mx-auto px-4">
    <h1 class="text-3xl font-bold text-center mt-4 mb-8 text-gray-800">Information Slides</h1>
    
    <div class="bg-white rounded-lg shadow-md mb-4 overflow-hidden">
      <div class="p-6">

        <!-- Top Level Tabs -->
        <div class="flex border-b border-gray-200 mb-6">
          <button class="tab-btn px-6 py-3 font-medium text-blue-600 border-b-2 border-blue-600">Tier 1</button>
          <button class="tab-btn px-6 py-3 font-medium text-gray-500 hover:text-blue-600 transition-colors">Tier 2</button>
          <button class="tab-btn px-6 py-3 font-medium text-gray-500 hover:text-blue-600 transition-colors">Tier 3</button>
        </div>

        <!-- Tier 1 Content -->
        <div id="tier-1" class="tab-content block">
          <h3 class="text-xl font-semibold mb-2">London</h3>
          <p class="text-gray-600">London is the capital city of England.</p>
        </div>

        <!-- Tier 2 Content -->
        <div id="tier-2" class="tab-content hidden">
          <h3 class="text-xl font-semibold mb-2">Paris</h3>
          <p class="text-gray-600">Paris is the capital of France.</p>
        </div>

        <!-- Tier 3 Content (Nested) -->
        <div id="tier-3" class="tab-content hidden">
          <div class="bg-gray-50 p-4 rounded-lg">
            <!-- Nested Tabs -->
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

<!-- <script>
// @ts-nocheck

  // Simple function to handle main tabs
  function openTab(evt, tabName) {
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.add('hidden'));
    
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => {
        btn.classList.remove('border-blue-600', 'text-blue-600', 'border-b-2');
        btn.classList.add('text-gray-500');
    });

    document.getElementById(tabName).classList.remove('hidden');
    evt.currentTarget.classList.add('border-blue-600', 'text-blue-600', 'border-b-2');
    evt.currentTarget.classList.remove('text-gray-500');
  }

  // Simple function to handle nested tabs
  function openNestedTab(evt, tabName) {
    const contents = document.querySelectorAll('.nested-content');
    contents.forEach(content => content.classList.add('hidden'));
    
    const buttons = document.querySelectorAll('.nested-btn');
    buttons.forEach(btn => {
        btn.classList.remove('bg-white', 'shadow-sm');
    });

    document.getElementById(tabName).classList.remove('hidden');
    evt.currentTarget.classList.add('bg-white', 'shadow-sm');
  }
</script> -->



  <!-- <script>
    function openCity(evt, tabElementId) {
      var i, tabcontent, tablinks;

      tabButtonParentNodes = evt.currentTarget.parentNode.querySelectorAll(":scope > .tablinks");
      tabButtonParentNodes.forEach((el) => {
        el.className = el.className.replace(" active", "");
      });

      evt.currentTarget.className += " active";

      tabElement = document.getElementById(tabElementId);
      tabElement.style.display = "block";

      tabElementContainer = tabElement.parentNode;
      nestedTabs = tabElementContainer.querySelectorAll(":scope > .tabcontent");

      nestedTabs.forEach((el) => {
        if (el.id != tabElementId) {
          el.style.display = "none";
        }
      });
    }

  [].forEach.call(document.getElementsByClassName("defaultOpen"), el => el.click());

  </script>

</body>



</html> -->