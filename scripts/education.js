const searchBox = document.getElementById('search-box');
const sortSelect = document.getElementById('sort-select');
const postsContainer = document.querySelector('.posts-container');
const posts = postsContainer.querySelectorAll('.post');

searchBox.addEventListener('keyup', filterPosts);
sortSelect.addEventListener('change', sortPosts);

function filterPosts() {
    const searchTerm = searchBox.value.toLowerCase();
    let filteredPosts = [];
    if (searchTerm === '') {
        sortPosts();
        return;
    }
    posts.forEach(post => {
        // console.log(post)
        const title = post.querySelector('.post-title').textContent.toLowerCase();
        const desc = post.querySelector('.post-desc').textContent.toLowerCase();
        if (title.includes(searchTerm) || desc.includes(searchTerm)) {
            filteredPosts.push(post);
        }
    });

    if (filteredPosts.length === 0) {
        const noResults = document.createElement('div');
        noResults.classList.add('post');
        noResults.innerHTML = '<p style="color:red; font-size: 24px; padding: 8px; text-align: center">Przeszukaliśmy tytuły oraz zawartość postów, ale nie znaleźliśmy nic powiązanego z: ' +searchTerm + '</p>';
        postsContainer.innerHTML = '';
        postsContainer.appendChild(noResults);
    } else {
        postsContainer.innerHTML = '';
        filteredPosts.forEach(post => {
            postsContainer.appendChild(post);
        });
    }
}

function sortPosts() {
    const sortOption = sortSelect.value;
    const sortedPosts = [...posts].sort((a, b) => {
        const dateA = new Date(a.querySelector('.post-date').textContent);
        const dateB = new Date(b.querySelector('.post-date').textContent);

        if (sortOption === 'newest') {
            return dateB - dateA;
        } else {
            return dateA - dateB;
        }
    });

    postsContainer.innerHTML = '';
    sortedPosts.forEach(post => {
        postsContainer.appendChild(post);
    });
}
document.addEventListener('DOMContentLoaded', function() {
    sortPosts();
}, false);