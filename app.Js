document.getElementById('addEntry').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const weight = document.getElementById('weight').value;
    const number = document.getElementById('number').value;

    const entry = document.createElement('div');
    entry.classList.add('border', 'border-gray-400', 'p-4', 'rounded');
    entry.innerHTML = `<h2 class="text-xl font-semibold">${name}</h2>
                       <p>Weight: ${weight}</p>
                       <p>Number: ${number}</p>`;

    document.getElementById('entriesList').appendChild(entry);

    // Clear input fields
    document.getElementById('name').value = '';
    document.getElementById('weight').value = '';
    document.getElementById('number').value = '';
});
