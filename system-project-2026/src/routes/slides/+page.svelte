  <main>
    <div class="container-fluid">
      <h1 class="text-center mt-4 mb-4">Information Slides</h1>
      <div class="card mb-4">
        <div class="card-body">

          <div class="tab">
            <button class="tablinks defaultOpen">Tier 1</button>
            <button class="tablinks">Tier 2</button>
            <button class="tablinks">Tier 3</button>
          </div>

          <div id="Tier 1" class="tabcontent">
            <h3>London</h3>
            <p>London is the capital city of England.</p>
          </div>

          <div id="Tier 2" class="tabcontent">
            <h3>Paris</h3>
            <p>Paris is the capital of France.</p>
          </div>

          <div id="Tier 3" class="tabcontent">
            <div class="tab">
              <button class="tablinks defaultOpen">London</button>
              <button class="tablinks">Paris</button>
              <button class="tablinks">Tokyo</button>
            </div>

            <div id="Test1" class="tabcontent">
              <h3>Test 1</h3>
              <p>Test 1 Text</p>
            </div>

            <div id="Test2" class="tabcontent">
              <h3>Test 2</h3>
              <p>Test 2 Text</p>
            </div>

            <div id="Test3" class="tabcontent">
              <h3>Test 3</h3>
              <p>Test 3 Text</p>
            </div>
          </div>

        </div>
      </div>
    </div>

    
  </main>


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