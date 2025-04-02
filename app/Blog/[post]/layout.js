const BlogLayout = ({children}) =>{
  return children
}

export default BlogLayout

export async function gernerateMetaData({params}){
    return {
        title:params.post
    }
}