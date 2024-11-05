<script>
    import EditorJS from '@editorjs/editorjs';
    import Header from '@editorjs/header';
    import List from "@editorjs/list";
    import SimpleImage from "@editorjs/simple-image";
	import { onMount } from 'svelte';

    let editor;

    onMount(() => {
        editor = new EditorJS({
            placeholder: "Add block",
            holder: "editor",
            tools: {
                header: {
                    class: Header,
                    config: {
                        placeholder: 'Enter a header',
                        levels: [1, 2, 3],
                        defaultLevel: 2
                    }
                },
                list: {
                    class: List,
                    inlineToolbar: true,
                    config: {
                        defaultStyle: 'unordered'
                    }
                },
                image: SimpleImage,
            }
        });
    })

    const upload = async () => {
        rawBlog = await editor.save();
        const blog = createBlog();
        // Fetch a request to the server
    }

    let metaDescription, blogTitle, blogImgURL, blogImgDesc;
    let tags = [];
    let rawBlog;
    
    const createBlog = () => {
        const blog = {
            blogTitle: blogTitle,
            blogImgURL: blogImgURL,
            blogImgDesc: blogImgDesc,
            metaDescription: metaDescription,
            tags: tags,
            rawBlog: rawBlog,
        }

        return blog;
    }
</script>

<main>
    <div class="controls">
        <button on:click={upload} class="primary">Upload</button>
        <button class="secondary">Cancel</button>
    </div>
    <div class="editor-wrapper">
        <input bind:value={blogTitle} type="text" placeholder="Blog title">
        <input bind:value={blogImgURL} type="text" placeholder="Main img URL">
        <input bind:value={blogImgDesc} type="text" placeholder="Main img URL">
        <div id="editor"></div>
        <textarea bind:value={metaDescription} placeholder="Meta Description"></textarea>
    </div>
    <div class="tags-container">
        <h3>Tags</h3>
        <input type="text" placeholder="Add tag" on:keydown={e => {
            if(e.key === "Enter") {
                tags = [...tags, e.target.value];
                e.target.value = "";
            }
        }}>
        <div class="tags">
            {#each tags as tag}
                <button on:click={e => {
                    tags = tags.filter(tag => tag != e.target.textContent);
                }} class="tag secondary">{tag}</button>
            {/each}
        </div>
    </div>
    <div class="confirmation-modal-wrapper hide">
        <div class="confirmation-modal">
            <p>Success!</p>
            <button class="secondary">Return</button>
        </div>
    </div>
</main>


<style>
    main {
        min-height: 100vh;
        min-height: 100svh;
        display: flex;
    }

    /* * {
        border: 1px solid blue;
    } */

    .editor-wrapper {
        padding: 1rem;
        flex: 1;
    }

    .editor-wrapper input[type="text"] {
        margin-bottom: 1rem;
        width: 100%;
        max-width: 800px;
        border: 1px solid #a1a1a166;
        padding: 1rem;
    }

    #editor {
        max-width: 800px;
        /* margin: auto; */
        border-radius: 1rem;
        background-color: #fff;
        /* box-shadow:  0 0 5px #bebebe; */
        border: 1px solid #a1a1a166;
        padding: 1rem;
    }

    .controls {
        padding: 1rem;
        font-size: 1.1rem;
    }

    .controls button {
        display: block;
        margin-bottom: .5rem;
    }

    button {
        background-color: white;
        color: black;
        border-radius: .5rem;
        border: 1px solid #a1a1a166;
        cursor: pointer;
        padding: .2rem .8rem;
    }

    .secondary {
        color: #1c54fc;
    }

    .secondary:hover {
        background-color: #1c54fc14;
    }

    .secondary:active {
        background-color: #1c54fc1a;
    }
    
    .primary {
        background-color: #1c54fc;
        color: white;
    }

    .primary:active {
        background-color: #4573FF;
    }

    .tags-container {
        padding: 1rem;

    }

    .tags {
        display: flex;
        flex-direction: column;
        gap: .5rem;
        margin-top: .5rem;
    }

    .tag {
        padding: .2rem .4rem;
        border: 1px solid #a1a1a166;
        border-radius: .5rem;
        text-align: center;
        cursor: pointer;
    }

    input[type="text"] {
        background-color: transparent;
        border: 1px solid #a1a1a166;
        border-radius: .5rem;
        padding: .2rem .4rem;
    }

    .controls, .tags-container {
        position: sticky;
        top: 0;
        height: 100vh;
        height: 100svh;
    }

    .confirmation-modal-wrapper {
        position: fixed;
        inset: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #a1a1a1a1;
        z-index: 100;
    }

    .confirmation-modal {
        padding: 1rem;
        background-color: white;
        border-radius: .5rem;
    }

    .confirmation-modal button {
        margin-top: .5rem;
        border: 0;
    }

    textarea {
        width: 100%;
        max-width: 800px;
        border-radius: .5rem;
        border: 1px solid #a1a1a166;
        margin-block: 1rem;
        padding: 1rem;
    }
</style>