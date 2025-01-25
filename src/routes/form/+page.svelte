<!-- a + page svelte számít az index fájlnak minden mappában -->
<script>
    let {data, i1} = $props();
</script> 
Zöldség
 <h1>Ez lesz a form</h1>
 <p> Cica: {data.cica}</p>

<form method="post">
    <input name="x1" bind:value={i1}><br>
    <input type="submit" value="Küldés">
</form>


<p>Kutya: {data.kutya.name}</p>

<img src="{data.kutya_kep}.jpg" alt="" width="200px"><br>
i1: {i1}


