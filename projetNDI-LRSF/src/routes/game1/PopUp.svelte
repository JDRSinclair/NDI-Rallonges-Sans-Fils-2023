<script>
  import _handleClickButton from "./+page.svelte"

  let title = 'Choisissez votre batiment';
  let src = './assets/geothermique.png';
  let isPopupOpen = false;

  function closePopup() {
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

  <div class="popup">
    <h2>Choisissez votre batiment</h2>
    <p>Test</p>
  </div>

  <!-- svelte-ignore empty-block -->
  {#await window.addEventListener('keydown', handleKeyDown)}{/await}
