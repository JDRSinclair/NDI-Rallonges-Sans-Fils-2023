<script>
    import buildings from "./database.js";
    import PopUp from "./PopUp.svelte";

    let currentBuildingIndex = 0;
    let currentBuilding = { ...buildings[currentBuildingIndex] };
  
    function getNextBuilding() {
      currentBuildingIndex = (currentBuildingIndex + 1) % buildings.length;
      currentBuilding = { ...buildings[currentBuildingIndex] };
    }
</script>

<body>
    <div id="mainDiv">
        <PopUp/>
        <div class="positionDiv" id="place1" style="top:50%; left:5%">
            <img style="width:100%; height:100%" src='src\lib\images\geothermique.png'  alt="Description de l'image" on:drop={handleImageDrop} on:click={openPopup}/>
        </div>
        <div class="positionDiv" id="place2" style="top:45%; left:25%">

        </div>
        <div class="positionDiv" id="place3" style="top:70%; left:40%">

        </div>
        <div class="positionDiv" id="place4" style="top:40%; left:60%; width:17vh; height:17vh">

        </div>
        <div class="positionDiv" id="place5" style="top:45%; left:85%">

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
    width: 100vw;
    height: 100vh; /* 16/9 aspect ratio */
    max-height: 100vh;
    background-size: cover; /* Ajuste la taille du fond pour couvrir toute la div */
    background-position: center; /* Centre le fond */
    background-repeat: no-repeat; /* Empêche la répétition du fond */
    background-image: url("./assets/fond.png");
    }

    .positionDiv{
        background-color: rgba(0, 0, 0, 30%);
        border-radius: 15px;;
        height: 20vh;
        width: 20vh;
        position: absolute;
        cursor: pointer;
    }
</style>