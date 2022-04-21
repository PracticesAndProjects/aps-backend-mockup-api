const fs = require("fs");
const exec = require("util").promisify(require("child_process").exec);
const STATS_PATH = "../src/presentation/general/common/ServerStatistics.json";
const stats = require(STATS_PATH);

// Simplified Version Control based on Semantic Versioning.
// X.Y.Z
// Z -> Microversion representing commits in the current repository.
// Y -> New features.
// X -> Not backwards compatible updates.

// This project is not meant to be released.
// This is a simplified tool for automating and controlling my versioning.
// It will not follow Semantic Versioning rules as it should.

(async () => {
  const args = process.argv.slice(2);
  const version = stats.details.version;
  const versions = version.split(".");

  console.log("Current microversion: ", version);

  // Extract simple microversion
  const { stdout } = await exec("git rev-list --all --count");
  versions[2] = Number(stdout);

  if (args[0] === "commit") {
    versions[2] += 1;
    console.log("Incrementing version pre-commit as requested.");
  }

  // Validate if update is needed
  const newVersion = versions.join(".");
  console.log("Detected microversion: ", newVersion);

  if (version === newVersion) {
    console.log("Version is already up to date. No changes were made.");
    return;
  }
  // Write new version
  stats.details.version = newVersion;
  fs.writeFileSync(
    `${__dirname}/${STATS_PATH}`,
    JSON.stringify(stats, null, 2),
  );

  // Validate if update was successful
  const updatedStats = require(STATS_PATH);

  if (updatedStats.details.version === stats.details.version) {
    console.log(`Updated successfully to version ${stats.details.version}`);
  } else {
    console.log(
      "File update was not successful. Current file version is still ",
      updatedStats.details.version,
    );
  }
})();
