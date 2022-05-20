import { Button } from "../Button"

interface InstructionsProps {
    startGame: () => void
}

export function Instructions({ startGame }: InstructionsProps) {
    return (
        <div className="flex flex-col justify-center h-full px-5 box-border mt-[5%] mb-[5%] font-sans sm:w-[60%] mx-auto">
            <h1 className="text-3xl font-bold my-2">Jogo dos Reais</h1>
            <h2 className="text-xl font-bold my-2">Instruções</h2>
            <ul className="list-disc list-inside text-left">
                <li className="my-2">Número de jogadores: 2; cada jogador inicia com 5 cartas</li>
                <li className="my-2">O jogador 1 (canto inferior da tela) inicia a rodada</li>
                <li className="my-2">Na sua rodada o jogador deve puxar uma frase (monte vermelho) e, se identificar alguma
                    carta com um número que corresponda à frase, lançar a carta. Caso não identifique, poderá cavar
                    apenas uma vez e, se retirar a carta, poderá lançá-la ainda na rodada. Caso não encontre, deverá
                    passar sua vez.
                </li>
                <li className="my-2">O jogador que não joga na rodada poderá denunciar o lance do adversário. Caso a denúncia
                    seja pertinente, o outro jogador deverá recolher todas as cartas do monte de cartas jogadas.
                    Caso contrário, o jogador que fez a denúncia que deverá recolher as cartas.
                </li>
                <li className="my-2">Ganha quem acabar com as cartas na mão primeiro</li>
            </ul>
            <Button onClick={startGame} type='normal'>Iniciar</Button>
        </div>
    )
}