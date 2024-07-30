export const formatPrice = (numero) => {
    let formateado = numero.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');

    // Reemplaza la coma por punto y el punto por coma
    formateado = formateado.replace(/,/g, 'TEMP').replace(/\./g, ',').replace(/TEMP/g, '.');

    return `COP ${formateado}0`;
}