AOS.init();

const dataDoEvento = new Date("Jul 16, 2024 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diasEmMs = 1000 * 60 * 60 * 24;
    const horasEmMs = 1000 * 60 * 60;
    const minutosEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diasEmMs);
    const horasRestantes = Math.floor((distanciaAteOEvento % diasEmMs) / horasEmMs);
    const minutosRestantes = Math.floor((distanciaAteOEvento % horasEmMs) / minutosEmMs);
    const segundosRestantes = Math.floor((distanciaAteOEvento % minutosEmMs) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasRestantes}h ${minutosRestantes}m ${segundosRestantes}s`;

    if (distanciaAteOEvento < 0) {
        clearInterval(horasRestantes);
        document.getElementById('contador').innerHTML = 'Evento expirado';
    }
}, 1000);