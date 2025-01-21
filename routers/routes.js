const bookRouter = require('./bookRouter')
const subjectRouter = require('./subjectRouter')
const routers = [
    {
        path : '/api/book',
        handler : bookRouter
    },
    {
        path : '/api/subject',
        handler : subjectRouter
    },
    {
        path : '/',
        handler : (req,res) =>{
            res.json({
                message : 'Server is ready!',
                books : {
                    'books_data' : '/api/book',
                    'home_data' : '/api/book/home',
                    'single_book_data' : '/api/book/:bookId',
                    'book_chapter_data' : '/api/book/chapter/:bookId',
                    'chapter_hadiths_data' : '/api/book/hadith/:bookId/:chapterId',
                    'go_to_hadith' : '/api/book/hadith/find/:bookId/:hadithId',
                    'seach_hadith' : '/api/search?q=&book_id&chap_id&page_no',
                    'writers_data' : '/api/book/writers',
                },
                subjects : {
                    'subject_categories_data' : '/api/subject/:subjectId',
                    'hadiths_for_category' : '/api/subject/:catId/:subCatId',
                }
            });
        }
    }
]

const applyRouter = (app) =>{
    routers.map(r=>{
        if(r.path === '/'){
            app.get(r.path,r.handler)
        }else{
            app.use(r.path,r.handler)
        }
    })
}

module.exports = applyRouter