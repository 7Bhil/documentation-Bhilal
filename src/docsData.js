export const tutorials = [
  {
    id: "syntaxe",
    title: "1️⃣ Base Syntaxique",
    category: "Fondamentaux",
    content: "Variables, types primitifs et opérateurs de base en Bhilal. Apprenez les fondations du langage avec une syntaxe intuitive en français et ses équivalents anglais.",
    steps: [
      {
        title: "Variables en français",
        text: "Déclarez des variables avec le mot-clé `soit`. C'est la syntaxe française principale de Bhilal.\n\n**Syntaxe :** `soit nom = valeur`\n\n**Exemples :**",
        code: `soit nom = "Alice"
soit age = 25
soit pi = 3.14159
soit ACTIF = vrai  # Convention constante`
      },
      {
        title: "Variables en anglais",
        text: "Pour les développeurs anglophones, Bhilal propose aussi `let` comme équivalent de `soit`.\n\n**Syntaxe :** `let name = value`\n\n**Exemples :**",
        code: `let name = "Bob"
let counter = 0
let API_URL = "https://api.example.com"`
      },
      {
        title: "Modification dynamique",
        text: "Les variables sont mutables par défaut. Vous pouvez changer leur valeur facilement.",
        code: `soit x = 10
montre("x initial:", x)  # 10
soit x = 20
montre("x modifié:", x)  # 20`
      },
      {
        title: "Typage dynamique",
        text: "Bhilal est typé dynamiquement. Une variable peut changer de type pendant l'exécution.",
        code: `soit variable = "texte"
montre("Type:", typeof variable)  # string
soit variable = 42
montre("Type:", typeof variable)  # number`
      },
      {
        title: "Conventions de nommage",
        text: "**Règles importantes :**\n• Doit commencer par une lettre ou underscore\n• Case-sensitive\n• Constants en MAJUSCULES\n• Variables en camelCase ou snake_case",
        code: `soit maVariable = "camelCase"
soit ma_variable = "snake_case"
soit MA_VARIABLE = "CONSTANTE"`
      },
      {
        title: "Types Number",
        text: "Bhilal supporte tous les types numériques avec la précision IEEE 754.",
        code: `soit entier = 42
soit decimal = 3.14159
soit negatif = -10
soit scientifique = 1.5e10  # 15 milliards`
      },
      {
        title: "Types String",
        text: "Chaînes de caractères Unicode entre guillemets doubles.",
        code: `soit message = "Hello World"
soit vide = ""
soit unicode = "Café 🇫🇷 日本語"
soit avecQuotes = "Il a dit: 'Bonjour!'"`
      },
      {
        title: "Types Boolean",
        text: "Deux valeurs possibles : vrai/faux (français) ou true/false (anglais).",
        code: `soit actif = vrai
soit desactive = faux
si actif {
  montre("Système actif")
}`
      },
      {
        title: "Opérateurs arithmétiques",
        text: "**Opérateurs de base :** `+ - * / % **`",
        code: `soit a = 10
soit b = 3
montre(a + b)  # 13
montre(a - b)  # 7
montre(a * b)  # 30
montre(a / b)  # 3.333...
montre(a % b)  # 1
montre(a ** b) # 1000`
      },
      {
        title: "Précédence des opérateurs",
        text: "**Ordre de priorité :**\n1. `**` (exposant)\n2. `* / %`\n3. `+ -`",
        code: `montre(2 + 3 * 4)     # 14 (pas 20)
montre((2 + 3) * 4)   # 20
montre(2 ** 3 * 2)    # 16
montre(2 ** (3 * 2))  # 64`
      },
      {
        title: "Opérateurs de comparaison",
        text: "**Égalité :** `== !=`\n**Ordre :** `> < >= <=`",
        code: `soit x = 5
soit y = 10
montre(x == 5)   # vrai
montre(x != y)   # vrai
montre(x < y)    # vrai
montre(x >= 5)   # vrai`
      },
      {
        title: "Opérateurs logiques",
        text: "Combinez vos conditions avec `et`, `ou` et `non`.",
        code: `montre(vrai et vrai) # vrai
montre(vrai ou faux) # vrai
montre(non faux)    # vrai`
      }
    ]
  },
  {
    id: "controle",
    title: "2️⃣ Structures de Contrôle",
    category: "Fondamentaux",
    content: "Conditions et boucles pour contrôler le flux d'exécution. Maîtrisez les structures conditionnelles et itératives pour créer des programmes dynamiques.",
    steps: [
      {
        title: "If / Else simple",
        text: "Structure conditionnelle de base avec syntaxe française.",
        code: `soit age = 18
si age >= 18 {
  montre("Majeur")
} sinon {
  montre("Mineur")
}`
      },
      {
        title: "If / Else anglais",
        text: "Version anglaise équivalente avec `if` et `else`.",
        code: `let age = 18
if age >= 18 {
  print("Adult")
} else {
  print("Minor")
}`
      },
      {
        title: "Sinon si / Else if",
        text: "Chaînez plusieurs conditions mutuellement exclusives.",
        code: `soit score = 85
si score >= 90 {
  montre("Excellent")
} sinon si score >= 70 {
  montre("Bien")
} sinon {
  montre("À améliorer")
}`
      },
      {
        title: "Conditions complexes",
        text: "Combinez plusieurs critères avec `et` et `ou`.",
        code: `soit temperature = 25
soit humidite = 80
si temperature > 30 et humidite > 70 {
  montre("Alerte canicule")
}`
      },
      {
        title: "While simple",
        text: "Boucle conditionnelle qui répète tant que la condition est vraie.",
        code: `soit i = 0
tantque i < 5 {
  montre("Itération:", i)
  soit i = i + 1
}`
      },
      {
        title: "While anglais",
        text: "Version anglaise avec `while`.",
        code: `let count = 3
while count > 0 {
  print("Countdown:", count)
  let count = count - 1
}`
      },
      {
        title: "While avec validation",
        text: "Boucle de validation d'entrée utilisateur.",
        code: `soit essais = 0
soit maxEssais = 3
soit motDePasseCorrect = faux

tantque non motDePasseCorrect et essais < maxEssais {
  soit essai = entre("Mot de passe: ")
  motDePasseCorrect = essai == "secret123"
  soit essais = essais + 1
}`
      },
      {
        title: "Pour chaque sur liste",
        text: "Itération sur tous les éléments d'une liste.",
        code: `soit fruits = ["pomme", "banane", "cerise"]
pour chaque fruit dans fruits {
  montre("J'aime les", fruit)
}`
      },
      {
        title: "Tantque avec index (Simul Pour)",
        text: "Pour itérer sur une liste, vous pouvez aussi utiliser l'index classique.",
        code: `soit fruits = ["pomme", "banane", "cerise"]
soit i = 0
tantque i < longueur(fruits) {
  montre("Fruit index", i, ":", fruits[i])
  i = i + 1
}`
      },
      {
        title: "While anglais avec index",
        text: "Version anglaise avec `while`.",
        code: `let items = [10, 20, 30]
let i = 0
while i < longueur(items) {
  print("Item:", items[i])
  let i = i + 1
}`
      },
      {
        title: "Itération sur dictionnaire",
        text: "Parcourt les clés d'un dictionnaire directement.",
        code: `soit scores = {"Alice": 95, "Bob": 87}
pour chaque nom dans scores {
  montre(nom, ":", scores[nom])
}`
      },
      {
        title: "Break et Continue",
        text: "Contrôle avancé des boucles.",
        code: `soit i = 0
tantque i < 10 {
  i = i + 1
  si i == 5 {
    continue  # saute l'itération 5
  }
  si i == 8 {
    break     # sort de la boucle
  }
  montre("i =", i)
}`
      }
    ]
  },
  {
    id: "fonctions",
    title: "3️⃣ Fonctions",
    category: "Fondamentaux",
    content: "Déclaration de fonctions, paramètres, retour et fonctions avancées. Apprenez à créer du code réutilisable et modulaire.",
    steps: [
      {
        title: "Déclaration simple",
        text: "Créez une fonction avec le mot-clé `fonction`.",
        code: `fonction saluer(nom) {
  montre("Bonjour, " + nom + " !")
}
saluer("Bhilal")`
      },
      {
        title: "Function anglaise",
        text: "Version anglaise avec `function`.",
        code: `function greet(name) {
  print("Hello, " + name + "!")
}
greet("World")`
      },
      {
        title: "Fonction avec retour",
        text: "Utilisez `renvoie` pour retourner une valeur.",
        code: `fonction addition(a, b) {
  renvoie a + b
}
soit resultat = addition(5, 3)
montre(resultat)  # 8`
      },
      {
        title: "Return anglais",
        text: "Version anglaise avec `return`.",
        code: `function multiply(x, y) {
  return x * y
}
print(multiply(4, 5))  # 20`
      },
      {
        title: "Paramètres multiples",
        text: "Les fonctions peuvent accepter plusieurs paramètres.",
        code: `fonction presenter(prenom, nom, age) {
  montre(prenom, nom, "-", age, "ans")
}
presenter("Alice", "Dupont", 30)`
      },
      {
        title: "Paramètre optionnel",
        text: "Gérez les paramètres optionnels avec `nul`.",
        code: `fonction direBonjour(nom, salutation) {
  si salutation == nul {
    salutation = "Bonjour"
  }
  montre(salutation + ", " + nom)
}
direBonjour("Bob", nul)           # "Bonjour, Bob"
direBonjour("Carol", "Salut") # "Salut, Carol"`
      },
      {
        title: "Retour conditionnel",
        text: "Sortie précoce avec `renvoie` et `nul`.",
        code: `fonction diviser(a, b) {
  si b == 0 {
    renvoie nul
  }
  renvoie a / b
}
montre(diviser(10, 2))  # 5
montre(diviser(10, 0))  # null`
      },
  {
    title: "Analyse de liste",
    text: "Trouver le min et le max manuellement.",
    code: `fonction calculerStats(liste) {
  soit min = liste[0]
  soit max = liste[0]
  soit i = 0
  tantque i < longueur(liste) {
    soit n = liste[i]
    si n < min { min = n }
    si n > max { max = n }
    i = i + 1
  }
  renvoie {"min": min, "max": max}
}
soit stats = calculerStats([10, 20, 30])
montre("Min:", stats["min"], "Max:", stats["max"])`
  },
      {
        title: "Portée locale",
        text: "Les variables déclarées dans une fonction sont locales.",
        code: `fonction testLocale() {
  soit locale = "Je suis locale"
  montre(locale)  # accessible ici
}
testLocale()
# montre(locale)  # erreur: pas accessible hors fonction`
      },
      {
        title: "Variable globale",
        text: "Les variables globales sont accessibles partout.",
        code: `soit globale = "Je suis globale"
fonction utiliserGlobale() {
  montre(globale)  # accessible
}
utiliserGlobale()`
      },
  {
    title: "Fonction comme paramètre",
    text: "Passez une fonction en paramètre (callback).",
    code: `fonction appliquer(liste, operation) {
  soit resultat = []
  soit i = 0
  tantque i < longueur(liste) {
    resultat = resultat + [operation(liste[i])]
    i = i + 1
  }
  renvoie resultat
}
fonction doubler(x) { renvoie x * 2 }
montre(appliquer([1, 2, 3], doubler))  # [2, 4, 6]`
  },
      {
        title: "Factory function",
        text: "Fonction qui retourne une autre fonction.",
        code: `fonction creerMultiplicateur(facteur) {
  fonction multiplier(n) {
    renvoie n * facteur
  }
  renvoie multiplier
}
soit triple = creerMultiplicateur(3)
montre(triple(5))  # 15`
      }
    ]
  },
  {
    id: "types",
    title: "4️⃣ Types Natifs Détaillés",
    category: "Fondamentaux",
    content: "Number, String, Boolean, Null, Array et Object en profondeur. Maîtrisez tous les types de données natifs de Bhilal.",
    steps: [
      {
        title: "Number - Entiers",
        text: "Nombres entiers positifs et négatifs.",
        code: `soit positif = 42
soit negatif = -17
soit zero = 0`
      },
      {
        title: "Number - Décimaux",
        text: "Nombres à virgule flottante.",
        code: `soit pi = 3.14159
soit decimal = 0.001
soit scientifique = 1.5e10`
      },
      {
        title: "Number - Opérations",
        text: "Opérations mathématiques de base.",
        code: `soit a = 10
soit b = 3
montre(a + b)  # 13
montre(a * b)  # 30
montre(a / b)  # 3.333...`
      },
      {
        title: "String - Création",
        text: "Chaînes de caractères entre guillemets doubles.",
        code: `soit message = "Hello World"
soit vide = ""
soit unicode = "Café 🇫🇷"`
      },
      {
        title: "String - Concaténation",
        text: "Combinez des chaînes avec l'opérateur `+`.",
        code: `soit prenom = "Alice"
soit nom = "Dupont"
soit complet = prenom + " " + nom
montre(complet)  # "Alice Dupont"`
      },
      {
        title: "String - Accès",
        text: "Accédez aux caractères par index.",
        code: `soit texte = "Bhilal"
montre(texte[0])  # "B"
montre(texte[4])  # "a"`
      },
      {
        title: "String - Longueur",
        text: "Obtenez la longueur avec `longueur()`.",
        code: `soit message = "Hello"
montre(longueur(message))  # 5`
      },
      {
        title: "Boolean - Valeurs",
        text: "Les deux valeurs booléennes natives.",
        code: `soit actif = vrai
soit inactif = faux
let enabled = true
let disabled = false`
      },
      {
        title: "Null - Déclaration",
        text: "Représente l'absence de valeur.",
        code: `soit rien = nul
let nothing = null`
      },
      {
        title: "Array - Création",
        text: "Listes ordonnées d'éléments.",
        code: `soit vide = []
soit nombres = [1, 2, 3, 4, 5]
soit mixte = [1, "deux", vrai]`
      },
      {
        title: "Array - Accès",
        text: "Accédez aux éléments par index (commence à 0).",
        code: `soit fruits = ["pomme", "banane", "cerise"]
montre(fruits[0])  # "pomme"
montre(fruits[2])  # "cerise"`
      },
      {
        title: "Array - Modification",
        text: "Modifiez les éléments existants.",
        code: `soit liste = [10, 20, 30]
liste[1] = 25
montre(liste)  # [10, 25, 30]`
      },
      {
        title: "Array - Ajout",
        text: "Ajoutez des éléments avec concaténation.",
        code: `soit fruits = ["pomme", "banane"]
soit fruits = fruits + ["cerise"]
montre(fruits)  # ["pomme", "banane", "cerise"]`
      },
      {
        title: "Object - Création",
        text: "Dictionnaires de paires clé-valeur.",
        code: `soit utilisateur = {
  "nom": "Alice",
  "age": 30,
  "actif": vrai
}`
      },
      {
        title: "Object - Accès",
        text: "Accédez aux valeurs par clé.",
        code: `soit user = {"nom": "Bob", "age": 25}
montre(user["nom"])  # "Bob"
montre(user["age"])  # 25`
      },
      {
        title: "Object - Modification",
        text: "Modifiez ou ajoutez des propriétés.",
        code: `soit user = {"nom": "Alice"}
user["age"] = 30        # modification
user["ville"] = "Paris"  # ajout`
      },
      {
        title: "Object - Itération",
        text: "Parcourez les clés d'un objet directement.",
        code: `soit scores = {"Alice": 95, "Bob": 87}
pour chaque nom dans scores {
  montre(nom, ":", scores[nom])
}`
      },
      {
        title: "Types - Conversion",
        text: "Conversions automatiques et explicites.",
        code: `soit nombre = 42
soit texte = "Valeur: " + nombre  # auto
soit num = "10" * 1              # explicite`
      }
    ]
  },
  {
    id: "poo_bases",
    title: "5️⃣ POO : Bases",
    category: "Avancé",
    content: "Introduction à la programmation orientée objet. Apprenez à définir des classes et à instancier des objets pour organiser votre code.",
    steps: [
      {
        title: "Déclaration de Classe",
        text: "Utilisez le mot-clé `classe` pour définir un nouveau modèle d'objet.",
        code: `classe Robot {
  fonction saluer() {
    montre("Bip bip ! Je suis un robot.")
  }
}`
      },
      {
        title: "Instantiation",
        text: "Créez une instance de votre classe avec le mot-clé `nouveau`.",
        code: `soit monRobot = nouveau Robot()
monRobot.saluer()`
      },
      {
        title: "Propriétés d'Objet",
        text: "Accédez aux propriétés avec `ceci[\"cle\"]`. L'assignation directe `obj.prop =` n'est pas supportée, utilisez les crochets.",
        code: `classe Utilisateur {
  fonction initialiser(nom) {
    ceci["nom"] = nom
  }
  fonction direNom() {
    montre("Je suis", ceci["nom"])
  }
}
soit u = nouveau Utilisateur()
u.initialiser("Alice")
u.direNom()`
      }
    ]
  },
  {
    id: "poo_avance",
    title: "6️⃣ POO : Héritage & Accès",
    category: "Avancé",
    content: "Allez plus loin avec la POO en utilisant l'héritage pour réutiliser du code et l'encapsulation pour protéger vos données.",
    steps: [
      {
        title: "Héritage",
        text: "Une classe peut hériter des méthodes d'une autre classe avec `herite de`.",
        code: `classe Animal {
  fonction manger() { montre("Miam") }
}

classe Chat herite de Animal {
  fonction crier() { montre("Miaou") }
}

soit minou = nouveau Chat()
minou.manger()
minou.crier()`
      },
      {
        title: "Visibilité : Public",
        text: "Par défaut, les membres sont publics. Vous pouvez aussi utiliser le mot-clé `public` explicitement.",
        code: `classe Test {
  public fonction info() { montre("Public") }
}`
      },
      {
        title: "Visibilité : Privé",
        text: "Utilisez `prive` pour cacher des méthodes à l'extérieur de la classe. L'accès aux propriétés privées est restreint avec `ceci`.",
        code: `classe Secret {
  prive fonction code() { montre("1234") }
  public fonction tester() {
    # Accessible via ceci.method()
    ceci.code()
  }
}

soit s = nouveau Secret()
s.tester()
# s.code() # Erreur : méthode privée`
      },
      {
        title: "Classes Abstraites",
        text: "Une classe `abstrait` ne peut pas être instanciée directement.",
        code: `abstrait classe Forme {
  fonction aire() { lance "Non implémenté" }
}
classe Carre herite de Forme {
  fonction aire() { renvoie 25 }
}
# soit f = nouveau Forme() # Erreur`
      },
      {
        title: "Interfaces",
        text: "Définissez des contrats avec `interface`.",
        code: `interface Volant {
  fonction voler() {}
}
classe Avion herite de Volant {
  fonction voler() { montre("Décollage") }
}`
      }
    ]
  },
  {
    id: "erreurs",
    title: "7️⃣ Gestion des Erreurs",
    category: "Avancé",
    content: "Apprenez à anticiper et gérer les erreurs pour rendre vos programmes plus robustes.",
    steps: [
  {
    title: "Try / Catch",
    text: "Utilisez `essaye` et `attrape (err)` pour capturer les erreurs. Notez les parenthèses indispensables.",
    code: `essaye {
  soit x = 10 / 0
} attrape (erreur) {
  montre("Oups :", erreur)
}`
  },
      {
        title: "Lancer une erreur",
        text: "Vous pouvez forcer une erreur avec le mot-clé `lance`.",
        code: `fonction verifierAge(age) {
  si age < 0 {
    lance("Âge invalide")
  }
}`
      }
    ]
  },
  {
    id: "systeme",
    title: "8️⃣ Système & Fichiers",
    category: "Système",
    content: "Interagissez avec votre ordinateur : fichiers, commandes système et automatisation.",
    steps: [
      {
        title: "Lire un fichier",
        text: "Utilisez `lire(chemin)` pour obtenir le contenu d'un fichier texte.",
        code: `soit contenu = lire("test.txt")
montre(contenu)`
      },
      {
        title: "Écrire un fichier",
        text: "Utilisez `ecrire(chemin, texte)` pour sauvegarder des données.",
        code: `ecrire("log.txt", "Action effectuée")`
      },
      {
        title: "Commandes Système",
        text: "Exécutez n'importe quelle commande OS avec `execute(cmd)`.",
        code: `execute("ls -la") # Linux/Mac
execute("dir")   # Windows`
      },
      {
        title: "Gestion Avancée",
        text: "Vérifiez l'existence, listez des dossiers ou renommez des fichiers.",
        code: `si existe("logs") {
  montre("Le dossier logs existe")
} sinon {
  creer_dossier("logs")
}

soit fichiers = lister(".")
pour chaque f dans fichiers {
  si est_dossier(f) {
    montre("Dossier :", f)
  } sinon {
    montre("Fichier :", f)
  }
}

renommer("ancien.txt", "nouveau.txt")
supprimer("temp.tmp")`
      }
    ]
  },
  {
    id: "reseau",
    title: "9️⃣ Réseau & HTTP",
    category: "Système",
    content: "Connectez vos scripts au monde extérieur via des requêtes HTTP.",
    steps: [
      {
        title: "Requête HTTP GET",
        text: "Utilisez `requete_http` pour interroger une API.",
        code: `soit rep = requete_http("https://api.github.com")
montre(rep)`
      },
      {
        title: "Analyse JSON",
        text: "Traitez les données reçues comme des objets natifs.",
        code: `soit data = requete_http("https://api.example.com/data")
montre(data.nom)`
      },
      {
        title: "Requête GET détaillée",
        text: "Utilisez les options pour ajouter des en-têtes personnalisés.",
        code: `soit options = {
  "entetes": { "User-Agent": "Bhilal-Bot/1.0" }
}
soit rep = requete_http("https://api.example.com", options)
montre(rep.status, rep.body)`
      },
      {
        title: "Requête POST",
        text: "Envoyez des données JSON à une API.",
        code: `soit donnees = { "nom": "Alice", "score": 100 }
soit rep = requete_post("https://api.example.com/post", donnees)
montre("Status:", rep.status)`
      },
      {
        title: "Découverte IP",
        text: "Identifiez votre adresse IP publique actuelle.",
        code: `soit ip = mon_ip()
montre("Mon IP :", ip)`
      }
    ]
  },
  {
    id: "securite",
    title: "🔟 Cybersécurité",
    category: "Sécurité",
    content: "Bhilal inclus des outils natifs pour l'audit et le test d'intrusion.",
    steps: [
      {
        title: "Scan de ports",
        text: "Scannez les ports TCP d'une cible rapidement.",
        code: `soit ports = [80, 443, 22]
soit resultats = scan_ports("127.0.0.1", ports)
pour chaque r dans resultats {
  si r["open"] { montre("Port ouvert :", r["port"]) }
}`
      },
      {
        title: "Audit de Sécurité",
        text: "Analysez les vulnérabilités courantes d'une cible.",
        code: `soit audit = scan_vulnerabilites("https://example.com")
montre("Score:", audit.score_securite)
pour chaque v dans audit.vulnerabilites {
  montre("Alerte:", v)
}

soit xss = test_xss_basique("https://target.com/search")
si xss.vulnerable {
  montre("⚠️ Risque XSS détecté !")
}`
      },
      {
        title: "Résolution DNS",
        text: "Obtenez les IPs associées à un domaine.",
        code: `soit ips = dns_resolve("google.com")
montre(ips)`
      },
      {
        title: "Scan de sous-réseau",
        text: "Identifiez les machines actives sur un réseau CIDR.",
        code: `soit hosts = subnet_scan("192.168.1.0/24")
montre(hosts)`
      }
    ]
  }
];
