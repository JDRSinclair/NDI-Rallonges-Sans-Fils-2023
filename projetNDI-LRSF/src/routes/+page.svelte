<script>
    import Settings from "./Settings.svelte";

    let settingsOpen = false;
    let fieldTest;

    function handleClickSettings()
    {
        console.log(settingsOpen);
        if(settingsOpen)
        {
            settingsOpen = false;
        }
        else
        {
            settingsOpen = true;
        }
    }

    function handleClickOutside(event) {
        if (event.target === document.body) {
            settingsOpen = false;
        }
    }
</script>

<body on:click={handleClickOutside}>
    <div id="mainDiv">
        <h1>Menu du jeux</h1>
        <a href="/game1">Jeu 1</a>
        <a href="/game2">Jeu 2</a>
        <a href="#" on:click|stopPropagation={handleClickSettings}>Options</a>
        
        {#if settingsOpen}
            <Settings/>
        {/if}  
    </div>
</body>

<style>
    html, body {
    height: 100%;
    margin: 0;
    overflow: hidden;
    background-color: #ccc; /* Ajoute une couleur de fond pour mieux voir la div */
}


#mainDiv {
    width: 100vw;
    height: 56.25vw; /* 16/9 aspect ratio */
    max-height: 100vh;
    background-color: white; /* Ajoute une couleur de fond pour mieux voir la div */
    
}
</style>
