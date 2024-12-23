export default function generateRandomValue(n, options) {
    const {UpperCase,LowerCase,NumberCase,SymbolCase } = options;

    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+[]{}|;:',.<>?/`~";

    let characterPool = "";
    if (UpperCase) characterPool += upperCaseChars;
    if (LowerCase) characterPool += lowerCaseChars;
    if (NumberCase) characterPool += numberChars;
    if (SymbolCase) characterPool += symbolChars;

    if (characterPool === "") return "Please select at least one option!";

    let result = [];
    for (let i = 0; i < n; i++) {
        const randomIndex = Math.floor(Math.random() * characterPool.length);
        result[i]= characterPool[randomIndex];
    }

    return result;
}
