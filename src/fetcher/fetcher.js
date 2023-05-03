export const fetchChefs = async () =>{
    const result = await fetch('https://savory-mediterranean-shafayetullah7.vercel.app/chefs');
    const data = await result.json();
    return data;
}