function calculateDomain1() {
  const testedInput = document.getElementById("tested");
  const approachesInput = document.getElementById("approaches");
  const meetsInput = document.getElementById("meets");
  const mastersInput = document.getElementById("masters"); 
  const resultDiv = document.getElementById("result");

  const tested = Number(testedInput.value);
  const approaches = Number(approachesInput.value);

  if (!tested || tested <= 0) {
    resultDiv.textContent = "Please enter a valid number of students tested.";
    return;
  }

  if (approaches < 0 || meets < 0 || masters < 0) {
    resultDiv.textContent = "Approaches, Meets, and Masters count must be between 0 and total tested.";
    return;
  }

  const pctAverage = (((approaches + meets + masters) / tested)/3) * 100;

  // TODO: Replace this with your real TEA Domain 1 logic.
  // For now, this is just a fake example mapping to an A–F label.
  let rating;
  if (pctAverage >= 90) rating = "A";
  else if (pctAverage >= 80) rating = "B";
  else if (pctAverage >= 70) rating = "C";
  else if (pctAverage >= 60) rating = "D";
  else rating = "F";

  resultDiv.textContent =
    `Average%: ${pctAverage.toFixed(1)}%. Estimated rating (example scale): ${rating}`;
}
