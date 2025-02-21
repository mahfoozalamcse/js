function fetchPostData() {
    return new Promise((resolve) => {
        setTimeout(() => {
           resolve("Post data fetched .. ") 
        }, 3000);
    })
}
function fetchCommentData() {
    return new Promise((resolve) => {
        setTimeout(() => {
           resolve("Comment data fetched .. ") 
        }, 6000);
    }) 
}

async function getData() {
    try {
      console.log("Fetching data.");
    //   const postdata = await fetchPostData();
    //   const commentData = await fetchCommentData();
    //   console.log(postdata);
    //   console.log(commentData);

   const [postdata, commentData] = await Promise.all([fetchPostData(), fetchCommentData()])
      console.log(postdata);
      console.log(commentData);

      console.log("fetch completed... ");
      
    } catch (error) {
        console.error("Fetching error data.. ", error);
    }
}

getData();