const version = 1;
const elXokasWPA = `xokas-sounds-table-wpa-${version}`;
const assets = [
  "/",
  "./index.html",
  "./data.json",
  "./aaa-mis-ojos.mp3",
  "./a-estudiar.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/Roa/a-ver-si-se-oye-asi-bien.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/Roa/bueno.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/Roa/calla-la-boca.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/Roa/sounds/callate.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/Roa/como-que-un-juego.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/Roa/de-verdad.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/Roa/dos-por-uno-en-burros.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/Roa/deja-de-estar-tan-feliz.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/Roa/dios.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/Roa/eres-imbecil.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/Roa/esto-no-es-un-juego.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/Roa/esto-que-cojones-es.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/Roa/espanol-de-espana.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/Roa/fuera-de-mi-puta-vista.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/Roa/fumo-porros.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/Roa/gordo-peazo-de-vaca.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/Roa/gordo-como-una-polla.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/Roa/hemos-vuelto.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/Roa/helado-de-happy-hippo.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/Roa/hostias.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/Roa/habla-todo-lo-espanol-que-puedas.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/Roa/hijo-de-la-gran-puta.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/Roa/jajaja.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/Roa/la-madre-que-os-pario.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/Roa/pisa-aterrisa-ibisa.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/Roa/los-inyecto-para.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/Roa/los-que-te-dicen-que-siempre-comen-sano.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/Roa/me-cago-en.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/Roa/me-cago-en-tus-muertos.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/Roa/me-he-dejado-las-llaves-dentro.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/Roa/me-fumo-4-porros.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/Roa/me-he-fumado-un-porro.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/Roa/mi-plato-favorito-es-ver-gente-llorando.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/Roa/mirad-que-puta-locura.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/Roa/ni-de-conia.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/Roa/noname-de-mierda.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/Roa/no-es-gracioso.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/Roa/parad-de-rodar.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/Roa/pedro-sanche-y.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/Roa/pero-tu-eres-gilipollas-o-que.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/Roa/podeis-agarrarme-del-glande.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/Roa/pum-baneado-15-dias.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/Roa/pumba-que-dale.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/Roa/putos-pringaos.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/Roa/que-no-se-pasen-de-listos.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/Roa/queee.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/Roa/queh.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/Roa/que-dices.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/Roa/que-pasa.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/Roa/que-cojones-me-vas-a-contar-tu.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/Roa/que-te-meto.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/Roa/que-ya-te-he-escuchado.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/Roa/quien-cojones-te-crees-que-eres.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/Roa/quiero-que-estes-callado.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/Roa/se-me-cae-la-babita.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/Roa/soy-el-mejor-streamer-de-espania.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/Roa/soy-el-xokas.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/Roa/tell-me-what-you-want.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/Roa/te-meto-una-hostia.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/Roa/tonto.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/Roa/tontito.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/Roa/vaya-tetas.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/Roa/viva-espana-hijos-de-la-gran-puta.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/Roa/y-culo-culo-y-culo.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/Roa/y-le-he-dao-un-poco-a-la-teta.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/Roa/y-tu-callau.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/Roa/quieres-que-te-haga-caca-en-la-cara.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/Roa/punto.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/Roa/un-besito-a-todos.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/Roa/dale-like.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/Roa/redz-a-trabajar-quiero-el-diamante.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/Roa/redz-cambia-eso.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/Roa/estas-en-desacuerdo-te-callas.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/Roa/viva-hannah-montana.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/Roa/estara-haciendo-caca.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/Roa/yuhuu.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/Roa/tu-madre-es-un-postre-para-mi.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/Roa/la-espada-de-hielo-chaval.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/Roa/24-horas-baneado-me.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/Roa/baneame-si-tienes-huevos.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/Roa/me-fume-un-porrazo.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/Roa/no-mando-saludos.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/Roa/vamo-vamo-eh-eh.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/Roa/voy-a-cervezas-aaa.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/Roa/ya-no-puedo-mas.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/Roa/pezzimo-criterio.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/Roa/pido-a-una-puta.mp3",
];

self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches.open(elXokasWPA).then((cache) => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", (fetchEvent) => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((res) => {
      return res || fetch(fetchEvent.request);
    })
  );
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames
          .filter((cacheName) => cacheName !== elXokasWPA)
          .map(function (cacheName) {
            return caches.delete(cacheName);
          })
      );
    })
  );
});
