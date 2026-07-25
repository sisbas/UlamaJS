/**
 * Created by SEMİH on 28.04.2017.
 * Updated: Fixed vulnerabilities and modernized code
 */

const CONSONANTS = new Set("bcçdfgğhjklmnprsştvyz");
const VOWELS = new Set("aeıioöuü");
const PUNCTUATION = new Set('.,;!?\"\'');

/**
 * Detects "ulama" (vowel liaison) in Turkish text
 * Ulama occurs when a word ends with a consonant and the next word starts with a vowel
 * @param {string} text - Input text to analyze
 * @returns {Array} Array of objects containing word pairs where ulama occurs
 */
function detectUlama(text) {
    // Input validation
    if (!text || typeof text !== 'string') {
        throw new Error('Invalid input: text must be a non-empty string');
    }

    const trimmedText = text.trim();
    if (trimmedText.length === 0) {
        return [];
    }

    // Split text into words, removing punctuation
    const words = trimmedText
        .split(/\s+/)
        .map(word => word.replace(new RegExp(`[${Array.from(PUNCTUATION).join('')}]`, 'g'), ''))
        .filter(word => word.length > 0);

    if (words.length < 2) {
        return [];
    }

    const ulamaPairs = [];

    for (let i = 0; i < words.length - 1; i++) {
        const currentWord = words[i].toLowerCase();
        const nextWord = words[i + 1].toLowerCase();

        // Skip if next word is a number
        if (!isNaN(Number(nextWord))) {
            continue;
        }

        const lastChar = currentWord.charAt(currentWord.length - 1);
        const firstChar = nextWord.charAt(0);

        // Check if current word ends with consonant and next word starts with vowel
        if (CONSONANTS.has(lastChar) && VOWELS.has(firstChar)) {
            ulamaPairs.push({
                position: i,
                word1: words[i],
                word2: words[i + 1],
                message: 'ULAMA VAR!!!!'
            });
        }
    }

    return ulamaPairs;
}

// Export for testing/reuse
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { detectUlama, CONSONANTS, VOWELS };
}

// Example usage
if (require.main === module) {
    const testText = "semih işbaş acil adil deneme yanılma";
    const results = detectUlama(testText);
    
    if (results.length > 0) {
        console.log(`Found ${results.length} ulama occurrence(s):\n`);
        results.forEach(result => {
            console.log(`${result.message} "${result.word1}" + "${result.word2}"`);
        });
    } else {
        console.log('No ulama found.');
    }
}
