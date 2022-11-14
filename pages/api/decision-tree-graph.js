import fs from "fs";
import path from "path";

const treeify = require("treeify");

const Id3TreeBuilder = require("id3-tree-builder");

export function dataTrainingPath() {
  return path.join(process.cwd(), "data", "dataTrainingPure.json");
}

export function extractData(filePath) {
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData);
  return data;
}

const handler = (req, res) => {
  if (req.method === "GET") {
    const filePath = dataTrainingPath();
    const dataTraining = extractData(filePath);

    const id3 = new Id3TreeBuilder();

    const result = id3.build(dataTraining);

    const listAttributes = [
      "pertanyaan_1",
      "pertanyaan_2",
      "pertanyaan_3",
      "pertanyaan_4",
      "pertanyaan_5",
      "pertanyaan_6",
      "pertanyaan_7",
      "pertanyaan_8",
      "pertanyaan_9",
      "pertanyaan_10",
      "pertanyaan_11",
    ];

    const listInformationGain = [];

    const listEntrophy = [];

    listAttributes.map((att) => {
      listInformationGain.push({
        [att]: id3.getInformationGainWhenSplittingForAttribute(
          att,
          dataTraining
        ),
      });
      listEntrophy.push({
        [att]: id3.getEntropyForAttribute(att, dataTraining),
      });
    });

    const highest_gain = id3.getAttributeWithHighestGain(dataTraining);
    const overall_entropy = id3.getOverallEntropy(dataTraining);

    const tree = treeify.asTree(new Id3TreeBuilder().build(dataTraining), true);

    res.status(200).json({
      tree,
      result,
      entrophy: listEntrophy,
      information_gain: listInformationGain,
      highest_gain,
      overall_entropy,
    });
  }
};

export default handler;
