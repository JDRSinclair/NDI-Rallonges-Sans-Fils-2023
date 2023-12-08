<script>
  let title = 'Titre du pop up';
  let description = 'sa description';
  let src = './assets/geothermique.png';
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

  function handleImageDrop(event) {
    event.preventDefault();
  }
</script>

<style>
  .popup {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    background-color: rgb(255, 255, 255);
    border: 1px solid #868686;
    border-radius: 5%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    z-index: 999;
    /* Désactivez le glisser-déposer pour le pop-up */
    user-select: none;
  }

  .drop-area {
    width: 300px;
    height: 200px;
    text-align: center;
    padding: 20px;
  }
</style>

<img class='drop-area' src='src\lib\images\geothermique.png'  alt="Description de l'image" on:drop={handleImageDrop} on:click={openPopup}/>


{#if isPopupOpen}
  <div class="popup">
    <h2>{title}</h2>
    <p>{description}</p>
  </div>

  <!-- svelte-ignore empty-block -->
  {#await window.addEventListener('keydown', handleKeyDown)}{/await}
{/if}