---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:01:57Z
expires_at: null
housekeeping_policy: keep
---

# Epic X, Story Y: [Titre]

**État:** [TODO/IN PROGRESS/COMPLETE/DIFFÉRÉ]
**Priorité:** [HAUTE/MOYENNE/BASSE]
**Dernière mise à jour:** [YYYY-MM-DD] (vX.Y.Z.T+B – [résumé])
**Effort estimé:** [X heures]
**Effort réel:** [X heures]
**Démarrée:** [YYYY-MM-DD]
**Terminée:** [YYYY-MM-DD]
**Version:** vX.Y.Z.T+B
**Code:** EXXSYY

---

## Liste de contrôle des tâches

- [ ] **EXX:SYY:T01 – [Titre de la task]** ✅ COMPLETE (vX.Y.Z.T+B)
- [ ] **EXX:SYY:T02 – [Titre de la task]**
- [ ] **EXX:SYY:T03 – [Titre de la task]**

> **Format :** `Exx:Sxx:Txx` (Epic, Story, Task con relleno cero de 2 dígitos, p. ex., `E01:S01:T01`, `E02:S04:T05`)  
> **Format du marqueur forensique:** `✅ COMPLETE (vRC.E.S.T+B)` (p. ex., `✅ COMPLETE (v0.4.1.3+1)`)  
> **Requisito del Release Workflow:** Cuando el Release Workflow (RW) Étape 4 actualice la documentación del Epic, DEBE actualizar **TODAS las secciones**:
> - Campo `Dernière mise à jour` del encabezado del Epic
> - Checklist de Stories del Epic (estado y marcadores de versión)
> - Secciones detalladas de stories del Epic (État, Dernière mise à jour, casillas de tasks)
> - Cualquier otra referencia a esta story/task
> 
> **Contrôle de cohérence:** Tras cada RW, verifique que el archivo Story, el encabezado del Epic, la Checklist de Stories del Epic y las secciones detalladas del Epic coinciden.

---

## Vue d'ensemble

[Une phrase. Ce que cette story accomplit.]

---

## Objectifs

- [ ] Objectif un
- [ ] Objectif deux
- [ ] Objectif trois

---

## Tasks

> **CRITIQUE: Principe de délégation par niveaux**
> 
> **Los documentos Story DEBEN delegar el detalle de Task a documentos Task.** Esta plantilla Story NO debe duplicar detalles de implementación a nivel Task (pasos de Approche, criterios de aceptación detallados, etc.). En su lugar, los documentos Story deben:
> - Referenciar tasks mediante la Liste de contrôle des tâches (arriba)
> - Proporcionar resúmenes breves de tasks o enlaces a documentos Task
> - Delegar toda la información detallada de Task a documentos Task
> 
> **Qué pertenece a Story:**
> - ✅ Liste de contrôle des tâches (solo referencias, con marcadores de estado/versión)
> - ✅ Resúmenes breves de tasks (1 frase por task)
> - ✅ Enlaces a documentos Task (para formato de archivo separado)
> - ✅ Critères d'acceptation a nivel story (no a nivel task)
> - ✅ Objectifs y descripción general a nivel story
> 
> **Qué NO pertenece a Story:**
> - ❌ Descripciones detalladas de tasks
> - ❌ Detalles de implementación de tasks (pasos de Approche)
> - ❌ Critères d'acceptation a nivel task (pertenecen a documentos Task)
> - ❌ Detalles de entrada/entregable de tasks (salvo résumé breve)

**CRITIQUE: Exigences del documento Task**

Toda Task DEBE tener un documento Task discreto. Las tasks pueden documentarse en uno de dos formatos:

### Formato 1: Archivo Task separado (recomendado)

**Emplacement :** `kanban/epics/epic-XX/story-YY/TYY-description.md` o `kanban/epics/epic-XX/story-YY/TYY-description.md`

**Exemple :** `kanban/epics/epic-04/story-11/T01-update-kanban-policy.md` (epic/story/task de 2 dígitos cuando ≤ 99; 3 dígitos cuando > 99)

**Quand l'utiliser :**
- Tasks con complejidad significativa o múltiples fases
- Tasks que pueden tener archivos asociados (diagramas, notas, etc.)
- Tasks que se benefician de documentación independiente
- Proyectos que requieren máxima trazabilidad

**Referencia en la Liste de contrôle des tâches:**
- [ ] **EXX:SYY:T01 – [Titre de la task]** ✅ COMPLETE (vX.Y.Z.T+B)
  - Doc tâche: [`Task-001-task-title.md`](Task-001-task-title.md)

### Formato 2: Sección delimitada dentro de Story (alternativa)

**Emplacement :** Dentro de este documento Story, usando el ID de Task como encabezado claro

**Format :** `### E{epic}:S{story}:T{task} – Nombre de la task` seguido del contenido de la task

