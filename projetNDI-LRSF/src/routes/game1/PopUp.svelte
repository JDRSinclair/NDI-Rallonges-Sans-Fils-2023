<script>
  let title = 'Titre du pop up';
  let description = 'sa description';
  let isPopupOpen = false;

  function openPopup() {
    isPopupOpen = true;
  }

  function closePopup() {
    isPopupOpen = false;
  }

  function handleKeyDown(event) {
    if (event.key === 'Escape') {
      closePopup();
    }
  }
</script>

<style>
  .popup {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    background-color: white;
    border: 1px solid #ccc;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    z-index: 999;
  }
</style>

<button on:click={openPopup}>Ouvrir le pop-up</button>

{#if isPopupOpen}
  <div class="popup">
    <h2>{title}</h2>
    <p>{description}</p>
  </div>

  <!-- svelte-ignore empty-block -->
  {#await window.addEventListener('keydown', handleKeyDown)}{/await}
{/if}