import "./style.css"
import "../../constants.css"
import Tag from "../Tag";
import { randomUUID } from "crypto";

type TagListProps = {
    tags: string[]
};

const TagList: React.FC<TagListProps> = ({
    tags
}) => {

    const tagList = tags.map(tag =>
        <Tag key={tag} tagName={tag}/>,
      );

    return (
        <div className="tag-list">
            {tagList}
        </div>
    );
};

export default TagList