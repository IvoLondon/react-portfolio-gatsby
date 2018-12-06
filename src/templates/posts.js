import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Layout from './../components/layout';

// import '../css/blog-post.css'; // make it pretty!

export default class PageTemplate extends Component {
    render() {
        return (
            <Layout>
                <h1>{this.props.data.page.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: this.props.data.page.content }} />
            </Layout>
        );
    }
}

export const query = graphql`
    query currentPage($id: String!) {
        page: wordpressPost(id: { eq: $id }) {
            title
            content
        }
    }
`
