<!-- a + page svelte számít az index fájlnak minden mappában -->
<script>
    let {data, i1} = $props();
</script> 
Zöldség
 <h1>Ez lesz a form</h1>
 <p> Cica: {data.cica}</p>


<p>Hány kutyát szeretnél látni? (1,2)</p>
<form method="post">
    <input 
        class="{i1 && i1.length > 6 ? 'green' : 'red'}"
        name="x1" bind:value={i1}><br>
    <input 
        disabled={
        ! (i1 && i1.length > 6)
        }
        type="submit" value="Küldés">
</form>


<p>Kutya: {data.kutya.name}</p>

<img src="{data.kutya_kep}.jpg" alt="" width="200px"><br>
i1: {i1}

<style>
    .green {
        background-color: green;
    }
    .red {
        background-color: red;
    }
</style>
