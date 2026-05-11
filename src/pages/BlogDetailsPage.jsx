import React from 'react'
import Breadcrumb from '../components/common/Breadcrumb'
import BlogDetails from '../components/blog/BlogDetails'

const BlogDetailsPage = () => {
  return (
    <>
     <Breadcrumb breadcrumb={["Home","blog","Discover  how ai is transforming.."]}/>
     <BlogDetails/>
    </>
  )
}

export default BlogDetailsPage