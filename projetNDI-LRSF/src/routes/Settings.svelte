<script>
  import { onMount } from 'svelte';
  let title = 'Titre du pop up';
  let isPopupOpen = false;

  onMount(() => {
    openPopup();
  });

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

  function translateToEnglish() {
    // Add your translation function here
  }

  function translateToFrench() {
    // Add your translation function here
  }

  function translateToSpanish() {
    // Add your translation function here
  }

  function translateToBasque() {
    // Add your translation function here
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}


  .flag {
    cursor: pointer;
    display: block;
    margin-bottom: 10px;
  }
  
</style>

{#if isPopupOpen}
  <div class="popup">
    <h2>{title}</h2>
    <img style="width:50px" class="flag" src="src\lib\images\royaume-uni.png" alt="English" on:click={translateToEnglish}>
    <img style="width:50px" class="flag" src="src\lib\images\france.png" alt="French" on:click={translateToFrench}>
    <img style="width:50px" class="flag" src="src\lib\images\espagne.png" alt="Spanish" on:click={translateToSpanish}>
    <img style="width:50px" class="flag" src="src\lib\images\pays-basque.png" alt="Basque" on:click={translateToBasque}>

  </div>

  <!-- svelte-ignore empty-block -->
  {#await window.addEventListener('keydown', handleKeyDown)}{/await}
{/if}
