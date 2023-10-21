function sum_seq(start, stop) {
  let sum = 0;
  for (let i = start; i <= stop; i++) {
      sum += i;
  }
  return sum;
}

function find_consec(number, start) {
  let stop = start + 1;
  let sum = sum_seq(start, stop);

  while (sum <= number) {
      if (sum == number) {
          return stop;
      } else {
          stop += 1;
          sum = sum_seq(start, stop);
      }
  }
}

function write_sum(start, stop) {
  return Array.from({length: stop - start + 1}, (_, i) => start + i).join(" + ")
}

function consecs(number) {
  let found_sums = [];

  for (let start = 1; start <= Math.floor(number / 2) + 1; start++) {
      let stop = find_consec(number, start);

      if (stop) {
          found_sums.push([start, stop]);
      }
  }

  return found_sums;
}

function find_sums() {
  let number = parseInt(document.getElementById("n").value, 10);
  let results = consecs(number);
  let output = document.getElementById("output");
  let error = document.getElementById("error");
  output.innerHTML = '';
  error.innerHTML = '';

  if (results.length === 0) {
      error.textContent = `No consecutive sums could be found for ${number}`;
  } else {
      for (let i = 0; i < results.length; i++) {
          let start = results[i][0];
          let stop = results[i][1];
          let li = document.createElement("li");
          li.textContent = write_sum(start, stop);
          output.appendChild(li);
      }
  }
}

// Usage: consecs(<number>)
