---
lifecycle: evergreen
ttl_days: null
created_at: YYYY-MM-DDTHH:MM:SSZ
expires_at: null
housekeeping_policy: keep
---

# E{epic}:S{story}:T{task} — Planificación: especificación, pruebas, plan de implementación (IPW)

**Host Task:** [`T{task}-[slug].md`](T{task}-[slug].md) **(E{epic}:S{story}:T{task})**  
**Planificación para:** [FR-XXX](../../../fr-br/FR-XXX-*.md) *(si aplica)*  
**Estado:** Borrador | Revisión | Aprobado

> **IPW (Implementation Planning Workflow):** Use esta plantilla al ejecutar **IPW** / **IPW E:S:T**. El enlace **Host Task** y el cableado bidireccional con el documento de task en **Entrada** y **Referencias** son **obligatorios** antes de que el plan esté completo (consulte **FR-042** — *Implementation Planning Workflow* en `docs/project-management/kanban/fr-br/`).

---

## 1. Requisitos (línea base determinada)

### 1.1 Requisitos funcionales (determinados)

| ID | Requisito | Fuente (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RF1 | … | … |

### 1.2 Requisitos no funcionales (determinados)

| ID | Requisito | Fuente (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RNF1 | … | … |

### 1.3 Invariantes y límites

- **Invariantes:** …
- **En alcance:** …
- **Fuera de alcance:** …

---

## 2. Especificación

### 2.1 Objetivo

[Un párrafo: qué resultado habilita este plan.]

### 2.2 Mapeo de especificación desde requisitos determinados

Describa cómo la especificación formaliza la línea base de requisitos anterior.

### 2.3 Restricciones

- …

### 2.4 Intención de transición de estado (obligatorio para tasks derivadas de IPW)

- **Estado actual de la task:** TODO | IN PROGRESS | COMPLETE
- **Disparador de transición a IN PROGRESS:** Primer cambio de implementación no planificador.
- **Disparador de transición a COMPLETE:** Evidencia de aceptación registrada (pruebas/notas de verificación enlazadas).
- **Requisito de propagación atómica:** El estado del documento Task y el estado de la fila en kboard deben actualizarse en el mismo conjunto de cambios/sesión.
- **Responsable:** Paso de ejecución de implementación (no la creación planificadora de IPW).

### 2.5 Decisión de necesidad de ADR (obligatorio — IPW Fase 5.0)

Califique cada disparador **Y** o **N** con evidencia de una línea. Criterios: [`ipw-adr-necessity-checklist.md`](../../../docs/architecture/standards-and-adrs/ipw-adr-necessity-checklist.md) (FR-100).

| ID | Disparador | Y/N | Evidencia |
| -- | ------- | --- | -------- |
| T1 | Alternativas | | |
| T2 | Reversibilidad | | |
| T3 | Radio de impacto | | |
| T4 | Precedente | | |
| T5 | Compromiso de restricciones | | |
| T6 | Contrato de gobernanza | | |
| T7 | Supersede | | |

**Resultado:** `REQUIRED` | `EXEMPT` | `ALREADY_COVERED` (enlace al ADR existente)

Si **REQUIRED:** §5 debe incluir ADR `CREATE` o `UPDATE` antes de que el inventario de documentos de la Fase 5 se complete.

Si **EXEMPT:** todos T1–T7 = N y E1–E5 pasan (consulte la política de la checklist); registre la cita del documento rector en §5.3.

| ID | Exención (solo si todos T = N) | ¿Pasa? | Evidencia |
| -- | --------------------------- | ----- | -------- |
| E1 | Locus único | | |
| E2 | Sin nuevas opciones | | |
| E3 | Reversible en una task | | |
| E4 | Especificación en otro lugar | | |
| E5 | NONE documentado | | |

---

## 3. Diseño de pruebas

| ID | Comportamiento / capa | Comprobación esperada |
| -- | ---------------- | -------------- |
| T1 | … | … |

---

## 4. Plan de implementación

| Paso | Acción | Entregable |
| ---- | ------ | ----------- |
| **1** | **[OBLIGATORIO] Transicionar el estado de la task `E{epic}:S{story}:T{task}` de `TODO → IN PROGRESS`** en el documento task. Actualizar la fecha `Última actualización`. | `Status` del documento task = `IN PROGRESS` |
| … | … | … |
| **N** | **[OBLIGATORIO] Reconciliar el estado de la task `E{epic}:S{story}:T{task}`** con el estado real de implementación: `COMPLETE` + `✅ COMPLETE (v{version})` si se cumplen todos los CA; `IN PROGRESS` si está en curso; `BLOCKED` + razón si está bloqueada. Actualizar `Última actualización`. | El estado del documento task refleja el estado real |

**Regla RW de verificación / ola FBU (BR-097):** Cualquier paso de verificación post-envío o cierre FBU en §4 debe prescribir **`RW E{epic}:S{story}:T{task} --art`** únicamente. No prescriba `--doc-policy-zero` para releases de seguimiento tras un BUILD etiquetado.

### 4.1 Archivos a crear o modificar

- …

### 4.2 Orden de dependencias

1. …

### 4.3 Pasos de implementación de documentación (opcional)

Trabajo documental ordenado durante la implementación (derivado de §5–§6), p. ej. actualizar la guía KB antes que la documentación de usuario.

---

## 5. Entregables de documentación

*Completado en IPW Fase 5 — tras la planificación de implementación, antes del alojamiento.*

### 5.1 Documentos existentes a actualizar

| Doc ID | Ruta | Alcance del cambio | Vinculado a (RF/T/paso impl) |
| ------ | ---- | --------------- | ------------------------ |
| D-U1 | … | … | … |

### 5.2 Documentos nuevos a crear

| Doc ID | Ruta propuesta (borrador) | Propósito | Vinculado a (RF/T/paso impl) |
| ------ | --------------------- | ------- | ------------------------ |
| D-C1 | … | … | … |

### 5.3 Brechas documentales y no-cambios explícitos

| Brecha / tema | Resolución (fila CREATE arriba, o NONE + razón) |
| ----------- | ----------------------------------------------- |
| … | … |

---

## 6. Alojamiento de documentación

*Completado en IPW Fase 6 — rutas canónicas e intención de publicación.*

| Doc ID | Ruta canónica | Estado de publicación | Razón N/A de publicación (si N/A) | Ciclo de vida | Enlaces entrantes a añadir |
| ------ | -------------- | ------------------ | ------------------------------- | --------- | -------------------- |
| D-U1 | … | PUBLISHED \| NOT_APPLICABLE | … | evergreen \| … | … |

**Reglas de alojamiento:** Un documento autoritativo por tema; prefiera actualizar un documento existente antes que crear un duplicado; el IPP vive bajo `docs/implementation-cycles/`; superficies Docusaurus según BR-066.

---

## 7. Criterios de éxito / verificación

- [ ] …
- [ ] Todos los elementos UPDATE/CREATE de §5 implementados o diferidos explícitamente con razón
- [ ] Todas las rutas `PUBLISHED` de §6 existen y están enlazadas desde el documento task (o el validador pasa)

---

## Referencias

- …

---

**Localización (es):** Use español técnico neutro en la prosa instructiva.
