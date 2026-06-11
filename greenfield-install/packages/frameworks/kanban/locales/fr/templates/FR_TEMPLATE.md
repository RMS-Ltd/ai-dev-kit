---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:01:57Z
expires_at: null
housekeeping_policy: keep
---

# Demande de fonctionnalité: [Titre]

**Type :** Demande de fonctionnalité (FR)  
**Soumise:** [YYYY-MM-DD]  
**Soumise por:** [Nom/Utilisateur]  
**Priorité:** [HAUTE/MOYENNE/BASSE]  
**État:** [EN ATTENTE/INTAKE/ACCEPTÉE/REJETÉE/DIFFÉRÉE]

---

## Résumé

[Description en una frase de la funcionalidad solicitada.]

---

## Description

[Description detallada de la solicitud de funcionalidad. Incluya:]
- Quelle fonctionnalité est souhaitée ?
- Quel problème cela résout-il ?
- Quel est le cas d'usage ?
- Qui bénéficierait de cette fonctionnalité ?

---

## Exigences

### Exigences funcionales
- [ ] Requisito 1
- [ ] Requisito 2
- [ ] Requisito 3

### Exigences no funcionales
- [ ] Consideraciones de rendimiento
- [ ] Consideraciones de seguridad
- [ ] Consideraciones de usabilidad
- [ ] Consideraciones de compatibilidad

---

## Analyse du périmètre

**Domaine du problème:** [p. ex., autenticación de usuarios, procesamiento de datos, componentes de UI]  
**Zones concernées:**
- [ ] Backend/API
- [ ] Frontend/UI
- [ ] Base de datos/esquema
- [ ] Documentation
- [ ] Pruebas
- [ ] Otro: [especificar]

**Complexité estimée:**
- [ ] Simple (1-3 días)
- [ ] Media (1 semana)
- [ ] Compleja (2+ semanas)
- [ ] Muy compleja (1+ mes)

---

## Cas d'usage

**Cas d'usage principal:**
[Describa el caso de uso principal de esta funcionalidad]

**Cas d'usage adicionales:**
- Caso de uso 1
- Caso de uso 2

---

## Critères d'acceptation

- [ ] Critère 1 : [Criterio específico y verificable]
- [ ] Critère 2 : [Criterio específico y verificable]
- [ ] Critère 3 : [Criterio específico y verificable]

---

## Dépendances

**Bloquea:**
- [Ce que cette FR bloque]

**Bloqueada por:**
- [Ce que cette FR bloque]

**Travail connexe:**
- [FR, Stories, Tasks o Epics relacionados]

---

## Décision d'intake

**État d'intake:** [EN ATTENTE/INTAKE/ACCEPTÉE/REJETÉE/DIFFÉRÉE]  
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

---

**Utilisation du modèle :**
**Localisation (fr) :** Utilisez un français technique neutre dans la prose instructive.

- Copiez ce modèle lors de la création d'un una nouvelle demande de fonctionnalité
- Remplissez toutes les sections pertinentes
- Utilisez la section «Décision d'intake» pour suivre la conversion FR/BR → Task → Story → Epic
- Liez la tâche/Story/Epic creada pour la traçabilité

---

_Ce modèle fait partie du Kanban Framework. Consultezz `packages/frameworks/kanban/` pour la documentation complète du framework._
