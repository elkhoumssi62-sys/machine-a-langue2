/**
 * Machine à Langue - Moteur de Bibliothèque
 * Gère la génération dynamique de 50 cours de langue
 */

document.addEventListener('DOMContentLoaded', () => {
    const courses = [
        { title: "Figures de style d'analogie", cat: "1ère BAC", content: "Analyse de la comparaison et de la métaphore dans 'La Boîte à Merveilles'." },
        { title: "L'ironie voltairienne", cat: "2ème BAC", content: "Les procédés de dérision dans 'Candide ou l'Optimisme'." },
        { title: "La tragédie moderne", cat: "1ère BAC", content: "Étude du tragique chez Anouilh à travers 'Antigone'." },
        { title: "Le système de l'énonciation", cat: "Outils", content: "Distinguer le plan du récit et le plan du discours." },
        { title: "Les registres littéraires", cat: "Littérature", content: "Étude du lyrisme, du pathétique et de l'épique." },
        { title: "Connecteurs de l'argumentation", cat: "Écrit", content: "Outils pour structurer le plan dialectique." },
        { title: "Discours direct et indirect", cat: "Langue", content: "Règles de passage d'un style à l'autre." },
        { title: "Le portrait littéraire", cat: "Méthodologie", content: "Techniques de description physique et morale." },
        { title: "La focalisation narrative", cat: "Récit", content: "Point de vue interne, externe et omniscient." },
        { title: "Les valeurs des temps verbaux", cat: "Grammaire", content: "L'emploi de l'imparfait et du passé simple dans le récit." }
        // Ajoutez vos 40 autres titres ici suivant le même modèle
    ];

    // Génération automatique des titres restants pour atteindre 50
    const extraTopics = [
        "Le subjonctif", "L'accord du participe passé", "La métaphore filée", 
        "L'hyperbole", "L'antithèse", "L'euphémisme", "La litote", "La personnification",
        "Le champ lexical", "La cohérence textuelle", "La progression thématique",
        "L'interrogation totale", "L'interrogation partielle", "La négation",
        "La voix passive", "L'adjectif qualificatif", "Les pronoms relatifs",
        "La nominalisation", "Les niveaux de langue", "Le lexique de l'affectivité",
        "Le raisonnement concessif", "L'opposition et la concession", "La cause et la conséquence",
        "L'expression du but", "L'hypothèse et la condition", "Le discours indirect libre",
        "La versification", "Les types de rimes", "Le sonnet", "La poésie romantique",
        "Le réalisme", "Le naturalisme", "L'absurde", "La ponctuation",
        "Les homonymes", "Le pluriel des noms composés", "L'étymologie", 
        "Les préfixes et suffixes", "L'accord de l'adjectif de couleur", "Les figures d'opposition"
    ];

    extraTopics.forEach(topic => {
        courses.push({
            title: topic,
            cat: "Révision",
            content: `Contenu académique complet pour le cours sur ${topic}. Définition, exemples et exercices types pour l'examen.`
        });
    });

    renderCourses(courses);
});

/**
 * Affiche la liste des cours dans l'élément #menu-lecons
 */
function renderCourses(data) {
    const container = document.getElementById('menu-lecons');
    if (!container) return;

    container.innerHTML = data.map((course, index) => `
        <div class="accordion-item">
            <div class="accordion-header" onclick="toggleAccordion(${index})">
                <span>${index + 1}. ${course.title}</span>
                <span class="badge">${course.cat}</span>
            </div>
            <div id="content-${index}" class="accordion-content">
                <p>${course.content}</p>
                <button class="btn-action" onclick="window.location.href='cours/lecon-${index+1}.html'">
                    Explorer le cours détaillé
                </button>
            </div>
        </div>
    `).join('');
}

/**
 * Gère l'ouverture/fermeture des volets
 */
function toggleAccordion(index) {
    const contents = document.querySelectorAll('.accordion-content');
    const target = document.getElementById(`content-${index}`);
    
    contents.forEach(content => {
        if (content !== target) content.classList.remove('active');
    });
    
    target.classList.toggle('active');
}