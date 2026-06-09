---
lifecycle: evergreen
ttl_days: null
created_at: YYYY-MM-DDTHH:MM:SSZ
expires_at: null
housekeeping_policy: keep
---

# Epic X, Story Y, Task Z: [Título de la task]

> **Ejemplo:** Consulte `packages/frameworks/kanban/examples/Task-001-Example-Separate-File.md` para un ejemplo completo de esta plantilla en uso.

**Estado:** [TODO/IN PROGRESS/COMPLETE]  
**Prioridad:** [ALTA/MEDIA/BAJA]  
**Última actualización:** [YYYY-MM-DD] (vX.Y.Z.T+B – [resumen])  
**Iniciada:** [YYYY-MM-DD]  
**Completada:** [YYYY-MM-DD]  
**Versión:** vX.Y.Z.T+B  
**Código:** EXXSYYTZZ

---

## ID de la task

**Formato:** `E{epic}:S{story}:T{task}` (p. ej., `E04:S11:T01`)

**ID completo de la task:** `EXX:SYY:TZZ`

---

## Alcance

[Descripción clara de lo que logra esta task. ¿Qué problema resuelve? ¿Qué valor aporta?]

---

## Entrada

[¿Qué se requiere para iniciar esta task? Dependencias, prerrequisitos, entradas de otras tasks o fuentes externas.]

**Artefacto de planificación IPW (cuando se use):** Si ejecutó **IPW** / **IPW E:S:T** para esta task, enlace el documento de plan aquí (y en **Referencias**) usando la **misma ruta relativa** en ambos lugares. El documento de plan debe enlazar de vuelta a esta task en su encabezado **Host Task** (**FR-042**).

---

## Entregable

[¿Qué produce esta task? Artefactos, documentos, código u otros resultados específicos.]

---

## Criterios de aceptación

- [ ] Criterio uno (medible, verificable)
- [ ] Criterio dos (medible, verificable)
- [ ] Criterio tres (medible, verificable)

---

## Enfoque

1. Paso uno
2. Paso dos
3. Paso tres

---

## Dependencias

**Depende de:**
- [Epic, Story, Task o dependencia externa]
- [Otra dependencia]

**Bloquea:**
- [Lo que bloquea esta task]

**Bloqueada por:**
- [Lo que bloquea esta task]

**Candidata a desarrollo en paralelo:** [Seguro / Bloqueada] porque [razón]

---

## Cableado cruzado

> **Cableado bidireccional obligatorio:** Cada enlace cruzado debe ser bidireccional. Si la Task A enlaza con la Task B, la Task B debe enlazar de vuelta con la Task A. Consulte [`BIDIRECTIONAL_WIRING_PRINCIPLE.md`](../../../docs/governance/principles/bidirectional-wiring-principle.md) para orientación completa.
>
> **Contexto obligatorio:** Cada enlace cruzado debe incluir contexto que explique *por qué* las tasks están relacionadas. Se prohíben enlaces genéricos (p. ej., «task relacionada»).
>
> **Consulte:** [`task-template-cross-wiring-sop.md`](../../../docs/architecture/standards-and-adrs/task-template-cross-wiring-sop.md) para el procedimiento operativo estándar.

**Tipos de relación:**

- **Complementa** — Tasks que trabajan juntas para lograr un objetivo
- **Coordina con** — Tasks que deben sincronizarse
- **Informa** — Tasks que aportan contexto o información
- **Sigue** — Tasks que lógicamente vienen después (sin bloqueo)
- **Precede** — Tasks que lógicamente vienen antes (sin bloqueo)
- **Relacionada con** — Relación general (use cuando ningún tipo específico encaje)

**Tasks relacionadas:**

- **[EXX:SYY:TZZ: Título de la task](path/to/task.md)** - **Tipo de relación:** [Complementa/Coordina con/Informa/Sigue/Precede/Relacionada con] - **Contexto:** [Por qué están relacionadas las tasks]

**Documentos BR/FR relacionados:**

- **[BR-XXX: Título del informe de error](path/to/BR-XXX.md)** - **Tipo de relación:** [Tipo de relación] - **Contexto:** [Por qué está relacionado]
- **[FR-XXX: Título de la solicitud de funcionalidad](path/to/FR-XXX.md)** - **Tipo de relación:** [Tipo de relación] - **Contexto:** [Por qué está relacionado]

