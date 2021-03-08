import React from "react"
import { useParams } from "react-router-dom"

const SinglePage = () => {
    const aboutData = [
        {
            slug: "about-app",
            title: "About the App",
            description: "In this app, you can add, delete, submit and edit items. To edit items, double-click on them. Once you are done, press enter."
        },
        {
            slug: "about-author",
            title: "About the Author",
            description: "ha. you thought."
        }
    ]
    const { slug } = useParams()
    const aboutContent = aboutData.find(item => item.slug === slug)
    const { title, description } = aboutContent
    return (
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )
}

export default SinglePage