function showSelectedValue() {
    const selectElement = document.getElementById('items');
    const messageElement = document.getElementById('message');
    const selectedValue = selectElement.value;
    messageElement.textContent = `Você selecionou: ${selectedValue}`;
}