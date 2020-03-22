const comments = [{
    id: '1',
    name: 'andreea',
    email:'andreea@domain.com',
    image: 'otherPicture.png',
    msg: 'A wise man once said nothing'
}, ]

const btn = document.querySelector('#commentBtn');
const input = document.querySelector('#commentInput');
const commentList = document.querySelector('#comment-list');

btn.addEventListener('click', function() {
    if(input.value) {
        comments.push({
        id: Math.floor(Math.random()*100),
        name: 'Jhon',
        email: 'jhon@domain.com',
        image:'picture.png', 
        msg: input.value
    }); 
    const lastComment = comments.slice(comments.length-1);
    displayComments(lastComment, commentList);
    } else {
        alert('empty message');
    }
})

input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
    btn.click();
    }
});

displayComments(comments, commentList);
input.focus();


function displayComments(comments, containerNode) {
    
    function addPicture(pic) {
        const userPic = document.createElement('img');
        userPic.setAttribute('src', pic);

        return userPic;
    }
    
    function createMsgBox(title, email, text) {
        const newDiv = document.createElement('div');
        newDiv.setAttribute('class','msgWrapper')
        
        const h2 = document.createElement("h2");
        h2.innerText = title;
        
        const usrEmail = document.createElement("p")
        usrEmail.innerText = email;
        usrEmail.setAttribute('class','email')
        
        const newP = document.createElement("p");
        newP.innerHTML = text;

        newDiv.appendChild(h2);
        newDiv.appendChild(usrEmail);
        newDiv.appendChild(newP);
        
        return newDiv;

    }

// aici nu stiu daca am inteles bine cerinta, pt ca nu stiu de ce trebuie sa aiba butonul de delete id, 
//intrucat merge sters mesajul si fara id pe buton
//il fac cu id, in caz ca mai trebuia facut ceva ce n-am inteles eu unde id-ul va fi folosit, sa-mi spui si sa-l pot folosi.

    function addDeleteBtn(id) {
        const deleteBtn = document.createElement("button");
        deleteBtn.setAttribute('id',id);
        deleteBtn.innerHTML = 'Delete';
        
        return deleteBtn;
    }

    function createCommentNode(comment) {
        const containerBox = document.createElement('div');
        const usrPic = addPicture(comment.image);
        const msgContainer = createMsgBox(comment.name, comment.email, comment.msg)
        const delBtn = addDeleteBtn(comment.id);
        
        containerBox.appendChild(usrPic);
        containerBox.appendChild(msgContainer);
        containerBox.appendChild(delBtn);
        
        containerBox.setAttribute('class','msgBox');
        
        delBtn.addEventListener('click', function() {
            commentList.removeChild(containerBox);
            console.log(comments);
        });
        
        input.value = '';
        input.focus();
        
        return containerBox;
    }

    // parcurgere commentari
    for (let i = 0; i < comments.length; i ++) {
        const comment = comments[i];
        // reaza preprezenarea coentariuui in DO
        const commentNode = createCommentNode(comment);
        // pnem in dom cmentaru
        containerNode.appendChild(commentNode);
    }
}


