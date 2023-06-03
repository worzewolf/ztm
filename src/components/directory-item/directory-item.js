import React from 'react'
import {useNavigate} from 'react-router-dom'
import {DirectoryItemContainer, Body, BackgroundImage} from './directory-item.styles'
// import './directory-item.scss'

const DirectoryItem = ({category}) => {
    const {route, title, imageUrl} = category;
    const navigate = useNavigate()

    const onNavigateHandler = () => navigate(route)

    return (
        <DirectoryItemContainer onClick={onNavigateHandler}>
            <BackgroundImage imageUrl={imageUrl}/>
            <Body>
                <h2>{title}</h2>
                <p>shop now</p>
            </Body>
        </DirectoryItemContainer>
    )
}

export default DirectoryItem;