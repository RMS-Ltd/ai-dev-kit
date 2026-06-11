---
lifecycle: evergreen
ttl_days: null
created_at: [YYYY-MM-DDTHH:MM:SSZ]
expires_at: null
housekeeping_policy: keep
---

# Investigación de experiencia de usuario: [Titre]

**Type :** Investigación de experiencia de usuario (UXR)  
**Soumise:** [YYYY-MM-DD]  
**Soumise por:** [Nom/Utilisateur]  
**Priorité:** [HAUTE/MOYENNE/BASSE]  
**État:** [EN ATTENTE/INTAKE/ACCEPTÉE/REJETÉE/DIFFÉRÉE]

---

## Résumé

[Résumé en una frase de los hallazgos de la investigación UX.]

---

## Objetivo de la investigación

[¿Cuál era el objetivo de esta investigación? ¿Qué pregunta se intentaba responder?]

---

## Metodología

**Método de investigación:** [p. ex., entrevistas con usuarios, pruebas de usabilidad, encuestas, estudios de campo]  
**Participantes:** [Número y descripción de los participantes]  
**Duración:** [Duración del estudio]  
**Herramientas/plataformas:** [Herramientas o plataformas usadas en la investigación]

**Detalles de la investigación:**
- [Detalles adicionales de la metodología]

---

## Hallazgos clave

[Principales hallazgos de la investigación. Incluya:]
- Hallazgo 1
- Hallazgo 2
- Hallazgo 3

---

## Puntos de dolor del usuario

[¿Qué problemas o frustraciones experimentaron los usuarios?]

- Punto de dolor 1
- Punto de dolor 2
- Punto de dolor 3

---

## Recommandations

[¿Qué acciones deben tomarse según estos hallazgos?]

- [ ] Recomendación 1: [Description]
- [ ] Recomendación 2: [Description]
- [ ] Recomendación 3: [Description]

**Ordre de priorité:**
1. [Recommandation prioritaire]
2. [Recommandation secondaire]
3. [Recommandation tertiaire]

---

## Zones concernées

**Componentes afectados:**
- [ ] Componentes de UI
- [ ] Flujos de usuario
- [ ] Fonctionnalitées
- [ ] Documentation
- [ ] Otro: [especificar]

**Áreas específicas:**
- [Liste componentes de UI, funcionalidades o flujos afectados]

---

## Preuves à l'appui

**Artefactos de investigación:**
- [Enlace a grabaciones, transcripciones, notas u otros materiales de apoyo]
- [Enlace a datos o análisis de la investigación]
- [Enlace a visualizaciones o diagramas]

**Citas o ejemplos:**
- [Citas de usuarios o ejemplos relevantes]

---

## Prochaines étapes

[¿Qué debe ocurrir a continuación?]

- [ ] Próximo paso 1
- [ ] Próximo paso 2
- [ ] Investigación de seguimiento necesaria: [Description]

---

## Dépendances

**Bloquea:**
- [Lo que bloquea esta UXR]

**Bloqueada por:**
- [Lo que bloquea esta UXR]

**Travail connexe:**
- [FR, BR, Stories o Epics relacionados]

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

- [Documentation, artículos de investigación o recursos externos relacionados]
- [Investigaciones UX o estudios de usabilidad relacionados]
- [Incidencia de GitHub: #[número]](https://github.com/[org]/[repo]/issues/[number])

---

**Utilisation du modèle :**
**Localisation (fr) :** Utilisez un français technique neutre dans la prose instructive.

- Copiez ce modèle lors de la création d'un un nuevo informe de investigación de experiencia de usuario
- Remplissez toutes les sections pertinentes
- Utilisez la section «Décision d'intake» pour suivre la conversión UXR → Task → Story → Epic
- Liez la tâche/Story/Epic creada pour la traçabilité

---

_Ce modèle fait partie du Kanban Framework. Consultezz `packages/frameworks/kanban/` pour la documentation complète du framework._
