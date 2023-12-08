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
        <h1>Green City</h1>
        <a href="/game1">Jeu 1</a><br>
        <a href="/game2">Jeu 2</a><br>
        <a href="#" on:click={handleClickSettings}>Options</a>
        
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 56.25vw; /* 16/9 aspect ratio */
    max-height: 100vh;
    background-size: cover; /* Ajuste la taille du fond pour couvrir toute la div */
    background-position: center; /* Centre le fond */
    background-repeat: no-repeat; /* Empêche la répétition du fond */
    background-image: url("./assets/fondFlou.png");   
    text-align: center;
    
}

h1{
    text-align: center;
    font-size: 75px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;;
    color:rgb(50,100,20)
}

a{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 15%;
    height : 5%;
    border: solid;
    border-color: rgb(150,80,50);
    background-color: rgb(200, 200, 50);
    color : rgb(150,80,50);
    text-decoration: none;
    border-radius: 10px;
    font-size: 35px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
</style>
