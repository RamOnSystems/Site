// MENU INTERACTIE
const menuLinks = document.querySelectorAll('.library-menu a');
const cards = document.querySelectorAll('.lib-card');
const viewer = document.getElementById('libraryContent');

// Menu → Content + Card highlight
menuLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    const topic = link.dataset.topic;

    // Menu highlight
    menuLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');

    // Card highlight
    cards.forEach(c => c.classList.remove('active'));
    const card = document.querySelector(`.lib-card[data-topic="${topic}"]`);
    if (card) card.classList.add('active');

    // Load content
    viewer.innerHTML = content[topic];
    viewer.classList.remove('hidden');
    viewer.scrollIntoView({ behavior: 'smooth' });
  });
});

// Card → Content + Menu highlight
cards.forEach(card => {
  card.addEventListener('click', () => {
    const topic = card.dataset.topic;

    // Card highlight
    cards.forEach(c => c.classList.remove('active'));
    card.classList.add('active');

    // Menu highlight
    menuLinks.forEach(l => l.classList.remove('active'));
    const menuLink = document.querySelector(`.library-menu a[data-topic="${topic}"]`);
    if (menuLink) menuLink.classList.add('active');

    // Load content
    viewer.innerHTML = content[topic];
    viewer.classList.remove('hidden');
    viewer.scrollIntoView({ behavior: 'smooth' });
  });
});
