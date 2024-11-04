function increment(event, value) {
    // Bron: MDN - Event.target: https://developer.mozilla.org/en-US/docs/Web/API/Event/target
    let li = event.target.parentElement;

    // Haal de huidige hoeveelheid op uit het output-element met het attribuut `data-amount`
    let amountElement = li.querySelector("output[data-amount]");
    let newAmount = parseInt(amountElement.getAttribute("data-amount")) + 1
        // Werk het hoeveelheid-attribuut bij en toon de nieuwe hoeveelheid
        
    amountElement.setAttribute("data-amount", newAmount);
    amountElement.innerHTML = newAmount;
    // Haal het element op dat het subtotaal van het item weergeeft
    let valueElement = li.querySelector("output[data-value]");
        // Haal het totale prijs-element  
    let total = document.getElementById("total");

    // Bereken de nieuwe totale prijs door de itemwaarde op te tellen
    // Bron: MDN - toFixed: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
    let newTotal = parseFloat(total.getAttribute("data-value")) + parseFloat(value);
    total.setAttribute("data-value", newTotal); 
    total.innerHTML = "€" + newTotal.toFixed(2);
        // Bereken het nieuwe subtotaal van het item en werk het bij
        
    let newValue = parseFloat(valueElement.getAttribute("data-value")) + parseFloat(value);
    valueElement.setAttribute("data-value", newValue);
    valueElement.innerHTML = "€" + newValue.toFixed(2);
}

function decrement(event, value) {
    let li = event.target.parentElement;
    // Zorg ervoor dat de hoeveelheid niet onder nul komt
    // Bron: JavaScript.info - Conditional Logic: https://javascript.info/ifelse
    let amountElement = li.querySelector("output[data-amount]");
    let newAmount = parseInt(amountElement.getAttribute("data-amount")) - 1
    let stop = false
    if (newAmount < 0) {
        newAmount = 0;
        stop = true;
    }
    
    amountElement.setAttribute("data-amount", newAmount);
    amountElement.innerHTML = newAmount;
//Stop als de hoeveelheid 0 is
    if (stop) {
        return;
    }

    let valueElement = li.querySelector("output[data-value]");
    let total = document.getElementById("total");
    // Bereken de nieuwe totale prijs door de itemwaarde af te trekken
    let newTotal = parseFloat(total.getAttribute("data-value")) - parseFloat(value);
    if (newTotal < 0) {
        newValue = 0;
    }
    total.setAttribute("data-value", newTotal); 
    total.innerHTML = "€" + newTotal.toFixed(2);
    
    let newValue = parseFloat(valueElement.getAttribute("data-value")) - parseFloat(value);
    if (newValue < 0) {
        newValue = 0;
    }
    valueElement.setAttribute("data-value", newValue);
    valueElement.innerHTML = "€" + newValue.toFixed(2);
}