**Notas de cableado cruzado:**

[Notas adicionales sobre cableado cruzado, requisitos de coordinación o contexto de la relación]

### Dependencias frente a cableado cruzado

| Aspecto | Dependencias | Cableado cruzado |
|--------|-------------|--------------|
| **Naturaleza** | Bloqueo / secuencial | Contextual / informativo |
| **Dirección** | `Depende de` / `Bloquea` | Bidireccional (siempre en ambos sentidos) |
| **Uso** | La task no puede iniciarse hasta resolver la dependencia | Las tasks pueden avanzar de forma independiente pero comparten contexto |
| **Ejemplos** | «Bloqueada por: E02:S01:T01» | «Informa: E02:S01:T03 — aporta análisis para el diseño» |

### Ejemplos de cableado cruzado

**Ejemplo 1: Complementa**
```markdown
- **[E9:S01:T01: Inventario del estado actual](../../epic-09/story-001/T01-current-state-inventory.md)** - **Tipo de relación:** Complementa - **Contexto:** Ambas tasks analizan brechas de preparación RC desde perspectivas distintas; el inventario aporta entrada para el análisis de brechas
```

**Ejemplo 2: Coordina con**
```markdown
- **[E9:S01:T07: Planificación de hoja de ruta](../../epic-09/story-001/T07-roadmap-planning.md)** - **Tipo de relación:** Coordina con - **Contexto:** Ambas tasks modifican el mismo documento de política de versionado; los cambios deben sincronizarse
```

**Ejemplo 3: Informa**
```markdown
- **[E2:S01:T02: Definición de criterios RC=1](../../epic-02/story-001/T02-rc1-criteria-definition.md)** - **Tipo de relación:** Informa - **Contexto:** La definición de criterios aporta contexto y restricciones para las decisiones de diseño de esta task
```

---

## Trabajo relacionado

> **Recordatorio de cableado bidireccional:** Cada enlace en esta sección debe ser bidireccional. Si enlaza con un BR/FR, task o story, ese elemento debe enlazar de vuelta con esta task. Consulte [`BIDIRECTIONAL_WIRING_PRINCIPLE.md`](../../../docs/governance/principles/bidirectional-wiring-principle.md) para orientación. Para relaciones task-a-task con tipos de relación, use la sección **Cableado cruzado** anterior.

**Enlaces BR/FR relacionados:**
- [BR-XXX: Título del informe de error](path/to/BR-XXX.md) — *Bidireccional: el BR debe enlazar de vuelta a esta task en su sección Enlaces Kanban*
- [FR-XXX: Título de la solicitud de funcionalidad](path/to/FR-XXX.md) — *Bidireccional: la FR debe enlazar de vuelta a esta task en su sección Enlaces Kanban*

**Tasks relacionadas:**
- [EXX:SYY:TZZ: Título de la task relacionada](path/to/task.md) — *Bidireccional: la task debe enlazar de vuelta a esta task*

**Stories relacionadas:**
- [EXX:SYY: Título de la story relacionada](path/to/story.md) — *Bidireccional: la story debe referenciar esta task*

---

## Ancla de versión

**Formato del marcador forense:** `✅ COMPLETE (vRC.E.S.T+B)` (p. ej., `✅ COMPLETE (v0.4.11.1+1)`)

**Cuando la task esté completa:**
- Añada el marcador forense al documento Task
- Añada el marcador forense a la checklist de la Story
- Actualice el archivo de versión con la finalización de la task
- Actualice el changelog con la finalización de la task

---

## Notas

[Notas adicionales, contexto o consideraciones para esta task.]

---

## Resumen de finalización

[Completar cuando la task esté terminada. ¿Qué se entregó? ¿Lecciones aprendidas? ¿Métricas alcanzadas?]

---

## Referencias

- [Documentos, PR, commits o diagramas relacionados]
- [Recursos externos, documentación o estándares]

---

## Próximas acciones

- [ ] Acción uno (si la task está bloqueada o requiere seguimiento)
- [ ] Acción dos

---

**Localización (es):** Use español técnico neutro en la prosa instructiva.
