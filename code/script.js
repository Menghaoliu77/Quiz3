window.onload = () => { //when it open index.html, will start staticLoadPlaces
     let places = staticLoadPlaces();//It will run the places
     renderPlaces(places);//Load the plsces in the renderPlaces 
};

function staticLoadPlaces() {//when we load windows onload, it will run the staticLoadPlaces first
    return [
        {
            name: 'MyModel',
            location: {
                lat: <your-latitude>,
                lng: <your-longitude>,
            }//It will load our latitude and longtitude here
        },
    ];
}

function renderPlaces(places) {
    let scene = document.querySelector('a-scene');//Create a object called scene and find the a-scene in another document

    places.forEach((place) => {
        let latitude = place.location.lat; //copy place.location.lat to latitude
        let longitude = place.location.lng; //copy place.location.lng to longtitude

        let model = document.createElement('a-entity'); //create a model object, and the object will create a label called a-entity
        model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
        model.setAttribute('gltf-model', './assets/MyModel/scene.gltf');
        model.setAttribute('rotation', '0 180 0');
        model.setAttribute('animation-mixer', '');
        model.setAttribute('scale', '0.5 0.5 0.5');
        //set attribute

        model.addEventListener('loaded', () => {
            window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
        }); //load gps-entity-place-loaded into addEventListener

        scene.appendChild(model);
    });
}