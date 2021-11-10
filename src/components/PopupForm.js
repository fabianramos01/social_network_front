import {Dialog, DialogActions, DialogContent, DialogTitle, Divider, IconButton} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import SaveIcon from '@mui/icons-material/Save';
import CustomLoadingButton from "./buttons/CustomLoadingButton";

const CustomDialogTitle = (props) => {
    const {children, handleClose} = props;

    return (
        <DialogTitle sx={{m: 0, p: 2}}>
            {children}
            <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                }}
            >
                <CloseIcon/>
            </IconButton>
        </DialogTitle>
    );
};

function PopupForm(props) {

    const {title, children, openPopup, handleClose, handleSubmit, loading} = props;

    return (
        <Dialog open={openPopup}>

            <CustomDialogTitle
                handleClose={handleClose}>
                {title}
            </CustomDialogTitle>
            <Divider/>
            <DialogContent>
                {children}
            </DialogContent>
            <Divider/>
            <DialogActions>
                <CustomLoadingButton
                    loading={loading}
                    loadingPosition="end"
                    variant="outlined"
                    autoFocus
                    endIcon={<SaveIcon/>}
                    onClick={handleSubmit}
                    disabled={loading}
                >
                    Guardar
                </CustomLoadingButton>
            </DialogActions>
        </Dialog>
    );
}

export default PopupForm;