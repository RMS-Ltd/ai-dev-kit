---
lifecycle: evergreen
ttl_days: null
created_at: [YYYY-MM-DDTHH:MM:SSZ]
expires_at: null
housekeeping_policy: keep
---

# Informe de pruebas de aceptación de usuario (UAT): [Título]

**Tipo:** Pruebas de aceptación de usuario (UAT) / Feedback (FB)  
**Enviado:** [YYYY-MM-DD]  
**Enviado por:** [Nombre/Usuario/Proyecto]  
**Prioridad:** [ALTA/MEDIA/BAJA]  
**Estado:** [PENDIENTE/INTAKE/ACEPTADO/RECHAZADO/DIFERIDO]  
**Alcance UAT:** [Componente/funcionalidad/sistema probado]

---

## Resumen

[Resumen en una frase del feedback.]

---

## Contexto UAT

**Proyecto/organización:** [Nombre del proyecto u organización que realiza el UAT]  
**Componente probado:** [p. ej., Kanban Framework, Release Workflow, Versioning Framework]  
**Versión probada:** [Número de versión o hash de commit]  
**Periodo de pruebas:** [Fecha de inicio] a [Fecha de fin]  
**Alcance UAT:** [Breve descripción de lo probado y criterios de aceptación]

**Metodología UAT:**
- [ ] Pruebas funcionales (¿funciona según lo especificado?)
- [ ] Pruebas de integración (¿se integra según lo esperado?)
- [ ] Pruebas de adopción (¿puede adoptarse según la documentación?)
- [ ] Pruebas de extremo a extremo (¿funciona el flujo completo?)
- [ ] Otro: [especificar]

**Criterios de aceptación probados:**
[Liste los criterios de aceptación o requisitos específicos que se probaron]
- Criterio 1: [Descripción]
- Criterio 2: [Descripción]
- Criterio 3: [Descripción]

---

## Resultados UAT

### Resultados por criterio de aceptación

[Para cada criterio de aceptación, documente el resultado de la prueba]

**Criterio 1: [Descripción]**
- **Estado:** [APROBADO/FALLIDO/PARCIAL]
- **Evidencia:** [Resultados de prueba, capturas, registros, etc.]
- **Notas:** [Observaciones adicionales]

**Criterio 2: [Descripción]**
- **Estado:** [APROBADO/FALLIDO/PARCIAL]
- **Evidencia:** [Resultados de prueba, capturas, registros, etc.]
- **Notas:** [Observaciones adicionales]

**Criterio 3: [Descripción]**
- **Estado:** [APROBADO/FALLIDO/PARCIAL]
- **Evidencia:** [Resultados de prueba, capturas, registros, etc.]
- **Notas:** [Observaciones adicionales]

### Resumen de resultados de prueba

**Total de criterios probados:** [Número]  
**Aprobados:** [Número]  
**Fallidos:** [Número]  
**Parciales:** [Número]

### Lo que funcionó según lo esperado

[¿Qué aspectos pasaron el UAT y funcionaron según lo especificado/anunciado?]

- Aspecto 1: [Descripción con evidencia]
- Aspecto 2: [Descripción con evidencia]
- Aspecto 3: [Descripción con evidencia]

### Problemas encontrados (fallos)

[¿Qué criterios de aceptación fallaron o no funcionaron según lo especificado?]

- **Problema 1:** [Criterio que falló]
  - **Esperado:** [Lo que se esperaba]
  - **Real:** [Lo que ocurrió realmente]
  - **Evidencia:** [Resultados de prueba, capturas, registros]
  - **Gravedad:** [CRÍTICA/ALTA/MEDIA/BAJA]

- **Problema 2:** [Criterio que falló]
  - **Esperado:** [Lo que se esperaba]
  - **Real:** [Lo que ocurrió realmente]
  - **Evidencia:** [Resultados de prueba, capturas, registros]
  - **Gravedad:** [CRÍTICA/ALTA/MEDIA/BAJA]

### Evaluación general del UAT

**¿Funciona según lo anunciado/especificado?**
- [ ] Sí, funciona según lo anunciado (todos los criterios aprobados)
- [ ] Funciona en su mayor parte (problemas menores, criterios no críticos fallidos)
- [ ] Funciona parcialmente (algunos criterios críticos fallidos)
- [ ] No funciona según lo anunciado (criterios críticos fallidos)

