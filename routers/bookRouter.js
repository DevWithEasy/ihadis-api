const { getAllBooks, getHomeData, getBookChapters, getHadithByChapter, goToHadith, searchHadith, getWritters, getValidities, getbooks, getbook } = require('../controllers/bookControllers')

const router = require('express').Router()

router.get('/', getbooks)
    .get('/home', getHomeData)
    .get('/:id', getbook)
    .get('/chapter/:id', getBookChapters)
    .get('/hadith/:id/:chapterId', getHadithByChapter)
    .get('/hadith/find/:bookId/:hadithId', goToHadith)
    .get('/all', getAllBooks)
    .get('/search', searchHadith)
    .get('/writers', getWritters)
    .get('/validities', getValidities)
module.exports = router