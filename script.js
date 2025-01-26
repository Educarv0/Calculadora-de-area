function openPopup() {
    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
    resetFields(); // Reseta os campos ao fechar o pop-up
}

function mostrarCamposPopup() {
    const figura = document.getElementById("figura-popup").value;
    const campos = document.getElementById("campos-popup");
    const triangulo = document.getElementById("triangulo-popup");
    const quadrado = document.getElementById("quadrado-popup");
    const retangulo = document.getElementById("retangulo-popup");

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

function calcularAreaPopup() {
    const figura = document.getElementById("figura-popup").value;
    let area;

    if (figura === "triangulo") {
        const base = parseFloat(document.getElementById("base-popup").value);
        const altura = parseFloat(document.getElementById("altura-popup").value);
        area = (base * altura) / 2;
    } else if (figura === "quadrado") {
        const lado = parseFloat(document.getElementById("lado-popup").value);
        area = lado * lado;
    } else if (figura === "retangulo") {
        const largura = parseFloat(document.getElementById("largura-popup").value);
        const alturaRet = parseFloat(document.getElementById("alturaRet-popup").value);
        area = largura * alturaRet;
    }

    document.getElementById("resultado-popup").innerText = `Área: ${area} cm²`;
}

function resetFields() {
    document.getElementById("figura-popup").value = "";
    document.getElementById("campos-popup").style.display = "none";
    document.getElementById("resultado-popup").innerText = "";
    document.getElementById("base-popup").value = "";
    document.getElementById("altura-popup").value = "";
    document.getElementById("lado-popup").value = "";
    document.getElementById("largura-popup").value = "";
    document.getElementById("alturaRet-popup").value = "";
}