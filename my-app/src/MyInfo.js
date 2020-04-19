import React from 'react';

function MyInfo() {
    return (
        <div className="MyInfo">
            <h1>Meu nome é Heitor Mariano</h1>
            <p>
                Eu sou um homem de 32 anos e trabalho como professor. Gosto de filmes, esportes e
                viagens
            </p>

            <ul>
                <li>
                    Lugares que gostaria de conhecer:
                    <ol>
                        <li>Canadá</li>
                        <li>Israel</li>
                        <li>Mato Grosoo - Brasil</li>
                    </ol>
                </li>
            </ul>
        </div>
    );
}

export default MyInfo;
