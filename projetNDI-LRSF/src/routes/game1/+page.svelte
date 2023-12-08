<script>
    import { onMount } from "svelte";
    import buildings from "./database.js";
    import PopUp from "./PopUp.svelte";

    let currentBuildingIndex = 0;
    let currentBuilding = { ...buildings[currentBuildingIndex] };
    let showPopup = false;
    let minute;
    let seconde;

    var bat1 = -1;
    var bat2 = -1;
    var bat3 = -1;
    var bat4 = -1;
    var bat5 = -1;
  
    function getNextBuilding() {
      currentBuildingIndex = (currentBuildingIndex + 1) % buildings.length;
      currentBuilding = { ...buildings[currentBuildingIndex] };

    }

    export function _handleClickButton(emplacement) {
        showPopup = !showPopup
    }
    
    function start() {
        // Définir la durée totale du timer en millisecondes (5 minutes)
        const dureeTotale = 5; // 5 minutes en millisecondes

        // Définir l'intervalle entre chaque étape du timer (1 seconde)
        const intervalle = 1000; // 1 seconde en millisecondes

        // Variable pour stocker le temps écoulé
        minute = 0
        seconde = 0;

        // Fonction appelée à chaque étape du timer
        function miseAJourTimer() {
            // Afficher le temps écoulé (peut être adapté selon vos besoins)
            console.log(minute * 60 + seconde + ' secondes écoulées');
        
            // Vérifier si le temps écoulé a atteint la durée totale
            if (minute < dureeTotale) {
                // Incrémenter le temps écoulé
                if (seconde == 59)
                {
                    minute += 1;
                    seconde = 0;
                }
                else
                {
                    seconde += 1;
                }
                
                // Configurer la prochaine étape du timer
                setTimeout(miseAJourTimer, intervalle);
            } else {
                // Le timer a atteint la durée totale, vous pouvez exécuter une action ici
                console.log('Le timer est terminé!');
            }
        }

        // Lancer le timer en appelant la fonction pour la première fois
        miseAJourTimer();

    }

    start();
  
</script>

<body>
    <div id="mainDiv">
        {#if showPopup}
        <div on:click={() => _handleClickButton(1)} id=blur style="background-color : rgba(0, 0, 0, 30%);width:100%; height:100%;"/>
            <PopUp/>
        {/if}
        
        <!-- svelte-ignore missing-declaration -->
        <div on:click={() => _handleClickButton(1)} class="positionDiv" id="place1" style="top:50%; left:5%">
            {#if bat1 != -1}<img style="width:100%; height:100%" src={bat1}  alt="Description de l'image"/>{/if}
        </div>
        <div on:click={() => _handleClickButton(2)} class="positionDiv" id="place2" style="top:45%; left:25%">
            {#if bat2 != -1}<img style="width:100%; height:100%" src={bat2}  alt="Description de l'image"/>{/if}
        </div>
        <div on:click={() => _handleClickButton(3)} class="positionDiv" id="place3" style="top:70%; left:40%">
            {#if bat3 != -1}<img style="width:100%; height:100%" src={bat3}  alt="Description de l'image"/>{/if}
        </div>
        <div on:click={() => _handleClickButton(4)} class="positionDiv" id="place4" style="top:40%; left:60%; width:17vh; height:17vh">
            {#if bat4 != -1}<img style="width:100%; height:100%" src={bat4}  alt="Description de l'image"/>{/if}
        </div>
        <!-- svelte-ignore missing-declaration -->
        <div on:click={() => _handleClickButton(5)} class="positionDiv" id="place5" style="top:45%; left:85%">
            {#if bat5 != -1}<img style="width:100%; height:100%" src={bat5}  alt="Description de l'image"/>{/if}
        </div>
        
        <div class="ui" style="top:80%; left:0%">
            <p>{minute < 10 ? `0${minute}` : minute}:{seconde < 10 ? `0${seconde}` : seconde}</p>
            <p>Argent :</p> <progress value="50" max="100"></progress>
            <p>Polution : </p> <progress value="50" max="100"></progress>           
        </div>
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

    .ui
    {
        background-color: rgba(200, 100, 20, 100%);
        border-radius: 5px;;
        height: 20vh;
        width: 40vh;
        position: absolute;
        padding: 10px;
    }

    progress {
      width: 100%;
      height: 20px;
    }

    /* Style de la barre de progression remplie (background) */
    progress::-webkit-progress-bar {
      background-color: #eee;
      border-radius: 5px;
    }

    /* Style de la partie remplie de la barre de progression (foreground) */
    progress::-webkit-progress-value {
      background-color: #4CAF50; /* Vert */
      border-radius: 5px;
    }

    /* Style du texte affiché à l'intérieur de la barre de progression */
    progress::-webkit-progress-text {
      color: #000; /* Noir */
    }
</style>