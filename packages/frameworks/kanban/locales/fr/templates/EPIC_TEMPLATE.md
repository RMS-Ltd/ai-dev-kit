---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:01:57Z
expires_at: null
housekeeping_policy: keep
---

# Epic X: [Titre]

**État:** [TODO/IN PROGRESS/COMPLETE]
**Priorité:** [HAUTE/MOYENNE/BASSE]
**Effort estimé:** [X-Y heures]
**Créé:** [YYYY-MM-DD]
**Dernière mise à jour:** [YYYY-MM-DD] (vX.Y.Z.T+B – [résumé])
**Branche:** `epic/X-slug`
**Schéma de version:** `0.X.S.T+B`
**URL de production:** [Facultatif]

---

## Liste de contrôle des stories

- [ ] **EXX:S01 – [Titre de la story]** - [État]
- [ ] **EXX:S02 – [Titre de la story]** - [État]
- [ ] **EXX:S03 – [Titre de la story]** - [État]

> **CRITIQUE:** Esta Liste de contrôle des stories es la **ÚNICA FUENTE DE VERDAD** para el estado de stories y marcadores de versión.  
> **Format du marqueur forensique:** `✅ COMPLETE (vRC.E.S.T+B)` (p. ex., `✅ COMPLETE (v0.4.1.3+1)`)  
> **Requisito del Release Workflow:** Cuando el Release Workflow (RW) Étape 4 actualice este documento Epic, DEBE actualizar **TODAS las secciones**:
> - Campo `Dernière mise à jour` del encabezado del Epic
> - Liste de contrôle des stories (estado y marcadores de versión)
> - Secciones detalladas de stories (État, Dernière mise à jour, casillas de tasks)
> - Cualquier otra referencia a la story/task que se libera
> 
> **Contrôle de cohérence:** Tras cada RW, verifique que el encabezado del Epic, la Liste de contrôle des stories y las secciones detalladas coinciden.

---

## Vue d'ensemble

[Un paragraphe. Le but, le périmètre et la motivation de l'epic.]

---

## Objectifs

1. Intitulé d'objectif avec brève description
2. Intitulé d'objectif avec brève description
3. Intitulé d'objectif avec brève description

---

## Stories

> **CRITIQUE: Principe de délégation par niveaux**
> 
> **Los documentos Epic DEBEN delegar el detalle de Story a documentos Story.** Esta plantilla Epic NO debe duplicar información a nivel Story (État, Priorité, Objectifs, Tasks, Critères d'acceptation, etc.). En su lugar, los documentos Epic deben:
> - Referenciar stories mediante la Liste de contrôle des stories (arriba)
> - Proporcionar resúmenes breves de stories o enlaces a documentos Story
> - Delegar toda la información detallada de Story a documentos Story
> 
> **Qué pertenece a Epic:**
> - ✅ Liste de contrôle des stories (solo referencias, con marcadores de estado/versión)
> - ✅ Resúmenes breves de stories (1-2 frases por story)
> - ✅ Enlaces a documentos Story
> - ✅ Dépendances y coordinación a nivel epic
> 
> **Qué NO pertenece a Epic:**
> - ❌ Descripciones detalladas de stories
> - ❌ Objectifs, tasks o criterios de aceptación a nivel story
> - ❌ Detalles a nivel task
> - ❌ Detalles de implementación de stories

### Story Y: [Titre de la story]

**Résumé breve:** [Una frase que describe lo que logra esta story]

**Document Story :** [`Story-YYY-story-title.md`](Story-YYY-story-title.md) o [`epics/Epic-X/Story-YYY-story-title.md`](epics/Epic-X/Story-YYY-story-title.md)

> **Nota:** Para información detallada de la Story (État, Priorité, Objectifs, Tasks, Critères d'acceptation, Dépendances, etc.), consultez el documento Story enlazado arriba. Este documento Epic solo proporciona una referencia de alto nivel.

---

## Dépendances

**Bloquea:**
- [Ce que cet epic bloque]

**Bloqué par:**
- [Ce que cet epic bloque]

**Coordonne avec:**
- [Points de coordination Epic/Story]

---

## Risques et atténuations

- Description del riesgo — mitigación
- Description del riesgo — mitigación

---

## Références

- [Documentos, especificaciones o diagramas relacionados]

---

## Cadence de maintenance

_Uniquement pour les epics de maintenance._

- **Hebdomadaire:** [éléments planifiés]
- **Mensuel:** [éléments planifiés]
- **Trimestriel:** [éléments planifiés]
- **Selon les besoins:** [éléments planifiés]

---

**Localisation (fr) :** Utilisez un français technique neutre dans la prose instructive.
