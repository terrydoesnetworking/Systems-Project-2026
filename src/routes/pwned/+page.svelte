<!--a <script>
  // svelte-ignore non_reactive_update
    let showPopup = true;

  function accept() {
    showPopup = false;
  }
</script>

{#if showPopup} -->
  <!-- OVERLAY -->
  <!-- <div
    id="overlay"
    style="
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      z-index: 1000;
    "
  ></div> -->

  <!-- POPUP -->
  <!-- <div
    id="popup"
    style="
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: orange;
      padding: 20px;
      border-radius: 10px;
      z-index: 1001;
      text-align: center;
    "
  > -->
    <!-- BIG TEXT -->
    <!-- <h1 style="color: red; margin-bottom: 10px;">You Got Pwned</h1> -->

    <!-- SMALL TEXT -->
    <!-- <p style="font-size: 14px;">
      This site will show and explain how to prevent this from happening.
    </p> -->

    
    <!-- <button on:click={accept}>Continue</button>
  </div>
{/if} -->





<!-- OVERLAY -->
<!-- <div
  id="overlay"
  class="fixed top-0 left-0 hidden h-full w-full bg-black/50"
></div> -->

<!-- POPUP -->
<!-- <div
  id="popup"
  class="fixed top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-orange-500 p-5"
> -->
  <!-- BIG TEXT -->
  <!-- <h1 class="mb-2.5 text-2xl font-bold text-red-600">You Got Pwned</h1> -->

  <!-- SMALL TEXT -->
  <!-- <p class="mb-4 text-sm text-black">
    This site will show and explain how to prevent this from happening.
  </p>

  <button  
    class="rounded bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-gray-200"
  >
    Continue
  </button>
</div> -->

<!-- <script>
  function accept() {
    // @ts-ignore
    document.getElementById("popup").classList.add("hidden");
    // @ts-ignore
    document.getElementById("overlay").classList.add("hidden");
  }

  //  THIS MAKES IT AUTO POP UP
  window.onload = function () {
    // @ts-ignore
    document.getElementById("popup").classList.remove("hidden");
    // @ts-ignore
    document.getElementById("overlay").classList.remove("hidden");
  };
</script> -->

<h1 class="big-text">
  Lucky for you, we are NOT <span style="color: red">hackers</span>! For
  more information, consider looking through this website to learn more
  on how to protect your self from losing your information.
</h1>
<h2 class="small-text">
  Click the buttons to navigate to our other pages.
</h2>

<div class="button-container" class:vertical={isVertical}>
  <a href="/"><button>Home</button></a>
  <a href="/quiz"><button>Quiz</button></a>
  <a href="/slides"><button>Slides</button></a>
</div>

<script>

  let isVertical = false;

  let showPopup = $state(true);

  function accept() {
    showPopup = false;
  }
</script>

{#if showPopup}
  <div class="overlay"></div>

  <div class="popup">
    <h1>You Got Pwned</h1>
    <p>This site will show and explain how to prevent this from happening.</p>
    <button onclick={accept}>Continue</button>
  </div>
{/if}

<style>

  .big-text {
        font-size: 50px;
        text-align: center;
      }

  .small-text {
    font-size: 25px;
    text-align: center;
    color: grey;
  }

.button-container {
    display: flex;
    justify-content: center;
    gap: 200px;
    margin-top: 120px; 
  }

  button {
    padding: 12px 20px;
    font-size: 16px;
    background-color: transparent;
    color: rgb(0, 0, 0);
    border: 4px solid rgb(10, 25, 50); /* 👈 outline */
    border-radius: 5px;
    cursor: pointer;
  }

  .vertical {
    flex-direction: column;
    align-items: center;
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1000;
  }

  .popup {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgb(255, 255, 255);
    padding: 20px;
    border-radius: 10px;
    z-index: 1001;
    text-align: center;
    max-width: 400px;
    width: 80%;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }

  .popup h1 {
    color: red;
    margin-bottom: 10px;
  }

  .popup p {
    font-size: 14px;
    margin-bottom: 15px;
  }

  .popup button {
    padding: 8px 16px;
    cursor: pointer;
  }
</style>