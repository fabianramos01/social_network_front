import styled from "@emotion/styled";
import LoadingButton from "@mui/lab/LoadingButton";

const CustomLoadingButton = styled(LoadingButton)(({theme}) => ({
    color: "white",
    background: 'grey',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, 0.3)',
    '&:hover': {
        background: 'linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%)',
    },
}))

export default CustomLoadingButton;