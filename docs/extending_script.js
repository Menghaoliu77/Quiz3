window.onload = () => {//when it open index.html, will start staticLoadPlaces
  render();
};

const models = [//initial definition of models
  {
    url: './assets/myModel/scene.gltf',
    scale: '0.5 0.5 0.5',
    rotation: '0 225 0'
  },//here is control the scale and rotation, and can add more model here
];

let modelIndex = 0;//make modelIndex equal to zero
const setModel = (model, entity) => {
  if (model.position) {
    entity.setAttribute('position', model.position);
  }

  entity.setAttribute('gltf-model', model.url);
};

function render() {
  const scene = document.querySelector('a-scene');//a-scene is an object that create a coordinate under this.

  navigator.geolocation.getCurrentPosition(function (position) {//contol the position
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;//geolocation is to locate the latitude and longitude

    const model = document.createElement('a-entity');//a-entity is under the a-scene
    model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);//a-entity is an object which include a latitude ans a longitide

    setModel(models[modelIndex], model);

    model.setAttribute('animation-mixer', '');

    scene.appendChild(model);
  });
}
