---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:01:57Z
expires_at: null
housekeeping_policy: keep
---

# Epic X, Story Y: [Título]

**Estado:** [TODO/IN PROGRESS/COMPLETE/DEFERRED]
**Prioridad:** [ALTA/MEDIA/BAJA]
**Última actualización:** [YYYY-MM-DD] (vX.Y.Z.T+B – [resumen])
**Esfuerzo estimado:** [X horas]
**Esfuerzo real:** [X horas]
**Iniciada:** [YYYY-MM-DD]
**Completada:** [YYYY-MM-DD]
**Versión:** vX.Y.Z.T+B
**Código:** EXXSYY

---

## Checklist de tasks

- [ ] **EXX:SYY:T01 – [Título de la task]** ✅ COMPLETE (vX.Y.Z.T+B)
- [ ] **EXX:SYY:T02 – [Título de la task]**
- [ ] **EXX:SYY:T03 – [Título de la task]**

> **Formato:** `Exx:Sxx:Txx` (Epic, Story, Task con relleno cero de 2 dígitos, p. ej., `E01:S01:T01`, `E02:S04:T05`)  
> **Formato del marcador forense:** `✅ COMPLETE (vRC.E.S.T+B)` (p. ej., `✅ COMPLETE (v0.4.1.3+1)`)  
> **Requisito del Release Workflow:** Cuando el Release Workflow (RW) Paso 4 actualice la documentación del Epic, DEBE actualizar **TODAS las secciones**:
> - Campo `Última actualización` del encabezado del Epic
> - Checklist de Stories del Epic (estado y marcadores de versión)
> - Secciones detalladas de stories del Epic (Estado, Última actualización, casillas de tasks)
> - Cualquier otra referencia a esta story/task
> 
> **Comprobación de consistencia:** Tras cada RW, verifique que el archivo Story, el encabezado del Epic, la Checklist de Stories del Epic y las secciones detalladas del Epic coinciden.

---

## Descripción general

[Una frase. Qué logra esta story.]

---

## Objetivos

- [ ] Objetivo uno
- [ ] Objetivo dos
- [ ] Objetivo tres

---

## Tasks

> **CRÍTICO: Principio de delegación por niveles**
> 
> **Los documentos Story DEBEN delegar el detalle de Task a documentos Task.** Esta plantilla Story NO debe duplicar detalles de implementación a nivel Task (pasos de Enfoque, criterios de aceptación detallados, etc.). En su lugar, los documentos Story deben:
> - Referenciar tasks mediante la Checklist de tasks (arriba)
> - Proporcionar resúmenes breves de tasks o enlaces a documentos Task
> - Delegar toda la información detallada de Task a documentos Task
> 
> **Qué pertenece a Story:**
> - ✅ Checklist de tasks (solo referencias, con marcadores de estado/versión)
> - ✅ Resúmenes breves de tasks (1 frase por task)
> - ✅ Enlaces a documentos Task (para formato de archivo separado)
> - ✅ Criterios de aceptación a nivel story (no a nivel task)
> - ✅ Objetivos y descripción general a nivel story
> 
> **Qué NO pertenece a Story:**
> - ❌ Descripciones detalladas de tasks
> - ❌ Detalles de implementación de tasks (pasos de Enfoque)
> - ❌ Criterios de aceptación a nivel task (pertenecen a documentos Task)
> - ❌ Detalles de entrada/entregable de tasks (salvo resumen breve)

**CRÍTICO: Requisitos del documento Task**

Toda Task DEBE tener un documento Task discreto. Las tasks pueden documentarse en uno de dos formatos:

### Formato 1: Archivo Task separado (recomendado)

**Ubicación:** `kanban/epics/epic-XX/story-YY/TYY-description.md` o `kanban/epics/epic-XX/story-YY/TYY-description.md`

**Ejemplo:** `kanban/epics/epic-04/story-11/T01-update-kanban-policy.md` (epic/story/task de 2 dígitos cuando ≤ 99; 3 dígitos cuando > 99)

**Cuándo usar:**
- Tasks con complejidad significativa o múltiples fases
- Tasks que pueden tener archivos asociados (diagramas, notas, etc.)
- Tasks que se benefician de documentación independiente
- Proyectos que requieren máxima trazabilidad

**Referencia en la Checklist de tasks:**
- [ ] **EXX:SYY:T01 – [Título de la task]** ✅ COMPLETE (vX.Y.Z.T+B)
  - Doc Task: [`Task-001-task-title.md`](Task-001-task-title.md)

### Formato 2: Sección delimitada dentro de Story (alternativa)

**Ubicación:** Dentro de este documento Story, usando el ID de Task como encabezado claro

**Formato:** `### E{epic}:S{story}:T{task} – Nombre de la task` seguido del contenido de la task

