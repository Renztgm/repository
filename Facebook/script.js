const profilePics = document.querySelectorAll('.profile-pic');

profilePics.forEach(container => {
    const newImage = document.createElement('img');
    newImage.src = 'images/profile-pic.jpg';
    newImage.alt = 'Lorenz Bacon'; 
    newImage.style.width = '40px';
    newImage.style.height = '40px';
    newImage.style.borderRadius = '50%';
    
    container.appendChild(newImage);
});


//Dynamic story section

// Story data
const stories = [
    { name: 'Lorenz Bacon', image: 'images/story1.jpg' },
    { name: 'John Doe', image: 'images/story2.jpg' },
    { name: 'Jane Smith', image: 'images/story3.jpg' },
    { name: 'Juan Dela Cruz', image: 'images/story4.jpg' },
    { name: 'Joseph Montano', image: 'images/story5.jpg' },
    { name: 'Mike Johnson', image: 'images/story6.jpg' }
];

const storyContainer = document.querySelector('.story');

// Create "Add to Story" card
const addStory = document.createElement('div');
addStory.className = 'add_story';
addStory.innerHTML = `
    <div class="story_pic"></div>
    <p>Add to Story</p>
`;
storyContainer.appendChild(addStory);

// Create user stories
stories.forEach(story => {
    const userStory = document.createElement('div');
    userStory.className = 'user_story';
    
    const storyPic = document.createElement('div');
    storyPic.className = 'story_pic';
    storyPic.style.backgroundImage = `url('${story.image}')`;
    
    const storyName = document.createElement('p');
    storyName.textContent = story.name;
    
    userStory.appendChild(storyPic);
    userStory.appendChild(storyName);
    storyContainer.appendChild(userStory);
});

// Arrow navigation
const prevBtn = document.querySelector('.story-nav.prev');
const nextBtn = document.querySelector('.story-nav.next');

if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
        storyContainer.scrollBy({ left: -300, behavior: 'smooth' });
    });

    nextBtn.addEventListener('click', () => {
        storyContainer.scrollBy({ left: 300, behavior: 'smooth' });
    });

    // Show/hide arrows based on scroll position
    const updateArrows = () => {
        prevBtn.style.display = storyContainer.scrollLeft <= 0 ? 'none' : 'block';
        nextBtn.style.display = 
            storyContainer.scrollLeft >= storyContainer.scrollWidth - storyContainer.clientWidth 
            ? 'none' : 'block';
    };

    storyContainer.addEventListener('scroll', updateArrows);
    updateArrows(); // Initial check
}

// Post data
const posts = [
    {
        name: 'Lorenz Bacon',
        profilePic: 'images/profile-pic.jpg',
        time: '2h',
        content: 'Just finished an amazing coding session! 🚀',
        image: 'images/post1.jpg',
        likes: 124,
        comments: 15,
        shares: 3
    },
    {
        name: 'John Doe',
        profilePic: 'images/user1.jpg',
        time: '5h',
        content: 'Beautiful sunset today! 🌅',
        image: 'images/post2.jpg',
        likes: 89,
        comments: 7,
        shares: 2
    },
    {
        name: 'Jane Smith',
        profilePic: 'images/user2.jpg',
        time: '1d',
        content: 'Excited to announce my new project launch!',
        image: null, // Text-only post
        likes: 256,
        comments: 42,
        shares: 18
    }
];

const postContainer = document.querySelector('.post_users');

posts.forEach(post => {
    const postElement = document.createElement('div');
    postElement.className = 'post';
    
    postElement.innerHTML = `
        <div class="post_header">
            <div class="post_user_info">
                <img src="${post.profilePic}" alt="${post.name}" class="post_profile_pic">
                <div class="post_details">
                    <h4>${post.name}</h4>
                    <p>${post.time} ago</p>
                </div>
            </div>
            <button class="post_options">⋯</button>
        </div>
        
        <div class="post_content">
            <p>${post.content}</p>
            ${post.image ? `<img src="${post.image}" alt="Post image" class="post_image">` : ''}
        </div>
        
        <div class="post_stats">
            <span>👍 ${post.likes}</span>
            <div>
                <span>${post.comments} Comments</span>
                <span>${post.shares} Shares</span>
            </div>
        </div>
        
        <div class="post_actions">
            <button class="post_action"><img src="images/icons/like.svg" alt="Like"> Like</button>
            <button class="post_action"><img src="images/icons/comment.svg" alt="Comment"> Comment</button>
            <button class="post_action"><img src="images/icons/share.svg" alt="Share"> Share</button>
        </div>
    `;
    
    postContainer.appendChild(postElement);
});

// Like button functionality
document.addEventListener('click', (e) => {
    if (e.target.closest('.post_action')) {
        const button = e.target.closest('.post_action');
        const buttonText = button.textContent.trim();
        
        if (buttonText.includes('Like')) {
            button.style.color = '#1877f2';
            // Update like count logic here
        }
    }
});