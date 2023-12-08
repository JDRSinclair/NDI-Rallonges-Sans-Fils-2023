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
    background-color: white;
    border: 1px solid #ccc;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    z-index: 999;    
  }

  .drop-area {
    width: 300px;
    height: 200px;
    border: 2px dashed #ccc;
    text-align: center;
    padding: 20px;
  }

  img {
    cursor: pointer;
    content: url("./assets/gaz.png");
  }
</style>

<img alt="Description de l'image" on:click={openPopup} on:drop={handleImageDrop}/>


{#if isPopupOpen}
  <div class="popup">
    <h2>{title}</h2>
    <p>{description}</p>
  </div>

  <!-- svelte-ignore empty-block -->
  {#await window.addEventListener('keydown', handleKeyDown)}{/await}
{/if}