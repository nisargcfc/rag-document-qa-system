"use server";

export async function splitText(text: string) {
    const chunks: string[] = [];
    const CHUNK_SIZE = 500; // characters instead of tokens
    
    // Simple character-based splitting
    for (let i = 0; i < text.length; i += CHUNK_SIZE) {
        const chunk = text.slice(i, i + CHUNK_SIZE);
        chunks.push(chunk);
    }
    
    return chunks;
}


