document.getElementById('predictor-form').addEventListener('submit', async function (e) {
  e.preventDefault();

  const cutoff = document.getElementById('cutoff').value;
  const category = document.getElementById('category').value;
  const branch = document.getElementById('branch').value;

  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = 'Loading...';

  try {
    const response = await fetch('http://localhost:5000/api/predict', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ cutoff, category, branch })
    });

    const data = await response.json();
    renderResults(data.colleges || []);
  } catch (err) {
    resultsDiv.innerHTML = '<p>Could not reach the prediction server. Is the backend running?</p>';
  }
});

function renderResults(colleges) {
  const resultsDiv = document.getElementById('results');

  if (colleges.length === 0) {
    resultsDiv.innerHTML = '<p>No matching colleges found.</p>';
    return;
  }

  resultsDiv.innerHTML = colleges.map(c => `
    <div class="college-card">
      <strong>${c.name}</strong><br>
      Branch: ${c.branch} | Cutoff: ${c.cutoff}
    </div>
  `).join('');
}
