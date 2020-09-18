# MyMoviesApp
######################################################################################
<p align="justify">Demo de MyMoviesApp una aplicación con Ionic 4 y Angular</p>

<p align="justify">La aplicación consume la api de omdbapi y despliega los resultados a partir de una búsqueda según las categorías definidas.</p>
<p align="justify">Luego, se puede ver el detalle de la opción seleccionada y agregarla a los favoritos.</p>

Utiliza la rest api de omdbapi http://www.omdbapi.com/

El entorno de desarrollo fue:

Windows 10

ionic@4.12.0
node v10.22.0
npm 6.9.0
cordova 9.0.0

Android Studio
Java Development Kit (JDK)(mínimo versión 8)
Instalar Git
Instalar Visual Studio Code

Para instalar se debe clonar el directorio y tener instaldo node v10.22.0, ionic@4.12.0 y cordova 9.0.0.

npm install -g cordova @ionic/cli

Dentro del directorio aplicar: npm install

Luego: ionic serve, para verla en el explorador.

Para generar el apk de la app debe estar instalado Android Studio y Java Development Kit (JDK)(mínimo versión 8)
Y un dispositivo disponible. Para MacOS debe estar instaldo XCode

Para Android:

Dentro del directorio de la app:

ionic cordova platform add android
ionic cordova build android

adb install platforms/android/app/build/outputs/apk/debug/app-debug.apk

Para iOS

npm install -g ios-sim
npm install -g ios-deploy

ionic cordova platform add ios
ionic cordova build ios


Luego, desde XCode debe abrirse miproyecto.xcodeproj



