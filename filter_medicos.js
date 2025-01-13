// Função para filtrar os médicos pelo nome ou pelo convênio
function filterMedicos() {
    const searchBar = document.getElementById('searchBar').value.toLowerCase();
    const filterConvenio = document.getElementById('filterConvenio').value;
    const medicosContainer = document.getElementById('medicosContainer');
    const medicos = medicosContainer.getElementsByClassName('main-content');

    for (let medico of medicos) {
        const nomeMedico = medico.querySelector('h2').innerText.toLowerCase();
        const conveniosAceitos = medico.querySelector('div:nth-child(2) p:nth-child(2)').innerText;
        const conveniosDermatologico = medico.querySelector('div:nth-child(2) p:nth-child(4)').innerText;

        const nomeMatches = nomeMedico.includes(searchBar);
        const convenioMatches = filterConvenio === '' || 
                                conveniosAceitos.includes(filterConvenio) || 
                                conveniosDermatologico.includes(filterConvenio);

        if (nomeMatches && convenioMatches) {
            medico.style.display = '';
        } else {
            medico.style.display = 'none';
        }
    }
}

// Opcional: Adicionar evento para filtrar enquanto digita
const searchBar = document.getElementById('searchBar');
searchBar.addEventListener('input', filterMedicos);

const filterConvenio = document.getElementById('filterConvenio');
filterConvenio.addEventListener('change', filterMedicos);

// Atualização dos convênios na lista
const conveniosList = [
    "AMEPE CAMPE",
    "ALLIANZ",
    "AMIL",
    "ASSEFAZ",
    "BANCO CENTRAL",
    "BRADESCO",
    "CAPE SESP",
    "CAMED",
    "COMPESA",
    "CASSI",
    "EMBRATEL",
    "FACHESF",
    "FISCO SAUDE",
    "GAMA SAUDE",
    "GEAP",
    "LIFE EMPRESARIAL",
    "MEDISERVICE",
    "PETROBRAS",
    "PLAN ASSISTE",
    "PROASA",
    "POSTAL SAUDE",
    "SAUDE CAIXA",
    "SULAMERICA",
    "TELOS",
    "TRT SAUDE",
    "UNIMED"
];

const filterSelect = document.getElementById('filterConvenio');

// Remove opções anteriores (mantendo apenas "Selecione um convênio")
filterSelect.innerHTML = '<option value="">Selecione um convênio</option>';

// Adiciona novos convênios à lista
conveniosList.forEach(convenio => {
    const option = document.createElement('option');
    option.value = convenio;
    option.textContent = convenio;
    filterSelect.appendChild(option);
});
