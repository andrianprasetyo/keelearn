import fs from "fs";
import path from "path";

const DecisionTree = require("decision-tree");

export function dataTrainingPath() {
  return path.join(process.cwd(), "data", "dataTraining.json");
}

export function extractData(filePath) {
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData);
  return data;
}

const handler = (req, res) => {
  if (req.method === "POST") {
    const userAnswer = req.body.userAnswer;

    const filePath = dataTrainingPath();
    const dataTraining = extractData(filePath);

    const class_name = "hasil";

    const features = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];

    const dt = new DecisionTree(dataTraining, class_name, features);

    console.log("dt", dt);

    const predicted_class = dt.predict(userAnswer);

    const accuracy = dt.evaluate(dataTraining);

    const treeJson = dt.toJSON();

    res
      .status(200)
      .json({ hasil: predicted_class, accuracy: accuracy, tree: treeJson });
  }
};

export default handler;
