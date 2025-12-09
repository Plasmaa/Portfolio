

async function checkApi() {
    try {
        const res = await fetch('http://127.0.0.1:8000/api/projects/items/');
        const data = await res.json();
        console.log(JSON.stringify(data, null, 2));
    } catch (error) {
        console.error('Error:', error);
    }
}

checkApi();
