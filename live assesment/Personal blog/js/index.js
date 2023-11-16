function toggleDropdown() {
    var dropdown = document.querySelector('.dropdown-content');
    dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
  }
  
    // Example data for blog posts (replace this with actual data from your backend)
    const blogPosts = [
        { title: 'My First Post', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { title: 'Reflecting on Life', content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.' },
        { title: 'Travel Diaries', content: 'Donec eu libero sit amet quam egestas semper.' },
        // Add more blog posts as needed
    ];

    // Function to render blog posts
    function renderBlogPosts() {
        const blogSection = document.getElementById('blogSection');
        blogSection.innerHTML = '';

        blogPosts.forEach(post => {
            const postElement = document.createElement('article');
            postElement.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.content}</p>
                <!-- Add social media sharing buttons or links here -->
                <div class="social-media-post">
                    <a class="twitter-timeline" href="https://twitter.com/TwitterDev" data-tweet-limit="1">Tweets by TwitterDev</a>
                </div>
            `;
            blogSection.appendChild(postElement);
        });
    }
    // Initial rendering
        renderBlogPosts();