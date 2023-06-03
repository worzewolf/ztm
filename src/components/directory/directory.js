import './directory.scss'
import DirectoryItem from "../directory-item/directory-item";

const Directory = ({categories}) => {
    return (
        <div className="directory-container">
            {categories.map(({title, id, imageUrl}) => (
                <DirectoryItem title={title} key={id} imageUrl={imageUrl}/>
            ))}
        </div>
    )
}

export default Directory