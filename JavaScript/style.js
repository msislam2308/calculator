function areaDisplay(shape, area) {
    console.log(`Area of ${shape}: ${area} cm²`);
    document.getElementById("result").innerText = `Area of ${shape}: ${area} cm²`;
}
    
function isNum(x, y) {
    if (isNaN(x) || isNaN(y)) {
        alert("Please enter valid numbers.");
        return 0;
    }
}

function triangle(){
    const base = parseFloat(document.getElementById("triangle-base").value);
    const height = parseFloat(document.getElementById("triangle-height").value);
    if(isNum(base, height) === 0) {
        return;
    }
    const area = 0.5 * base * height;
    console.log(`B = ${base} cm, H = ${height} cm`);
    areaDisplay("Triangle", area);
}

function rectangle(){
    const width = parseFloat(document.getElementById("rectangle-width").value);
    const length = parseFloat(document.getElementById("rectangle-length").value);
    if(isNum(width, length) === 0) {
        return;
    }
    const area = width * length;
    console.log(`W = ${width} cm, L = ${length} cm`);
    areaDisplay("Rectangle", area);
}

function parallelogram(){
    const base = parseFloat(document.getElementById("parallelogram-base").value);
    const height = parseFloat(document.getElementById("parallelogram-height").value);
    if (isNum(base, height) === 0) {
        return;
    }
    const area = base * height;
    console.log(`B = ${base} cm, H = ${height} cm`);
    areaDisplay("Parallelogram", area);
}

function rhombus(){
    const d1 = parseFloat(document.getElementById("rhombus-d1").value);
    const d2 = parseFloat(document.getElementById("rhombus-d2").value);
    if (isNum(d1, d2) === 0) {
        return;
    }
    const area = 0.5 * d1 * d2;
    console.log(`D1 = ${d1} cm, D2 = ${d2} cm`);
    areaDisplay("Rhombus", area);
}

function pentagon(){
    const side = parseFloat(document.getElementById("pentagon-side").value);
    const apothem = parseFloat(document.getElementById("pentagon-apothem").value);
    if (isNum(side, apothem) === 0) {
        return;
    }
    const area = (5 * side * apothem) / 2;
    console.log(`Side = ${side} cm, Apothem = ${apothem} cm`);
    areaDisplay("Pentagon", area);
}

function ellipse(){
    const a = parseFloat(document.getElementById("ellipse-a").value);
    const b = parseFloat(document.getElementById("ellipse-b").value);
    if (isNum(a, b) === 0) {
        return;
    }
    const area = 3.1416 * a * b;
    console.log(`A = ${a} cm, B = ${b} cm`);
    areaDisplay("Ellipse", area);
}
