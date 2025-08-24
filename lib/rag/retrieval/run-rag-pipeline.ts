'use server';

import { getOptimizedQuery } from "./optimize-query";
import { retrieveDocuments } from "./retrieve-documents";
import { rankDocuments } from "./rerank-documents";

export async function runRagPipeline(query: string) {
    const optimizedQuery = await getOptimizedQuery(query);
    console.log('Optimized query:', optimizedQuery);

    const retrievedDocs = await retrieveDocuments(optimizedQuery, { 
        limit: 25,
        minSimilarity: 0.2
    });
    console.log('Retrieved documents:', retrievedDocs);
    console.log('Retrieved documents count:', retrievedDocs.length);

    const rankedResults = await rankDocuments(optimizedQuery, retrievedDocs);
    console.log('Final ranked results:', rankedResults);

    return rankedResults;
}