const API_URL = 'http://127.0.0.1:8000/api';

export async function getProjects() {
    try {
        const res = await fetch(`${API_URL}/projects/items/`, { cache: 'no-store' });
        if (!res.ok) throw new Error('Failed to fetch projects');
        return res.json();
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function getBlogPosts() {
    try {
        const res = await fetch(`${API_URL}/blog/posts/`, { cache: 'no-store' });
        if (!res.ok) throw new Error('Failed to fetch blog posts');
        return res.json();
    } catch (error) {
        console.error(error);
        return [];
    }
}
