import mongoose from "mongoose"; // mongoose is an object-document mapper
import "dotenv/config";

mongoose.connect(process.env.MONGODB_CONNECT_STRING, { useNewUrlParser: true });

// Connect to to the database
const db = mongoose.connection;
// The open event is called when the database connection successfully opens
db.once("open", () => {
  console.log("Successfully connected to MongoDB using Mongoose!");
});

/**
 * Define the schema. A schema represents the properties of a collection in MongoDB
 * data types and schema type options are specified
 */
const exerciseSchema = mongoose.Schema({
  name: { type: String, required: true },
  reps: { type: Number, required: true },
  weight: { type: Number, required: true },
  unit: { type: String, required: true },
  date: { type: String, required: true },
});

/**
 * Compile the model from the schema. This must be done after defining the schema.
 * In Mongoose, the model is a JavaScript class which represents documents of a particular collection
 * the first parameter is the name of the JS class
 * the second parameter is the schema which Mongoose will use to generate this class
 */
const Exercise = mongoose.model("Exercise", exerciseSchema);

// these functions below are called by the controller module
const createExercise = async (exerciseName, reps, weight, unit, date) => {
  const exercise = new Exercise({
    name: exerciseName,
    reps: reps,
    weight: weight,
    unit: unit,
    date: date,
  });
  return exercise.save(); // save method is called on instance and returns a promise
  // which if fulfilled resolves to the document that was saved
};

const findExercises = async (filter) => {
  const query = Exercise.find(filter); // find method is a static method
  // query can further be customized in the following way:
  // const query = Exercise.find(filter).select(projection).limit(limit)
  // project and and limit are additional parameters that need to be added in addition to filter
  return query.exec();
};

const findExerciseById = async (exerciseID) => {
  const query = Exercise.findById(exerciseID);
  return query.exec();
};

const replaceExercise = async (id, exerciseName, reps, weight, unit, date) => {
  const filter = { _id: id };
  const newExercise = {
    name: exerciseName,
    reps: reps,
    weight: weight,
    unit: unit,
    date: date,
  };
  const result = await Exercise.replaceOne(filter, newExercise);

  return result.modifiedCount;
};

const deleteById = async (exerciseID) => {
  const conditions = { _id: exerciseID };
  const query = Exercise.deleteOne(conditions);
  return query.exec();
};

export {
  createExercise,
  findExercises,
  findExerciseById,
  replaceExercise,
  deleteById,
};
