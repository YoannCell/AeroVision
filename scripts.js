// scripts.js
document.getElementById('form-idee').addEventListener('submit', function(event) {
    event.preventDefault();

    const titre = document.getElementById('titre').value;
    const description = document.getElementById('description').value;
    const theme = document.getElementById('theme').value;

    const nouvelleIdee = {
        titre: titre,
        description: description,
        theme: theme
    };

    afficherIdee(nouvelleIdee);

    // Réinitialiser le formulaire
    document.getElementById('form-idee').reset();
});

function afficherIdee(idee) {
    const listeIdees = document.getElementById('liste-idees');

    const divIdee = document.createElement('div');
    divIdee.classList.add('idee');

    const titreElement = document.createElement('h3');
    titreElement.textContent = idee.titre;
    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = idee.description;
    const themeElement = document.createElement('p');
    themeElement.textContent = 'Thème: ' + idee.theme;

    divIdee.appendChild(titreElement);
    divIdee.appendChild(descriptionElement);
    divIdee.appendChild(themeElement);

    listeIdees.appendChild(divIdee);
}