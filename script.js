const form = document.querySelector("form");
const expenseList = document.querySelector("ul");
const totalDisplay = document.querySelector("header h2");
const countDisplay = document.querySelector("header span");

let total = 0;
let count = 0;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const expenseInput = document.getElementById("expense");
  const categorySelect = document.getElementById("category");
  const amountInput = document.getElementById("amount");

  const newExpense = {
    id: new Date().getTime(),
    name: expenseInput.value,
    category_id: categorySelect.value,
    category_name: categorySelect.options[categorySelect.selectedIndex].text,
    amount: parseFloat(amountInput.value.replace(",", ".")) || 0
  };

  try {
    // Cria o elemento <li>
    const expenseItem = document.createElement("li");
    expenseItem.classList.add("expense");

    // Cria o ícone da categoria
    const expenseIcon = document.createElement("img");
    expenseIcon.setAttribute("src", `img/${newExpense.category_id}.svg`);
    expenseIcon.setAttribute("alt", newExpense.category_name);

    // Cria a div de informações da despesa
    const expenseInfo = document.createElement("div");
    expenseInfo.classList.add("expense-info");

    // Cria o nome da despesa
    const expenseName = document.createElement("strong");
    expenseName.textContent = newExpense.name;

    // Cria o nome da categoria
    const expenseCategory = document.createElement("small");
    expenseCategory.textContent = newExpense.category_name;

    // Agrupa nome e categoria na div de info
    expenseInfo.append(expenseName, expenseCategory);

    // Cria o valor da despesa
    const expenseAmount = document.createElement("span");
    expenseAmount.textContent = `R$ ${newExpense.amount.toFixed(2).replace(".", ",")}`;

    // Cria o botão de remover
    const removeIcon = document.createElement("img");
    removeIcon.classList.add("remove-icon");
    removeIcon.setAttribute("src", "img/remove.svg");
    removeIcon.setAttribute("alt", "Remover");

    // Evento de clique para remover o item
    removeIcon.addEventListener("click", () => {
      expenseItem.remove();
      total -= newExpense.amount;
      count--;
      totalDisplay.innerHTML = `<small>R$</small> ${total.toFixed(2).replace(".", ",")}`;
      countDisplay.textContent = `${count} despesa${count > 1 ? "s" : ""}`;
    });

    // Adiciona todos os elementos ao item
    expenseItem.append(expenseIcon, expenseInfo, expenseAmount, removeIcon);

    // Adiciona o item à lista
    expenseList.append(expenseItem);

    // Atualiza os totais
    total += newExpense.amount;
    count++;
    totalDisplay.innerHTML = `<small>R$</small> ${total.toFixed(2).replace(".", ",")}`;
    countDisplay.textContent = `${count} despesa${count > 1 ? "s" : ""}`;

    // Limpa os campos
    expenseInput.value = "";
    amountInput.value = "";
    categorySelect.value = "";
  } catch (error) {
    alert("Não foi possível atualizar a lista de despesas.");
    console.error(error);
  }
});

