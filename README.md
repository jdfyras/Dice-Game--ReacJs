# Jeu de dés

Un jeu de dés simple construit avec React.

## Caractéristiques

1. **Affichage des dés** : L'application affiche les dés et leur valeur actuelle.
2. **Lancer les dés** : Les utilisateurs peuvent lancer les dés pour obtenir une nouvelle valeur.
3. **Calcul du score** : Le jeu calcule automatiquement le score du joueur en fonction des valeurs des dés.
4. **Gestion des tours** : Le jeu permet de gérer les tours des joueurs, en alternant entre les joueurs après chaque lancer.
5. **Affichage du gagnant** : Le jeu affiche le joueur gagnant avec le score le plus élevé.
6. **Réinitialisation du jeu** : Les utilisateurs peuvent réinitialiser le jeu pour commencer une nouvelle partie.

## Tâches pour construire le projet

1. **Mettre en place un nouveau projet React** en utilisant Create React App.
2. **Créer un composant principal (`Dice`)** qui sera responsable de l'affichage global du jeu.
3. **Créer un composant (`Dice`)** pour afficher un dé et sa valeur.
4. **Gérer l'état des dés** dans le composant `Dice` en utilisant les hooks `useState`.
5. **Implémenter la fonctionnalité de lancer les dés** en générant de nouvelles valeurs aléatoires pour les dés dans le composant `Dice`.
6. **Calculer le score du joueur** en utilisant les valeurs des dés et mettre à jour le score dans le composant `Dice`.
7. **Mettre en place la gestion des tours des joueurs** en utilisant une variable d'état pour suivre le joueur actuel (joueur 1 ou joueur 2) dans le composant `Dice`.
8. **Alterner entre les joueurs** après chaque lancer de dés en mettant à jour la variable d'état du joueur actuel dans le composant `Dice`.
9. **Déterminer le joueur gagnant** en comparant les scores des deux joueurs et en affichant le résultat dans le composant `Dice`.
10. **Ajouter un bouton de réinitialisation** pour remettre à zéro les valeurs des dés, les scores et choisir un joueur de départ aléatoire.

## Comment utiliser

1. Clonez ce dépôt.
2. Installez les dépendances avec `npm install`.
3. Lancez l'application avec `npm start`.

## Technologies utilisées

- React
- Create React App
- JavaScript ES6
- CSS

## À faire

- [ ] Ajouter des animations pour rendre le jeu plus interactif.
- [ ] Permettre aux utilisateurs de choisir le nombre de dés à lancer.
- [ ] Ajouter des effets sonores pour une expérience plus immersive.
- [ ] Mettre en place des tests unitaires pour assurer la stabilité du jeu.

## Auteur

[Jday Firas](https://github.com/jdfyras)

## Licence

Ce projet est sous licence [MIT](LICENSE).