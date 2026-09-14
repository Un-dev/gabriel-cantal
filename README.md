# Gabriel Cantal - Portfolio

Site portfolio pour Gabriel Cantal, monteur et réalisateur audiovisuel.

## Setup avec Netlify

### 1. Déployer sur Netlify

1. Crée un compte sur https://app.netlify.com
2. Clique "Add new site" > "Import an existing project"
3. Connecte ton compte GitHub
4. Sélectionne le repository `gabriel-cantal`
5. Laisse les paramètres par défaut et clique "Deploy site"

### 2. Activer l'authentification

1. Dans le dashboard Netlify, va dans **Site configuration** > **Identity**
2. Clique "Enable Identity"
3. Dans **Registration preferences**, sélectionne "Invite only" (plus sécurisé)
4. Dans **Providers**, active "GitHub" et/ou "Google"
5. Sauvegarde

### 3. Activer Git Gateway

1. Va dans **Site configuration** > **Identity** > **Git Gateway**
2. Clique "Enable Git Gateway"
3. Connecte ton compte GitHub si demandé

### 4. Inviter Gabriel

1. Va dans **Site configuration** > **Identity** > **Users**
2. Clique "Invite users"
3. Entre l'email de Gabriel
4. Il recevra un lien pour créer son compte

### 5. Accéder à l'admin

1. Va sur `https://TON-SITE.netlify.app/admin/`
2. Connecte-toi avec GitHub ou Google
3. Ajoute/modifie les œuvres depuis l'interface

## Structure du projet

```
gabriel-cantal/
├── index.html          # Page d'accueil
├── clips.html          # Clips musicaux
├── moyens-metrages.html # Moyens métrages
├── publicites.html     # Publicités
├── a-propos.html       # Page À propos
├── contact.html        # Formulaire de contact
├── admin/
│   ├── index.html      # Interface Decap CMS
│   └── config.yml      # Configuration Decap CMS
├── css/style.css       # Styles
├── js/main.js          # JavaScript
├── netlify.toml        # Configuration Netlify
└── data/
    ├── works.json      # Données des œuvres
    └── settings.json   # Paramètres du site
```

## Ajouter une œuvre

1. Connecte-toi à l'admin (`/admin/`)
2. Sélectionne la catégorie (Clips, Moyens Métrages, ou Publicités)
3. Clique sur "New" ou "Nouveau"
4. Remplis le formulaire :
   - **Titre**: nom de l'œuvre
   - **Description**: description courte
   - **Année**: année de réalisation
   - **URL YouTube/Vimeo**: lien embed de la vidéo
5. Clique sur "Publish" pour sauvegarder

## Personnaliser le site

### Modifier les informations personnelles

1. Dans l'admin, va dans "Paramètres du site" > "Informations générales"
2. Modifie le nom, titre, bio, email, et liens sociaux
3. Clique sur "Publish"

### Modifier le design

Les styles sont dans `css/style.css`. Tu peux modifier :
- Les couleurs (variables CSS en haut du fichier)
- La mise en page
- Les polices

## Vidéos

Les vidéos sont hébergées sur YouTube/Vimeo. Pour ajouter une vidéo :

1. Sur YouTube, clique sur "Partager" > "Intégrer"
2. Copie l'URL qui commence par `https://www.youtube.com/embed/...`
3. Colle cette URL dans le formulaire admin

## Dépannage

### Le site ne s'affiche pas
- Vérifie que Netlify a bien déployé le site
- Regarde les logs dans "Deploys" du dashboard Netlify

### L'admin ne fonctionne pas
- Vérifie que Identity est activé
- Vérifie que Git Gateway est configuré
- Vérifie que l'utilisateur a bien reçu l'invitation

### Les vidéos ne s'affichent pas
- Vérifie que l'URL est bien une URL embed (pas une URL classique)
- L'URL doit commencer par `https://www.youtube.com/embed/...`
