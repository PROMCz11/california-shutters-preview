<script>
    
</script>

<main>
    <div class="article-wrapper">
        <div class="article">
            <input type="text" placeholder="Enter content...">
        </div>
    </div>
    <div class="controls">
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
    
    .types {
        display: flex;
        flex-direction: column;
        gap: .5rem;
    }

    .article-wrapper {
        flex: 1;
        background-color: hsl(0, 0%, 8%);
        padding: .5rem;
    }

    .article {
        max-width: 600px;
        margin: auto;
    }

    .controls {
        padding: .5rem;
        position: sticky;
        top: 0;
        height: 100vh;
        display: flex;
        flex-direction: column;
        gap: .5rem;
    }

    input:focus {
        outline: 1px solid white;
    }
</style>