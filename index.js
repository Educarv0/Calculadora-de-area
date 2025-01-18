function mostrarCampos() {
    const figura = document.getElementById("figura").value;
    const campos = document.getElementById("campos");
    const triangulo = document.getElementById("triangulo");
    const quadrado = document.getElementById("quadrado");
    const retangulo = document.getElementById("retangulo");

    campos.style.display = "block";
    triangulo.style.display = "none";
    quadrado.style.display = "none";
    retangulo.style.display = "none";

    if (figura === "triangulo") {
        triangulo.style.display = "block";
    } else if (figura === "quadrado") {
        quadrado.style.display = "block";
    } else if (figura === "retangulo") {
        retangulo.style.display = "block";
    }
}

function calcularArea() {
    const figura = document.getElementById("figura").value;
    let area;

    if (figura === "triangulo") {
        const base = parseFloat(document.getElementById("base").value);
        const altura = parseFloat(document.getElementById("altura").value);
        area = (base * altura) / 2;
    } else if (figura === "quadrado") {
        const lado = parseFloat(document.getElementById("lado").value);
        area = lado * lado;
    } else if (figura === "retangulo") {
        const largura = parseFloat(document.getElementById("largura").value);
        const alturaRet = parseFloat(document.getElementById("alturaRet").value);
        area = largura * alturaRet;
    }

    document.getElementById("resultado").innerText = `Área: ${area}cm²`;
}
