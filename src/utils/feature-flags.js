import storage from './local-storage';
import featureFlags from '../feature-flags';
if (!storage.getJSON('features')) {
  storage.setJSON('features', featureFlags);
}

window.enableFlag = function(flag) {
  const features = storage.getJSON('features');
  features[flag] = true;
  storage.setJSON('features', features);
};
