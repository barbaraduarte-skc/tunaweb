# Sitio Agencia Tuna

Página estática (HTML + CSS, sin compilar). Ancho de diseño: 1167 px; por debajo se apila para tablet y celular.

## Antes de publicar: completar y confirmar
- Botones "Contanos tu caso": apuntan a `https://wa.me/595984159495` (número tomado del pie del diseño). Confirmar el número y, si querés, agregar un mensaje inicial: `?text=Hola%2C%20quiero%20contarles%20mi%20caso`.
- Menú: "Quienes somos" va a la sección de modelo, "Servicios" a "Lo que recibís" y "Contanos tu caso" al cierre. Cambiá los destinos si preferís otros.
- Textos tal como están en el diseño. Revisar dos cosas: "Empezamosescuchándote." (sin espacio) y que el taller de gestión de emociones diga "realizado con V Automóviles" (en "Empresas" figura con Distrisol).
- Logos de clientes: son recortes del PDF (nítidos hasta 3x). Si tenés los SVG originales, reemplazá los archivos de `assets/logo-*.png`.

## Publicar en GitHub y Cloudflare Pages
1. Crear un repositorio en GitHub y subir el contenido de esta carpeta a la raíz del repositorio.
2. En Cloudflare: Workers y Pages → Crear → Pages → Conectar con Git → elegir el repositorio.
3. Configuración de compilación: framework "Ninguno", comando de compilación vacío, directorio de salida `/`.
4. Al terminar el primer despliegue: abrir el proyecto → Dominios personalizados → Configurar un dominio → elegir el dominio que ya está en Cloudflare. El DNS se crea solo.
5. Cada cambio que subas a GitHub se publica automáticamente.

Las fuentes (Montserrat y Poppins) están dentro de `assets/fuentes/`: la página no depende de Google Fonts.
