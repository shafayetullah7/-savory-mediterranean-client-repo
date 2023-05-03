export const fetchChefs = async () =>{
    const result = await fetch('https://savory-mediterranean-shafayetullah7.vercel.app/chefs');
    const data = await result.json();
    return data;
}
export const fetchChef = async ({params}) =>{
    const id = params.id;
    const result = await fetch(`https://savory-mediterranean-shafayetullah7.vercel.app/chefs/${id}`);
    const data = await result.json();
    return data;
}
// export const fetchChefRecipes = async ({})

export const fetchChefAndRecipes = async ({params}) =>{
    const id = params.id;
    const result = await fetch(`https://savory-mediterranean-shafayetullah7.vercel.app/chefs/${id}`);
    const data = await result.json();
    const ids = data && data.recipe_ids.join('-');
    console.log('ids:',ids);
    const result2 = await fetch(`https://savory-mediterranean-shafayetullah7.vercel.app/recipes/${ids}`);
    const data2 = await result2.json();
    console.log(data,ids,data2)
    return [data,data2];
}