<script lang="ts">
  import { enhance } from '$app/forms';
  import type { ActionData } from './$types';

  let { form }: { form: ActionData | null } = $props();
</script>

<main class="min-h-screen bg-gray-50 py-8">
  <div class="container mx-auto px-4">
    <h1 class="text-center text-3xl font-bold mt-4 mb-8 text-gray-800">
      Sign Up
    </h1>

    <div class="flex justify-center">
      <div class="w-full sm:w-5/6 md:w-1/2 lg:w-5/12 xl:w-1/3">

        <div class="bg-white rounded-lg shadow-md border border-gray-200 mb-12">
          <div class="p-6">

            {#if form?.error}
                <div class="mb-4 text-red-600 text-center font-semibold">
                    {form.error}
                </div>
            {/if}
            <form method="POST" use:enhance>

              <!-- Name -->
              <div class="mb-4">
                <!-- svelte-ignore a11y_label_has_associated_control -->
                <label class="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm
                         focus:outline-none focus:ring-2 focus:ring-blue-500
                         focus:border-blue-500"
                />
              </div>

              <!-- Email -->
              <div class="mb-4">
                <!-- svelte-ignore a11y_label_has_associated_control -->
                <label class="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm
                         focus:outline-none focus:ring-2 focus:ring-blue-500
                         focus:border-blue-500"
                />
              </div>

              <!-- Password -->
              <div class="mb-6">
                <!-- svelte-ignore a11y_label_has_associated_control -->
                <label class="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  required
                  class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm
                         focus:outline-none focus:ring-2 focus:ring-blue-500
                         focus:border-blue-500"
                />
              </div>

              <div class="flex justify-center">
                <button
                  type="submit"
                  class="w-1/2 bg-green-600 hover:bg-green-700 text-white
                         font-semibold py-2 px-4 rounded-md transition duration-200"
                >
                  Create Account
                </button>
              </div>

            </form>

          </div>
        </div>

      </div>
    </div>
  </div>
</main>