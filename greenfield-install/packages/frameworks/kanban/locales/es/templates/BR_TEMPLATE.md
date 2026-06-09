---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:01:57Z
expires_at: null
housekeeping_policy: keep
---

# Informe de error: [Título]

**Tipo:** Informe de error (BR)  
**Enviado:** [YYYY-MM-DD]  
**Enviado por:** [Nombre/Usuario]  
**Prioridad:** [CRÍTICA/ALTA/MEDIA/BAJA]  
**Gravedad:** [CRÍTICA/ALTA/MEDIA/BAJA]  
**Estado:** [PENDIENTE/INTAKE/ACEPTADO/RECHAZADO/DIFERIDO]

---

## Resumen

[Descripción en una frase del error.]

---

## Descripción

[Descripción detallada del error. Incluya:]
- ¿Cuál es el error?
- ¿Qué debería ocurrir frente a lo que ocurre realmente?
- ¿Cuándo ocurre?
- ¿Quién se ve afectado?

---

## Componente afectado

**Componente principal:** [p. ej., autenticación de usuarios, procesamiento de pagos, componente de UI]  
**Áreas afectadas:**
- [ ] Backend/API
- [ ] Frontend/UI
- [ ] Base de datos/esquema
- [ ] Integración/servicio externo
- [ ] Documentación
- [ ] Otro: [especificar]

**Causa raíz (si se conoce):**
[Descripción de la causa raíz, si se ha identificado]

---

## Pasos para reproducir

1. Paso 1
2. Paso 2
3. Paso 3
4. [Resultado esperado]
5. [Resultado real]

---

## Entorno

**Entorno:** [Producción/Staging/Desarrollo]  
**Versión:** [Número de versión o hash de commit]  
**Navegador/plataforma:** [Si aplica]  
**SO:** [Si aplica]

---

## Impacto

**Impacto en el usuario:**
- [ ] Crítico — sistema inutilizable
- [ ] Alto — funcionalidad principal rota
- [ ] Medio — alguna funcionalidad afectada
- [ ] Bajo — problema menor, existe workaround

**Impacto en el negocio:**
[Descripción del impacto en el negocio, si aplica]

**Workaround:**
[Si existe un workaround, descríbalo aquí]

---

## Criterios de aceptación (requisitos de corrección)

- [ ] Criterio 1: [Criterio específico y verificable para la corrección]
- [ ] Criterio 2: [Criterio específico y verificable para la corrección]
- [ ] Criterio 3: [Criterio específico y verificable para la corrección]

**Método de verificación:**
- [ ] Ejecución de la suite de pruebas
- [ ] Prueba manual
- [ ] Ambos

**Estado de verificación de la corrección:**
- [ ] Verificado (suite de pruebas aprobada / prueba manual aprobada)
- [ ] Corrección intentada (pendiente de verificación)

---

## Historial de intentos de corrección

**Propósito:** Esta sección documenta todos los intentos de corrección de este error, de modo que si el error no se resuelve, la siguiente versión pueda basarse en intentos anteriores.

**Cómo usar:**
- Cada release que intente corregir este error debe añadir una nueva entrada en esta sección
- Documente qué se intentó, qué funcionó, qué no y el estado de verificación
- Esto crea una base de conocimiento para futuros intentos de corrección

### Intentos de corrección

#### Intento 1: [Versión] - [Fecha]

**Descripción de la corrección:**
[Describa qué se intentó para corregir este error]

**Cambios realizados:**
- [Liste cambios específicos, archivos modificados, cambios de código, etc.]

**Estado de verificación:**
- [ ] Verificado (suite de pruebas aprobada / prueba manual aprobada)
- [ ] Corrección intentada (pendiente de verificación)
- [ ] Corrección fallida (el error sigue presente)

**Método de verificación:**
- [ ] Ejecución de la suite de pruebas
- [ ] Prueba manual
- [ ] Ambos

**Evidencia de verificación:**
[Enlace a resultados de pruebas, salida CI/CD o documentación]

**Resultado:**
- [ ] Error corregido
- [ ] Error parcialmente corregido (describa la corrección parcial)
- [ ] Error no corregido (describa por qué la corrección no funcionó)

**Lecciones aprendidas:**
[¿Qué se aprendió de este intento? ¿Qué debería intentarse de forma distinta la próxima vez?]

**Próximos pasos:**
[¿Qué debería intentarse en el siguiente intento de corrección?]

---

## Dependencias

**Bloquea:**
- [Lo que bloquea este BR]

**Bloqueado por:**
- [Lo que bloquea este BR]

**Trabajo relacionado:**
- [BR, Stories, Tasks o Epics relacionados]

---

## Decisión de intake

**Estado de intake:** [PENDIENTE/INTAKE/ACEPTADO/RECHAZADO/DIFERIDO]  
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
- [Informes de error o incidencias relacionados]

---

**Uso de la plantilla:**
**Localización (es):** Use español técnico neutro en la prosa instructiva.

- Copie esta plantilla al crear un nuevo informe de error
- Complete todas las secciones relevantes
- Use la sección «Decisión de intake» para rastrear la conversión FR/BR → Task → Story → Epic
- Enlace la Task/Story/Epic creada para trazabilidad
- **CRÍTICO:** Las correcciones deben verificarse mediante pruebas antes de marcarse como «Corregido» en los changelogs

---

_Esta plantilla forma parte del Kanban Framework. Consulte `packages/frameworks/kanban/` para la documentación completa del framework._
