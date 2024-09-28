import { type IPokemonPreview } from '@/lib/types/api.d';

function parseResults(results: any): IPokemonPreview[] {
    return results.map((item: any) => {
        const id = item.url.split('/').slice(-2, -1)[0];

        return {
            id: parseInt(id),
            name: item.name
        }
    })
}

const controller = {
    parseResults
};

export default controller;