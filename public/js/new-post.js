const newFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"]').value;
    const content = document.querySelector('input[name="post-content"]').value;
    console.log(post_content);
    console.log(post_title);


    const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Failed to create post');
    }
}


document.querySelector('.form').addEventListener('submit', newFormHandler);