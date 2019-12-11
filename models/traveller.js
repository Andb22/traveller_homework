const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
    return this.journeys.map((journey) => {
      return journey.startLocation;
    })
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journey) => {
    return journey.endLocation;
  })
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter((journey) => {
    return journey.transport == transport;
  })
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  let requiredjourneys = []

  for (const journey of this.journeys) {
    if (journey.distance > minDistance) {
      requiredjourneys.push(journey);
    }
  }

  return requiredjourneys;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {

};

Traveller.prototype.getUniqueModesOfTransport = function () {

};


module.exports = Traveller;
