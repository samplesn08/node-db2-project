const vinValidator = require("vin-validator");
const Cars = require('./cars-model');


const checkCarId = async (req, res, next) => {
  // DO YOUR MAGIC
  const { id } = req.params;
  try{
    const car = await Cars.getById(id)
    if(!car){
      res.status(404).json({ message: `car with id ${id} is not found`})
    }else{
      req.car = car
      next();
    }
  }catch(err){
    res.status(500).json(err.message)
  }
};

const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
  if(!req.body.vin){
    res.status(400).json({ message: "vin is missing" })
  }else if(!req.body.make){
    res.status(400).json({ message: "make is missing" })
  }else if(!req.body.model){
    res.status(400).json({ message: "model is missing" })
  }else if(!req.body.mileage){
    res.status(400).json({ message: "mileage is missing" })
  }else{
    next();
  }
}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
  const { vin } = req.body;
  const isValidVin = vinValidator.validate(`${vin}`);
  if(isValidVin === false){
    res.status(400).json({ message: `vin ${vin} is invalid` })
  }else{
    next();
  }
}

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
  Cars.getAll()
    .then(cars => {
      if(cars.vin === req.body.vin){
        res.status(400).json({ message: `vin ${req.bodyVIN} already exists` })
      }else{
        next()
      }
    })
    .catch(err => {
      res.status(500).json({ message: err.message })
    })
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique
}