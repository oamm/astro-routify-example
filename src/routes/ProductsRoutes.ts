// routes/products.ts
import { streamJsonArray } from 'astro-routify';

export default streamJsonArray('/products', async ({ response }) => {
    for (let i = 1; i <= 3; i++) {
        response.send({ id: i, name: `Product ${i}` });
        await new Promise((r) => setTimeout(r, 200));
    }
    response.close();
});
