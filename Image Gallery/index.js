
const fetchImageData = () => {
    return [
        { category: 'phones', src: 'images/phone-1.jpg', title: 'Phone', description: 'A mobile phone or cell phone is a portable telephone that can make and receive calls over a radio frequency link while the user is moving within a telephone service area' },
        { category: 'phones', src: 'images/phone-2.jpg', title: 'Phone', description: 'A mobile phone or cell phone is a portable telephone that can make and receive calls over a radio frequency link while the user is moving within a telephone service area' },
        { category: 'clothes', src: 'images/cloth-1.jpg', title: 'Cloth', description: 'Clothing is made of fabrics or textiles, but over time it has included garments made from animal skin and other thin sheets of materials and natural products found in the environment, put together.' },
        { category: 'clothes', src: 'images/cloth-2.jpg', title: 'Cloth', description: 'Clothing is made of fabrics or textiles, but over time it has included garments made from animal skin and other thin sheets of materials and natural products found in the environment, put together.' },
        { category: 'clothes', src: 'images/cloth-3.jpg', title: 'Cloth', description: 'Clothing is made of fabrics or textiles, but over time it has included garments made from animal skin and other thin sheets of materials and natural products found in the environment, put together.' },
        { category: 'shoes', src: 'images/shoe-2.jpg', title: 'Shoe', description: 'A shoe is an item of footwear intended to protect and comfort the human foot.' },
        { category: 'shoes', src: 'images/shoe-1.jpg', title: 'Shoe', description: 'A shoe is an item of footwear intended to protect and comfort the human foot.' },
    ];
};


const createCard = ({ src, title, description }) => {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
        <img src="${src}" alt="${title}">
        <div class="card-body">
            <p class="card-title">${title}</p>
            <span class="card-description">${description}</span>
        </div>
    `;

    return card;
};


const renderGallery = (items) => {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = ''; // Clear existing content

    items.forEach(item => {
        gallery.appendChild(createCard(item));
    });
};


const handleFilterClick = (e) => {
    const category = e.target.getAttribute('data-name');
    const buttons = document.querySelectorAll('.buttons-section button');

    buttons.forEach(button => button.classList.remove('active'));
    e.target.classList.add('active');

    const data = fetchImageData();
    if (category === 'all') {
        renderGallery(data);
    } else {
        const filteredData = data.filter(item => item.category === category);
        renderGallery(filteredData);
    }
};


document.addEventListener('DOMContentLoaded', () => {
    renderGallery(fetchImageData()); // Show all images by default

    const filterButtons = document.getElementById('filter-buttons');
    filterButtons.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            handleFilterClick(e);
        }
    });
});
