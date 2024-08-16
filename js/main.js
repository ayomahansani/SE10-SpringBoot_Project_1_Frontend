// save
$('#savePost').click(function () {
    //console.log("clicked Save Post Button");

    // get input field's values
    let postId = $('#post-id').val();
    let postTitle = $('#post-title').val();
    let postText = $('#post-text').val();
    let postCategory = $('#post-category').val();

    // for testing
    console.log(postId, postTitle, postText, postCategory);

    // now want to convert this js to JSON object
    $.ajax({
        url : "http://localhost:8091/blog/SavePost",   // request eka yanna one thana
        method : "POST", // request eka mona vageda - type eka
        contentType : "application/json", // request eke content type eka mokkada
        "data" : JSON.stringify({ // request eka json valata convert karanva
            "id" : postId,
            "title" : postTitle,
            "text" : postText,
            "category" : postCategory
        }),
        success : function (results) {
            console.log(results)
            alert('Saved Successfully...')
        },
        error : function (error) {
            console.log(error)
            alert('Not Saved...')
        }
    })
})


// update
$('#updatePost').click(function () {
    //console.log("clicked Update Post Button");

    // get input field's values
    let postId = $('#post-id').val();
    let postTitle = $('#post-title').val();
    let postText = $('#post-text').val();
    let postCategory = $('#post-category').val();

    // for testing
    console.log(postId, postTitle, postText, postCategory);

    // now want to convert this js to JSON object
    $.ajax({
        url : "http://localhost:8091/blog/UpdateData",   // request eka yanna one thana
        method : "PUT", // request eka mona vageda - type eka
        contentType : "application/json", // request eke content type eka mokkada
        "data" : JSON.stringify({ // request eka json valata convert karanva
            "id" : postId,
            "title" : postTitle,
            "text" : postText,
            "category" : postCategory
        }),

        success : function (results) {
            console.log(results)
            alert('Updated Successfully...')
        },
        error : function (error) {
            console.log(error)
            alert('Not Updated...')
        }
    })
})


// delete
$('#deletePost').click(function () {
    //console.log("clicked Delete Post Button");

    // get input field's values
    let postId = $('#post-id').val();

    // for testing
    console.log(postId);

    $.ajax({
        url : `http://localhost:8091/blog/DeleteData/${postId}`,   // request eka yanna one thana
        method : "DELETE", // request eka mona vageda - type eka
        success : function (results) {
            console.log(results)
            alert('Deleted Successfully...')
        },
        error : function (error) {
            console.log(error)
            alert('Not Deleted...')
        }
    })
})


// get all
$('#getAllPost').click(function () {
    //console.log("clicked Get All Post Button");

    $.ajax({
        url : "http://localhost:8091/blog/GetAllPost",   // request eka yanna one thana
        method : "GET", // request eka mona vageda - type eka
        success : function (results) {
            console.log(results)
            alert('Get All Data Successfully...')

            // Clear the existing table body
            $('table tbody').empty();

            // Iterate over the results and append rows to the table
            results.forEach(function(blog) {
                let row = `
                    <tr>
                        <td>${blog.id}</td>
                        <td>${blog.title}</td>
                        <td>${blog.text}</td>
                        <td>${blog.category}</td>
                    </tr>
                `;
                $('table tbody').append(row);
            });
        },
        error : function (error) {
            console.log(error)
            alert('Not Get All Data...')
        }
    })
})