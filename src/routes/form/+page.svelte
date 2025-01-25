<!-- a + page svelte számít az index fájlnak minden mappában -->
<script>
    let {data} = $props();
</script> 
Zöldség
 <h1>Ez lesz a form</h1>
 <p> Cica: {data.cica}</p>

<form method="post">
    <input name="x1"><br>
    <input type="submit" value="Küldés">
</form>


<p>Kutya: {data.kutya}</p>
<p>Kutya: {data.kutya.name}</p>
<img src="{data.kutya.image}" alt="">
<img src="./1.jpg" alt="">


