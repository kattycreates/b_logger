
const form = document.getElementById('form');
const main = document.getElementById('main');
const search = document.getElementById('search');
showBooks(bookData);
function showBooks(books)
{
    main.innerHTML='';
    books.forEach(book => {
        const {title,img_link,rating,review,author}=book;
        let bookdiv=document.createElement('div');
        bookdiv.classList.add('book');
        bookdiv.innerHTML=`<h3>${title}</h3>
        <img src="${img_link}" alt="${title}">
        <div class="book-info">
        <p><span>Review by :</span> <em>${author}</em> </p>
        <div class="rating">
        ${rating} / 5</div>
        </div>
        <div class="review" >
        <h3>Review</h3>
    
        ${review}
        
        </div>`
        main.appendChild(bookdiv);
    });
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const searchTerm = search.value;
    if(searchTerm && searchTerm!=='')
{   
    for(let i=0;i<bookData.length;i++)
    {
        if(bookData[i].title===searchTerm)
        {
            showBooks(bookData[i]);
            search.value='';
            break;
        }
    }
    
}
else{
    window.location.reload();
}
})