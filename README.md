# Ulama Bulucu

A JavaScript utility that detects **ulama** (vowel liaison) in Turkish text.

## What is Ulama?

In Turkish phonetics, "ulama" refers to the phenomenon where a word ending in a consonant is followed by a word starting with a vowel, creating a phonetic connection between them.

## Usage

```javascript
var deger = "semih işbaş acil adil deneme yanılma";

var sessizHarfler = "bcçdfgğhjklmnprsştvyz";
var sesliHarfler = "aeıioöuü";

// The script automatically checks for ulama patterns
// and logs "ULAMA VAR!!!!" when detected
```

Run with Node.js:

```bash
node ulamaBulucu.js
```

## How It Works

1. Splits the input text by spaces
2. Checks if a word ends with a consonant
3. Checks if the next word starts with a vowel
4. If both conditions are met, it detects an ulama pattern

## License

MIT License - See [LICENSE](LICENSE) file for details.

## Author

Semih İşbaş (2017)
