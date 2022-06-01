//blog_index, blog_details, blog_create_get, blog_create_post, blog_delete
const Blog = require('../models/blog');

const blog_index = (req, res) => {
    Blog.find().sort({ createdAt: -1 })
        .then(result => {
            res.render('index', { title: 'Blogs', blogs: result })
        })
        .catch(err => console.log(err))
}

const blog_details = (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
        .then(result => {
            // res.send(result);
            res.render('details', { title: 'Blog Details', blog: result })
        })
        .catch(err => res.redirect('/404'))
}

const blog_create_get = (req, res) => {
    res.render('blogs/create', { title: 'Create a new Blog' })
};

const blog_create_post = (req, res) => {
    const { title, snippet, bbody } = req.body;

    blog = new Blog({
        title,
        snippet,
        body: bbody
    });
    blog.save()
        .then((response) => {
            res.redirect('/blogs');
        })
        .catch(err => console.log(err));
}

const blog_delete = (req, res) => {
    const id = req.params.id;

    Blog.findByIdAndDelete(id)
        .then(() => {
            res.json({ redirect: '/blogs' });
        })
        .catch(err => console.log(err))
}

module.exports = {
    blog_index,
    blog_details,
    blog_create_get,
    blog_create_post,
    blog_delete
}