# Gabriel Cantal - Portfolio

Site portfolio pour Gabriel Cantal, monteur et réalisateur audiovisuel.

## Setup Decap CMS

### 1. Créer un repository GitHub

```bash
git init
git add .
git commit -m "Initial commit"
```

Crée un nouveau repository sur GitHub et pousse le code :
```bash
git remote add origin https://github.com/VOTRE_USERNAME/gabriel-cantal.git
git push -u origin main
```

### 2. Configurer Decap CMS

Dans `admin/config.yml`, remplacez `VOTRE_USERNAME` par votre nom d'utilisateur GitHub.

### 3. Activer GitHub OAuth

1. Allez sur https://github.com/settings/applications/new
2. Créez une nouvelle OAuth App :
   - **Application name**: `Gabriel Cantal Admin`
   - **Homepage URL**: `https://VOTRE_USERNAME.github.io/gabriel-cantal/`
   - **Authorization callback URL**: `https://decap-oauth.netlify.app/`
3. Copiez le **Client ID** et **Client Secret**
4. Allez sur https://decap-oauth.netlify.app/ et configurez :
   - **Client ID**: votre Client ID
   - **Client Secret**: votre Client Secret

### 4. Déployer sur GitHub Pages

1. Allez dans Settings > Pages du repository
2. Sélectionnez la branche `main` comme source
3. Le site sera disponible sur `https://VOTRE_USERNAME.github.io/gabriel-cantal/`

### 5. Accéder à l'admin

1. Allez sur `https://VOTRE_USERNAME.github.io/gabriel-cantal/admin/`
2. Connectez-vous avec votre compte GitHub
3. Ajoutez/modifiez les œuvres directement depuis l'interface

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
└── data/
    ├── works.json      # Données des œuvres
    └── settings.json   # Paramètres du site
```

## Ajouter une œuvre

1. Connectez-vous à l'admin (`/admin/`)
2. Sélectionnez la catégorie (Clips, Moyens Métrages, ou Publicités)
3. Cliquez sur "New" ou "Nouveau"
4. Remplissez le formulaire :
   - **Titre**: nom de l'œuvre
   - **Description**: description courte
   - **Année**: année de réalisation
   - **URL YouTube/Vimeo**: lien embed de la vidéo
5. Cliquez sur "Publish" pour sauvegarder

## Personnaliser le site

### Modifier les informations personnelles

1. Dans l'admin, allez dans "Paramètres du site" > "Informations générales"
2. Modifiez le nom, titre, bio, email, et liens sociaux
3. Cliquez sur "Publish"

### Modifier le design

Les styles sont dans `css/style.css`. Vous pouvez modifier :
- Les couleurs (variables CSS en haut du fichier)
- La mise en page
- Les polices

## Vidéos

Les vidéos sont hébergées sur YouTube/Vimeo. Pour ajouter une vidéo :

1. Sur YouTube, cliquez sur "Partager" > "Intégrer"
2. Copiez l'URL qui commence par `https://www.youtube.com/embed/...`
3. Collez cette URL dans le formulaire admin

## Dépannage

### Le site ne s'affiche pas
- Vérifiez que GitHub Pages est activé dans Settings > Pages
- Vérifiez que la branche `main` est sélectionnée

### L'admin ne fonctionne pas
- Vérifiez que l'OAuth App est correctement configuré
- Vérifiez que le Client ID et Secret sont corrects dans Netlify OAuth

### Les vidéos ne s'affichent pas
- Vérifiez que l'URL est bien une URL embed (pas une URL classique)
- L'URL doit commencer par `https://www.youtube.com/embed/...`
