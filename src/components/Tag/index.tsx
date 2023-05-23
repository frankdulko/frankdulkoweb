import "./style.css"
import "../../constants.css"

type TagProps = {
    key: string
    tagName: string
};

const Tag: React.FC<TagProps> = ({
    tagName
}) => {

    return (
        <div className="tag">
            {tagName}
        </div>
    );
};

export default Tag