**Cuándo usar:**
- Tasks simples y directas
- Tasks con necesidades mínimas de documentación
- Proyectos con requisitos estrictos de documentación
- Tasks estrechamente acopladas a la Story

**Estructura de ejemplo:**
```markdown
### EXX:SYY:T01 – [Título de la task]

> **Formato:** Use siempre el formato completo `Exx:Sxx:Txx` (p. ej., `E1:S01:T01`, no solo `T01`)

**Entrada:** [Qué requiere esta task]
**Entregable:** [Qué produce esta task]
**Dependencias:** [Epic, Story, Task o externo]
**Bloqueo:** [Ninguno, o dependencia específica]
**Candidata a desarrollo en paralelo:** [Seguro / Bloqueada] porque [razón]

**Enfoque:**
1. Paso uno
2. Paso dos
3. Paso tres
```

---

### Requisitos de documentación de Task

Independientemente del formato, toda Task DEBE incluir:

- **ID de Task:** `E{epic}:S{story}:T{task}` (p. ej., `E04:S11:T01`)
- **Alcance:** Descripción clara de lo que logra la task
- **Criterios de aceptación:** Criterios medibles para la finalización de la task
- **Estado:** Estado actual (TODO, IN PROGRESS, COMPLETE)
- **Ancla de versión:** Marcador de versión cuando la task esté completa (p. ej., `✅ COMPLETE (v0.4.11.1+1)`)
- **Entrada:** Qué se requiere para iniciar esta task
- **Entregable:** Qué produce esta task
- **Dependencias:** Otras tasks o elementos de trabajo de los que depende esta task
- **Bloqueo:** Tasks o elementos de trabajo que bloquean esta task
- **Enlaces BR/FR relacionados:** Enlaces a informes de error o solicitudes de funcionalidad relacionados

**Plantilla:** Use `packages/frameworks/kanban/templates/TASK_TEMPLATE.md` para archivos Task separados.

**Ejemplos:**
- **Formato de archivo separado:** Consulte `packages/frameworks/kanban/examples/Task-001-Example-Separate-File.md`
- **Formato de sección delimitada:** Consulte `packages/frameworks/kanban/examples/Story-Example-With-Delimited-Tasks.md`

---

### Tasks de ejemplo

#### Ejemplo: Formato de archivo Task separado

**Entrada en la Checklist de tasks:**
- [ ] **EXX:SYY:T01 – [Título de la task]** ✅ COMPLETE (vX.Y.Z.T+B)
  - Doc Task: [`Task-001-task-title.md`](Task-001-task-title.md)

#### Ejemplo: Formato de sección delimitada

> **Nota:** Incluso cuando se usen secciones delimitadas dentro del documento Story, el contenido de la Task debe ser autocontenido y completo. El documento Story actúa como contenedor, pero la sección Task debe contener todo el detalle a nivel Task (Entrada, Entregable, Enfoque, Criterios de aceptación, etc.).

### EXX:SYY:T01 – [Título de la task]

> **Formato:** Use siempre el formato completo `Exx:Sxx:Txx` (p. ej., `E01:S01:T01`, no solo `T01`)

**Resumen breve:** [Una frase que describe lo que logra esta task]

**Documento Task:** Esta task se documenta como sección delimitada dentro de este documento Story. Para información detallada de la Task (Entrada, Entregable, Enfoque, Criterios de aceptación, Dependencias, etc.), consulte la sección Task siguiente.

**Entrada:** [Qué requiere esta task]  
**Entregable:** [Qué produce esta task]  
**Dependencias:** [Epic, Story, Task o externo]  
**Bloqueo:** [Ninguno, o dependencia específica]  
**Candidata a desarrollo en paralelo:** [Seguro / Bloqueada] porque [razón]

**Enfoque:**
1. Paso uno
2. Paso dos
3. Paso tres

**Criterios de aceptación:**
- [ ] Criterio uno (medible, verificable)
- [ ] Criterio dos (medible, verificable)

> **Nota:** Cuando se usen secciones delimitadas, todo el detalle a nivel Task reside en la sección Task. El documento Story proporciona el contenedor, pero no duplica la información de Task en otro lugar.

---

## Criterios de aceptación

- [ ] Criterio uno
- [ ] Criterio dos
- [ ] Criterio tres

---

## Dependencias

**Bloquea:**
- [Lo que bloquea esta story]

**Bloqueada por:**
- [Lo que bloquea esta story]

**Coordina con:**
- [Puntos de coordinación Epic/Story]

---

## Resumen de finalización

[Qué se entregó. Lecciones aprendidas. Métricas alcanzadas.]

---

## Referencias

- [Documentos, PR, commits o diagramas relacionados]

---

## Próximas acciones

- [ ] Acción uno
- [ ] Acción dos

---

**Localización (es):** Use español técnico neutro en la prosa instructiva.
