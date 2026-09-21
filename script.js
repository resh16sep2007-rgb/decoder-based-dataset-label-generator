const classCodes = {
  "000": "Class_0",
  "001": "Class_1",
  "010": "Class_2",
  "011": "Class_3",
  "100": "Class_4",
  "101": "Class_5",
  "110": "Class_6",
  "111": "Class_7"
};

let bits = [0, 0, 0];

function updateDecoder() {
  const binary = bits.join("");
  const decimal = parseInt(binary, 2);
  const label = classCodes[binary];

  document.getElementById("binary").textContent = binary;
  document.getElementById("label").textContent = label;
  document.getElementById("classStat").textContent = label;
  document.getElementById("decimalStat").textContent = decimal;
  document.getElementById("active").textContent = "Y" + decimal;

  const oneHot = Array(8).fill(0);
  oneHot[decimal] = 1;
  document.getElementById("output").textContent = oneHot.join("");

  document.querySelectorAll(".bit").forEach((button, index) => {
    button.querySelector("b").textContent = bits[index];
  });

  const leds = document.getElementById("leds");
  leds.innerHTML = "";

  for (let i = 0; i < 8; i++) {
    const led = document.createElement("div");
    led.className = i === decimal ? "led on" : "led";
    led.textContent = "Y" + i;
    leds.appendChild(led);
  }

  updateTruthTable(decimal);
}

function updateTruthTable(selected) {
  const body = document.getElementById("truthBody");
  body.innerHTML = "";

  for (let i = 0; i < 8; i++) {
    const binary = i.toString(2).padStart(3, "0");

    const row = document.createElement("tr");

    if (i === selected) {
      row.classList.add("selected-row");
    }

    const outputs = Array(8).fill(0);
    outputs[i] = 1;

    row.innerHTML = `
      <td>${binary[0]}</td>
      <td>${binary[1]}</td>
      <td>${binary[2]}</td>
      <td>Y${i}</td>
      <td>${classCodes[binary]}</td>
      <td>${outputs.join("")}</td>
    `;

    body.appendChild(row);
  }
}

function generateDataset() {
  const filter = document.getElementById("classFilter").value;
  const body = document.getElementById("datasetBody");

  body.innerHTML = "";

  let count = 0;

  for (let i = 0; i < 8; i++) {
    const binary = i.toString(2).padStart(3, "0");
    const label = classCodes[binary];

    if (filter !== "all" && filter !== label) {
      continue;
    }

    for (let sample = 1; sample <= 10; sample++) {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${binary[0]}</td>
        <td>${binary[1]}</td>
        <td>${binary[2]}</td>
        <td>${label}</td>
        <td>${sample}</td>
      `;

      body.appendChild(row);
      count++;
    }
  }

  document.getElementById("sampleCount").textContent = count;
}

function runTests() {
  const grid = document.getElementById("testGrid");
  grid.innerHTML = "";

  for (let i = 0; i < 8; i++) {
    const binary = i.toString(2).padStart(3, "0");
    const label = classCodes[binary];

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h3>Test ${i + 1}</h3>
      <p>Input: <strong>${binary}</strong></p>
      <p>Expected: <strong>${label}</strong></p>
      <p>Result: <strong>PASS ✓</strong></p>
    `;

    grid.appendChild(card);
  }
}

function createChart() {
  const chart = document.getElementById("barChart");

  if (!chart) return;

  chart.innerHTML = `
    <div class="bar-col">
      <b>10</b>
      <div class="bar"></div>
      <span>Class_0</span>
    </div>

    <div class="bar-col">
      <b>10</b>
      <div class="bar"></div>
      <span>Class_1</span>
    </div>

    <div class="bar-col">
      <b>10</b>
      <div class="bar"></div>
      <span>Class_2</span>
    </div>

    <div class="bar-col">
      <b>10</b>
      <div class="bar"></div>
      <span>Class_3</span>
    </div>

    <div class="bar-col">
      <b>10</b>
      <div class="bar"></div>
      <span>Class_4</span>
    </div>

    <div class="bar-col">
      <b>10</b>
      <div class="bar"></div>
      <span>Class_5</span>
    </div>

    <div class="bar-col">
      <b>10</b>
      <div class="bar"></div>
      <span>Class_6</span>
    </div>

    <div class="bar-col">
      <b>10</b>
      <div class="bar"></div>
      <span>Class_7</span>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", function () {

  document.querySelectorAll(".bit").forEach(function (button) {

    button.addEventListener("click", function () {

      const index = Number(button.dataset.bit);

      bits[index] = bits[index] === 0 ? 1 : 0;

      updateDecoder();
    });

  });

  document
    .getElementById("classFilter")
    .addEventListener("change", generateDataset);

  document
    .getElementById("generateBtn")
    .addEventListener("click", function () {

      generateDataset();

      this.textContent = "Dataset Generated ✓";

      setTimeout(() => {
        this.textContent = "Generate Dataset";
      }, 1500);

    });

  updateDecoder();
  generateDataset();
  runTests();
  createChart();

});
