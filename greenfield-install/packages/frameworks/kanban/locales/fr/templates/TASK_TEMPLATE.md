---
lifecycle: evergreen
ttl_days: null
created_at: YYYY-MM-DDTHH:MM:SSZ
expires_at: null
housekeeping_policy: keep
---

# Epic X, Story Y, Task Z: [Titre de la task]

> **Exemple :** Consultez `packages/frameworks/kanban/examples/Task-001-Example-Separate-File.md` para un ejemplo completo de esta plantilla en uso.

**État:** [TODO/IN PROGRESS/COMPLETE]  
**Priorité:** [HAUTE/MOYENNE/BASSE]  
**Dernière mise à jour:** [YYYY-MM-DD] (vX.Y.Z.T+B – [résumé])  
**Démarrée:** [YYYY-MM-DD]  
**Terminée:** [YYYY-MM-DD]  
**Version:** vX.Y.Z.T+B  
**Code:** EXXSYYTZZ

---

## ID de la tâche

**Format :** `E{epic}:S{story}:T{task}` (p. ex., `E04:S11:T01`)

**ID complet de la tâche:** `EXX:SYY:TZZ`

---

## Périmètre

[Description clara de lo que logra esta task. Quel problème résout-elle ? Quelle valeur apporte-t-elle ?]

---

## Entrées

[Que faut-il pour démarrer cette tâche ? Dépendances, prerrequisitos, entradas de otras tasks o fuentes externas.]

**Artefact de planification IPW (cuando se use):** Si ejecutó **IPW** / **IPW E:S:T** para esta task, enlace el documento de plan aquí (y en **Références**) usando la **misma ruta relativa** en ambos lugares. El documento de plan doit renvoyer vers a esta task en su encabezado **Host Task** (**FR-042**).

---

## Livrable

[Que produit cette tâche ? Artefacts, documents, code ou autres résultats spécifiques.]

---

## Critères d'acceptation

- [ ] Critère un (mesurable, vérifiable)
- [ ] Critère deux (mesurable, vérifiable)
- [ ] Critère trois (mesurable, vérifiable)

---

## Approche

1. Étape un
2. Étape deux
3. Étape trois

---

## Dépendances

**Depende de:**
- [Epic, Story, Task ou dépendance externe]
- [Autre dépendance]

**Bloquea:**
- [Ce que cette tâche bloque]

**Bloqueada por:**
- [Ce que cette tâche bloque]

**Candidate au développement parallèle:** [Sûr / Bloquée] car [raison]

---

## Câblage croisé

> **Cableado bidireccional obligatorio:** Cada enlace cruzado debe ser bidireccional. Si la Task A enlaza con la Task B, la Task B doit renvoyer vers con la Task A. Consultez [`BIDIRECTIONAL_WIRING_PRINCIPLE.md`](../../../docs/governance/principles/bidirectional-wiring-principle.md) pour les directives completa.
>
> **Contexto obligatorio:** Cada enlace cruzado debe incluir contexto que explique *por qué* las tasks están relacionadas. Se prohíben enlaces genéricos (p. ex., «task relacionada»).
>
> **Consultez:** [`task-template-cross-wiring-sop.md`](../../../docs/architecture/standards-and-adrs/task-template-cross-wiring-sop.md) pour la procédure opérationnelle standard.

**Tipos de relación:**

- **Complète** — Tasks que trabajan juntas para lograr un objetivo
- **Coordonne avec** — Tasks que deben sincronizarse
- **Informe** — Tasks que aportan contexto o información
- **Suit** — Tasks que lógicamente vienen después (sin bloqueo)
- **Précède** — Tasks que lógicamente vienen antes (sin bloqueo)
- **Liée à** — Relación general (use cuando ningún tipo específico encaje)

**Tâches connexes:**

- **[EXX:SYY:TZZ: Titre de la task](path/to/task.md)** - **Type de relation:** [Complète/Coordonne avec/Informe/Suit/Précède/Liée à] - **Contexto:** [Pourquoi les tâches sont liées]

**Documents BR/FR connexes:**