**Recomendación UAT:**
- [ ] ACEPTAR — Listo para uso
- [ ] ACEPTAR CON SALVEDADES — Utilizable pero con problemas conocidos
- [ ] RECHAZAR — No cumple los criterios de aceptación

**Calificación basada en evidencia:** [Basada en resultados de prueba, no en opinión]

---

## Hallazgos específicos

### Funcionalidad

[Feedback detallado sobre la funcionalidad]

- Hallazgo 1: [Descripción]
- Hallazgo 2: [Descripción]

### Usabilidad

[Feedback sobre facilidad de uso, documentación, incorporación]

- Hallazgo 1: [Descripción]
- Hallazgo 2: [Descripción]

### Rendimiento

[Feedback sobre rendimiento, velocidad, uso de recursos]

- Hallazgo 1: [Descripción]
- Hallazgo 2: [Descripción]

### Documentación

[Feedback sobre calidad, completitud y claridad de la documentación]

- Hallazgo 1: [Descripción]
- Hallazgo 2: [Descripción]

### Integración

[Feedback sobre integración con otras herramientas/sistemas]

- Hallazgo 1: [Descripción]
- Hallazgo 2: [Descripción]

---

## Detalles del caso de uso

**Caso de uso principal:** [¿Cómo se usó este componente?]

**Tipo de proyecto:** [p. ej., proyecto nuevo, migración de proyecto existente, adopción de framework]

**Tamaño del proyecto:** [p. ej., pequeño, mediano, grande, enterprise]

**Tamaño del equipo:** [Número de miembros del equipo que usan el componente]

**Duración de uso:** [¿Cuánto tiempo lleva en uso?]

---

## Evidencia de apoyo

**Resultados de prueba:**
- [Enlace a resultados de prueba, capturas u otra evidencia]
- [Enlace a informes de prueba o documentación]

**Ejemplos:**
- [Ejemplos o escenarios específicos]
- [Fragmentos de código o configuraciones]

**Métricas:**
- [Métricas cuantitativas o mediciones]

---

## Evaluación de impacto

**Impacto en el proyecto:**
- [ ] Crítico — bloqueó el progreso del proyecto
- [ ] Alto — impacto significativo en el proyecto
- [ ] Medio — impacto moderado
- [ ] Bajo — impacto menor
- [ ] Positivo — mejoró el proyecto

**Impacto en el equipo:**
- [ ] Crítico — afectó la productividad del equipo
- [ ] Alto — impacto significativo en el equipo
- [ ] Medio — impacto moderado en el equipo
- [ ] Bajo — impacto menor en el equipo
- [ ] Positivo — mejoró el flujo de trabajo del equipo

---

## Recomendaciones

[¿Qué acciones deben tomarse según este feedback?]

- [ ] Recomendación 1: [Descripción]
- [ ] Recomendación 2: [Descripción]
- [ ] Recomendación 3: [Descripción]

**Orden de prioridad:**
1. [Recomendación de mayor prioridad]
2. [Recomendación de segunda prioridad]
3. [Recomendación de tercera prioridad]

---

## Trabajo relacionado

**BR relacionados:** [Informes de error registrados como resultado de este feedback]
**FR relacionadas:** [Solicitudes de funcionalidad registradas como resultado de este feedback]
**UXR relacionadas:** [Investigaciones de experiencia de usuario relacionadas con este feedback]

---

## Decisión de intake

**Estado de intake:** [PENDIENTE/INTAKE/ACEPTADO/RECHAZADO/DIFERIDO]  
**Fecha de intake:** [YYYY-MM-DD]  
**Intake por:** [Nombre/Usuario]

**Resultados del flujo de decisión:**
- [ ] Story coincidente encontrada: [Epic X, Story Y] → Task [T]
- [ ] Nueva Story creada: [Epic X, Story Y] → Task 1
- [ ] Nuevo Epic creado: [Epic X, Story 1, Task 1]
- [ ] Feedback reconocido: [No se requiere acción, feedback anotado]

**Asignado a:**
- Epic: [Número o nombre del Epic]
- Story: [Número o nombre de la Story]
- Task: [Número o nombre de la Task]

**Versión:** [Versión cuando se abordó]

---

## Notas

[Notas adicionales o contexto]

---

**Uso de la plantilla:**
**Localización (es):** Use español técnico neutro en la prosa instructiva.
 Este FB sigue la plantilla de feedback del Kanban framework. Los envíos de feedback ayudan a mejorar el framework y son valiosos para la mejora continua.
