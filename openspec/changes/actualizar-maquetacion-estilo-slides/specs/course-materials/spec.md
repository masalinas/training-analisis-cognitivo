# Spec Delta

## MODIFIED Requirements

### Requirement: Formato panorámico y estructuración en 6 módulos didácticos
El sistema SHALL proveer una presentación técnica completa en formato panorámico estándar Widescreen 16:9 (dimensiones de 13.333" x 7.5") estructurada en 6 módulos pedagógicos que cubran la totalidad de las 15 horas lectivas del temario oficial, garantizando una composición visual equilibrada y componentes de diseño consistentes con la presentación de referencia.

#### Scenario: Compilación del slide deck completo
- **WHEN** el pipeline de generación ejecuta la compilación del material didáctico
- **THEN** se generan los archivos sincronizados `Analitica_Avanzada_e_Inteligencia_Cognitiva.pptx` y `Analitica_Avanzada_e_Inteligencia_Cognitiva.pdf`, compuestos por 41 diapositivas ordenadas secuencialmente desde el Módulo 0 al Módulo 6 sobre lienzo panorámico de 13.333" x 7.5", incluyendo portadas oscuras con halos elípticos, divisores modulares con identificador numérico gigante y cuadrícula de contenidos con iconos, tarjetas estructuradas, flujos de pasos con flechas y bloques de código contrastados.

### Requirement: Validación estricta contra esquemas de Microsoft Office
El sistema SHALL asegurar que la presentación generada cumpla estrictamente los estándares OOXML sin caracteres inválidos, desbordamientos visuales o defectos estructurales, realizando un saneamiento XML sobre elementos de párrafo y verificando ausencia total de colisiones o advertencias de diseño.

#### Scenario: Verificación automatizada de conformidad
- **WHEN** se ejecuta el analizador de esquemas o el proceso de ensamblado sobre el archivo PPTX generado
- **THEN** se eliminan las propiedades de párrafo duplicadas (`<a:pPr>`) a nivel de estructura zip interna, se verifica conformidad con el esquema OOXML y el motor de compilación reporta exactamente cero advertencias de desbordamiento o ajuste tipográfico (`Sin avisos de maquetación`).

## ADDED Requirements

### Requirement: Sistema de iconografía vectorial y prevención activa de desbordamiento
El sistema SHALL incorporar un catálogo de iconos vectoriales de alta resolución rasterizados en compilación y un motor de medición tipográfica predictiva que calcule y garantice el ajuste de textos dentro de los límites visuales de cada contenedor.

#### Scenario: Rasterización de iconos y control de capacidad en contenedores
- **WHEN** el generador ensambla diapositivas con tarjetas, insignias circulares, llamadas contextuales o listas de tópicos
- **THEN** todos los iconos referenciados se precargan y renderizan como gráficos circulares o badges vectoriales transparentes, y las funciones de estimación tipográfica (`lineCount` y `textHeight`) validan que la altura y ancho calculados no sobrepasen las dimensiones de sus respectivas cajas, sin que ningún texto quede cortado ni desbordado.