- **[BR-XXX: Titre del informe de error](path/to/BR-XXX.md)** - **Type de relation:** [Type de relation] - **Contexto:** [Pourquoi c'est lié]
- **[FR-XXX: Titre de la solicitud de funcionalidad](path/to/FR-XXX.md)** - **Type de relation:** [Type de relation] - **Contexto:** [Pourquoi c'est lié]

**Notes de câblage croisé:**

[Notes adicionales sobre cableado cruzado, exigences de coordination ou contexte de la relation]

### Dépendances frente a cableado cruzado

| Aspecto | Dépendances | Câblage croisé |
|--------|-------------|--------------|
| **Nature** | Bloqueo / secuencial | Contextual / informativo |
| **Direction** | `Depende de` / `Bloquea` | Bidirectionnel (siempre en ambos sentidos) |
| **Usage** | La task no puede iniciarse hasta resolver la dependencia | Las tasks pueden avanzar de forma independiente pero comparten contexto |
| **Exemples** | «Bloqueada por: E02:S01:T01» | «Informe: E02:S01:T03 — aporta análisis para el diseño» |

### Exemples de câblage croisé

**Ejemplo 1: Complète**
```markdown
- **[E9:S01:T01: Inventario del estado actual](../../epic-09/story-001/T01-current-state-inventory.md)** - **Type de relation:** Complète - **Contexto:** Ambas tasks analizan brechas de preparación RC desde perspectivas distintas; el inventario aporta entrada para el análisis de brechas
```

**Ejemplo 2: Coordonne avec**
```markdown
- **[E9:S01:T07: Planificación de hoja de ruta](../../epic-09/story-001/T07-roadmap-planning.md)** - **Type de relation:** Coordonne avec - **Contexto:** Ambas tasks modifican el mismo documento de política de versionado; los cambios deben sincronizarse
```

**Ejemplo 3: Informe**
```markdown
- **[E2:S01:T02: Definición de criterios RC=1](../../epic-02/story-001/T02-rc1-criteria-definition.md)** - **Type de relation:** Informe - **Contexto:** La definición de criterios aporta contexto y restricciones para las decisiones de diseño de esta task
```

---

## Travail connexe

> **Rappel de câblage bidirectionnel:** Cada enlace en esta sección debe ser bidireccional. Si enlaza con un BR/FR, task o story, ese elemento doit renvoyer vers con esta task. Consultez [`BIDIRECTIONAL_WIRING_PRINCIPLE.md`](../../../docs/governance/principles/bidirectional-wiring-principle.md) pour les directives. Para relaciones task-a-task con tipos de relación, use la sección **Câblage croisé** anterior.

**Liens BR/FR connexes:**
- [BR-XXX: Titre del informe de error](path/to/BR-XXX.md) — *Bidirectionnel: el BR doit renvoyer vers a esta task en su sección Liens Kanban*
- [FR-XXX: Titre de la solicitud de funcionalidad](path/to/FR-XXX.md) — *Bidirectionnel: la FR doit renvoyer vers a esta task en su sección Liens Kanban*

**Tâches connexes:**
- [EXX:SYY:TZZ: Titre de la task relacionada](path/to/task.md) — *Bidirectionnel: la task doit renvoyer vers a esta task*

**Stories connexes:**
- [EXX:SYY: Titre de la story relacionada](path/to/story.md) — *Bidirectionnel: la story debe referenciar esta task*

---

## Ancre de version

**Format du marqueur forensique:** `✅ COMPLETE (vRC.E.S.T+B)` (p. ex., `✅ COMPLETE (v0.4.11.1+1)`)

**Cuando la task esté completa:**
- Añada el marcador forense al documento Task
- Añada el marcador forense a la checklist de la Story
- Actualice el archivo de versión con la finalización de la task
- Actualice el changelog con la finalización de la task

---

## Notes

[Notes adicionales, contexto o consideraciones para esta task.]

---

## Résumé de finalisation

[À compléter lorsque la tâche est terminée. ¿Qué se entregó? ¿Enseignements tirés? ¿Métricas alcanzadas?]

---

## Références

- [Documents, PR, commits ou diagrammes connexes]
- [Ressources externes, documentation ou normes]

---

## Prochaines actions

- [ ] Acción uno (si la task está bloqueada o requiere seguimiento)
- [ ] Acción dos

---

**Localisation (fr) :** Utilisez un français technique neutre dans la prose instructive.
