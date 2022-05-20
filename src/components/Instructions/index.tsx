interface InstructionsProps {
    startGame: () => void
}

export function Instructions({ startGame }: InstructionsProps) {
    return (
        <div>
            <h1>Jogo dos Reais</h1>
            <h2>Instruções</h2>
            <ul>
                <li>Número de jogadores: 2; cada jogador inicia com 5 cartas</li>
                <li>O jogador 1 (canto inferior da tela) inicia a rodada</li>
                <li>Na sua rodada o jogador deve puxar uma frase (monte vermelho) e, se identificar alguma
                    carta com um número que corresponda à frase, lançar a carta. Caso não identifique, poderá cavar
                    apenas uma vez e, se retirar a carta, poderá lançá-la ainda na rodada. Caso não encontre, deverá
                    passar sua vez.
                </li>
                <li>O jogador que não joga na rodada poderá denunciar o lance do adversário. Caso a denúncia
                    seja pertinente, o outro jogador deverá recolher todas as cartas do monte de cartas jogadas.
                    Caso contrário, o jogador que fez a denúncia que deverá recolher as cartas.
                </li>
                <li>Ganha quem acabar com as cartas na mão primeiro</li>
            </ul>
            <button onClick={startGame}>Iniciar</button>
        </div>
    )
}