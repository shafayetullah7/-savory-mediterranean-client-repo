export const fetchChefs = async () =>{
    const result = await fetch('http://localhost:5000/chefs');
    const data = await result.json();
    return data;
}