<script>
    
</script>

<main>
    <div class="article"></div>
    <div class="controls">
        <p>Add a block</p>
        <div class="types">
            <button>Main title</button>
            <button>Section title</button>
            <button>Section subtitle</button>
            <button>Paragraph</button>
            <button>List</button>
        </div>
    </div>
</main>

<style>
    main {
        min-height: 100vh;
        min-height: 100svh;
        display: flex;
    }
    
    button {
        padding: .2rem .4rem;
        border: 1px solid black;
        border-radius: .5rem;
        color: white;
        background-color: #21658A;
        cursor: pointer;
    }
    
    .types {
        display: flex;
        flex-direction: column;
        gap: .5rem;
    }

    /* main > * {
        border: 1px solid red;
    } */

    main .article {
        flex: 1;
    }

    .controls {
        padding: .5rem;
        position: sticky;
        top: 0;
        height: 100vh;
        border-left: 1px solid;
        display: flex;
        flex-direction: column;
        gap: .5rem;
    }
</style>