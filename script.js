

function ResetirajAtribute() {
    const polmer = document.getElementById('polmer');
    const premer = document.getElementById('premer');
    const obseg = document.getElementById('obseg');
    const ploscina = document.getElementById('ploscina');
    polmer.value = ''
    premer.value = ''
    obseg.value = ''
    ploscina.value = ''
    const canvas = document.getElementById('platno');
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.size
    context.font = '20px sans-serif';
    context.textAlign = 'center'
    context.fillText('Vnesi vrednost v katerokoli polje', 150, 150, 280)
}

function narišikrog_polmer() {
    const polmer = document.getElementById("polmer")
    if (polmer.value == '') {
        return ResetirajAtribute()
    }
    const canvas = document.getElementById('platno');
    const context = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.fillStyle = null;
    context.strokeStyle = '#000';
    context.lineWidth = 2;
    context.arc(centerX, centerY, 2, 0, 2 * Math.PI, false);
    context.fill()
    context.textAlign="center";
    context.textBaseline="middle";
    if (parseFloat(polmer.value) > 8.0) {
        context.arc(centerX, centerY, 8 * 18, 0, 2 * Math.PI, false);   
        context.fillText("r=" + polmer.value + "cm", 150 + (8 * 18) / 2, 140)
    }
    else {
        console.log("test")
        context.arc(centerX, centerY, parseFloat(polmer.value) * 18, 0, 2 * Math.PI, false);
        context.fillText("r=" + polmer.value + "cm", 150 + (parseFloat(polmer.value) * 18) / 2, 140)

    }

    let premer = document.getElementById("premer")
    const obseg = document.getElementById("obseg")
    const ploščina = document.getElementById("ploscina")
    premer.value = polmer.value * 2
    ploščina.value = ((polmer.value ** 2) * Math.PI).toFixed(2)
    obseg.value = (2 * polmer.value *Math.PI).toFixed(2)
    context.stroke();
    
}

function narišikrog_premer() {
    const premer = document.getElementById("premer")
    if (premer.value == '') {
        return ResetirajAtribute()
    }
    const polmer = premer.value / 2
    const canvas = document.getElementById('platno');
    const context = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.fillStyle = null;
    context.strokeStyle = '#000';
    context.lineWidth = 2;
    context.arc(centerX, centerY, 2, 0, 2 * Math.PI, false);
    context.fill()
    context.textAlign="center";
    context.textBaseline="middle";
    if (parseFloat(polmer) > 8.0) {
        context.arc(centerX, centerY, 8 * 18, 0, 2 * Math.PI, false);   
        context.fillText("r=" + polmer + "cm", 150 + (8 * 18) / 2, 140)
    }
    else {
        console.log("test")
        context.arc(centerX, centerY, parseFloat(polmer) * 18, 0, 2 * Math.PI, false);
        context.fillText("r=" + polmer + "cm", 150 + (parseFloat(polmer) * 18) / 2, 140)

    }

    const obseg = document.getElementById("obseg")
    const ploščina = document.getElementById("ploscina")
    const polmer_element = document.getElementById("polmer")
    polmer_element.value = polmer
    ploščina.value = ((polmer ** 2) * Math.PI).toFixed(2)
    obseg.value = (2 * polmer *Math.PI).toFixed(2)
    context.stroke();
    
}


function narišikrog_obseg() {
    const obseg = document.getElementById("obseg")
    if (obseg.value == '') {
        return ResetirajAtribute()
    }
    const polmer = ((obseg.value / Math.PI) / 2).toFixed(2)
    const canvas = document.getElementById('platno');
    const context = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.fillStyle = null;
    context.strokeStyle = '#000';
    context.lineWidth = 2;
    context.arc(centerX, centerY, 2, 0, 2 * Math.PI, false);
    context.fill()
    context.textAlign="center";
    context.textBaseline="middle";
    if (parseFloat(polmer) > 8.0) {
        context.arc(centerX, centerY, 8 * 18, 0, 2 * Math.PI, false);   
        context.fillText("r=" + polmer + "cm", 150 + (8 * 18) / 2, 140)
    }
    else {
        console.log("test")
        context.arc(centerX, centerY, parseFloat(polmer) * 18, 0, 2 * Math.PI, false);
        context.fillText("r=" + polmer + "cm", 150 + (parseFloat(polmer) * 18) / 2, 140)
    }
    context.stroke();
    let premer = document.getElementById("premer")
    const polmer_element = document.getElementById("polmer")
    const ploščina = document.getElementById("ploscina")
    polmer_element.value = polmer
    premer.value = polmer * 2
    ploščina.value = ((polmer ** 2) * Math.PI).toFixed(2)
}

function narišikrog_ploscina() {
    const ploščina = document.getElementById("ploscina")
    if (ploščina.value == '') {
        return ResetirajAtribute()
    }
    const polmer = Math.sqrt(ploščina.value/Math.PI).toFixed(2)
    const canvas = document.getElementById('platno');
    const context = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.fillStyle = null;
    context.strokeStyle = '#000';
    context.lineWidth = 2;
    context.arc(centerX, centerY, 2, 0, 2 * Math.PI, false);
    context.fill()
    context.textAlign="center";
    context.textBaseline="middle";
    if (parseFloat(polmer) > 8.0) {
        context.arc(centerX, centerY, 8 * 18, 0, 2 * Math.PI, false);   
        context.fillText("r=" + polmer + "cm", 150 + (8 * 18) / 2, 140)
    }
    else {
        console.log("test")
        context.arc(centerX, centerY, parseFloat(polmer) * 18, 0, 2 * Math.PI, false);
        context.fillText("r=" + polmer + "cm", 150 + (parseFloat(polmer) * 18) / 2, 140)
    }
    let premer = document.getElementById("premer")
    const polmer_element = document.getElementById("polmer")
    const obseg = document.getElementById("obseg")
    premer.value = polmer * 2
    polmer_element.value = polmer
    obseg.value = (2 * polmer *Math.PI).toFixed(2)
    context.stroke();
}