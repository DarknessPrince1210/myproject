import { Modal } from "react-native";
import React from "react";

const CustomModal=({children,animationType,modalVision,transparent})=>{
    return(
        <Modal 
        animationType={animationType} 
        visible={modalVision} 
        transparent
        >
            {children}
     </Modal>
    )
}

export default CustomModal;
