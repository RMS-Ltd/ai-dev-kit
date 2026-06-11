---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:01:57Z
expires_at: null
housekeeping_policy: keep
---

# Rapport de bogue: [Titre]

**Type :** Rapport de bogue (BR)  
**Soumis:** [YYYY-MM-DD]  
**Soumis por:** [Nom/Utilisateur]  
**Priorité:** [CRITIQUE/HAUTE/MOYENNE/BASSE]  
**Gravité:** [CRITIQUE/HAUTE/MOYENNE/BASSE]  
**État:** [EN ATTENTE/INTAKE/ACCEPTÉ/REJETÉ/DIFFÉRÉ]

---

## Résumé

[Description en una frase del error.]

---

## Description

[Description detallada del error. Incluya:]
- Quel est le bogue ?
- Que devrait-il se passer par rapport à ce qui se passe réellement ?
- Quand cela se produit-il ?
- Qui est concerné ?

---

## Composant concerné

**Componente principal:** [p. ex., autenticación de usuarios, procesamiento de pagos, componente de UI]  
**Zones concernées:**
- [ ] Backend/API
- [ ] Frontend/UI
- [ ] Base de datos/esquema
- [ ] Intégration/servicio externo
- [ ] Documentation
- [ ] Otro: [especificar]

**Cause racine (si connue):**
[Description de la causa raíz, si se ha identificado]

---

## Étapes de reproduction

1. Étape 1
2. Étape 2
3. Étape 3
4. [Résultat esperado]
5. [Résultat real]

---

## Environnement

**Environnement:** [Production/Staging/Développement]  
**Version:** [Numéro de version ou hash de commit]  
**Navigateur/plateforme:** [Si applicable]  
**SO:** [Si applicable]

---

## Impact

**Impact en el usuario:**
- [ ] Crítico — sistema inutilizable
- [ ] Alto — funcionalidad principal rota
- [ ] Medio — alguna funcionalidad afectada
- [ ] Bajo — problema menor, existe workaround

**Impact en el negocio:**
[Description del impacto en el negocio, si aplica]

**Contournement:**
[S'il existe un contournement, décrivez-le ici]

---

## Critères d'acceptation (requisitos de corrección)

- [ ] Critère 1 : [Criterio específico y verificable para la corrección]
- [ ] Critère 2 : [Criterio específico y verificable para la corrección]
- [ ] Critère 3 : [Criterio específico y verificable para la corrección]

**Méthode de vérification:**
- [ ] Ejecución de la suite de pruebas
- [ ] Prueba manual
- [ ] Ambos

**État de vérification de la corrección:**
- [ ] Verificado (suite de pruebas aprobada / prueba manual aprobada)
- [ ] Corrección intentada (pendiente de verificación)

---

## Historial des tentatives de correction

**Propósito:** Esta sección documenta todos los intentos de corrección de este error, de modo que si el error no se resuelve, la siguiente versión pueda basarse en intentos anteriores.

**Cómo usar:**
- Cada release que intente corregir este error debe añadir una nueva entrada en esta sección
- Documente qué se intentó, qué funcionó, qué no y el estado de verificación
- Esto crea una base de conocimiento para futuros intentos de corrección

### Tentatives de correction

#### Tentative 1: [Version] - [Fecha]

**Description de la corrección:**
[Describa qué se intentó para corregir este error]

**Modifications effectuées:**
- [Listez les modifications, fichiers, changements de code, etc.]

**État de vérification:**
- [ ] Verificado (suite de pruebas aprobada / prueba manual aprobada)
- [ ] Corrección intentada (pendiente de verificación)
- [ ] Corrección fallida (el error sigue presente)

**Méthode de vérification:**
- [ ] Ejecución de la suite de pruebas
- [ ] Prueba manual
- [ ] Ambos

**Preuve de vérification:**
[Lien vers résultats de tests, sortie CI/CD ou documentation]

**Résultat:**
- [ ] Error corregido
- [ ] Error parcialmente corregido (describa la corrección parcial)
- [ ] Error no corregido (describa por qué la corrección no funcionó)

**Enseignements tirés:**
[Qu'avez-vous appris ? Que tenter différemment la prochaine fois ?]

**Prochaines étapes:**
[Que tenter lors de la prochaine tentative de correction ?]

---

## Dépendances

**Bloquea:**
- [Ce que ce BR bloque]

**Bloqué par:**
- [Ce que ce BR bloque]

**Travail connexe:**
- [BR, Stories, Tasks o Epics relacionados]

---

## Décision d'intake

**État d'intake:** [EN ATTENTE/INTAKE/ACCEPTÉ/REJETÉ/DIFFÉRÉ]  
**Date d'intake:** [YYYY-MM-DD]  
**Intake par:** [Nom/Utilisateur]

**Résultats du flux de décision:**
- [ ] Story coincidente encontrada: [Epic X, Story Y] → Task [T]
- [ ] Nueva Story creada: [Epic X, Story Y] → Task 1
- [ ] Nuevo Epic creado: [Epic X, Story 1, Task 1]

**Assigné à:**
- Epic: [Numéro et nom de l'Epic]
- Story: [Numéro et nom de la Story]
- Task: [Numéro et nom de la tâche]
- Version: `[RC.EPIC.STORY.TASK+BUILD]`

**Liens Kanban:**
- Epic: [`docs/project-management/kanban/epics/Epic-X/Epic-X.md`](path/to/Epic-X.md)
- Story: [`docs/project-management/kanban/epics/Epic-X/Story-XXX-*.md`](path/to/Story.md)
- Task: [Lien vers la tâche dans le document Story]

---

## Notes

[Notes adicionales, contexto o consideraciones]

---

## Références

- [Documentation, especificaciones, diagramas o recursos externos relacionados]
- [Rapports de bogues ou incidents connexes]

---

**Utilisation du modèle :**
**Localisation (fr) :** Utilisez un français technique neutre dans la prose instructive.

- Copiez ce modèle lors de la création d'un un nouveau rapport de bogue
- Remplissez toutes les sections pertinentes
- Utilisez la section «Décision d'intake» pour suivre la conversion FR/BR → Task → Story → Epic
- Liez la tâche/Story/Epic creada pour la traçabilité
- **CRITIQUE:** Las correcciones deben verificarse mediante pruebas antes de marcarse como «Corregido» en los changelogs

---

_Ce modèle fait partie du Kanban Framework. Consultezz `packages/frameworks/kanban/` pour la documentation complète du framework._
