# pruebas.Automatizadas.m# Pruebas Automatizadas para Aplicaciones Móviles

Este proyecto contiene pruebas automatizadas para aplicaciones iOS (IPA) y Android (APK) utilizando Appium y WebdriverIO.

## Requisitos previos

- Node.js (versión LTS recomendada)
- npm (viene con Node.js)
- Appium
- Xcode (para pruebas en iOS)
- Android Studio (para pruebas en Android)
- Emuladores o dispositivos físicos para iOS y Android

## Instalación

1. Clona este repositorio:
   ```
   git clone https://github.com/neobones/pruebas.Automatizadas.moviles2.git
   cd tu-repositorio
   ```

2. Instala las dependencias:
   ```
   npm install
   ```

3. Instala Appium globalmente:
   ```
   npm install appium
   ```

4. Instala los drivers de Appium:
   ```
   npm install appium-xcuitest-driver
   npm install appium-uiautomator2-driver
   ```

## Configuración

1. Actualiza los archivos de configuración en la carpeta `config/` con los detalles de tu aplicación y dispositivo:
   - `ios.conf.js` para iOS
   - `android.conf.js` para Android

2. Asegúrate de que las rutas a tus archivos .ipa (iOS) y .apk (Android) sean correctas en los archivos de configuración.

## Ejecución de pruebas

1. Inicia el servidor de Appium:
   ```
   appium
   ```

2. En otra terminal, ejecuta las pruebas:
   
   Para iOS:
   ```
   npm run test:ios
   ```

   Para Android:
   ```
   npm run test:android
   ```

## Estructura del proyecto

```
pruebas-automatizadas-moviles2/
├── config/
│   ├── android.conf.js
│   └── ios.conf.js
├── tests/
│   ├── android/
│   │   └── example.test.js
│   └── ios/
│       └── example.test.js
├── package.json
└── README.md
```

## Contribuir

Si deseas contribuir a este proyecto, por favor:

1. Haz un fork del repositorio
2. Crea una nueva rama (`git checkout -b feature/AmazingFeature`)
3. Haz commit de tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la licencia MIT. Ver el archivo `LICENSE` para más detalles.

## Contacto

Tu Nombre - 

Link del proyecto: 