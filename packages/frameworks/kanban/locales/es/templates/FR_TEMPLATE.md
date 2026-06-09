---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:01:57Z
expires_at: null
housekeeping_policy: keep
---

# Solicitud de funcionalidad: [Título]

**Tipo:** Solicitud de funcionalidad (FR)  
**Enviada:** [YYYY-MM-DD]  
**Enviada por:** [Nombre/Usuario]  
**Prioridad:** [ALTA/MEDIA/BAJA]  
**Estado:** [PENDIENTE/INTAKE/ACEPTADA/RECHAZADA/DIFERIDA]

---

## Resumen

[Descripción en una frase de la funcionalidad solicitada.]

---

## Descripción

[Descripción detallada de la solicitud de funcionalidad. Incluya:]
- ¿Qué funcionalidad se desea?
- ¿Qué problema resuelve?
- ¿Cuál es el caso de uso?
- ¿Quién se beneficiaría de esta funcionalidad?

---

## Requisitos

### Requisitos funcionales
- [ ] Requisito 1
- [ ] Requisito 2
- [ ] Requisito 3

### Requisitos no funcionales
- [ ] Consideraciones de rendimiento
- [ ] Consideraciones de seguridad
- [ ] Consideraciones de usabilidad
- [ ] Consideraciones de compatibilidad

---

## Análisis de alcance

**Dominio del problema:** [p. ej., autenticación de usuarios, procesamiento de datos, componentes de UI]  
**Áreas afectadas:**
- [ ] Backend/API
- [ ] Frontend/UI
- [ ] Base de datos/esquema
- [ ] Documentación
- [ ] Pruebas
- [ ] Otro: [especificar]

**Complejidad estimada:**
- [ ] Simple (1-3 días)
- [ ] Media (1 semana)
- [ ] Compleja (2+ semanas)
- [ ] Muy compleja (1+ mes)

---

## Casos de uso

**Caso de uso principal:**
[Describa el caso de uso principal de esta funcionalidad]

**Casos de uso adicionales:**
- Caso de uso 1
- Caso de uso 2

---

## Criterios de aceptación

- [ ] Criterio 1: [Criterio específico y verificable]
- [ ] Criterio 2: [Criterio específico y verificable]
- [ ] Criterio 3: [Criterio específico y verificable]

---

## Dependencias

**Bloquea:**
- [Lo que bloquea esta FR]

**Bloqueada por:**
- [Lo que bloquea esta FR]

**Trabajo relacionado:**
- [FR, Stories, Tasks o Epics relacionados]

---

## Decisión de intake

**Estado de intake:** [PENDIENTE/INTAKE/ACEPTADA/RECHAZADA/DIFERIDA]  
**Fecha de intake:** [YYYY-MM-DD]  
**Intake por:** [Nombre/Usuario]

**Resultados del flujo de decisión:**
- [ ] Story coincidente encontrada: [Epic X, Story Y] → Task [T]
- [ ] Nueva Story creada: [Epic X, Story Y] → Task 1
- [ ] Nuevo Epic creado: [Epic X, Story 1, Task 1]

**Asignado a:**
- Epic: [Número y nombre del Epic]
- Story: [Número y nombre de la Story]
- Task: [Número y nombre de la Task]
- Versión: `[RC.EPIC.STORY.TASK+BUILD]`

**Enlaces Kanban:**
- Epic: [`docs/project-management/kanban/epics/Epic-X/Epic-X.md`](path/to/Epic-X.md)
- Story: [`docs/project-management/kanban/epics/Epic-X/Story-XXX-*.md`](path/to/Story.md)
- Task: [Enlace a la Task en el documento Story]

---

## Notas

[Notas adicionales, contexto o consideraciones]

---

## Referencias

- [Documentación, especificaciones, diagramas o recursos externos relacionados]

---

**Uso de la plantilla:**
**Localización (es):** Use español técnico neutro en la prosa instructiva.

- Copie esta plantilla al crear una nueva solicitud de funcionalidad
- Complete todas las secciones relevantes
- Use la sección «Decisión de intake» para rastrear la conversión FR/BR → Task → Story → Epic
- Enlace la Task/Story/Epic creada para trazabilidad

---

_Esta plantilla forma parte del Kanban Framework. Consulte `packages/frameworks/kanban/` para la documentación completa del framework._
