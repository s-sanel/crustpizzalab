import React from 'react'
import Article from './Article';

const ArticlesList = () => {
    return (
        <div style={{ backgroundColor: "#FAB500" }}>
            <Article reorderForMedium/>
            <Article />
            <Article reorderForMedium/>
        </div>
    )
}

export default ArticlesList


