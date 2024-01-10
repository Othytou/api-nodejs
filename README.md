# API Express avec Node.js et TypeScript

Bienvenue dans mon projet d'API Express créé avec Node.js et TypeScript. Ce projet est conçu pour vous montrer comment mettre en place une API RESTful simple à l'aide de ces technologies.

## Prérequis

Avant de commencer, assurez-vous d'avoir les éléments suivants installés sur votre système :

- [Node.js](https://nodejs.org/) : Téléchargez et installez Node.js si ce n'est pas déjà fait.
- [npm](https://www.npmjs.com/) : npm est le gestionnaire de paquets pour Node.js et est généralement installé automatiquement avec Node.js.

## Obtention d'un Token API TMDb

Pour utiliser cette API, vous devez obtenir un token API TMDb. Voici comment le faire :

1. Accédez au site Web de [TMDb](https://www.themoviedb.org/).

2. Créez un compte ou connectez-vous si vous en avez déjà un.

3. Après avoir créé un compte et vous être connecté, accédez à [votre page de compte](https://www.themoviedb.org/settings/api) sur TMDb.

4. Sous la section "API Key", cliquez sur le bouton "Create" pour générer votre token API. Suivez les instructions pour obtenir votre clé.

5. Une fois que vous avez votre token API, vous pouvez l'utiliser dans votre application.

## Installation

1. Clonez ce dépôt GitHub sur votre machine en utilisant la commande suivante :

   ```
   git clone https://github.com/Othytou/api-nodejs.git
   ```

2. Accédez au répertoire de votre projet :

   ```
   cd api-nodejs
   ```

3. Renommez le fichier .env.sample en .env.

4. Remplacez les valeurs de .env par celles de l'API TMDb que vous avez récupérées.

5. Installez les dépendances nécessaires en utilisant npm :

   ```
   npm install
   ```

Cela installera toutes les dépendances répertoriées dans le fichier package.json.

## Exécution de l'Application

Une fois les dépendances installées, vous pouvez exécuter l'application en utilisant la commande suivante :
`node app.ts`

L'application sera exécutée sur le port par défaut 3000, mais vous pouvez le personnaliser dans le fichier app.ts si nécessaire.
