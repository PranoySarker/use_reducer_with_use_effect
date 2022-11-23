import React, { useEffect, useState } from 'react';

const GetPost = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [post, setPost] = useState({});

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(res => res.json())
            .then(data => {
                setLoading(false);
                setPost(data);
                setError('');
                console.log(data)
            })
            .catch(err => {
                setLoading(false);
                setPost({});
                setError('There was a problem!');
            })
    }, [])

    return (
        <div>
            {loading ? 'loading...' : post.title}
            {error ? error : null}
        </div>
    );
};

export default GetPost;