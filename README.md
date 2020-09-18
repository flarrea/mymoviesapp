# MyMoviesApp
######################################################################################
<p align="justify">Demo de MyMoviesApp una aplicación con Ionic 4 y Angular</p>

<p align="justify">La aplicación consume la api de omdbapi y despliega los resultados a partir de una búsqueda según las categorías definidas.</p>
<p align="justify">Luego, se puede ver el detalle de la opción seleccionada y agregarla a los favoritos.</p>

Utiliza la rest api de omdbapi http://www.omdbapi.com/

El entorno de desarrollo fue:

Windows 10</br>
ionic@4.12.0</br>
node v10.22.0</br>
npm 6.9.0</br>
cordova 9.0.0</br>

Android Studio</br>
Java Development Kit (JDK)(mínimo versión 8)</br>
Instalar Git</br>
Instalar Visual Studio Code</br>

######################################################################################
<p align="justify">Para instalar se debe clonar el directorio y tener instalado node v10.22.0, ionic@4.12.0 y cordova 9.0.0.</p>

npm install -g cordova @ionic/cli</br>

Dentro del directorio aplicar: npm install</br>

Luego: ionic serve, para verla en el explorador.</br>

######################################################################################
<p align="justify">Para generar el apk de la app debe estar instalado Android Studio y Java Development Kit (JDK)(mínimo versión 8)
Y un dispositivo disponible. Para MacOS debe estar instaldo XCode</p>

Para Android:</br>

Dentro del directorio de la app:</br>

ionic cordova platform add android</br>
ionic cordova build android</br>

adb install platforms/android/app/build/outputs/apk/debug/app-debug.apk</br>

Para iOS

npm install -g ios-sim</br>
npm install -g ios-deploy</br>

ionic cordova platform add ios</br>
ionic cordova build ios</br>


Luego, desde XCode debe abrirse miproyecto.xcodeproj</br>



