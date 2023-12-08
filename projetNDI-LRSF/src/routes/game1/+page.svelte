<script>
    import PopUp from "./PopUp.svelte";

</script>
<body>
    <div id="mainDiv">
        <PopUp/>
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
    background-size: cover; /* Ajuste la taille du fond pour couvrir toute la div */
    background-position: center; /* Centre le fond */
    background-repeat: no-repeat; /* Empêche la répétition du fond */
    background-image: url("./assets/fond.png");
    }
</style>