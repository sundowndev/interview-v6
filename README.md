# interview-v6

[![Build Status](https://travis-ci.org/sundowndev/interview-v6.svg?branch=master)](https://travis-ci.org/sundowndev/interview-v6)

### Objectif

Implémenter et déployer une API REST qui justifie un texte passé en paramètre.

### Contraintes

- [x] La longueur des lignes du texte justifié doit être de 80 caractères.

- [x] L’endpoint doit être de la forme /api/justify et doit retourner un texte justifié suite à une requête POST avec un body de `Content-Type: text/plain`.

- [x] L’api doit utiliser un mécanisme d’authentification via token unique. En utilisant par exemple une endpoint api/token qui retourne un token d’une requête POST avec un json body `{"email": "foo@bar.com"}`.

- [x] Il doit y avoir un rate limit par token pour l’endpoint /api/justify, fixé à 80 000 mots par jour, si il y en a plus dans la journée il faut alors renvoyer une erreur 402 Payment Required.

- [x] Le code doit être déployé sur un url ou une ip public

- Le code doit être rendu sur github
- Langage : Nodejs
- PAS d’usage de bibliothèque externe pour la justification

### Bonus

- [x] Les tests, le coverage

- [x] La lisibilité
