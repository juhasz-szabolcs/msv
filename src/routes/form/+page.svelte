<!-- a + page svelte számít az index fájlnak minden mappában -->
<script>
    let {data} = $props();
</script> 
Zöldség
 <h1>Ez lesz a form</h1>
 <p> Cica: {data.cica}</p>
<p>Kutya: {data.kutya}</p>
<p>Kutya: {data.kutya.name}</p>
<img src="{data.kutya.image}" alt="">


