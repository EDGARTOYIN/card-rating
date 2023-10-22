const params = new URLSearchParams(window.location.search);
const rating = params.get('options');

const value = document.querySelector('[data-att="value"]');

if(value)
{
    value.textContent = rating;
}