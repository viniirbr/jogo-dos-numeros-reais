export interface Sentence {
    sentence: string,
    numbers: string[]
}

export const sentencesArray: Sentence[] = [
    {
        sentence: "Eu sou um número real",
        numbers: ['0', '-8', '2.65', '4', '23', '-14', '-0.56', '13.8', '-34', 'sqrt(3)', 'π', '4/5', '-22/7']
    },
    {
        sentence: "Sou inteiro, mas não sou natural",
        numbers: ['-8','-14']
    },
    {
        sentence: "Sou natural, inteiro e racional",
        numbers: ['0','4', '23']
    },
    {
        sentence: "Sou irracional e não sou inteiro",
        numbers: ['sqrt(3)', 'π'],
    },
    {
        sentence: "Eu posso ser escrito como uma fração, onde o numerador e o denominador são inteiros",
        numbers: ['0', '-8', '2.65', '4', '23', '-14', '-0.56', '13.8', '-34', '4/5', '-22/7'] 
    }
]