try {
  importScripts('./sw.js');
} catch (e) {
  console.warn('[SW Worker] import sw.js failed:', e);
}
importScripts('https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.sw.js');
