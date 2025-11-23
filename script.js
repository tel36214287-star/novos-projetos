document.addEventListener('DOMContentLoaded', () => {
    const labels = document.querySelectorAll('.label');
    const infoBox = document.getElementById('info-box');
    const infoTitle = document.getElementById('info-title');
    const infoText = document.getElementById('info-text');

    const organelleInfo = {
        rer: {
            title: 'Retículo Endoplasmático Rugoso',
            text: 'Participa da síntese e transporte de proteínas. Possui ribossomos aderidos à sua membrana, o que lhe confere um aspecto rugoso.'
        },
        nucleo: {
            title: 'Núcleo',
            text: 'O centro de controle da célula. Contém o material genético (DNA) e controla as atividades celulares, como crescimento, metabolismo e reprodução.'
        },
        ser: {
            title: 'Retículo Endoplasmático Liso',
            text: 'Responsável pela produção de lipídios, desintoxicação celular e armazenamento de íons de cálcio. Não possui ribossomos.'
        },
        mitocondria1: {
            title: 'Mitocôndria',
            text: 'A "usina de energia" da célula. Realiza a respiração celular, processo que gera a maior parte do ATP (energia) da célula.'
        },
        mitocondria2: {
            title: 'Mitocôndria',
            text: 'A "usina de energia" da célula. Realiza a respiração celular, processo que gera a maior parte do ATP (energia) da célula.'
        },
        membrana: {
            title: 'Membrana Plasmática',
            text: 'Uma barreira seletiva que envolve a célula, controlando a entrada e saída de substâncias. É composta por uma bicamada lipídica com proteínas.'
        },
        lisossomo: {
            title: 'Lisossomo',
            text: 'Contém enzimas digestivas que quebram partículas de alimentos, resíduos celulares e organelas velhas. Atua na "limpeza" da célula.'
        },
        centriolos: {
            title: 'Centríolos',
            text: 'Estruturas cilíndricas que desempenham um papel crucial na divisão celular, ajudando a organizar os microtúbulos do fuso mitótico.'
        },
        vesicula: {
            title: 'Vesícula',
            text: 'Pequenas bolsas membranosas que transportam e armazenam substâncias dentro da célula ou para fora dela.'
        },
        golgi: {
            title: 'Complexo de Golgi',
            text: 'Modifica, empacota e distribui proteínas e lipídios para seus destinos finais. Funciona como o "centro de distribuição" da célula.'
        },
        ribossomo: {
            title: 'Ribossomo',
            text: 'Responsável pela síntese de proteínas. Pode ser encontrado livre no citoplasma ou aderido ao retículo endoplasmático rugoso.'
        }
    };

    labels.forEach(label => {
        label.addEventListener('click', () => {
            const target = label.dataset.target;
            if (organelleInfo[target]) {
                infoTitle.textContent = organelleInfo[target].title;
                infoText.textContent = organelleInfo[target].text;
                infoBox.classList.remove('hidden');
            }
        });
    });
});
