export const tutorials = [
  {
    id: "intro",
    title: "Introduction",
    category: "Basiques",
    content: "Bhilal est un langage de programmation moderne, conçu pour être simple à lire et à écrire, en utilisant des mots-clés en français. Il est propulsé par Node.js, ce qui lui donne une puissance et une rapidité exceptionnelles.",
    steps: [
      {
        title: "Installation",
        text: "Pour installer Bhilal, assurez-vous d'avoir Node.js installé, puis lancez :",
        code: "npm install -g bhilal"
      },
      {
        title: "Premier Script",
        text: "Créez un fichier 'salut.bh' et écrivez :",
        code: "montre(\"Bonjour le monde !\")"
      }
    ]
  },
  {
    id: "bases",
    title: "Les Bases",
    category: "Basiques",
    content: "Tout programme commence par des variables et de l'affichage. En Bhilal, nous utilisons 'soit' pour déclarer et 'montre' pour afficher.",
    steps: [
      {
        title: "Variables",
        text: "Déclarer une variable est simple :",
        code: "soit x = 10\nsoit message = \"Salut\"\nmontre(x, message)"
      },
      {
        title: "Commentaires",
        text: "Utilisez le symbole # pour vos notes :",
        code: "# Ceci est un commentaire\nsoit y = 5 # Et ici aussi"
      }
    ]
  },
  {
    id: "types",
    title: "Types de Données",
    category: "Basiques",
    content: "Bhilal gère les nombres, les chaînes de caractères (entre guillemets) et les booléens (vrai/faux).",
    steps: [
      {
        title: "Nombres et Textes",
        text: "Les types sont dynamiques :",
        code: "soit nb = 42\nsoit txt = \"Bhilal\"\nsoit test = vrai"
      }
    ]
  },
  {
    id: "logique",
    title: "Contrôle",
    category: "Logique",
    content: "La logique permet à votre programme de prendre des décisions ou de répéter des tâches.",
    steps: [
      {
        title: "Conditions (Si/Sinon)",
        text: "Exécutez du code selon une condition :",
        code: "si (score > 100) {\n  montre(\"Gagné !\")\n} sinon {\n  montre(\"Continue...\")\n}"
      },
      {
        title: "Boucles (Tantque)",
        text: "Répétez tant qu'une condition est vraie :",
        code: "soit i = 0\ntantque (i < 5) {\n  montre(\"Compte :\", i)\n  soit i = i + 1\n}"
      }
    ]
  },
  {
    id: "structures",
    title: "Data Structures",
    category: "Logique",
    content: "Stockez plusieurs valeurs avec les listes et les dictionnaires.",
    steps: [
      {
        title: "Listes",
        text: "Une collection ordonnée de données :",
        code: "soit fruits = [\"pomme\", \"banane\"]\nmontre(fruits[0])"
      },
      {
        title: "Dictionnaires",
        text: "Des paires clé-valeur pour des objets complexes :",
        code: "soit joueur = {\n  \"nom\": \"Bhil\",\n  \"niveau\": 10\n}\nmontre(joueur[\"nom\"])"
      }
    ]
  },
  {
    id: "fonctions",
    title: "Fonctions",
    category: "Logique",
    content: "Les fonctions permettent de réutiliser du code.",
    steps: [
      {
        title: "Déclaration",
        text: "Créez une fonction avec des paramètres :",
        code: "fonction saluer(nom) {\n  montre(\"Salut\", nom)\n}\n\nsaluer(\"Bhilal\")"
      },
      {
        title: "Retour de valeur",
        text: "Utilisez 'renvoie' pour sortir une donnée :",
        code: "fonction addition(a, b) {\n  renvoie a + b\n}"
      }
    ]
  },
  {
    id: "poo1",
    title: "Classes (Bases)",
    category: "Objets",
    content: "La programmation orientée objet permet de structurer votre code avec des classes.",
    steps: [
      {
        title: "Définition",
        text: "Une classe est un plan pour créer des objets :",
        code: "classe Robot {\n  fonction marcher() {\n    montre(\"Je marche...\")\n  }\n}\n\nsoit bot = nouveau Robot()\nbot.marcher()"
      }
    ]
  },
  {
    id: "poo2",
    title: "POO Avancée",
    category: "Objets",
    content: "Protégez vos données et utilisez l'héritage.",
    steps: [
      {
        title: "Encapsulation",
        text: "Utilisez 'prive' ou 'public' :",
        code: "classe Secret {\n  prive soit code = 1234\n  \n  public fonction verif() {\n    montre(\"Accès autorisé\")\n  }\n}"
      },
      {
        title: "Héritage",
        text: "Reprenez les fonctionnalités d'une autre classe :",
        code: "classe SuperBot herite de Robot {\n  fonction voler() {\n    montre(\"Je vole !\")\n  }\n}"
      }
    ]
  },
  {
    id: "erreurs",
    title: "Erreurs & Modules",
    category: "Avancé",
    content: "Gérez les crashs et organisez votre code en plusieurs fichiers.",
    steps: [
      {
        title: "Gestion d'erreurs",
        text: "Capturez les exceptions avec 'essaye' :",
        code: "essaye {\n  lance \"Oups !\"\n} attrape (e) {\n  montre(\"Erreur :\", e)\n}"
      },
      {
        title: "Modules",
        text: "Importez d'autres fichiers Bhilal :",
        code: "inclure \"biblio.bh\"\nutilisationDeLaBiblio()"
      }
    ]
  },
  {
    id: "projet",
    title: "Projet Final",
    category: "Avancé",
    content: "Félicitations ! Vous avez parcouru tout le langage. Voici un exemple complet qui utilise tout ce que vous avez appris.",
    steps: [
      {
        title: "Le Script Complet",
        text: "Un système de gestion de robots simple :",
        code: "classe Gestionnaire {\n  soit robots = []\n  \n  fonction ajouter(r) {\n    robots = robots + [r]\n  }\n\n  fonction etat() {\n    montre(\"Total robots :\", longueur(robots))\n  }\n}\n\nsoit g = nouveau Gestionnaire()\ng.ajouter(\"R2D2\")\ng.etat()"
      }
    ]
  }
];
