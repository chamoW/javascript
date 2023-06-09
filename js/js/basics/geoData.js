import data from "../data/geo.json" assert { type: "json" };

export const obtenerPromedio = (data = undefined) => {
  let promedio = data.reduce((accumulator, item, index, self) => {
    accumulator += item;
    if (index === self.length - 1) {
      return (accumulator / self.length).toFixed(2);
    } else {
      return accumulator;
    }
  });

  return console.info(`El promedio de ${data.join("+")} es ${promedio}`);
};

//obtenerPromedio([20, 18, 14, 15]);

export const getGeoData = () => {
  console.log(data);

  const { results } = data;

  // se agrega el atributo ya que es una propiedad de google maps platform
  // eslint-disable-next-line
  const { address_components } = results[0];

  const country = address_components.filter(
    (item) => item.types[0] === "country"
  );
  const city = address_components.filter(
    (item) => item.types[0] === "locality"
  );

  const geoData = { country, city };

  console.log("GEODATA> ", geoData);

  const reduceData = address_components.reduce((next, key) => {
    /*console.log("next ", next);
    console.log("key ", key);*/

    if (key.types[0] === "country") {
      return { ...next, country: key.long_name };
    } 
    if (key.types[0] === "locality") {
      return { ...next, city: key.long_name };
    }
    return next;
  }, {});

  console.log("reduceData ", reduceData);
};

getGeoData();
