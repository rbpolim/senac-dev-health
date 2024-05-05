export const availableIMC = (imc: number) => {
  if (imc < 18.5) {
    return "Seu IMC está abaixo do intervalo considerado saudável para sua altura, indicando uma condição de baixo peso. É importante priorizar uma alimentação balanceada e buscar orientação médica para desenvolver um plano de nutrição adequado. Consulte um profissional de saúde para avaliar sua condição e receber recomendações personalizadas para alcançar um peso saudável e fortalecer seu corpo."
  }

  if (imc >= 18.5 && imc < 24.9) {
    return "Parabéns! Seu IMC está dentro da faixa considerada saudável para sua altura. Continue com seus hábitos saudáveis para manter esse equilíbrio. Se precisar de orientação adicional, consulte um profissional de saúde."
  }

  if (imc >= 24.9 && imc < 29.9) {
    return "Seu IMC indica que você está um pouco acima do peso considerado saudável para sua altura. É recomendável adotar hábitos de vida mais saudáveis, como uma dieta equilibrada e a prática regular de exercícios físicos. Consultar um profissional de saúde pode ajudar a criar um plano personalizado para alcançar e manter um peso saudável."
  }

  if (29.9 && imc < 34.9) {
    return "Seu IMC indica obesidade de grau I. Procure um médico para um plano de saúde personalizado e reduza os riscos associados à obesidade."
  }

  if (imc >= 34.9 && imc < 39.9) {
    return "Seu IMC indica obesidade de grau II. Procure um médico para um plano de saúde personalizado e reduza os riscos associados à obesidade."
  }

  if (imc >= 40) {
    return "Seu IMC indica obesidade de grau III. Procure um médico para um plano de saúde personalizado e reduza os riscos associados à obesidade."
  }
}