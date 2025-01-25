var x = 1
var y = ""
export const load = () => {
    return {
        cica: x,
        kutya: { name: 'Zozó',
             age: 3,
            image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSCgNPjogXlDiQcKVYhBfGVDP919tfK8Gc9F8pHxGwUY_75Av1lNyXoCzbzebv026Q_9SbNppHIGqz3UvukEhOiOg'
            },
            kutya_kep: y
        // kutya_kep: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSCgNPjogXlDiQcKVYhBfGVDP919tfK8Gc9F8pHxGwUY_75Av1lNyXoCzbzebv026Q_9SbNppHIGqz3UvukEhOiOg'
    }

};

export const actions = {
    default: async ({ locals, request }) => {  
        console.log(locals)
        const data = await request.formData();
        y = data.get('x1')
        console.log(y)
        x++
    }
}