---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:01:57Z
expires_at: null
housekeeping_policy: keep
---

# Epic X: [Título]

**Estado:** [TODO/IN PROGRESS/COMPLETE]
**Prioridad:** [ALTA/MEDIA/BAJA]
**Esfuerzo estimado:** [X-Y horas]
**Creado:** [YYYY-MM-DD]
**Última actualización:** [YYYY-MM-DD] (vX.Y.Z.T+B – [resumen])
**Rama:** `epic/X-slug`
**Esquema de versión:** `0.X.S.T+B`
**URL de producción:** [Opcional]

---

## Checklist de stories

- [ ] **EXX:S01 – [Título de la story]** - [Estado]
- [ ] **EXX:S02 – [Título de la story]** - [Estado]
- [ ] **EXX:S03 – [Título de la story]** - [Estado]

> **CRÍTICO:** Esta Checklist de stories es la **ÚNICA FUENTE DE VERDAD** para el estado de stories y marcadores de versión.  
> **Formato del marcador forense:** `✅ COMPLETE (vRC.E.S.T+B)` (p. ej., `✅ COMPLETE (v0.4.1.3+1)`)  
> **Requisito del Release Workflow:** Cuando el Release Workflow (RW) Paso 4 actualice este documento Epic, DEBE actualizar **TODAS las secciones**:
> - Campo `Última actualización` del encabezado del Epic
> - Checklist de stories (estado y marcadores de versión)
> - Secciones detalladas de stories (Estado, Última actualización, casillas de tasks)
> - Cualquier otra referencia a la story/task que se libera
> 
> **Comprobación de consistencia:** Tras cada RW, verifique que el encabezado del Epic, la Checklist de stories y las secciones detalladas coinciden.

---

## Descripción general

[Un párrafo. El propósito, alcance y motivación del epic.]

---

## Objetivos

1. Encabezado de objetivo con breve descripción
2. Encabezado de objetivo con breve descripción
3. Encabezado de objetivo con breve descripción

---

## Stories

> **CRÍTICO: Principio de delegación por niveles**
> 
> **Los documentos Epic DEBEN delegar el detalle de Story a documentos Story.** Esta plantilla Epic NO debe duplicar información a nivel Story (Estado, Prioridad, Objetivos, Tasks, Criterios de aceptación, etc.). En su lugar, los documentos Epic deben:
> - Referenciar stories mediante la Checklist de stories (arriba)
> - Proporcionar resúmenes breves de stories o enlaces a documentos Story
> - Delegar toda la información detallada de Story a documentos Story
> 
> **Qué pertenece a Epic:**
> - ✅ Checklist de stories (solo referencias, con marcadores de estado/versión)
> - ✅ Resúmenes breves de stories (1-2 frases por story)
> - ✅ Enlaces a documentos Story
> - ✅ Dependencias y coordinación a nivel epic
> 
> **Qué NO pertenece a Epic:**
> - ❌ Descripciones detalladas de stories
> - ❌ Objetivos, tasks o criterios de aceptación a nivel story
> - ❌ Detalles a nivel task
> - ❌ Detalles de implementación de stories

### Story Y: [Título de la story]

**Resumen breve:** [Una frase que describe lo que logra esta story]

**Documento Story:** [`Story-YYY-story-title.md`](Story-YYY-story-title.md) o [`epics/Epic-X/Story-YYY-story-title.md`](epics/Epic-X/Story-YYY-story-title.md)

> **Nota:** Para información detallada de la Story (Estado, Prioridad, Objetivos, Tasks, Criterios de aceptación, Dependencias, etc.), consulte el documento Story enlazado arriba. Este documento Epic solo proporciona una referencia de alto nivel.

---

## Dependencias

**Bloquea:**
- [Lo que bloquea este epic]

**Bloqueado por:**
- [Lo que bloquea este epic]

**Coordina con:**
- [Puntos de coordinación Epic/Story]

---

## Riesgos y mitigaciones

- Descripción del riesgo — mitigación
- Descripción del riesgo — mitigación

---

## Referencias

- [Documentos, especificaciones o diagramas relacionados]

---

## Cadencia de mantenimiento

_Solo para epics de mantenimiento._

- **Semanal:** [elementos programados]
- **Mensual:** [elementos programados]
- **Trimestral:** [elementos programados]
- **Según necesidad:** [elementos programados]

---

**Localización (es):** Use español técnico neutro en la prosa instructiva.
