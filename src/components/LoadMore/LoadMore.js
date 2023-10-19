import { LoadMoreBtn, BtnBox } from "./LoadMore.styled"

export const LoadMore = ({ onClick }) => {
    return (
        <BtnBox>
            <LoadMoreBtn type="button" onClick={onClick}>Load more</LoadMoreBtn>
        </BtnBox>
    )

}