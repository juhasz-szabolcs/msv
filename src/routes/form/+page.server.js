var x = 1
export const load = () => {
    return {
        cica: x,
        kutya: { name: 'Zozó',
             age: 3,
            image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSCgNPjogXlDiQcKVYhBfGVDP919tfK8Gc9F8pHxGwUY_75Av1lNyXoCzbzebv026Q_9SbNppHIGqz3UvukEhOiOg' }, // Zozó
        // kutya_kep: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSCgNPjogXlDiQcKVYhBfGVDP919tfK8Gc9F8pHxGwUY_75Av1lNyXoCzbzebv026Q_9SbNppHIGqz3UvukEhOiOg'
    }
};

export const actions = {
    default: async ({ locals, request }) => {  
        console.log(locals)
        const data = await request.formData();
        const x1 = data.get('x1')
        console.log(x1)
        x++
    }
}