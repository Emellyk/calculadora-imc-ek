import React, { useState } from "react";
import InputMask from "react-input-mask";

// const Input = (props) => (
//     <InputMask id="altura" mask="0,00" value={props.value} onChange={props.onChange} />
// ); 


function Form() {
    const [altura, setValorAltura] = useState("");
    const [peso, setPeso] = useState("");
    const [imc, setIMC] = useState("");
    const [classificacao, setClassificacao] = useState("");

    const valorAltura = (altura) => {
        setValorAltura(altura.target.value);
    };

    const valorPeso = (peso) => {
        setPeso(peso.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const imc = (peso / ((altura / 100) * (altura / 100))).toFixed(2);
        setIMC(imc);

        if (imc < 18.5) {
            setClassificacao("Abaixo do peso");
        } else if (imc >= 18.5 && imc < 25) {
            setClassificacao("Peso normal");
        } else if (imc >= 25 && imc < 30) {
            setClassificacao("Sobrepeso");
        } else if (imc >= 30 && imc < 35) {
            setClassificacao("Obesidade Grau I");
        } else if (imc >= 35 && imc < 40) {
            setClassificacao("Obesidade Grau II");
        } else {
            setClassificacao("Obesidade Grau III");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="container">
            <header>
                <h1>Calculadora de IMC</h1>
            </header>
            <div class="info">
                <p>O IMC é reconhecido como padrão internacional para avaliar o grau de sobrepeso e obesidade. É calculado dividindo o peso (em kg) pela altura ao quadrado (em metros).</p>
                <h4>IMC = Peso ÷ (Altura × Altura)</h4>
                <br />
                <p>Exemplo de como calcular o IMC:</p>
                <h4>IMC = 80 kg ÷ (1,80 m × 1,80 m) = 24,69 kg/m2 (Peso ideal)</h4>
                <br />
                <p>Utilize a calculadora abaixo para fazer o seu cálculo:</p>
            </div>
            <div class="calc">
                    <div class="text">
                        <label class="control">Altura (cm): </label>
                        <input id="altura" type="text" value={altura} onChange={valorAltura} />
                        {/* <InputMask id="altura" mask="0,000" type="text" value={altura && props} onChange={valorAltura} /> */}
                        <label class="control">Peso (kg): </label>
                        <input id="peso" type="text" value={peso} onChange={valorPeso}/>
                        {/* <InputMask id="peso" mask="000,0" type="text" value={altura && props} onChange={valorAltura} /> */}
                    </div>
                    <br />
                    <button class="button" type="submit">Calcular IMC</button>
                    {imc && (
                        <div class="result">
                            <p>Seu IMC é {imc}</p>
                            <p>Sua classificação é {classificacao}</p>
                        </div>
                    )}
            </div>
        </form>
    );
}

export default Form;