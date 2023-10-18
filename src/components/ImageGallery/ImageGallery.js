import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";

export const ImageGallery = ({ addImages }) => {
    return (
        <ul>
            {addImages.map(item => (
                <li key={item.id}>
                    <ImageGalleryItem addImages={item} />
                </li>
            ))}
        </ul>
    )

}