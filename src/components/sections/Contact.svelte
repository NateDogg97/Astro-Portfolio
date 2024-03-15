<script lang="ts">
    let name: string;
    let email: string;
    let message: string;
    let responseMessage: string;
    let requestSuccess = false;
    let isSubmitting = false;
  
    async function handleSubmit(e: SubmitEvent) {
      e.preventDefault();
      if (isSubmitting) return;
      isSubmitting = true;

      const formData = new FormData(e.currentTarget as HTMLFormElement);

      try {
        const response = await fetch("/api/sendEmail", {
          method: 'POST',
          body: formData
        });

        if (response.status === 429) {
          // Handle rate-limiting case
          throw new Error(`Please wait 15 minutes after sending your last message.`);
        } else if (!response.ok) {
          // If the response status code is not OK, throw to catch the block
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        requestSuccess = true;
        responseMessage = data.message || "Your message was sent successfully!";
      } catch (error: any) {
        console.error("Error sending message: ", error);
        requestSuccess = false;
        responseMessage = error.message;
      } finally {
        isSubmitting = false;
      }
  
      name = '';
      email = '';
      message = '';
    }
  </script>
  
  <div id="contact_me" class="w-full">
    <div class="container mx-auto px-6 md:px-12 lg:px-24 py-12 flex flex-wrap md:flex-nowrap">
      <div class="flex flex-col w-full md:w-1/2 mb-8 md:mb-0">
        <h2 class="text-white text-3xl md:text-5xl font-bold mb-4 font-montserrat">Let's get in touch!</h2>
        <div class="flex flex-row space-x-4">
          <a class="text-light text-xl flex gap-1 font-montserrat" href="https://github.com/NateDogg97" target="_blank">
            Github
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#9333ea" d="M13 19q-.425 0-.712-.288T12 18v-8H4q-.425 0-.712-.288T3 9q0-.425.288-.712T4 8h9q.425 0 .713.288T14 9v9q0 .425-.288.713T13 19m5-5q-.425 0-.712-.288T17 13V5H9q-.425 0-.712-.288T8 4q0-.425.288-.712T9 3h9q.425 0 .713.288T19 4v9q0 .425-.288.713T18 14"/></svg>
          </a>
          <a class="text-light text-xl flex gap-1 font-montserrat" href="https://www.linkedin.com/in/nathaniel-mays/" target="_blank">
            LinkedIn
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#9333ea" d="M13 19q-.425 0-.712-.288T12 18v-8H4q-.425 0-.712-.288T3 9q0-.425.288-.712T4 8h9q.425 0 .713.288T14 9v9q0 .425-.288.713T13 19m5-5q-.425 0-.712-.288T17 13V5H9q-.425 0-.712-.288T8 4q0-.425.288-.712T9 3h9q.425 0 .713.288T19 4v9q0 .425-.288.713T18 14"/></svg>
          </a>
        </div>
      </div>
    <div class="flex w-full md:w-1/2 font-montserrat">
      <form on:submit={handleSubmit} class="w-full flex flex-col space-y-4">
        <input 
          bind:value={name} 
          class="bg-indigo-950 border border-gray-500 text-white text-lg p-3 rounded focus:outline-none focus:border-purple-500"
          type="text" 
          name="name" 
          placeholder="Your name" 
          required>
        <input 
          bind:value={email} 
          type="email" 
          class="bg-indigo-950 border border-gray-500 text-white text-lg p-3 rounded focus:outline-none focus:border-purple-500"
          name="email" 
          placeholder="Your email" 
          required>
        <textarea 
          bind:value={message} 
          class="bg-indigo-950 border border-gray-500 text-white text-lg p-3 rounded focus:outline-none focus:border-purple-500 h-32"
          name="message" 
          placeholder="Your message" 
          required></textarea>
        <div class="flex justify-between items-center">
          <button 
            disabled={isSubmitting}
            type="submit"
            class="button bg-radient-ellipse-c from-purple-600 via-purple-800 to-purple-900 [background-size:100%;] hover:[background-size:200%;] focus:[background-size:200%;] text-white font-bold font-montserrat py-2 px-4 rounded w-fit transition-[background-size] duration-500"
            >Say Hi!
          </button>
          {#if responseMessage}
            <p class={`message text-right ${requestSuccess ? 'success text-green-600' : 'error text-red-600'}`}>{responseMessage}</p>
          {/if}
        </div>
      </form>
    </div>
  </div>

</div>
  
<style>
  form {
    display: inherit;
  }
  svg {
    height: 1.25rem;
    width: 1.25rem;
  }
</style>