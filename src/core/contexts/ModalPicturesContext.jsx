import { createContext, useContext, useState } from "react";

const ModalPicturesContext = createContext();

// eslint-disable-next-line react/prop-types
export const ModalPicturesProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [pictures, setPictures] = useState([]);

    const changePictures = (pictures) => {
        setPictures(pictures);
    }

    const toggleIsOpenModal = (state) => {
        setIsOpen(state);
    }

    return (
        <ModalPicturesContext.Provider value={{
            isOpen,
            pictures,
            changePictures,
            toggleIsOpenModal,
        }}>
            {children}
        </ModalPicturesContext.Provider>
    );
}

export const usePictures = () => useContext(ModalPicturesContext);