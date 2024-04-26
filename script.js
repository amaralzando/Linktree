document.addEventListener("DOMContentLoaded", function () {
  const birthYear = 2001; // Ano do seu nascimento (baseado na idade de 22 em 2023)
  const targetDate = new Date(new Date().getFullYear(), 5, 19); // 19 de junho (mês 0-based)
  const currentDate = new Date();

  // Verifica se existe um valor armazenado para a idade, se não, define para 22
  if (localStorage.getItem("age") === null) {
    localStorage.setItem("age", 22);
  }

  // Verifica se a data atual é após o aniversário desse ano
  if (currentDate >= targetDate) {
    // Calcula a nova idade com base no ano atual menos o ano de nascimento
    const newAge = new Date().getFullYear() - birthYear;
    // Armazena a nova idade no localStorage
    localStorage.setItem("age", newAge);
  } else {
    // Se não é o seu aniversário ainda este ano, mantém a idade do ano anterior
    const lastYear = new Date().getFullYear() - 1;
    const ageLastYear = lastYear - birthYear;
    localStorage.setItem("age", ageLastYear);
  }

  // Mostra a idade atualizada no elemento de ID "incrementDisplay"
  const age = localStorage.getItem("age") || 22; // Pega a idade ou usa 22 como padrão
  document.getElementById("incrementDisplay").textContent = age;
});
