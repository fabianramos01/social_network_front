import {useState} from "react";
import {addReaction, removeReaction} from "../../services/post.services";
import {Button} from "@mui/material";

function ReactionButton(props) {
    const {post, type, quantity, icon, color} = props;
    let [count, setCount] = useState(quantity)
    const [isSelected, setIsSelected] = useState(false);

    const handleReaction = (e) => {
        if (!isSelected) {
            addReaction({id: post.id, type: type})
                .then(res => {
                    setCount(count += 1);
                    setIsSelected(!isSelected);
                })
                .catch(err => console.log(err))
        } else {
            removeReaction({id: post.id, type: type})
                .then(res => {
                    setCount(count -= 1);
                    setIsSelected(!isSelected);
                })
                .catch(err => console.log(err))
        }
    }

    return (
        <Button
            variant={isSelected ? 'contained' : 'text'}
            color={color}
            startIcon={icon}
            onClick={handleReaction}
        >
            {count}
        </Button>
    );
}

export default ReactionButton;