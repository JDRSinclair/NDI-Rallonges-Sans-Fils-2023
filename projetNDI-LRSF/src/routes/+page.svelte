<script>
    import PopUp from "./Settings.svelte";

    let settingsOpen = false;
    let fieldTest;

    function handleClickButton(event) {
        if (event.target === document.body) {
            settingsOpen = false;
        }
        else {
            settingsOpen = true;
        }
    }
</script>

<body>
    <div id="mainDiv">
        {#if settingsOpen}
            <PopUp/>
        {/if}
        <!-- svelte-ignore missing-declaration -->
        <div on:click={() => handleClickButton(1)} class="positionDiv" id="place1" style="top:50%; left:5%">
            <img style="width:100%; height:100%" src='src\lib\images\geothermique.png'  alt="Description de l'image"/>
        </div>
        <div on:click={() => handleClickButton(2)} class="positionDiv" id="place2" style="top:45%; left:25%">

        </div>
        <div on:click={() => handleClickButton(3)} class="positionDiv" id="place3" style="top:70%; left:40%">

        </div>
        <div on:click={() => handleClickButton(4)} class="positionDiv" id="place4" style="top:40%; left:60%; width:17vh; height:17vh">

        </div>
        <!-- svelte-ignore missing-declaration -->
        <div on:click={() => handleClickButton(5)} class="positionDiv" id="place5" style="top:45%; left:85%">

        </div>
        <!---->
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
