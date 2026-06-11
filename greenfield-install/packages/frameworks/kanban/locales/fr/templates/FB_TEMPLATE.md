---
lifecycle: evergreen
ttl_days: null
created_at: [YYYY-MM-DDTHH:MM:SSZ]
expires_at: null
housekeeping_policy: keep
---

# Rapport de tests d'acceptation utilisateur (UAT): [Titre]

**Type :** Tests d'acceptation utilisateur (UAT) / Feedback (FB)  
**Soumis:** [YYYY-MM-DD]  
**Soumis por:** [Nom/Utilisateur/Projet]  
**Priorité:** [HAUTE/MOYENNE/BASSE]  
**État:** [EN ATTENTE/INTAKE/ACCEPTÉ/REJETÉ/DIFFÉRÉ]  
**Périmètre UAT:** [Composant/fonctionnalité/système testé]

---

## Résumé

[Résumé en una frase del feedback.]

---

## Contexte UAT

**Proyecto/organización:** [Nom du projet ou organisation réalisant l'UAT]  
**Componente probado:** [p. ex., Kanban Framework, Release Workflow, Versioning Framework]  
**Version probada:** [Numéro de version ou hash de commit]  
**Periodo de pruebas:** [Date de début] à [Date de fin]  
**Périmètre UAT:** [Brève description de ce qui a été testé et critères d'acceptation]

**Méthodologie UAT :**
- [ ] Pruebas funcionales (¿funciona según lo especificado?)
- [ ] Pruebas de integración (¿se integra según lo esperado?)
- [ ] Pruebas de adopción (¿puede adoptarse según la documentación?)
- [ ] Pruebas de extremo a extremo (¿funciona el flujo completo?)
- [ ] Otro: [especificar]

**Critères d'acceptation probados:**
[Listez les critères d'acceptation ou exigences testés]
- Critère 1 : [Description]
- Critère 2 : [Description]
- Critère 3 : [Description]

---

## Résultats UAT

### Résultats por criterio de aceptación

[Pour chaque critère, documentez le résultat du test]

**Critère 1 : [Description]**
- **État:** [APROBADO/FALLIDO/PARCIAL]
- **Evidencia:** [Résultats de prueba, capturas, registros, etc.]
- **Notes:** [Observations supplémentaires]

**Critère 2 : [Description]**
- **État:** [APROBADO/FALLIDO/PARCIAL]
- **Evidencia:** [Résultats de prueba, capturas, registros, etc.]
- **Notes:** [Observations supplémentaires]

**Critère 3 : [Description]**
- **État:** [APROBADO/FALLIDO/PARCIAL]
- **Evidencia:** [Résultats de prueba, capturas, registros, etc.]
- **Notes:** [Observations supplémentaires]

### Résumé de resultados de prueba

**Total de critères testés :** [Nombre]  
**Approuvés :** [Nombre]  
**Échoués :** [Nombre]  
**Partiels :** [Nombre]

### Ce qui a fonctionné comme prévu

[Quels aspects ont réussi l'UAT comme spécifié/annoncé ?]

- Aspecto 1: [Description con evidencia]
- Aspecto 2: [Description con evidencia]
- Aspecto 3: [Description con evidencia]

### Problèmes rencontrés (échecs)

[Quels critères ont échoué ou ne fonctionnaient pas comme spécifié ?]

- **Problema 1:** [Critère en échec]
  - **Esperado:** [Attendu]
  - **Real:** [Réel]
  - **Evidencia:** [Résultats de prueba, capturas, registros]
  - **Gravité:** [CRITIQUE/HAUTE/MOYENNE/BASSE]

- **Problema 2:** [Critère en échec]
  - **Esperado:** [Attendu]
  - **Real:** [Réel]
  - **Evidencia:** [Résultats de prueba, capturas, registros]
  - **Gravité:** [CRITIQUE/HAUTE/MOYENNE/BASSE]

### Évaluation globale de l'UAT

**Fonctionne-t-il comme annoncé/spécifié ?**
- [ ] Sí, funciona según lo anunciado (todos los criterios aprobados)
- [ ] Funciona en su mayor parte (problemas menores, criterios no críticos fallidos)
- [ ] Funciona parcialmente (algunos criterios críticos fallidos)
- [ ] No funciona según lo anunciado (criterios críticos fallidos)

**Recommandation UAT :**
- [ ] ACEPTAR — Listo para uso
- [ ] ACEPTAR CON SALVEDADES — Utilizable pero con problemas conocidos
- [ ] RECHAZAR — No cumple los criterios de aceptación

**Évaluation fondée sur des preuves :** [Basée sur les résultats de test, pas sur l'opinion]

---

## Constats spécifiques

### Fonctionnalité

[Retour détaillé sur la fonctionnalité]

- Hallazgo 1: [Description]
- Hallazgo 2: [Description]

### Utilisabilité

[Retour sur facilité d'usage, documentation, onboarding]

- Hallazgo 1: [Description]
- Hallazgo 2: [Description]

### Performance

[Retour sur performance, vitesse, utilisation des ressources]

- Hallazgo 1: [Description]
- Hallazgo 2: [Description]

### Documentation

[Retour sur qualité, exhaustivité et clarté de la documentation]

- Hallazgo 1: [Description]
- Hallazgo 2: [Description]

### Intégration

[Retour sur l'intégration avec d'autres outils/systèmes]

- Hallazgo 1: [Description]
- Hallazgo 2: [Description]

---

## Détails du cas d'usage

**Cas d'usage principal:** [Comment ce composant a-t-il été utilisé ?]

**Tipo de proyecto:** [p. ex., proyecto nuevo, migración de proyecto existente, adopción de framework]

**Tamaño del proyecto:** [p. ex., pequeño, mediano, grande, enterprise]

**Tamaño del equipo:** [Nombre de membres de l'équipe utilisant le composant]

**Duración de uso:** [Depuis combien de temps est-il utilisé ?]

---

## Preuves à l'appui

**Résultats de prueba:**
- [Lien vers résultats de test, captures ou autres preuves]
- [Lien vers rapports de test ou documentation]

**Exemples:**
- [Exemples o escenarios específicos]
- [Extraits de code ou configurations]

**Métricas:**
- [Métriques quantitatives ou mesures]

---

## Évaluation de l'impact

**Impact en el proyecto:**
- [ ] Crítico — bloqueó el progreso del proyecto
- [ ] Alto — impacto significativo en el proyecto
- [ ] Medio — impacto moderado
- [ ] Bajo — impacto menor
- [ ] Positivo — mejoró el proyecto

**Impact en el equipo:**
- [ ] Crítico — afectó la productividad del equipo
- [ ] Alto — impacto significativo en el equipo
- [ ] Medio — impacto moderado en el equipo
- [ ] Bajo — impacto menor en el equipo
- [ ] Positivo — mejoró el flujo de trabajo del equipo

---

## Recommandations

[Quelles actions selon ce retour ?]

- [ ] Recomendación 1: [Description]
- [ ] Recomendación 2: [Description]
- [ ] Recomendación 3: [Description]

**Ordre de priorité:**
1. [Recommandation prioritaire]
2. [Recommandation secondaire]
3. [Recommandation tertiaire]

---

## Travail connexe

**BR connexes:** [Rapports de bogues issus de ce retour]
**FR connexes:** [Demandes de fonctionnalité issues de ce retour]
**UXR connexes:** [Recherches UX liées à ce retour]

---

## Décision d'intake

**État d'intake:** [EN ATTENTE/INTAKE/ACCEPTÉ/REJETÉ/DIFFÉRÉ]  
**Date d'intake:** [YYYY-MM-DD]  
**Intake par:** [Nom/Utilisateur]

**Résultats du flux de décision:**
- [ ] Story coincidente encontrada: [Epic X, Story Y] → Task [T]
- [ ] Nueva Story creada: [Epic X, Story Y] → Task 1
- [ ] Nuevo Epic creado: [Epic X, Story 1, Task 1]
- [ ] Feedback reconocido: [Aucune action requise, retour noté]

**Assigné à:**
- Epic: [Numéro ou nom de l'Epic]
- Story: [Numéro ou nom de la Story]
- Task: [Numéro ou nom de la tâche]

**Version:** [Version cuando se abordó]

---

## Notes

[Notes adicionales o contexto]

---

**Utilisation du modèle :**
**Localisation (fr) :** Utilisez un français technique neutre dans la prose instructive.
 Ce FB suit le modèle de feedback du Kanban framework. Les retours aident à améliorer le framework et sont précieux pour l'amélioration continue.
