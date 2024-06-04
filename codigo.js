function suma(a, b) {
    return a + b;
}

function resta(a, b) {
    return a - b;
}

function multiplicacion(a, b) {
    return a * b;
}

function division(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return "Error: No se puede dividir entre cero.";
    }
}

function calcular() {
    var opcion = parseInt(prompt("Operaciones disponibles:\n1. Suma\n2. Resta\n3. Multiplicación\n4. División\n\nIngrese el número de la operación que desea realizar:"));

    var num1 = parseFloat(prompt("Ingrese el primer número:"));
    var num2 = parseFloat(prompt("Ingrese el segundo número:"));

    switch (opcion) {
        case 1:
            alert("El resultado de la suma es: " + suma(num1, num2));
            break;
        case 2:
            alert("El resultado de la resta es: " + resta(num1, num2));
            break;
        case 3:
            alert("El resultado de la multiplicación es: " + multiplicacion(num1, num2));
            break;
        case 4:
            alert("El resultado de la división es: " + division(num1, num2));
            break;
        default:
            alert("Opción inválida. Por favor, seleccione una opción válida.");
    }
}

calcular();