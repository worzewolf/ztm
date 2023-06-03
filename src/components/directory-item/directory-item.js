import React from 'react'
import {DirectoryItemContainer, Body, BackgroundImage} from './directory-item.styles'
// import './directory-item.scss'

const DirectoryItem = ({title, imageUrl}) => {

    return (
        <DirectoryItemContainer>
            <BackgroundImage imageUrl={imageUrl}/>
            <Body>
                <h2>{title}</h2>
                <p>shop now</p>
            </Body>
        </DirectoryItemContainer>
    )
}

export default DirectoryItem;