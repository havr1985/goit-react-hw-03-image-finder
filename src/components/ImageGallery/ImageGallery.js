import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { List,Item } from "./ImageGallery.styled";

export const ImageGallery = ({ addImages }) => {
    return (
        <List>
            {addImages.map(item => (
                <Item key={item.id}>
                    <ImageGalleryItem addImages={item} />
                </Item>
            ))}
        </List>
    )

}