export interface Sentence {
    sentence: string,
    numbers: string[]
}
export const sentencesArray: Sentence[] = [
    {
        sentence: "Eu sou um número real",
        numbers: ['0', '-8', '2,65', '4', '23', '-14', '-0,56', '13,8', '-34', '√3', 'e = 2,71...', 'π', '4/5',
            '-22/7', '√15', '5,0', '12,00', '1,9898...', '0,777...', '11/1', '-2,7575...', '4,012012...', '1,111...', '-21,222...', '7,444...']
    },
    {
        sentence: "Sou inteiro, mas não sou natural",
        numbers: ['-8', '-14', '-34', '-14', '-21', '-7', '-9', '-13', '-2,0']
    },
    {
        sentence: "Sou natural, inteiro e racional",
        numbers: ['0', '4', '23', '5,0', '8,000', '11,0','21,00', '16,0']
    },
    {
        sentence: "Sou irracional e não sou inteiro",
        numbers: ['√3', 'π', 'e = 2,71...', '√15', '√5', '√6', '√7'],
    },
    {
        sentence: "Eu posso ser escrito como uma fração, onde o numerador e o denominador são inteiros",
        numbers: ['0', '-8', '2,65', '4', '23', '-14', '-0,56', '13,8', '-34', '√3', '4/5',
        '-22/7', '5,0', '12,00', '1,9898...', '0,777...', '11/1', '-14', '-21', '-7', '-9', '-13'
        , '-2,7575...', '4,012012...', '1,111...', '-21,222...', '7,444...', '8,000', '-2,0', '11,0','21,00', 
        '16,0']
    },
    {
        sentence: "Sou um número racional e inteiro",
        numbers: ['0', '-8', '4', '23', '-14', '-34','5,0', '12,00', '11/1', '-14', '-21', '-7', '-9', '-13',
        '8,000', '-2,0', '11,0','21,00', '16,0']
    },
    {
        sentence: "Sou uma dízima",
        numbers: ['1,9898...', '0,777...', '√3', 'π', 'e = 2,71...', '√15', '-2,7575...', '4,012012...', '1,111...', '-21,222...', '7,444...']
    },
    {
        sentence: "Sou uma raiz não exata",
        numbers: ['√3','√15', '√5', '√6', '√7']
    },
    {
        sentence: "Não posso ser escrito como uma fração",
        numbers: ['√3', 'π', 'e = 2,71...', '√15', '√5', '√6', '√7']
    },
    {
        sentence: "Sou negativo, mas não sou inteiro",
        numbers: ['-0,56','-22/7','-2,7575...', '-21,222...']
    },
    {
        sentence: "Estou entre 1 e 4 e não sou racional",
        numbers: ['√3', 'π', 'e = 2,71...', '√5', '√6', '√7', '√15']
    },
    {
        sentence: "A raiz quadrada desse número não é um número real",
        numbers: ['-8', '-14', '-0,56','-34','-22/7', '-14', '-21', '-7', '-9', '-13','-2,7575...', '-21,222...'
        , '-2,0']
    },
    {
        sentence: "Sou inteiro e decimal",
        numbers: ['5,0', '12,00', '8,000', '-2,0', '11,0','21,00', '16,0']
    },
    {
        sentence: "Os dígitos do meu número se extendem infinitamente, mas não sou irracional",
        numbers: ['1,9898...', '0,777...', '-2,7575...', '4,012012...', '1,111...', '-21,222...', '7,444...']
    }

]