**Quand l'utiliser :**
- Tasks simples y directas
- Tasks con necesidades mínimas de documentación
- Proyectos con requisitos estrictos de documentación
- Tasks estrechamente acopladas a la Story

**Structure d'exemple :**
```markdown
### EXX:SYY:T01 – [Titre de la task]

> **Format :** Use siempre el formato completo `Exx:Sxx:Txx` (p. ex., `E1:S01:T01`, no solo `T01`)

**Entrées:** [Qué requiere esta task]
**Livrable:** [Qué produce esta task]
**Dépendances:** [Epic, Story, Task o externo]
**Bloqueo:** [Ninguno, o dependencia específica]
**Candidate au développement parallèle:** [Sûr / Bloquée] car [raison]

**Approche:**
1. Étape un
2. Étape deux
3. Étape trois
```

---

### Exigences de documentación de Task

Independientemente del formato, toda Task DEBE incluir:

- **ID de Task:** `E{epic}:S{story}:T{task}` (p. ex., `E04:S11:T01`)
- **Périmètre:** Description clara de lo que logra la task
- **Critères d'acceptation:** Criterios medibles para la finalización de la task
- **État:** État actual (TODO, IN PROGRESS, COMPLETE)
- **Ancre de version:** Marcador de versión cuando la task esté completa (p. ex., `✅ COMPLETE (v0.4.11.1+1)`)
- **Entrées:** Qué se requiere para iniciar esta task
- **Livrable:** Qué produce esta task
- **Dépendances:** Otras tasks o elementos de trabajo de los que depende esta task
- **Bloqueo:** Tasks o elementos de trabajo que bloquean esta task
- **Liens BR/FR connexes:** Enlaces a informes de error o solicitudes de funcionalidad relacionados

**Plantilla:** Use `packages/frameworks/kanban/templates/TASK_TEMPLATE.md` para archivos Task separados.

**Exemples:**
- **Formato de archivo separado:** Consultez `packages/frameworks/kanban/examples/Task-001-Example-Separate-File.md`
- **Formato de sección delimitada:** Consultez `packages/frameworks/kanban/examples/Story-Example-With-Delimited-Tasks.md`

---

### Tasks de ejemplo

#### Exemple : Formato de archivo Task separado

**Entrées en la Liste de contrôle des tâches:**
- [ ] **EXX:SYY:T01 – [Titre de la task]** ✅ COMPLETE (vX.Y.Z.T+B)
  - Doc tâche: [`Task-001-task-title.md`](Task-001-task-title.md)

#### Exemple : Formato de sección delimitada

> **Nota:** Incluso cuando se usen secciones delimitadas dentro del documento Story, el contenido de la Task debe ser autocontenido y completo. El documento Story actúa como contenedor, pero la sección Task debe contener todo el detalle a nivel Task (Entrées, Livrable, Approche, Critères d'acceptation, etc.).

### EXX:SYY:T01 – [Titre de la task]

> **Format :** Use siempre el formato completo `Exx:Sxx:Txx` (p. ex., `E01:S01:T01`, no solo `T01`)

**Résumé breve:** [Una frase que describe lo que logra esta task]

**Documento Task:** Esta task se documenta como sección delimitada dentro de este documento Story. Para información detallada de la Task (Entrées, Livrable, Approche, Critères d'acceptation, Dépendances, etc.), consultez la sección Task siguiente.

**Entrées:** [Qué requiere esta task]  
**Livrable:** [Qué produce esta task]  
**Dépendances:** [Epic, Story, Task o externo]  
**Bloqueo:** [Ninguno, o dependencia específica]  
**Candidate au développement parallèle:** [Sûr / Bloquée] car [raison]

**Approche:**
1. Étape un
2. Étape deux
3. Étape trois

**Critères d'acceptation:**
- [ ] Critère un (mesurable, vérifiable)
- [ ] Critère deux (mesurable, vérifiable)

> **Nota:** Cuando se usen secciones delimitadas, todo el detalle a nivel Task reside en la sección Task. El documento Story proporciona el contenedor, pero no duplica la información de Task en otro lugar.

---

## Critères d'acceptation

- [ ] Criterio uno
- [ ] Criterio dos
- [ ] Criterio tres

---

## Dépendances

**Bloquea:**
- [Lo que bloquea esta story]

**Bloqueada por:**
- [Lo que bloquea esta story]

**Coordonne avec:**
- [Points de coordination Epic/Story]

---

## Résumé de finalisation

[Qué se entregó. Enseignements tirés. Métricas alcanzadas.]

---

## Références

- [Documents, PR, commits ou diagrammes connexes]

---

## Prochaines actions

- [ ] Acción uno
- [ ] Acción dos

---

**Localisation (fr) :** Utilisez un français technique neutre dans la prose instructive.
